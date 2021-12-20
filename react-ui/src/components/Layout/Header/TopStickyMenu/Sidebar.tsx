import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import en from "../locales/en.json";
import tr from "../locales/tr.json";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;


  const changeLanguage = (e) => {
    const locale = e.target.value;
    console.log("locale:" + locale)
    router.push(router.pathname, router.asPath, { locale });
  };


  return (
    <Menu>
      <Link href="/kurumsal">
        <a className="menu-item" >
          {t.corporate}
        </a>
      </Link>

      <Link href="/">
        <Image src="/images/projectImages/ctis-logo-2.png" />
      </Link>
      <div style={{ marginTop: "40" }} className={"sidebar-social-icons"}>
        <a href="https://www.instagram.com/pointocomtr/" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faInstagram}
            size={"lg"}
          />
        </a>
        <a href="https://www.facebook.com/pointocomtr" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faFacebook}
            size={"lg"}
          />
        </a>
        <a href="https://twitter.com/pointocomtr" target="_blank">
          <FontAwesomeIcon
            // b color="#1DA1F2"
            color="#2f3d5b"
            className="social-icon"
            icon={faTwitter}
            size={"lg"}
          />
        </a>
        <a href="https://www.linkedin.com/company/pointo1" target="_blank">
          <FontAwesomeIcon
            // color="#0072b1"
            color="#2f3d5b"
            className="social-icon"
            icon={faLinkedin} size={"lg"}
          />
        </a>
      </div>
      <div className="d-flex sidebar-language-change">
        <button value="tr" onClick={changeLanguage} style={{ borderRight: "1px solid #2f3d5b" }}>TR</button>
        <button value="en" onClick={changeLanguage}>EN</button>
      </div>

    </Menu>

  );
};

export default Sidebar;
