import React from "react";
import { AppPage } from "../../components/app_page/AppPage";
import Footer from "../../components/footer/Footer";
import LargeRadioCards from "./components/large_radio_cards/LargeRadioCards";
import BroadCasters from "./components/broadcasters/BroadCasters";

const RadioPage: React.FC = () => {
  return (
    <AppPage>
      <>
        <div className="page_content">
          <LargeRadioCards />
          <BroadCasters />
        </div>
        <Footer />
      </>
    </AppPage>
  );
};

export default RadioPage;
