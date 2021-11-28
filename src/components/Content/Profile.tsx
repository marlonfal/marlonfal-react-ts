export const Profile = () => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-user fa-fw w3-margin-right w3-text-teal"></i>
        Personal Profile
      </h2>
      <div className="w3-container">
        <div className="row">
          <div className="col-md-10">
            I'm a software developer with four years of experience developing
            web, mobile and desktop applications. <br />
            I'm a fast learner, hard worker, good team player, result-focused
            developer, dedicated professional and passionated about software
            development. <br />
            I'm a Microsoft Certified Solutions Associate in Web Applications,
            proving my ability to develop high level solutions with the best
            practices.
          </div>
          <div className="col-md-2" style={{ paddingLeft: "0" }}>
            <a
              href="https://www.credly.com/badges/5ff9d2f0-6ac1-412c-b398-c6a294824193/public_url"
              target="_blank"
            >
              <img
                className="avatar"
                style={{ height: "150px" }}
                src="img/mcsa-certification.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
