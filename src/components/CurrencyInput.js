import React from 'react'
import PropTypes from "prop-types"
export default function CurrencyInput(props) {
    CurrencyInput.propTypes = {
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        currencies: PropTypes.array,
        onAmountChange: PropTypes.func,
        onCurrencyChange: PropTypes.func,
    }
  return (
    //This page willl take value in one currency and convert into that of another 
    <div className="group">
      <input type='text' value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} className="inputBox"/>
      <select value={props.currency} onChange={ev=> props.onCurrencyChange(ev.target.value)} className="selectBox">
          {
              props.currencies.map((currency=>(
                  <option value={currency} style={{backgroundColor:'cadetblue'}}>{currency}</option>
              )))
          }
      </select>
    </div>
  )
}


