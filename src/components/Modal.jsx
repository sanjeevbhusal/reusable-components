import ReactDOM from "react-dom";
import { useEffect } from "react";

function Model({ onClose, children, actionBar }) {

    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        }

    }, [])
    
    return (
        ReactDOM.createPortal(
            <div>
                <div className="fixed inset-0 bg-slate-100 opacity-50" onClick={onClose}></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-blue-500 p-8">
                    <div className="flex flex-col justify-between h-full">
                        <p>{children}</p>
                        <div className="flex justify-end mt-16">
                            {actionBar}
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector(".modal-container")
        )
    ) 
}




export default Model;