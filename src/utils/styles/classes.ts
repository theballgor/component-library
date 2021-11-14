export const joinClasses = (classes: (string | undefined)[]): string => classes
        .filter(className => className)
        .join(' ')
        .trim()

export const getFullWidthClass = (fullWidth?: boolean): string | undefined => fullWidth ? 'CL_fullwidth' : undefined
