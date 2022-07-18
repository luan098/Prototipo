import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logoutUser } from "src/store/reducers/auth";
import { toggleSidebarMenu } from "src/store/reducers/ui";
import { addWindowClass, removeWindowClass, sleep } from "src/Utils/helpers";
import ControlSidebar from "src/modules/main/control-sidebar/ControlSidebar";
import Header from "src/modules/main/header/Header";
import MenuSidebar from "src/modules/main/menu-sidebar/MenuSidebar";
import Footer from "src/modules/main/footer/Footer";
import UserService from "src/Services/UserService";
import PreLoader from "src/Components/pre-loader";
import { toast } from "react-toastify";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuSidebarCollapsed = useSelector(
    (state: any) => state.ui.menuSidebarCollapsed
  );
  const controlSidebarCollapsed = useSelector(
    (state: any) => state.ui.controlSidebarCollapsed
  );
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const fetchProfile = async () => {
    try {
      const response = await UserService.getProfile();
      if (!response) throw new Error("User not find");

      dispatch(loadUser(response));
      await sleep(1000);
      setIsAppLoaded(true);
    } catch (error) {
      toast("User no find");
      dispatch(logoutUser());
      navigate("/login");
      await sleep(1000);
      setIsAppLoaded(true);
    }
  };

  useEffect(() => {
    removeWindowClass("register-page");
    removeWindowClass("login-page");
    removeWindowClass("hold-transition");

    addWindowClass("sidebar-mini");

    fetchProfile();
    return () => {
      removeWindowClass("sidebar-mini");
    };
  }, []);

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [screenSize, menuSidebarCollapsed]);

  useEffect(() => {
    if (controlSidebarCollapsed) {
      removeWindowClass("control-sidebar-slide-open");
    } else {
      addWindowClass("control-sidebar-slide-open");
    }
  }, [screenSize, controlSidebarCollapsed]);

  const getAppTemplate = useCallback(() => {
    if (!isAppLoaded) {
      return <PreLoader />;
    }
    return (
      <>
        <Header />

        <MenuSidebar />

        <div className="content-wrapper">
          <div className="pt-3" />
          <section className="content">
            <Outlet />
          </section>
        </div>
        <Footer />
        <ControlSidebar />
        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </>
    );
  }, [isAppLoaded]);

  return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
