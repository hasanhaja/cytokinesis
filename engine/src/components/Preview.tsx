import { For, ParentProps } from "solid-js";
import { selectedVariant, setSelectedVariant } from "../contexts/store.ts";

type PreviewProps = ParentProps & {
  variants: string[];
};

const Preview = (props: PreviewProps) => {
  return (
    <div>
      <select value={selectedVariant()} onChange={(e) => setSelectedVariant(e.target.value)}>
      <For each={props.variants}>
      { (variant) => (<option value={variant}>{variant}</option>) }
      </For>
      </select>
      <div>{props.children}</div>
    </div>
  );
};

export default Preview;
