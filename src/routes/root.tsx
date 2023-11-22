import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

export default function Root() {
  return (
    <div id="app">
      <Navigation />
      <Outlet />
    </div>
  );
}
