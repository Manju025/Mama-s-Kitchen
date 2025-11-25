import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "active-link" : "header-list";

  const onClickContact = () => {
    alert(
      "Contact us through email: manjundhar1701@gmail.com or LinkedIn profile at Footer section."
    );
  };

  const onClickOrder = () => {
    alert("Order functionality will be available soon. Stay tuned!");
  };

  return (
    <div className="header-bg">
      <div>
        <NavLink to="/" className="logo-container">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="logo-heading">Mama's Kitchen</h1>
        </NavLink>
      </div>

      <ul className="header-links">
        <li>
          <NavLink to="/" className={getActiveClass}>
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="/menu" className={getActiveClass}>
            MENU
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={getActiveClass}>
            ABOUT
          </NavLink>
        </li>
      </ul>

      <div className="header-btns">
        <button type="button" className="contact-btn" onClick={onClickContact}>
          CONTACT US
        </button>
        <button type="button" className="order-btn" onClick={onClickOrder}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
