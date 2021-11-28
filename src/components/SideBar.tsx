import { Contact } from "./SideBar/Contact";
import { Photo } from "./SideBar/Photo";
import { Skills } from "./SideBar/Skills";

export const SideBar = () => {
  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4" style={{borderRadius: "1rem"}}>
        <Photo />
        <Contact />
        <Skills />
      </div>
    </div>
  );
};
