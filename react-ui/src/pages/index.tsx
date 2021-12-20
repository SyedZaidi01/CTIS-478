import Layout from "../components/Layout/Layout";
import Slider from "../components/Home/Slider/Slider";
import OurCustomers from "../components/Home/OurCustomers/OurCustomers";
import React from "react";
import WeAraAddingValueToYourBrand from "../components/Home/WeAraAddingValueToYourBrand/WeAraAddingValueToYourBrand";
import WhyPointo from "../components/Home/WhyPointo/WhyPointo";
import ImageSlider from "../components/Home/ImageSlider/ImageSlider"

import en from "../../../react-ui/src/components/Home/locales/en.json";
import tr from "../../../react-ui/src/components/Home/locales/tr.json";
import { useRouter } from "next/router";
import CarouselComponent from "../components/Home/ImageSlider/InfiniteCarousel";
import AliceSlider from "../components/Home/ImageSlider/AliceSlider";

export default function Home() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;
  
  return (
    <Layout>
      <Slider />
      <WeAraAddingValueToYourBrand t={t}/>
      <AliceSlider/>
    </Layout>
  );
}
