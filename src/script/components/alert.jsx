import { useState } from "react";

export function AlertBs({ variant = "primary", children, dismissible = false }) {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      )}
    </div>
  );
}
