/* eslint-disable react/prop-types */
function InputBox({
  label,
  ammount,
  onAmmountChange = "",
  onCurrencyChange = "",
  currencyOptions = [],
  selectedCurrency = "usd",
  isAmmountDisabled = false,
  isCurrencyDisabled = false,
}) {
  return (
    <>
      <div className="w-5/6 h-2/5 bg-gradient-to-tr from-blue-400 to-transparent rounded-xl flex justify-evenly items-center">
        <div className="w-4/5 flex flex-col justify-center p-4">
          <label htmlFor={label} className="text-xl mx-3 font-bold">
            {label} {selectedCurrency.toUpperCase()}
          </label>
          <input
            type="number"
            className="rounded-lg p-2 m-2 bg-gradient-to-r from-green-500 to-transparent font-semibold text-xl"
            id={label}
            disabled={isAmmountDisabled}
            placeholder="Ammount"
            value={ammount ? ammount : 0}
            onChange={(e) =>
              onAmmountChange && onAmmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/5 flex flex-col justify-center items-center">
          <label
            htmlFor="currencyOptions"
            className="pb-8 text-lg font-semibold "
          >
            Currency
          </label>
          <select
            id="currencyOptions"
            className="rounded-full text-blue-950 p-1 font-bold w-4/6 bg-gradient-to-b"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={isCurrencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
