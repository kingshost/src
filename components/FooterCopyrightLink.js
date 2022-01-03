import cn from 'classnames';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { bookAuthorName } from '../util/meta';

const ROUTE = '/copyright';

const FooterCopyrightLink = ({ router: { pathname } }) => (
  <Link href={ROUTE}>
    <a className={cn('link', { current: pathname === ROUTE })}>
      <img
        className="image"
        alt="Creative Commons License"
        src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
      />
      <br className="break" />
      <span className="text">© 2018 – 2019 {bookAuthorName}</span>
      <style jsx>{`
        @import theme;

        .link {
          display: block;
          border-top: 1px solid rgba(color-txt, 10%);
          font-size: 0.75rem;
          padding: 10px 0;
          text-decoration: none;
          transition: color 0.2s;
          &.current {
            color: color-link-current;
          }
        }

        .image {
          filter: brightness(0.5);
        }

        @media (min-width: 768px) {
          .link {
            border-top: 0;
            padding: 6px 0;
            font-size: 1rem;
          }

          .break {
            display: none;
          }

          .image,
          .text {
            vertical-align: middle;
          }

          .image {
            margin-right: 8px;
          }
        }
      `}</style>
    </a>
  </Link>
);

FooterCopyrightLink.propTypes = {
  router: PropTypes.shape().isRequired,
};

export default withRouter(FooterCopyrightLink);
