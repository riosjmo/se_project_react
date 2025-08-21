import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Developed by Rio Morales</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
  
}