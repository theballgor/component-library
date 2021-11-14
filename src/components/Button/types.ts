import React from "react";

type ButtonDefaultProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SpanDefaultProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export interface ButtonProps {
    children: string;
    variant?: ButtonVariants | undefined;
    classes?: ButtonClasses | undefined;
    fullWidth?: boolean;
    disabled?: boolean;
    buttonProps?: ButtonDefaultProps;
    spanProps?: SpanDefaultProps;
}

export interface ButtonClasses {
    root?: string;
    label?: string;
}

export type ButtonVariants = 'green' | 'red' | 'yellow' | 'blue' | 'dark'

