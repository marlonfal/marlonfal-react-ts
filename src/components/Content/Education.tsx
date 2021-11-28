export const Education = () => {
  return (
    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        Education
      </h2>
      <hr />
      <div className="w3-container">
        <h5
          className="w3-opacity displayinlineblock"
          style={{ width: "100%", margin: "0" }}
        >
          <b>
            Software Engineering at Manuela Beltrán University (2018 - 2022)
          </b>
          <img
            src="img/logo_univalle.png"
            height="70"
            style={{ float: "right" }}
            className="displayinlineblock avatar"
            alt="umb"
          ></img>
        </h5>
        <hr />
      </div>
      <div className="w3-container">
        <h5
          className="w3-opacity displayinlineblock"
          style={{ width: "100%", margin: "0" }}
        >
          <b>
            Information Systems Technologist at Del Valle University (2015-2017)
          </b>
          <img
            src="img/logo_umb.png"
            height="70"
            style={{ float: "right" }}
            className="displayinlineblock avatar"
            alt="umb"
          ></img>
        </h5>
        <hr />
      </div>
    </div>
  );
};
