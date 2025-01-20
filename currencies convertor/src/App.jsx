import React, { useState, useEffect } from "react";
import "./App.css";
import { Input } from "./components/input";

function App() {
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState(0);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("PKR");
  const [rate, setRate] = useState();

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/174c9b95c8615aaace9e7f52/latest/${fromCurr}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('API Response:', res);
        const conversionRate = res.conversion_rates[toCurr];
        setRate(conversionRate);
        setResult(amount * conversionRate);
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, [fromCurr, toCurr, amount]);

  return (
    <>
      <div
        className="bg-black h-screen pt-32"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/007/278/150/non_2x/dark-background-abstract-with-light-effect-vector.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[430px] w-[550px] bg-[#ffffff1c] py-3 border-[3px] border-[#1fc3e036] rounded-xl m-auto ">
          <div>
            <h1 className="text-3xl font-bold text-white text-center mt-3">
              Currencies Convertor
            </h1>
          </div>
          <Input
            heading="From"
            amount={amount}
            fromCurr={fromCurr}
            setFromCurr={setFromCurr}
            setAmount={setAmount}
          />

          <Input
            heading="To"
            toCurr={toCurr}
            result={result}
            setToCurr={setToCurr}
            setResult={setResult}
            
          />
          <div>
            <p className="p-2 bg-[#ffffff36] border-2 border-[#ffffff75] text-center text-xl w-[90%] m-auto rounded-md mt-2 font-semibold">
              {" "}
              {amount} {fromCurr} in {toCurr} are ={result}
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
