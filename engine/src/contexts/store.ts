import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [selectedComponent, setSelectedComponent] = createSignal<string>("");
const [selectedVariant, setSelectedVariant] = createSignal<string>("");

const [propsStore, setPropsStore] = createStore({});

createEffect(() => {
  console.log("Changed", propsStore);
});

export {
  selectedComponent,
  setSelectedComponent,
  selectedVariant,
  setSelectedVariant,
  propsStore,
  setPropsStore,
};
