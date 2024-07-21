import style from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonsContainer}>
      {buttonsNames.map((buttonName) => (
        <button className={style.button} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
      {/* <button className={style.button}>C</button>
      <button className={style.button}>1</button>
      <button className={style.button}>2</button>
      <button className={style.button}>+</button> */}
    </div>
  );
};
export default ButtonsContainer;
