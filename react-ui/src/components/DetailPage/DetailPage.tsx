import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { Fragment } from "react";

import Widget from "../Common/Widget";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

const DetailPage = (props) => {
  const { src, pageTitle, children, breadCrumbClass } = props;
  const title = pageTitle ? pageTitle : "Detay Sayfası";
  const addBreadCrumbClass = breadCrumbClass ? breadCrumbClass : "";
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <Fragment>
      {pageTitle ? (
        <Head>
          {" "}
          <title>{pageTitle} | Dijital Çözüm Ortağı</title>{" "}
        </Head>
      ) : (
        <Head>
          {" "}
          <title>Pointo | Dijital Çözüm Ortağı</title>{" "}
        </Head>
      )}

      <div
        className={"breadcrumb-area" + " " + addBreadCrumbClass}
        style={
          src
            ? { backgroundImage: `url(${src})` }
            : { backgroundImage: `url(/images/layout-background.png)` }
        }
      >
        <h4> {title} </h4>
        <div>
          <Link href="/">{t.title}</Link> -{" "}
          <Link href={router.pathname}>{title}</Link>
        </div>
      </div>

      <Widget className="detail-page-container" light>
        {children}
      </Widget>
    </Fragment>
  );
};
export default DetailPage;
