import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/action-creators";

interface UserType {
  username: string;
  token: string;
}

const Dashboard = () => {
  const user: UserType = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Header headerText="Dashboard">
        <div>{user.username}</div>
        <Link to="/" onClick={handleClick}>
          Logout
        </Link>
      </Header>
    </div>
  );
};

export default Dashboard;
