import React from 'react';
import { Input, Div, Label, Icon, Button, Text } from 'atomize/dist';
import { textColor, bgColor, grey } from '../rules/theme';

const InputField = (props) => {
    const { label=null, placeholder="", password=false, success=false,
         errorMsg=null, loading=false
    } = props;
    const type = password ? {type:"password"} : {}
    let borderColor = grey.dark;
    let suffix = null;
    if (success) {
        borderColor = bgColor.success;
        suffix = <Button bg={bgColor.success} p="0" w="1rem" h="1rem" rounded=".5rem" pos="absolute" top="50%" right="1rem" transform="translateY(-50%)" align="center"><Icon name="Checked" color="white" size=".75rem" /></Button>
    } else if (errorMsg != null) {
        borderColor = bgColor.error;
    }
    

    return (
        <Div m={{y:"1.5rem"}}>
            {(label !== null && label !== undefined && String(label).trim() !== "") && (<Label textColor={textColor.light} textSize="caption">
                {label}
            </Label>)}
            <Input isLoading={loading} placeholder={placeholder} borderColor={borderColor} focusBorderColor={bgColor.primary} rounded="xs" {...type} textColor={textColor.dark} suffix={suffix} {...props} />
            {(errorMsg != null) && (
                <Div bg="white" shadow="3" rounded="xs" d="flex" align="center" p=".5rem">
                    <Icon name="CloseSolid" color={bgColor.error} size="1rem" />
                    <Text m={{l:"1rem"}} tag="span" textSize="caption" textColor={textColor.red}>{errorMsg}</Text>
                </Div>
            )}
        </Div>
    )
}

export default InputField;