import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

const FormInput = ({handleChange, label, ...signInProps}) =>(
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...signInProps}/>
        {
            label ? (<FormInputLabel className={signInProps.value.length ? 'shrink':''}>{label}</FormInputLabel>) : null
        }
    </GroupContainer>
);

export default FormInput;