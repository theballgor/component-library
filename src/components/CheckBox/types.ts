export interface CheckboxProps {
    label: string;
    variant?: CheckBoxVariants;
    value?: boolean;
    onClick?: () => void;
}

export type CheckBoxVariants =  'dark' | 'green' | 'blue' | 'red' | 'yellow';
