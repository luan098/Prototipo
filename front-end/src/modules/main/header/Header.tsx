import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleControlSidebar, toggleSidebarMenu } from "src/store/reducers/ui";
import Button from "src/Components/button/Button";
import NotificationsDropdown from "src/modules/main/header/notifications-dropdown/NotificationsDropdown";
import UserDropdown from "src/modules/main/header/user-dropdown/UserDropdown";

const Header = () => {
  const dispatch = useDispatch();
  const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
  const headerBorder = useSelector((state: any) => state.ui.headerBorder);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const handleToggleControlSidebar = () => {
    dispatch(toggleControlSidebar());
  };

  const getContainerClasses = useCallback(() => {
    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if (headerBorder) {
      classes = `${classes} border-bottom-0`;
    }
    return classes;
  }, [navbarVariant, headerBorder]);

  return (
    <nav className={getContainerClasses()}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            onClick={handleToggleMenuSidebar}
            type="button"
            className="nav-link"
          >
            <i className="fas fa-bars" />
          </button>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <NotificationsDropdown />
        <UserDropdown />
        <li className="nav-item">
          <Button className="nav-link" onClick={handleToggleControlSidebar}>
            <i className="fas fa-th-large" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
