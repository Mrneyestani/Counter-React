import { SyntheticEvent } from "react";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  ButtonMinus,
  ButtonMinusIncrement,
  ButtonPlus,
  ButtonPlusIncrement,
  ButtonReset,
  CounterDiv,
  CounterPage,
  DisplayCounter,
  DisplayIncrement,
  ResetDiv,
  ValueDiv,
} from "../styles/Counter.style";

type DisplayStatus = number;

export default function Counter() {
  const [counter, setCounter] = useState<DisplayStatus>(0);
  const [increment, setIncrement] = useState<DisplayStatus>(1);

  function buttonPlus() {
    setCounter(counter + increment);
  }
  function buttonMinus() {
    setCounter(Math.max(0, counter - increment));
  }
  function buttonReset() {
    setCounter(0);
    setIncrement(1);
  }

  function buttonPlusIncrement() {
    setIncrement(increment + 1);
  }
  function buttonMinusIncrement() {
    setIncrement(Math.max(1, increment - 1));
  }

  return (
    <CounterPage>
      <CounterDiv>
        <ButtonMinus onClick={buttonMinus}>-</ButtonMinus>
        <DisplayCounter>{counter}</DisplayCounter>
        <ButtonPlus onClick={buttonPlus}>
          <i className="fa-solid fa-plus"></i>
        </ButtonPlus>
      </CounterDiv>
      <ResetDiv>
        <ButtonReset onClick={buttonReset}>Reset</ButtonReset>
      </ResetDiv>
      <ValueDiv>
        <ButtonMinusIncrement onClick={buttonMinusIncrement}>
          -
        </ButtonMinusIncrement>
        <DisplayIncrement>{increment}</DisplayIncrement>
        <ButtonPlusIncrement onClick={buttonPlusIncrement}>
          +
        </ButtonPlusIncrement>
      </ValueDiv>
    </CounterPage>
  );
}
