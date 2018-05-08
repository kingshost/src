import Container from './Container';
import FooterNavLink from './FooterNavLink';
import FooterCopyrightLink from './FooterCopyrightLink';
import FooterNavSeparator from './FooterNavSeparator';

const Footer = () => (
  <Container>
    <footer className="footer">
      <nav className="nav">
        <FooterNavLink title="Cookies &amp; Privacy" route="/cookies-and-privacy" />
        <FooterNavSeparator />
        <FooterNavLink title="Disclaimer" route="/disclaimer" />
        <FooterNavSeparator />
        <FooterNavLink title="Contact" route="/contact" />
      </nav>
      <FooterCopyrightLink />
    </footer>
    <style jsx>{`
      @import theme;

      .footer {
        border-top: 1px solid rgba(color-txt, 10%);
        text-transform: uppercase;
        text-align: center;

        @media (min-width: 768px) {
          margin: 0 8px;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
        }

        @media (min-width: 916px) {
          margin: 0;
        }
      }

      .nav {
        font-size: 0;
      }
    `}</style>
  </Container>
);

export default Footer;
