import {ButtonVariants} from "./types";

export const getVariantClass = (variant?: ButtonVariants): string => {
    switch (variant) {
        case "red":
            return 'CL_button_red';
        case "dark":
            return 'CL_button_dark';
        case "blue":
            return 'CL_button_blue';
        case "green":
            return 'CL_button_green';
        case "yellow":
            return 'CL_button_yellow';
        default:
            return 'CL_button_red';
    }
}