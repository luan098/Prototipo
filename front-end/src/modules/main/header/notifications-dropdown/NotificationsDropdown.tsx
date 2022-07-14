import { Link } from "react-router-dom";
import Dropdown from "src/Components/dropdown/Dropdown";

const NotificationsDropdown = () => {
  return (
    <Dropdown
      isOpen={false}
      size="lg"
      buttonTemplate={
        <>
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </>
      }
      menuTemplate={
        <>
          <span className="dropdown-item dropdown-header">3 Notifications</span>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-file mr-2" />
            <span>new reports 3</span>
            <span className="float-right text-muted text-sm">2 days Ago</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item dropdown-footer">
            See All Messages
          </Link>
        </>
      }
    />
  );
};

export default NotificationsDropdown;
