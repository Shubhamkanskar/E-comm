import { Outlet } from "react-router-dom";
import store from "../Store/store";
import { Provider } from "react-redux";
import Navbars from "./Navbar";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbars />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
