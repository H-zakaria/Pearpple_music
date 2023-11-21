import { Outlet } from "react-router-dom";
import TopNav from "../components/top_nav/TopNav";

export default function Root() {
  return (
    <div id="app">
      <TopNav />
      <Outlet />
    </div>
  );
}
