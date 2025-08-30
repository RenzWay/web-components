function Placeholder({ width = "100%", height = "150px", className = "" }) {
  return (
    <div
      className={`placeholder ${className}`}
      style={{
        width: width,
        height: height,
        backgroundColor: "#e9ecef",
        borderRadius: "4px",
      }}
    ></div>
  );
}

function PlaceholderCard() {
  return (
    <section>
      <div className="card" style={{ width: "20em" }}>
        <Placeholder width="100%" height="200px" className="mb-3" />
        <div className="card-body">
          <h5 className="card-title">
            <Placeholder width="60%" height="20px" />
          </h5>
          <p className="card-text">
            <Placeholder width="90%" height="10px" className="mb-2" />
            <Placeholder width="75%" height="10px" className="mb-2" />
            <Placeholder width="50%" height="10px" />
          </p>
          <Placeholder
            width="50%"
            height="35px"
            className="btn btn-primary disabled"
          />
        </div>
      </div>
    </section>
  );
}

export { Placeholder, PlaceholderCard };
