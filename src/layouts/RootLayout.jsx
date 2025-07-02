import { Outlet } from "react-router-dom";
import Header from "@commons/header/Header";
import Footer from "@commons/Footer";
import Wrapper from "@commons/Wrapper";

export default function RootLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}