import "../../public/theme.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />;
}

export default MyApp;
