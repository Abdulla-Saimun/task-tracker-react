import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        ></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// inline styling
// const headingStyle = {
//     color: 'green',
//     backgroundColor: 'aqua'
// }

export default Header;
