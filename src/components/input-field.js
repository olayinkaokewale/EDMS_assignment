import React from 'react';
import { Input, Div, Label } from 'atomize/dist';
import { textColor, bgColor } from '../rules/theme';

const InputField = (props) => {
    const { label=null, placeholder="", password=false } = props;
    const type = password ? {type:"password"} : {}
    return (
        <Div m={{y:"1.5rem"}}>
            {(label !== null && label !== undefined && String(label).trim() !== "") && (<Label textColor={textColor.light} textSize="caption">
                {label}
            </Label>)}
            <Input placeholder={placeholder} focusBorderColor={bgColor.primary} rounded="xs" {...type} textColor={textColor.dark} />
        </Div>
    )
}

export default InputField;