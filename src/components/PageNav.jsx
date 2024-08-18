import Logo from "./Logo.jsx";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
