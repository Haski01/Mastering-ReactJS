import React, { useId } from "react";

React;

function InputBox({
  label, // for "From and To"
  amount, // user passing input
  onAmountChange, // function
  onCurrenyChange, // function
  currencyOptions = [], // pass empty error from protecting in crashing app, in case not working api
  selectCurrency = "usd", // by defalult currency option show 'usd'
  amountDisable = false, // for disable or inable input (optional)
  currencyDisable = false, // for disable or inable input optional
  className = "", // for when use want to pass some additonal css (not compulsary)
}) {
  const uniqueId = useId(); // generating unique id use for bind label with input
  return (
    // for whole input

    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* for amount input */}

      <div className="w-1/2">
        <label id={uniqueId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={uniqueId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* for options dropdown */}

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 
        cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
        >
          {/* remember the unique key in loops in react */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
