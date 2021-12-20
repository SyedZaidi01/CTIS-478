import { faCrosshairs, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
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
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        <h1>Hellop</h1>
        
      </DetailPage>
    </Layout>
  );
};
export default Contact;
