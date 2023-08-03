import React,{useState} from 'react';
import "./style.scss";

const Calculator = (props) => {
    const [val,setVal] = useState("0")
    const applyCalculations = ()=> {
        try{
            setVal(eval(val.toString()))
        }
        catch(error) {
            setVal('Error');
          }
        
    }
    const setText = (value)=> {
        if(val==0 ||val== 'Error'){
            setVal(value) 
        }
        else{
            setVal((val).toString()+value)
        }
        
    }
    const clear = () => {
        setVal('0');
    }
    return (
        <div className='calculator'>
            <div className="heading">Calculator</div>
            <div className='row'>
                <input
                    type='text'
                    className='input'
                    pattern="[0-9]*"
                    value={val}
                    onChange={(e) =>
                        setVal((v) => (e.target.validity.valid ? e.target.value : v))}
                />
            </div>
            <div className='row'>
                <div className='column grey' onClick={e=>clear(e.target.innerText)}>AC</div>
                <div className='column grey'>+/-</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>%</div>
                <div className='column orange' onClick={e=>applyCalculations(e.target.innerText)}>/</div>
            </div>
            <div className='row'>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>7</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>8</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>9</div>
                <div className='column orange' onClick={e=>setText(e.target.innerText)}>*</div>
            </div>
            <div className='row'>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>4</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>5</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>6</div>
                <div className='column orange' onClick={e=>setText(e.target.innerText)}>-</div>
            </div>
            <div className='row'>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>1</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>2</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>3</div>
                <div className='column orange' onClick={e=>setText(e.target.innerText)}>+</div>
            </div>
            <div className='row'>
                <div className='column grey adjust' onClick={e=>setText(e.target.innerText)}>0</div>
                <div className='column grey' onClick={e=>setText(e.target.innerText)}>.</div>
                <div className='column orange' onClick={e=>applyCalculations()}>=</div>
            </div>
        </div>
    )

}

export default Calculator;