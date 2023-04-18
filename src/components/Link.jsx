import useNavigation from "../hooks/useNavigation";

function Link({ to, children}) {
    const { navigate, currentPath } = useNavigation()

    function handleClick(event) {
        if (event.ctrlKey || event.metaKey) {
            return  // let browser do its normal behaviour.
        }

        event.preventDefault()
        navigate(to);
    }

    return (
        <a href={to} onClick={handleClick} className={`text-blue-500 p-3 border- ${currentPath === to && " border-l-4 font-bold "}`}>{children}</a>
    )
}


export default Link;