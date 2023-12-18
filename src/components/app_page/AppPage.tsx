import React, { useEffect, useState } from "react";
import "./app_page.scss";
import Loader from "../loader/Loader";
interface Props {
  children: JSX.Element;
  noPaddingTop?: boolean;
  loadingDuration?: number;
}

export const AppPage: React.FC<Props> = ({
  children,
  noPaddingTop = false,
  loadingDuration = Math.random() * 1200,
}) => {
  const [loading, setLoading] = useState(true);
  const loadingTime = loadingDuration;
  let defaultClassName = noPaddingTop ? "app_page no_padding" : "app_page";
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div
      className={
        loading ? `${defaultClassName} loading` : `${defaultClassName}`
      }
    >
      {loading && <Loader />}
      {children}
    </div>
  );
};
