import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav.tsx";
import Footer from "./footer/Footer.tsx";

export default function RootLayout() {
  return (
    <>
      <Nav/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
