import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";
export function FooterBottom() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-4 text-center"
    >
      <header className="mb-3">
        <h4>Web Component Snipped</h4>
      </header>

      <section>
        <p>
          Web Components - make with 💗{" "}
          <a
            className="github-icon"
            href="https://github.com/RenzWay/"
            target="_blank"
          >
            <GithubIcon />
          </a>{" "}
          by RenzWay
        </p>
      </section>
    </motion.footer>
  );
}
