import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Services</li>
        <li className="active">Properties</li>
        <li>Testimonials</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <img src="/assets/logo.png" alt="Inframantra Logo" className="nav-logo" />
    </nav>
  );
}
