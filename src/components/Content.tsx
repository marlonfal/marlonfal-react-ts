import { Education } from "./Content/Education";
import { Experience } from "./Content/Experience";
import { Profile } from "./Content/Profile";

export const Content = () => {
  return (
    <div className="w3-twothird">
      <Profile />
      <Experience />
      <Education />
    </div>
  );
};
