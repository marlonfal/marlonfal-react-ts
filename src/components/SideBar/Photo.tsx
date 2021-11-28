export const Photo = () => {
  return (
    <div className="w3-display-container">
      <img
        src="/img/foto.jpg"
        style={{ width: "100%" }}
        alt="Avatar"
        className="avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2 className="name">Marlon Adarme</h2>
      </div>
    </div>
  );
};
