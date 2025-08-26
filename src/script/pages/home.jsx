import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Search } from "lucide-react";
import LibView from "../lib/lib.jsx";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <motion.section
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      role="body"
    >
      <header
        className="d-flex sticky-top justify-content-between align-items-center px-4 py-3 border-bottom border-secondary"
        id="headerSection"
      >
        <h1 className="d-flex align-items-center fs-4 text-secondary">
          <Code size={30} className="me-2" /> Snipped Code
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="input-group w-25 w-md-50 w-lg-25"
        >
          <span className="input-group-text bg-light border-secondary">
            <Search size={20} />
          </span>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="form-control border-secondary"
            type="search"
            placeholder="Search..."
          />
        </form>
      </header>

      <section role="main" className="container mt-4">
        <p className="text-muted text-center">
          Welcome to Snipped Code! Search and explore code snippets easily.
        </p>
        <LibView query={query} />
      </section>
    </motion.section>
  );
}
