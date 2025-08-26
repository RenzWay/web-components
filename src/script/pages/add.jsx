import { motion } from "framer-motion";
import { useState } from "react";

export default function AddPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container py-5 d-flex justify-content-center">
      {!open && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          layoutId="addBox"
          onClick={() => setOpen(true)}
          className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "60px", height: "60px", fontSize: "24px" }}
        >
          ➕
        </motion.button>
      )}

      {open && (
        <motion.div
          layoutId="addBox"
          className="card shadow p-4"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <h5 className="mb-3">Add Data</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input type="text" id="title" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code
              </label>
              <textarea id="code" className="form-control"></textarea>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
