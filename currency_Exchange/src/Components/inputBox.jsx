import React, { useId } from 'react'

function InputBox({
    textColor,bgColor,
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
}) {
    const amountInputId = useId()
    return (
        <div >
            <div >
                <label htmlFor={amountInputId} >
                    {label}:{selectCurrency}
                </label><br /><hr />
                <input style={{
                    color:"green",
                    backgroundColor:"cream"
                }}
                
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div >
                <p >Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
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