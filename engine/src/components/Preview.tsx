import { For, ParentProps } from "solid-js";
import { selectedVariant, setSelectedVariant } from "../contexts/store.ts";

type PreviewProps = ParentProps & {
  variants: string[];
};

const Preview = (props: PreviewProps) => {
  return (
    <div class="px-3 py-2">
      <h1>Preview</h1>
      <p>Framework</p>
      <select
        class="rounded-md px-3 py-2"
        value={selectedVariant()}
        onChange={(e) => setSelectedVariant(e.target.value)}
      >
        <option value="" disabled>--Please choose an option--</option>
        <For each={props.variants}>
        { (variant) => (<option value={variant}>{variant}</option>) }
        </For>
      </select>
      <div>{props.children}</div>
    </div>
  );
};

export default Preview;
