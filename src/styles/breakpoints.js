const size = {
    xs: '420px',
    sm: '640px',
    md: '768px',
    lg: '1700px',
    xl: '3200px'
}

const breakpoints = {
    xs: `(min-width: 0px) and (max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`
}

export default breakpoints;
