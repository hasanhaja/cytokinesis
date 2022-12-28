import { ParentProps, Show } from "solid-js";
import { selectedComponent, selectedVariant } from "../contexts/store.ts";

type PreviewComponentProps = ParentProps & {
  name: string;
  variant: string;
};

const PreviewComponent = (props: PreviewComponentProps) => (
  <Show when={props.name === selectedComponent() && props.variant === selectedVariant() }>
    {props.children}
  </Show>
);

export default PreviewComponent;
