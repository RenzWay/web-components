export function ModalBs({ content }) {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        button
      </button>
      <div className="modal fade" opentabindex="-1" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="modal-header">
              <h3>modal default</h3>
            </header>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
        <h4></h4>
      </div>
    </>
  );
}

export function ModalStatic({ content }) {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticModal"
      >
        Static modal show
      </button>
      <div
        className="modal fade"
        opentabindex="-1"
        id="staticModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="modal-header">
              <h3>Modal Static</h3>
            </header>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                understand
              </button>
            </div>
          </div>
        </div>
        <h4></h4>
      </div>
    </>
  );
}
