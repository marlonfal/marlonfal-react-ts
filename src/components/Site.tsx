import "../styles/site.css";
import { Content } from "./Content";
import { SideBar } from "./SideBar";

export const Site = () => {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      <div className="w3-row-padding">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};
