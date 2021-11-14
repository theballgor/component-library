import React from 'react';
import './index.scss';
import {CheckboxProps} from "./types";
import {ReactComponent as Icon} from '../../assets/svg/checkMark-white-icon.svg';
import {getVariantClass} from "./utils";
import {joinClasses} from "../../utils/styles/classes";

const CheckBox: React.FC<CheckboxProps> = (props: CheckboxProps): JSX.Element => {

    const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement> | undefined): void => {
        if(e) {
            if(e.key === 'Enter') {
                props.onClick && props.onClick()
            }
        }
    }

    const rectClasses = [
        'CL_checkBox_rect',
        getVariantClass(props.variant)
    ]

    return (
        <div className={'CL_checkBox_root'}>
            <div
                className={joinClasses(rectClasses)}
                data-checked={props.value}
                onKeyPress={onKeyPress}
                onClick={props.onClick}
                tabIndex={0}
            >
                {
                    props.value && <Icon/>
                }
            </div>
            <span className={'CL_checkBox_label'}>
                {props.label}
            </span>
        </div>
    )
}

export default CheckBox