import Link from 'next/link';

import Container from './Container';
import { bookTitle, bookAuthorName } from '../util/meta';
import assetsPath from '../util/assetsPath';

const IMG_WIDTHS = [240, 320, 470, 640, 940];

const BG_SET = IMG_WIDTHS.map(
  w => `${assetsPath}/images/title-w${w}.png ${w}w`
).join(', ');

const Header = () => (
  <header className="header">
    <Container>
      <Link href="/">
        <a
          className="link"
          title={`${bookTitle} – A book by ${bookAuthorName}`}
        >
          <h1
            className="title lazyload"
            style={{
              backgroundImage: `url(${assetsPath}/images/title-w160.png)`
            }}
            data-bgset={BG_SET}
            data-sizes="auto"
          >
            {bookTitle}
          </h1>
          <br />
          <h2 className="subtitle">A book by {bookAuthorName}</h2>
        </a>
      </Link>
    </Container>
    <style jsx>{`
      @import theme;

      .header {
        padding: 24px 8px;
        text-align: center;
        box-shadow: 0 3px 5px rgba(black, 50%);
      }

      .link {
        display: inline-block;
      }

      .title,
      .subtitle {
        display: inline-block;
        margin: 0;
      }

      .title {
        text-indent: 150%;
        white-space: nowrap;
        overflow: hidden;
        width: 240px;
        height: 41px;
        background: center/contain no-repeat;
      }

      .subtitle {
        font: 300 16px font-family-accent;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: color-link;
        transition: color 0.2s;
        .link:hover & {
          color: darken(saturation(color-link, 100%), 30%);
        }
      }

      @media (min-width: 360px) {
        .title {
          width: 320px;
          height: 55px;
        }
      }

      @media (min-width: 500px) {
        .title {
          width: 470px;
          height: 82px;
        }

        .subtitle {
          font-size: 24px;
        }
      }
    `}</style>
  </header>
);

export default Header;
