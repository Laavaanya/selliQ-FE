import "./index.scss";
import { Tabs } from "antd";
import "antd/dist/reset.css";
import Investor from "./Investor";
import Monitor from "./Monitor";
import SideBar from "../../components/SideBar";
import NavBar from '../../components/NavBar';

const Features = () => {
  return (
    <div className="sidebar">
      <NavBar />
      <SideBar />
    </div>
  );
};

export default Features;
