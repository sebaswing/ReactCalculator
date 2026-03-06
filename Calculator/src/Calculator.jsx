import { useState } from "react";
import { useCalculate } from "./hooks/useCalculate";
export const Calculator = () => {

    const {num1,setNum1,num2,setNum2,result,sum, difference, product, quotient, clear}=useCalculate();


    return (
    <>
        <h1>Calculadora</h1>
        <hr />
        <div className="calculator-grid">
            
            <input 
                type="number" 
                className="input-num" 
                placeholder="Num 1" 
                value = {num1}
                onChange={(e) => setNum1(e.target.value)}
            /> 

            <input 
                type="number" 
                className="input-num" 
                placeholder="Num 2" 
                value = {num2}
                onChange={(e) => setNum2(e.target.value)}
            />   
            <input 
                type="number" 
                className="input-res" 
                placeholder="Resultado" 
                value={result}
                readOnly
            />
            
            <div className="ops-aside">
                <button onClick={()=>sum(Number(num1),Number(num2))} >+</button>
                <button onClick ={()=>difference(Number(num1),Number(num2))}>-</button>
                <button onClick ={()=>product(Number(num1),Number(num2))}>*</button>
                <button onClick ={()=>quotient(Number(num1),Number(num2))}>/</button>
                <button onClick={()=>clear(Number(num1),Number(num2))}> C </button>
            </div>
        </div>
    </>
    
  )
}
