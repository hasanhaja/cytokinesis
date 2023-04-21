import { propsStore, setPropsStore } from "../contexts/store";

const PropLoader = () => {
  let textField: unknown;
  const assignPropsFromString = (data: string) => {
    const parsed = JSON.parse(data);
    setPropsStore({...propsStore, ...parsed});
  };

  const resetProps = () => {
    setPropsStore({});
    textField.value = "";
  };

  return (
    <div>
      <input ref={(el) => textField = el } />
      <button onClick={(e) => assignPropsFromString(textField.value.trim())}>Set Props</button>
      <button onClick={(e) => resetProps()}>Reset</button>
    </div>
  );
};

export default PropLoader;
