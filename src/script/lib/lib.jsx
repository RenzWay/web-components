import { createHighlighter } from "shiki";
import { useEffect, useState } from "react";
import { ChevronsDownUp } from "lucide-react";
import { btn, alrt, modal, placeholders } from "./models.jsx";
import { PlaceholderCard } from "../components/placeholder.jsx";

export default function LibView({ query }) {
  const [highlightedCodes, setHighlightedCodes] = useState({});

  useEffect(() => {
    if (query.trim()) {
      const firstFoundSection = document.querySelector(".card"); // ambil section pertama
      if (firstFoundSection) {
        firstFoundSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [query]);

  useEffect(() => {
    async function runerShiki() {
      const lighter = await createHighlighter({
        themes: ["nord"],
        langs: ["javascript"],
      });

      const results = {};
      const shikiUsage = (data) => {
        for (const b of data) {
          results[b.title] = lighter.codeToHtml(b.code, {
            theme: "nord",
            lang: "javascript",
          });
        }
      };
      shikiUsage(btn);
      shikiUsage(alrt);
      shikiUsage(modal);

      setHighlightedCodes(results);
    }

    runerShiki();
  }, []);

  const filterFn = (item, category) => {
    const q = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(q) || category.toLowerCase().includes(q)
    );
  };

  const getFilteredData = () => {
    if (!query.trim()) {
      return { button: btn, alert: alrt, modal: modal, placeholders };
    }

    const filteredBtn = btn.filter((b) => filterFn(b, "button"));
    const filteredAlrt = alrt.filter((b) => filterFn(b, "alert"));
    const filteredModal = modal.filter((b) => filterFn(b, "modal"));
    const filteredPlaceholders = placeholders.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );

    return {
      button: filteredBtn,
      alert: filteredAlrt,
      modal: filteredModal,
      placeholders: filteredPlaceholders,
    };
  };

  const {
    button: filterBtn,
    alert: filterAlrt,
    modal: filterModal,
    placeholders: filteredPlaceholders,
  } = getFilteredData();

  return (
    <section role="">
      {(filterBtn.length > 0 || !query) && (
        <section className="card mt-5">
          <header className="card-header">
            <h3>Button</h3>
          </header>

          <section className="card-body">
            <div className="custom-grid">
              {filterBtn.map((b, idx) => (
                <div className="custom-grid-item" key={idx}>
                  <div className="card h-100">
                    <div className="card-header">
                      <h5>Button {b.title}</h5>
                    </div>
                    <div className="card-body p-3">{b.content}</div>
                    <div className="card-footer">
                      <button
                        className="btn"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-alrt-${idx}`}
                      >
                        View code <ChevronsDownUp />
                      </button>
                      <div className="collapse" id={`collapse-alrt-${idx}`}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              highlightedCodes[b.title] ||
                              "<pre>Loading...</pre>",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
      {(filterAlrt.length > 0 || !query) && (
        <section className="card mt-5">
          <header className="card-header">
            <h3>Alert</h3>
          </header>

          <section className="card-body">
            <div className="custom-grid">
              {filterAlrt.map((b, idx) => (
                <div className="custom-grid-item" key={idx}>
                  <div className="card h-100">
                    <div className="card-header">
                      <h5>Alert {b.title}</h5>
                    </div>
                    <div className="card-body p-3">{b.content}</div>
                    <div className="card-footer">
                      <button
                        className="btn"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-alrt-${idx}`}
                      >
                        View code <ChevronsDownUp />
                      </button>
                      <div className="collapse" id={`collapse-alrt-${idx}`}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              highlightedCodes[b.title] ||
                              "<pre>Loading...</pre>",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
      {(filterModal.length > 0 || !query) && (
        <section className="card mt-5">
          <header className="card-header">
            <h3>Modal</h3>
          </header>

          <section className="card-body">
            <div className="custom-grid">
              {filterModal.map((b, idx) => (
                <div className="custom-grid-item" key={idx}>
                  <div className="card h-100">
                    <div className="card-header">
                      <h5>Modal {b.title}</h5>
                    </div>
                    <div className="card-body p-3">{b.content}</div>
                    <div className="card-footer">
                      <button
                        className="btn"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-modal-${idx}`}
                      >
                        View code <ChevronsDownUp />
                      </button>
                      <div className="collapse" id={`collapse-modal-${idx}`}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              highlightedCodes[b.title] ||
                              "<pre>Loading...</pre>",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
      {filteredPlaceholders.length > 0 && (
        <section className="card mt-5">
          <header className="card-header">
            <h3>Placeholders</h3>
          </header>
          <section className="card-body">
            <div className="custom-grid">
              <PlaceholderCard />
              {filteredPlaceholders.map((p, idx) => (
                <div className="custom-grid-item" key={idx}>
                  <div className="card h-100">
                    <div className="card-header">
                      <h5>{p.title}</h5>
                    </div>
                    <div className="card-body p-3">{p.content}</div>
                    <div className="card-footer">
                      <pre>{p.code}</pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
      {query &&
        filterBtn.length === 0 &&
        filterAlrt.length === 0 &&
        filterModal.length === 0 && (
          <p className="text-muted mt-3">No results found for "{query}"</p>
        )}
    </section>
  );
}
