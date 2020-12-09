import logo from "../logo.svg";
import PreviewToggle from "./PreviewToggle";

function Navbar({ setClientEnv }) {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={logo}
            width="40"
            height="28"
            alt="Logo"
          />
          <span className="has-text-weight-bold">
            RBrite
          </span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Retroware
          </a>

          <a className="navbar-item" href="/cart">
            Cart
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <PreviewToggle setClientEnv={setClientEnv} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
