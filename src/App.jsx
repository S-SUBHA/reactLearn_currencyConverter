import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { InputBox } from "./components/components.js";

function App() {
  const [ammount, setAmmount] = useState(0);
  const [convertedAmmount, setConvertedAmmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = currencyInfo && Object.keys(currencyInfo);

  function onAmmountChange(ammount) {
    setAmmount(ammount < 0 ? 0 : ammount);
  }

  function onFromCurrencyChange(currency) {
    setFromCurrency(currency);
  }

  function onToCurrencyChange(currency) {
    setToCurrency(currency);
  }

  function swapHandler() {
    setAmmount(convertedAmmount);
    setConvertedAmmount(ammount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  useEffect(() => {
    setConvertedAmmount(ammount * currencyInfo[toCurrency]);
  }, [ammount, currencyInfo, toCurrency]);

  return (
    <>
      <div className="bg-[url('/background.jpg')] w-full h-svh flex justify-center items-center">
        <div className="bg-blue-400 bg-opacity-30 w-2/5 h-2/4 rounded-2xl flex flex-col justify-evenly items-center">
          <InputBox
            label={"From"}
            ammount={ammount}
            onAmmountChange={onAmmountChange}
            onCurrencyChange={onFromCurrencyChange}
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            isAmmountDisabled={false}
          ></InputBox>
          <button
            className="absolute z-10 w-32 h-16 rounded-2xl bg-[url('./assets/exchangeIcon.svg')] hover:shadow-2xl"
            onClick={() => swapHandler()}
          ></button>
          <InputBox
            label={"To"}
            ammount={convertedAmmount}
            onCurrencyChange={onToCurrencyChange}
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            isAmmountDisabled={true}
          ></InputBox>
        </div>
      </div>
    </>
  );
}

export default App;
