import { ParentProps } from "solid-js";

const Preview = (props: ParentProps) => {
  return (
    <div>{props.children}</div>
  );
};

export default Preview;
