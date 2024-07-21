import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText==='C'){
      setCalVal("");

    } else if (buttonText==='='){
      const result=eval(calVal);  //eval function is use to evaluate the expresion. it is the input as a string.
       setCalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}
export default App;
