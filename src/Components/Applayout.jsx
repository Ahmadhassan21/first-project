import { Footer } from "./UI/Footer";
import { Headers } from "./UI/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};
