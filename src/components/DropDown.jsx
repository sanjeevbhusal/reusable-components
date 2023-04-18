import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";


function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false); 
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current) {
                return;
            }
            
           if(!divEl.current.contains(event.target)) {
            setIsOpen(false);
           }
        }

        document.addEventListener("click", handler);
    }, [])

    function handleOptionClick(option) {
        onChange(option);
        setIsOpen(false); 
    }

    function handleDropDownToggle() {
        setIsOpen(!isOpen);
    }

    const renderedOptions = options.map((option, index) => {
        return (
            <div key={index} onClick={() => handleOptionClick(option)} className="py-3 hover:bg-sky-100">
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="border w-60 cursor-pointer shadow text-lg rounded basis-full">
            <div onClick={handleDropDownToggle} className="flex justify-between items-center border-b p-4">
                <p>{value?.label || "Select..."}</p>
                <span><GoChevronDown /></span>
            </div>
            {isOpen && <div className="px-4 py-2">{renderedOptions}</div>}
        </div>
    )
}

export default DropDown;