import { parse } from "https://deno.land/std@0.170.0/flags/mod.ts";
import { z } from "https://deno.land/x/zod/mod.ts";
import { createAstroOutput, readCompiledOutput } from "./lib.ts";

const schema = z.object({
  target: z.string(),
  output: z.string(),
});

// createAstroOutput(await readCompiledOutput("./output"));
try {
  const args = schema.parse(parse(Deno.args));
  console.log(args);
} catch (e: any) {
  console.log(e);
}
