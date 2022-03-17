import React from 'react'
import CurrencyInput from './CurrencyInput'
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Calculator() {

    const [amount1,setAmount1] = useState(1);
    const [amount2,setAmount2] = useState(1);
    const [currency1,setCurrency1] = useState('USD');
    const [currency2,setCurrency2] = useState('EUR');
    const [rates,setRates] = useState([]);
  //fetching data from api
    useEffect(()=>{
        axios.get('http://data.fixer.io/api/latest?access_key=0bf3fc63bf8ad27cd02300c35ac351bb')
        .then(response=>{
            setRates(response.data.rates);
        })
    },[]);

    useEffect(()=>{
        if(!!rates)
        {
            handleAmount1Change(1);
        }
    },[rates]);
    //This function will calculate amount 2 on changing amount 1 in required currency
    function handleAmount1Change(amount1){
        setAmount2(format(amount1*rates[currency2]/rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1){
        setAmount2(format(amount1*rates[currency2]/rates[currency1]));
        setCurrency1(currency1);
    }
    //This function will calculate amount 1 on changing amount 2 in required currency
    function handleAmount2Change(amount2){
        setAmount1(format(amount2*rates[currency1]/rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2){
        setAmount1(format(amount2*rates[currency1]/rates[currency2]));
        setCurrency2(currency2);
    }

    function format(number){
        return number.toFixed(4);
    }

  return (
      //setting up exchange calculator page
    <div style={{width:'100vw',height:'50vh',color:'white'}} className="calci text-center">
      <h1 style={{fontFamily: 'Kaushan Script',color:'black',padding:'2.5rem'}}>Currency Exchange Calculator</h1>
      <CurrencyInput 
      currencies={Object.keys(rates)} 
      amount={amount1} 
      currency={currency1}
      onAmountChange = {handleAmount1Change}
      onCurrencyChange = {handleCurrency1Change}
      />
      <CurrencyInput 
      currencies={Object.keys(rates)} 
      amount={amount2} 
      currency={currency2}
      onAmountChange = {handleAmount2Change}
      onCurrencyChange = {handleCurrency2Change}
      />
    </div>
  )
}


