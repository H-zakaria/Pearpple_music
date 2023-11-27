import React, { useEffect, useState } from "react";
import "./app_page.scss";
import Loader from "../loader/Loader";
interface Props {
  children: JSX.Element;
}

export const AppPage: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const loadingTime = Math.random() * 1200;
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className={loading ? "app_page loading" : "app_page"}>
      {loading ? <Loader /> : <>{children}</>}
    </div>
  );
};
