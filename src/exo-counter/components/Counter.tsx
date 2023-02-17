import { SyntheticEvent } from "react";
import { useState } from "react";
import {
  Button,
  CounterDiv,
  CounterPage,
  Display,
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
      <h1>Compteur</h1>
      <CounterDiv>
        <Button onClick={buttonMinus}>
          <i className="fa-solid fa-circle-minus"></i>
        </Button>
        <Display>{counter}</Display>
        <Button onClick={buttonPlus}>
          <i className="fa-solid fa-circle-plus"></i>
        </Button>
      </CounterDiv>
      <ResetDiv>
        <Button onClick={buttonReset}>Reset</Button>
      </ResetDiv>
      <ValueDiv>
        <Button onClick={buttonMinusIncrement}>
          <i className="fa-solid fa-circle-minus"></i>
        </Button>
        <Display>{increment}</Display>
        <Button onClick={buttonPlusIncrement}>
          <i className="fa-solid fa-circle-plus"></i>
        </Button>
      </ValueDiv>
      <h2>Incrément</h2>
    </CounterPage>
  );
}
