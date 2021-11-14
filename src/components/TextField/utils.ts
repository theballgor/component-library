import {TextFieldVariants} from "./types";

export const getVariantClass = (variant?: TextFieldVariants): string => {
    switch (variant) {
        case 'red':
            return 'CL_textField_red'
        case 'green':
            return 'CL_textField_green'
        case 'blue':
            return 'CL_textField_blue'
        case 'yellow':
            return 'CL_textField_yellow'
        default:
            return 'CL_textField_red'
    }
}