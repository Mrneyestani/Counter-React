import { SyntheticEvent } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  ButtonMinus,
  ButtonMinusValue,
  ButtonPlus,
  ButtonPlusValue,
  ButtonReset,
  CounterDiv,
  CounterPage,
  DisplayCounter,
  DisplayValue,
  ResetDiv,
  ValueDiv,
} from "../styles/Counter.style";

type DisplayStatus = number;

export default function Counter() {
  const [Counter, setCounter] = useState<DisplayStatus>(0);
  const [CounterValue, setCounterValue] = useState<DisplayStatus>(1);

  function buttonPlus() {
    setCounter(Counter + CounterValue);
  }
  function buttonMinus() {
    setCounter(Math.max(0, Counter - CounterValue));
  }
  function buttonReset() {
    setCounter(Counter - Counter);
  }

  function buttonPlusValue() {
    setCounterValue(CounterValue + 1);
  }
  function buttonMinusValue() {
    setCounterValue(Math.max(1, CounterValue - 1));
  }

  return (
    <CounterPage>
      <CounterDiv>
        <ButtonPlus onClick={buttonPlus}>
          +
          {/* <FontAwesomeIcon icon={icon({ name: "plus", style: "solid" })} /> */}
        </ButtonPlus>
        <DisplayCounter>{Counter}</DisplayCounter>
        <ButtonMinus onClick={buttonMinus}>-</ButtonMinus>
      </CounterDiv>
      <ResetDiv>
        <ButtonReset onClick={buttonReset}>Reset</ButtonReset>
      </ResetDiv>
      <ValueDiv>
        <ButtonPlusValue onClick={buttonPlusValue}>+</ButtonPlusValue>
        <DisplayValue>{CounterValue}</DisplayValue>
        <ButtonMinusValue onClick={buttonMinusValue}>-</ButtonMinusValue>
      </ValueDiv>
    </CounterPage>
  );
}
