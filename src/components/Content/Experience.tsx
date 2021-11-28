export const Experience = () => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-text-teal"></i>
        Career Summary
      </h2>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Software Engineer at Vichara Technologies</b>
          &nbsp; &nbsp;
          <img
            style={{ float: "right" }}
            className="avatar"
            src="img/logo_vichara.png"
          />
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>August 2021 -
          <span className="w3-tag w3-teal w3-round">Current</span>
        </h6>
        <ul>
          <li>Web applications development in ReactJS and ASP.NET Core.</li>
          <li>MS SQL Server databases management.</li>
        </ul>
        <hr />
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Software Engineer at W2D IT</b>
          &nbsp; &nbsp;
          <img
            style={{ float: "right" }}
            className="avatar"
            src="img/logo_w2d.png"
          />
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>April 2019 -
          August 2021
        </h6>
        <ul>
          <li>Web applications development in ASP.NET MVC and ASP.NET Core.</li>
          <li>
            Mobile applications development for iOS and Android in Xamarin.
          </li>
          <li>Desktop applications development in WPF.</li>
          <li>MS SQL Server databases management.</li>
        </ul>
        <hr />
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Web Developer at Creamos la Web</b>
          &nbsp; &nbsp;
          <img
            style={{ float: "right" }}
            className="avatar"
            src="img/logo_creamoslaweb.png"
          />
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>Enero 2018 -
          Marzo 2019
        </h6>
        <ul>
          <li>Web applications development in CakePHP</li>
          <li>MySQL databases management</li>
        </ul>
        <hr />
      </div>
    </div>
  );
};
