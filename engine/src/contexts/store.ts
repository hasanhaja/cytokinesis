import { createEffect, createSignal } from "solid-js";

const [selectedComponent, setSelectedComponent] = createSignal<string>("");
const [selectedVariant, setSelectedVariant] = createSignal<string>("");

export {
  selectedComponent,
  setSelectedComponent,
  selectedVariant,
  setSelectedVariant,
};
