import { Button, ButtonsContainer, View, Wrapper } from "./components";
import { useState } from "react";
import CalcProvider from "./context/CalcContext";

const NUMPAD = [
  ["c", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [selectedOp, setSelectedOp] =useState('')

  return (
    <CalcProvider>
      <Wrapper>
        <View />
        <ButtonsContainer>
          {NUMPAD.flat().map((num, index) => (
            <Button key={index} value={num} selected={selectedOp} setSelected={setSelectedOp} />
          ))}
        </ButtonsContainer>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
