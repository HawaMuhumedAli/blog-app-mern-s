import Header from "./Header";
import {Outlet} from "react-router-dom";
//layout
export default function Layout() {
  return (
    <main>
      <Header />
      
      <Outlet />
    </main>
  );
}