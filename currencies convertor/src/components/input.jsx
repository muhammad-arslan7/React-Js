import React from "react";
import currenciesArray from "./currencies";
import "../app.css";

export const Input = ({ heading, amount, setAmount,fromCurr, setFromCurr,toCurr ,setToCurr,result ,setResult }) => {
    const handleAmount = (e) => {
        setAmount(e.target.value);
    };
    const handleFromCurr = (e) => {
        setFromCurr(e.target.value);
    };
    const handletoCurr = (e) =>{
        setToCurr(e.target.value)
    }

    fetch

return (
    <div className="h-[110px] w-[90%] m-auto mt-2 border-[2px] border-[#ffffff33] rounded-md">
      <div className="p-2">
        <label htmlFor={heading}>
          <h1 className="text-lg text-white font-bold mb-2">{heading}</h1>
        </label>
        <div className="flex  justify-between w-[95%]">
          <input
            type="number"
            className="w-[50%] p-2 rounded-md border border-[#ffffff5e] text-white font-semibold text-lg bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            id={heading}
            value={heading == "From" ? amount : result}
            onChange={heading === "From" ? handleAmount : undefined}
            readOnly={heading === "To"}
            />
          <select
            name=""
            id="select"
            className="p-2 rounded-md border border-[#ffffff5e] outline-none text-white bg-transparent font-semibold text-lg"
            style={{ backgroundColor: 'transparent' }}
            onChange={heading == "From" ? handleFromCurr : handletoCurr}
            value={heading == "From"? fromCurr : toCurr }
          >
            {currenciesArray.map((currencyValue) => (
              <option className="bg-[#000000d5]" key={currencyValue} value={currencyValue}>
                {currencyValue}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};