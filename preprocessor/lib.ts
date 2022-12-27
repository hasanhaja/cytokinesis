export type ComponentSpec = {
  path: string;
  variant: string;
  name: string;
};

// TODO Fix hardcoded paths for vue output
export const readCompiledOutput = async (
  path: string,
): Promise<ComponentSpec[]> => {
  const outputs = Deno.readDir(path);
  let specs: ComponentSpec[] = [];

  for await (const framework of outputs) {
    const variant = framework.name;
    const componentPath = `${path}/${variant}/src/components`;
    const components = Deno.readDir(componentPath);

    for await (const component of components) {
      const temp = {
        variant,
        path: await Deno.realPath(`${componentPath}/${component.name}`),
        name: `${component.name.split(".")[0]}`,
      };
      specs.push(temp);
    }
  }

  return specs;
};

const createAstroWrapper = async (
  target: string,
  spec: ComponentSpec,
): Promise<void> => {
  const template = `
  ---
  // AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
  import ${spec.name} from "${spec.path}";
  ---
  <${spec.name} client:load />
  `;
  const writeTo = `${target}/${spec.name}`;
  await Deno.mkdir(writeTo, { recursive: true });
  await Deno.writeTextFile(
    `${writeTo}/${capitalize(spec.variant)}.astro`,
    template,
  );
};

const capitalize = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const createAstroOutput = (target: string, specs: ComponentSpec[]) =>
  specs.forEach(async (spec) => await createAstroWrapper(target, spec));
