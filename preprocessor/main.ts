import { parse } from "https://deno.land/std@0.170.0/flags/mod.ts";
import { z } from "https://deno.land/x/zod/mod.ts";
import { createAstroOutput, readCompiledOutput } from "./lib.ts";

const schema = z.object({
  target: z.string({
    required_error: "target path is required",
    invalid_type_error: "target path must be a string",
  }),
  output: z.string({
    required_error: "output path is required",
    invalid_type_error: "output path must be a string",
  }),
});

try {
  const { output, target } = schema.parse(parse(Deno.args));
  createAstroOutput(target, await readCompiledOutput(output));
} catch (e: any) {
  console.error(e);
}

