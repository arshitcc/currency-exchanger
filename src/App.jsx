import { useState } from "react"
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
     
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [resultAmount, setResultAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setResultAmount(amount*currencyInfo[toCurrency]);
  }

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResultAmount(amount);
    setAmount(resultAmount);
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
              backgroundImage: `url('https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
          <div className="w-full flex justify-around">

            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyOptions}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(curr) => setFromCurrency(curr)}
                            selectCurrency={fromCurrency}
                        />
                    </div>

                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-lime-500 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={resultAmount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(curr) => setToCurrency(curr)}
                            selectCurrency={toCurrency}
                        />
                    </div>

                    <button type="submit" className="w-full bg-lime-500 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
