
export const Button = (props: {
    label?: string,
    buttonStyle?: string,
    onClick?: any,
    children?: any,
    type?: any,
    disabled?: boolean
  }) => {
    const {label="Submit", buttonStyle, disabled, onClick,type,children}=props
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={` border-0 capitalize px-4 py-2 font-bold rounded-md ${buttonStyle}`}>
        {children}
      </button>
    )
  }