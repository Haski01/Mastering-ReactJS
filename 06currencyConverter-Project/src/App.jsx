import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // using our hook for fatching currency data from api
  const currencyInfoData = useCurrencyInfo(from); // all data

  // console.log(currencyInfoData);

  const allCurrencies = Object.keys(currencyInfoData); // taking out only keys from whole data

  // swaping functionality
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // converted amount result
  const convert = () => {
    setConvertedAmount(amount * currencyInfoData[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://neptuneholidays.com/world/img/currency-converter.png)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              {/* From input component */}
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={allCurrencies}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrenyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* To input button component */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={allCurrencies}
                onCurrenyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
