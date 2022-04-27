import { FC, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import style from "../styles/components/Navbar.module.scss";

interface Link {
  title: string;
  url: string;
}

const links: Link[] = [
  // { title: "Hjem", url: "/" },
  { title: "Projekter", url: "projekter" },
  { title: "Om os", url: "om-os" },
];

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  function hamburgerClick() {
    setMenuActive(!menuActive);
  }
  return (
    <header className={style.root}>
      <div className={style.logo}>
        <img
          src="/nj_favicon.svg"
          onClick={() => {
            navigate("/");
            setMenuActive(false);
          }}
        />
      </div>
      <nav className={`${style.links} ${menuActive ? style.active : ""}`}>
        {links.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              to={link.url}
              onClick={() => setMenuActive(false)}
              className={({ isActive }) =>
                isActive ? style.linkActive : style.link
              }
            >
              {link.title}
            </NavLink>
          );
        })}
      </nav>
      <div
        className={`${style.hamburger} ${menuActive ? style.active : ""}`}
        onClick={hamburgerClick}
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
    </header>
  );
};

export default Navbar;
