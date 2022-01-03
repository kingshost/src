import Container from './Container';
import MenuItem from './MenuItem';

const Menu = () => (
  <Container>
    <nav className="menu">
      <MenuItem title="Home" description="THE HOST – A book by Irinel Ramona Florescu" route="/" flexOrder={1} />
      <MenuItem title="About" description="A few words about the author" route="/about" flexOrder={4} />
      <MenuItem
        title="Book One"
        subtitle="read for free"
        description="Read BOOK ONE for free!"
        route="/book-one"
        flexOrder={2}
      />
      <MenuItem
        title="Book Two"
        subtitle="please support"
        description="Please support the writing of BOOK TWO"
        route="/book-two"
        flexOrder={3}
      />
      <style jsx>{`
        .menu {
          display: flex;
          flex-wrap: wrap;

          @media (min-width: 352px) {
            flex-wrap: nowrap;
            justify-content: space-between;
            margin: 0.75em auto 0;
            max-width: 344px;
          }

          @media (min-width: 768px) {
            margin: 0 8px;
            max-width: none;
          }

          @media (min-width: 916px) {
            margin: 0;
          }
        }
      `}</style>
    </nav>
  </Container>
);

export default Menu;
