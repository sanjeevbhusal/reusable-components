import className from "classnames";


function Button({ children, type = "default", isRounded = false, hasOutline = false, ...rest}) {
    const classes = className(
        rest.className, 'px-3 py-1 my-2 border flex flex-row items-center gap-2 ', {
        'border-blue-500 bg-blue-500 text-white': type === "primary",
        'border-gray-500 bg-gray-500 text-white': type === "secondary",
        'border-green-500 bg-green-500 text-white': type === "success",
        'border-orange-500 bg-orange-500 text-white': type === "warning",
        'border-red-500 bg-red-500 text-white': type === "danger",
        'border-black bg-white': type === "default",
        'rounded-full': isRounded,
        'bg-white': hasOutline ,
        'text-blue-500': hasOutline && type === "primary",
        'text-gray-500': hasOutline && type === "secondary",
        'text-green-500': hasOutline && type === "success",
        'text-orange-500': hasOutline && type === "warning",
        'text-red-500': hasOutline && type === "danger"
        }
    )

    return (
        <button {...rest} className={classes} >{children}</button>
    )
}


export default Button;