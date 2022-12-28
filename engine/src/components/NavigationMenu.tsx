import { createSignal, For } from "solid-js";
import { selectedComponent, setSelectedComponent } from "../contexts/store.ts";

type NavigationMenuProps = {
  componentNames: string[];
};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <div class="px-3 py-2">
      <h1 class="text-lg pb-4">Navigator</h1>
      <ul>
      <For each={props.componentNames}>
        { (componentName) => (
          <li>
            <div class={`${selectedComponent() === componentName ? "ring-2 ring-slate-800 bg-slate-600 rounded-md text-slate-200 transition" : ""} px-3 py-1`} onClick={() => setSelectedComponent(componentName)}>
              {componentName}
            </div>
          </li>) }
      </For>
      </ul>
    </div>
  );
};

export default NavigationMenu;
