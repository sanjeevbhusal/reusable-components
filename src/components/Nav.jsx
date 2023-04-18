import Link from "./Link";

const links = [
  { to: "/button", label: "Button" },
  { to: "/accordian", label: "Accordian" },
  { to: "/dropdown", label: "Dropdown" },
  { to: "/modal", label: "Modal" },
  { to: "/table", label: "Table" },
];

function Nav() {
  const renderedLinks = links.map((link, index) => {
    return (
      <Link key={index} to={link.to}>
        {link.label}
      </Link>
    );
  });

  return <div className="flex flex-col">{renderedLinks}</div>;
}

export default Nav;
