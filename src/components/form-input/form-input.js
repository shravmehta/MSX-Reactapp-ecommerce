import React from 'react';

import './form-input.scss';

const FormInput = ({handleChange, label, ...signInProps}) =>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...signInProps}/>
        {
            label ? (<label className={`${signInProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>) : null
        }
    </div>
);

export default FormInput;