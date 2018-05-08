import PropTypes from 'prop-types';
import cn from 'classnames';
import { withRouter } from 'next/router';
import Link from 'next/link';

const FooterNavLink = ({ router: { pathname }, title, route }) => (
  <Link href={route}>
    <a className={cn('link', { current: pathname === route })}>
      {title}
      <style jsx>{`
        @import theme;

        .link {
          padding: 10px 0;
          font-size: 0.75rem;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
          &.current {
            color: color-link-current;
          }

          @media (min-width: 768px) {
            display: inline-block;
            vertical-align: middle;
            padding: 6px 0;
            font-size: 1rem;
          }
        }
      `}</style>
    </a>
  </Link>
);

FooterNavLink.propTypes = {
  router: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default withRouter(FooterNavLink);
