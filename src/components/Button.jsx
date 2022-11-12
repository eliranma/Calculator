import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const styles = {
  button: {
    backgroun: "#e9f0f4",
    height: "3.5rem",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#242424",
    border: "none",
    fontSize: "1.5rem",
    // '::hover':{
    //     border:'2px solid #242424 !important'
    // }
  },
  equals: {
    background: "#4bd086",
    gridColumn: "3/5",
  },
  opt: {
    background: "#f79505",
  },
  selectedOp:{
    color: '#f4f4f4'
  }
};

const Button = ({ value, selected, setSelected }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const resetClick = () => {
    setCalc({
      num: 0,
      res: 0,
      sign: "",
    });
  };
  const handleNumClick = () => {
    const strNum = value.toString();
    let number;
    strNum === "0" && calc.num === 0
      ? (number = "0")
      : (number = Number(calc.num + strNum));

    setCalc({
      ...calc,
      num: number,
    });
  };

  const opClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (num1, num2, op) => {
        let result = {
          "/": (num1, num2) => num1 / num2,
          x: (num1, num2) => num1 * num2,
          "-": (num1, num2) => num1 - num2,
          "+": (num1, num2) => num1 + num2,
        };
        return result[op](num1, num2);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const persentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  const numConvertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const handleButton = () => {
    let results = {
      ".": commaClick,
      c: resetClick,
      "/": opClick,
      x: opClick,
      "-": opClick,
      "+": opClick,
      "=": equalClick,
      "*/-": numConvertClick,
      "%": persentClick,
    };
    if (results[value]) {
        setSelected(value)
      return results[value]();
    } else {
        setSelected('')
      return handleNumClick();
    }
  };
  return (
    <button
      onClick={handleButton}
      style={
        value === "="
          ? { ...styles.button, ...styles.equals }
          : typeof value === "string" && value !== "."
          ? { ...styles.button, ...styles.opt }
          : styles.button
      }
    >
      <p style={selected===value?styles.selectedOp:null}>
      {value}
      </p>
    </button>
  );
};

export default Button;
