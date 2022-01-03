import cn from 'classnames';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const MenuItem = ({ router: { pathname }, title, subtitle, description, route, flexOrder }) => (
  <Link href={route}>
    <a
      className={cn('menu-item', {
        current: route === pathname || (route === '/' && pathname === '/index'),
      })}
      title={description}
    >
      <div>
        <div className="title">{title}</div>
        {subtitle ? <div className="subtitle">{subtitle}</div> : null}
      </div>
      <style jsx>{`
        @import theme;

        .menu-item {
          text-align: center;
          text-transform: uppercase;
          text-decoration: none;
          box-sizing: border-box;
          flex: 1 1 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          border-top: 1px solid rgba(color-txt, 10%);
          &:nth-child(2),
          &:nth-child(4) {
            border-left: 1px solid rgba(color-txt, 10%);
          }
          &.current {
            color: color-link-current;
          }
        }

        .title {
          font-size: 1em;
          line-height: 1.25;
          font-weight: 300;
        }

        .subtitle {
          font-size: 0.66em;
          line-height: 1.75em;
          &::before {
            display: block;
            margin: 0 auto;
            content: '';
            width: 30px;
            height: 1px;
            background: color-link;
            transition: background 0.2s, transform 0.2s;
            .menu-item:hover & {
              background: darken(saturation(color-link, 100%), 30%);
              transform: scale3d(1.6, 1, 1);
            }
            .menu-item.current & {
              background: color-link-current;
            }
          }
        }

        @media (min-width: 352px) {
          .menu-item {
            flex: none;
            display: block;
            &,
            &:nth-child(2),
            &:nth-child(4) {
              border: 0;
            }
          }
        }

        @media (min-width: 768px) {
          .menu-item {
            padding: 12px 0;
            height: 90px;
            flex: none;
            display: block;
            &,
            &:nth-child(2),
            &:nth-child(4) {
              border: 0;
            }
          }

          .title {
            font-size: 1.5em;
            line-height: 1.5;
          }

          .subtitle {
            font-size: 1em;
            line-height: 2em;
          }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 352px) {
          .menu-item {
            order: ${flexOrder};
          }
        }
      `}</style>
    </a>
  </Link>
);

MenuItem.propTypes = {
  router: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  flexOrder: PropTypes.number.isRequired,
};

MenuItem.defaultProps = {
  subtitle: null,
};

export default withRouter(MenuItem);
