import {useState} from "react";

export const useCalculate = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result,setResult]=useState<number>(0);

    const sum = (num1:number,num2:number) => {
        const res = num1 + num2;
        console.log(res);
        setResult(res);
        return res;        
    };

    const difference = (num1:number,num2:number) => {
        const res = num1 - num2;
        console.log(res);
        setResult(res);
        return res;
    };

    const product = (num1:number,num2:number) => {
        const res = num1 * num2;
        console.log(res);
        setResult(res);
        return res;
    };

    const quotient = (num1: number, num2: number) => {
    // 1. Validar primero
        if (num2 === 0) {
            setResult(0);
            return 0;
        }

        // 2. Calcular después
        const res = num1 / num2;
        setResult(res);
        return res;
    };
    const clear = () => {
        setNum1(0);
        setNum2(0);
        setResult(0);
    };

    return {
        num1,setNum1,
        num2,setNum2,
        result,
        sum,
        difference,
        product,
        quotient,
        clear
    }
}
