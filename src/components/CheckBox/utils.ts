import {CheckBoxVariants} from "./types";

export const getVariantClass = (variant?: CheckBoxVariants): string => {
    switch (variant) {
        case 'dark':
            return 'CL_checkBox_dark'
        case 'red':
            return 'CL_checkBox_red'
        case 'green':
            return 'CL_checkBox_green'
        case 'blue':
            return 'CL_checkBox_blue'
        case 'yellow':
            return 'CL_checkBox_yellow'
        default:
            return 'CL_textField_red'
    }
}