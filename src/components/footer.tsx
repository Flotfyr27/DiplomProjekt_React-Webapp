import { FC } from "react";
import style from "../styles/components/Footer.module.scss";

interface BusinessInfo {
  address: string;
  cvr: number;
  email?: string;
  phone?: string;
}

const businessInfo: BusinessInfo = {
  address: "Bjerreager 82, 7120 Vejle Øst",
  cvr: 42531901,
  phone: "50467162",
  email: "kontakt@nj.dk",
};

const addressIntroduction = "Du kan finde os her";

const Footer: FC = () => {
  const displayPhone = businessInfo.phone?.replace(/([d]{2})/g, ""); // Phone number displays incorrectly
  console.log(displayPhone);
  return (
    <div className={style.root}>
      <div className={style.info}>
        <div className={style.address}>
          <div className={style.header}>
            <span>{addressIntroduction}</span>
          </div>
          <p>{businessInfo.address}</p>
        </div>
        <div className={style.cvr}>
          <p>CVR:</p>
          <p>{businessInfo.cvr}</p>
        </div>
        <div className={style.email}>
          <p>Email:</p>
          <p>{businessInfo.email}</p>
        </div>
        <div className={style.phone}>
          <p>Tlf:</p>
          <p>{displayPhone}</p>
        </div>
      </div>
      <div className={style.social}>
        <div className={style.header}></div>
      </div>
    </div>
  );
};

export default Footer;
