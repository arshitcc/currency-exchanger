import React, {useId} from 'react'


function InputBox({
    label, 
    amount,
    onAmountChange,
    currencyOptions = [],
    selectCurrency = "usd",
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
   
    const amountId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>

            <div className="w-1/2">
                <label  
                htmlFor={amountId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {amountDisabled}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabled = {currencyDisabled}
                >
                    
                    {/* <option value="usd">
                        usd
                    </option> */}

                    {/* Remember that Key's in react can be responsible for performance drop in case of loops, maps, */}

                    {
                        currencyOptions.map( (currency) => (
                            <option key={currency} value={currency} >
                                {currency.toUpperCase()}
                            </option>
                        ))
                    }

                </select>
            </div>

        </div>
    );
}

export default InputBox;
