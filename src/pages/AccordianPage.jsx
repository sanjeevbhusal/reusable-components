import { useState } from "react";
import AccordianItem from "../components/AccordianItem";

const items = [
  {
    id: 1,
    title: "Do you need HTML to build a webpage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos repellat quasi harum voluptate. Rerum quae provident debitis aspernatur est sed blanditiis? Esse asperiores molestiae corporis eius, ea explicabo non perferendis quasi odit reiciendis. Error illo ratione quos a voluptas voluptatem sed nemo saepe, vel voluptatum eveniet placeat doloremque veritatis.",
  },
  {
    id: 2,
    title: "Do you need CSS to build a webpage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos repellat quasi harum voluptate. Rerum quae provident debitis aspernatur est sed blanditiis? Esse asperiores molestiae corporis eius, ea explicabo non perferendis quasi odit reiciendis. Error illo ratione quos a voluptas voluptatem sed nemo saepe, vel voluptatum eveniet placeat doloremque veritatis.",
  },
  {
    id: 3,
    title: "Do you need JavaScript to build a webpage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos repellat quasi harum voluptate. Rerum quae provident debitis aspernatur est sed blanditiis? Esse asperiores molestiae corporis eius, ea explicabo non perferendis quasi odit reiciendis. Error illo ratione quos a voluptas voluptatem sed nemo saepe, vel voluptatum eveniet placeat doloremque veritatis.",
  },
];

function AccordianPage() {
  const [expandedItemId, setExpandedItemId] = useState(-1);

  const renderedItems = items.map((item) => (
    <AccordianItem
      key={item.id}
      item={item}
      expandedItemId={expandedItemId}
      setExpandedItemId={setExpandedItemId}
    />
  ));

  return (
    <div>
      {/* <h1 className="text-4xl mb-8">Frequently asked questions</h1> */}
      <div className="border-x border-t rounded">{renderedItems}</div>
    </div>
  );
}

export default AccordianPage;
