import style from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      className={style.display}
      text="text"
      value={displayValue}
      readOnly
    ></input>
  );
};
export default Display;
