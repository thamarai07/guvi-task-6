import { Link } from "react-router-dom";
const NavLink = ({ content, href, className = "bg-blue-300 px-4 py-1 rounded" }) => {
  return (
    <>
      <Link to={href} className={className}>
        {content}
      </Link>
    </>
  );
};
export default NavLink;
