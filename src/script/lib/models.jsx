import { ButtonBs } from "../components/button.jsx";
import { AlertBs } from "../components/alert.jsx";
import { ModalBs, ModalStatic } from "../components/modal.jsx";

const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link",
];

const message = [
  "Stay cautious",
  "Keep calm",
  "Be alert",
  "Pay attention",
  "Take care",
  "Stay safe",
  "Be aware",
  "Stay vigilant",
  "Important notice",
];

export const btn = variants.map((variant) => ({
  title: variant[0].toUpperCase() + variant.slice(1),
  content: <ButtonBs variant={variant} />,
  code: `function ButtonBs() {
  return <button className={\`btn btn-${variant}\`}>Click</button>;
}`,
}));

export const alrt = variants.map((variant) => ({
  title: variant[0].toUpperCase() + variant.slice(1),
  content: (
    <AlertBs variant={variant} children={"be aware"} dismissible={true} />
  ),
  code: `function AlertBs() {
  return <div className={\`alert alert-${variant}\`}>Alert</div>;
}`,
}));

export const modal = [
  {
    title: "Default",
    content: <ModalBs content="This is a default modal" />,
    code: `function ModalBs({ content }) {
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
`,
  },
  {
    title: "Static",
    content: <ModalStatic content="This is a static modal" />,
    code: `function ModalStatic({ content }) {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Static modal show
      </button>
      <div
        className="modal fade"
        opentabindex="-1"
        id="myModal"
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
`,
  },
];
