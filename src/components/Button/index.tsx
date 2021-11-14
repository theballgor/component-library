import React from 'react'
import './index.scss';
import '../../styles/global.scss'
import {ButtonProps} from "./types";
import {joinClasses, getFullWidthClass} from "../../utils/styles/classes";
import {getVariantClass} from "./utils";

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {

    const rootClasses: string = joinClasses([
        'CL_button_root',
        props.classes?.root,
        getVariantClass(props.variant),
        getFullWidthClass(props.fullWidth),
    ])

    const labelClasses: string = joinClasses([
        'CL_button_label',
        props.classes?.label,
    ])

    return (
        <button className={rootClasses} {...props.buttonProps} disabled={props.disabled} aria-disabled={props.disabled}>
            <span className={labelClasses} {...props.spanProps}>
                {props.children}
            </span>
        </button>
    )
}

export default Button