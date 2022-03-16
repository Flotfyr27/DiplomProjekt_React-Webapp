import { FC } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import style from "../styles/components/Navbar.module.scss";

interface link {
  title: string;
  url: string;
}

const links: link[] = [
  { title: "Hjem", url: "/" },
  { title: "Om os", url: "om-os" },
  //   { title: "Projekter", url: "projekter" },
];

const Navbar: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.root}>
      <div className={style.logo}>
        <img src="/logo.png" onClick={() => navigate("/")} />
      </div>
      <div className={style.links}>
        {links.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              to={link.url}
              className={({ isActive }) =>
                isActive ? style.linkActive : style.link
              }
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
