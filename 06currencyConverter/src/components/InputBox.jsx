// This is a input box componenet which is later reused by output box which shows component reusability.

import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions= [],
    amountDisable= false,
    currencyDisable= false,
    clasName= "",
}){
    // useId is a React Hook that generates a unique, stable ID string for a component instance. It is mainly used to connect related HTML elements for accessibility.
    const amountInputId= useId()

    return(
        <div className= {`bg-white p-3 rounded-lg text-sm flex ${clasName}`}>
            <div className= "w-1/2">
            <label htmlFor= {amountInputId} className= "text-black/40 mb-2 inline-block">{label}
            </label>

            <input id= {amountInputId}
            className= "outline-none w-full bg-transparent py-1.5"
            type= "number"
            placeholder= "Amount"
            disabled= {amountDisable}
            value= {amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
            </div>

            <div>

            </div>

        </div>
    );
}

export default InputBox;