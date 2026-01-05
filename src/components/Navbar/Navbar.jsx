import { useState } from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";

const CardButton = (handleCardButton) => {
  console.log("handleCardButtonhandleCardButton ", handleCardButton)
  const [cardQuantity, setCardQuantity] = useState(0)

  return (
    <span onClick={handleCardButton} className="cart-icon">
        <FiShoppingCart size={22} />
        <div className="total-card-quantity">{cardQuantity}</div>
    </span>
  )

}

const Navbar = () => {
  const [toggleCardButton, setToggleCardButton] = useState(false)

  const handleCardButton = () => {
    setToggleCardButton(!toggleCardButton)
  }

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/myntra-logo.png" alt="Myntra" height="80" width="120"/>
      </div>

      <div className="menu-style">
        <ul className="nav-link-container">
          <li className="nav-link">Home</li>
          <li className="nav-link">Men</li>
          <li className="nav-link">Women</li>
          <li className="nav-link">Explore All</li>
        </ul>
      </div>
      <div>
        <CardButton handleCardButton={handleCardButton} />
      </div>
    </div>
  );
};
export default Navbar;
