import { createSignal, For } from "solid-js";
import { selectedComponent, setSelectedComponent } from "../contexts/store.ts";

type NavigationMenuProps = {
  componentNames: string[];
};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <div class="px-3 py-2">
      <h1 class="text-xl pb-4 font-bold tracking-tight text-center font-mono">Cytokinesis</h1>
      <ul>
      <For each={props.componentNames}>
        { (componentName) => (
          <li class="py-0.5">
            <div class={`${selectedComponent() === componentName ? "bg-slate-600 rounded-md text-slate-200" : ""} px-3 py-1 hover:ring-2 hover:ring-slate-600 rounded-md transition`} onClick={() => setSelectedComponent(componentName)}>
              {componentName}
            </div>
          </li>) }
      </For>
      </ul>
    </div>
  );
};

export default NavigationMenu;
