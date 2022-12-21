import { ParentProps } from "solid-js";
import Navigator from "./Navigator";
import Preview from "./Preview";
import Controls from "./Controls";

const App = (props: ParentProps) => {

  return (
    <div class="min-h-screen flex flex-row">
      <div class="bg-slate-400 basis-1/4">
        <Navigator />
      </div>
      <div class="basis-3/4 flex flex-col">
        <div class="basis-2/3">
          <Preview>{props.children}</Preview>
        </div> 
        <div class="basis-1/3">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default App;
