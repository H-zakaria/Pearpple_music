import React from "react";
import { AppPage } from "../../components/app_page/AppPage";
import BrowsingLinks from "./BrowsingLinks";
import Footer from "../../components/footer/Footer";
import BrowsingCarousels from "./BrowsingCarousels";

const BrowsingPage: React.FC = () => {
  return (
    <AppPage>
      <>
        <div className="page_content">
          <BrowsingCarousels />
          <BrowsingLinks />
        </div>
        <Footer />
      </>
    </AppPage>
  );
};

export default BrowsingPage;
