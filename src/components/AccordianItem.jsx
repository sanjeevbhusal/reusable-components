import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function AccordianItem({ item, expandedItemId, setExpandedItemId}) {
    const isExpanded = expandedItemId === item.id;

    return (
        <div onClick={() => setExpandedItemId(currentExpandedItemId => item.id === currentExpandedItemId ? -1 : item.id )} className="mb-3">
            <div className="p-3 bg-gray-50 border-b flex justify-between items-center cursor-pointer">
                <p className="text-xl">{item.title}</p>
                <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
            </div>
            {isExpanded && <div className="border-b p-5">{item.description}</div>}
        </div>
    )
}

export default AccordianItem;