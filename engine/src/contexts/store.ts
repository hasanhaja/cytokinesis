import { createEffect, createSignal } from "solid-js";

const [selectedComponent, setSelectedComponent] = createSignal<string>("");
const [selectedVariant, setSelectedVariant] = createSignal<string>("");

createEffect(() => {
  console.log(selectedComponent());
});

export {
  selectedComponent,
  setSelectedComponent,
  selectedVariant,
  setSelectedVariant,
};
