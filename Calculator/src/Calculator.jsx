export const Calculator = () => {
  return (
    <>
        <h1>Calculadora</h1>
        <hr />
        <div className="calculator-grid">
            
            <input className="input-num" placeholder="Num 1" />
            <input className="input-num" placeholder="Num 2" />
            <input className="input-res" placeholder="Resultado" />
            
            <div className="ops-aside">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </div>
    </>
    
  )
}
