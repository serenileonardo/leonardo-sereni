import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <img src={logo} alt="logo" />

      <h3>Leonardo Sereni</h3>
      <p>Web Developer</p>

      <div className="footer-buttons">

        <a
          href="https://wa.me/393393542788"
          className="btn-primary"
          target="_blank"
        >
          Scrivimi su WhatsApp
        </a>

        <a
          href="mailto:serenileonardo.web@gmail.com"
          className="btn-secondary"
        >
          Scrivimi via Email
        </a>

      </div>

    </footer>
  );
}