import React from 'react';
import './style.scss';

const Form = (props) => {

    return (
        <div className='form'>
            <div className='subheading'>Calculation Name</div>
            <div className='form-row'>
                <div className='column adjust'>
                    <input type='text' className='input' placeholder='Enter Name' />
                </div>
                <div className='column'>
                    <button className='button'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Form;