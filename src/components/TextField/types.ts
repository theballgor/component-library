import React from "react";

export interface TextFieldProps  {
    variant?: TextFieldVariants;
    classes?: TextFieldClasses;
    fullWidth?: boolean;
    inputProps?: DefaultInputProps;
    rootProps?: DefaultDivProps;
}

export interface TextFieldClasses {
    root?: string;
    input?: string;
}

type DefaultInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type TextFieldVariants = 'green' | 'red' | 'yellow' | 'blue'