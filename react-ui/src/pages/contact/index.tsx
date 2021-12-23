import { faCrosshairs, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import DetailPage from "../../components/DetailPage/DetailPage";
import Layout from "../../components/Layout/Layout";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

const Contact = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;
  return (
    <Layout>
      <DetailPage
        breadCrumbClass="kurumsal-detail-page"
        pageTitle={t.corporate}
        src="/images/point-office-setting-inoffice.jpeg"
      >
        {/* <Image src="/images/shutterstock-622035107.png"/> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.6292382526742!2d32.764531181633885!3d39.871148821263795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d346fde5dd2cdb%3A0x9d2a118fc1f84c3d!2sBilkent%20University%20Computer%20Tkn.%20And%20Information%20Systems!5e0!3m2!1sen!2str!4v1640250692670!5m2!1sen!2str" width="100%" height={"450"} allowFullscreen={""} loading="lazy"></iframe>
      </DetailPage>
    </Layout>
  );
};
export default Contact;
