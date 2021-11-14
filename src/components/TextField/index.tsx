import React from 'react';
import {TextFieldProps} from "./types";
import {getFullWidthClass, joinClasses} from "../../utils/styles/classes";
import './index.scss';
import '../../styles/global.scss';
import {getVariantClass} from "./utils";

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps): JSX.Element => {

    const rootClasses: string = joinClasses([
        'CL_textField_root',
        props.classes?.root,
        getVariantClass(props.variant),
        getFullWidthClass(props.fullWidth),
    ])

    const inputClasses: string = joinClasses([
        'CL_textField_input',
        props.classes?.input,
        getFullWidthClass(props.fullWidth),
    ])

    return (
        <div {...props.rootProps} className={rootClasses}>
            <input {...props.inputProps} className={inputClasses}/>
        </div>
    );
};

export default TextField;