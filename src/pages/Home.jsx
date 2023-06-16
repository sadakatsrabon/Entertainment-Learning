import React from "react";
import Navbar from "./shared/Navbar";
import { Helmet } from "react-helmet";
import AboutPage from "./AboutPage";
import FAQPage from "./FAQPage";
import ContactUs from "./ContactUs";
import CallNowPage from "./CallNowPage";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || EducationEntertainment</title>
      </Helmet>

      <AboutPage></AboutPage>
      <FAQPage></FAQPage>
      <ContactUs></ContactUs>
      <CallNowPage></CallNowPage>
    </div>
  );
};

export default Home;
