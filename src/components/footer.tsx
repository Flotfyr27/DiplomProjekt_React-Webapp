import { FC } from "react";
import style from "../styles/components/Footer.module.scss";

interface BusinessInfo {
  location: string;
  city: string;
  cvr: number;
  email?: string;
  phone?: string;
}

const businessInfo: BusinessInfo = {
  location: "Bjerreager 82",
  city: "7120 Vejle Øst",
  cvr: 42531901,
  phone: "+4550467162",
  email: "kontakt@nj.dk",
};

const addressIntroduction = "Du kan finde os her";

const Footer: FC = () => {
  // Use regex to add a space after 2 digits in phone number for prettier display
  const displayPhone = businessInfo.phone
    ?.toString()
    .replace(/\B(?=(\d{2})+(?!\d))/g, " ");
  return (
    <div className={style.root}>
      <div className={style.info}>
        <span className={style.header}>{addressIntroduction}</span>
        <ul>
          <li className={style.address}>
            <i className="material-icons">place</i>
            <div className={style.city}>
              <span>{businessInfo.location}</span>
              <span>{businessInfo.city}</span>
            </div>
          </li>
          <li className={style.cvr}>
            <span>CVR:</span>
            <span>{businessInfo.cvr}</span>
          </li>
          <li className={style.email}>
            <span>
              <i className="material-icons">email</i>
            </span>
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </li>
          <li className={style.phone}>
            <span>
              <i className="material-icons">call</i>
            </span>
            <a href={`tel:${businessInfo.phone}`}>{displayPhone}</a>
          </li>
        </ul>
      </div>
      <div className={style.social}>
        <span className={style.header}>Følg os på de sociale medier</span>
      </div>
    </div>
  );
};

export default Footer;
