import PropTypes from 'prop-types';

const MarketLinks = ({ title, children }) => (
  <div className="market-links">
    <div className="title">{title}</div>
    <div className="market-link-items">{children}</div>
    <style jsx>{`
      @import theme;

      .market-links {
        margin-top: 1em;
        text-align: center;
      }

      .title {
        text-transform: uppercase;
        &::after {
          display: block;
          margin: 0.2em auto;
          content: '';
          width: 30px;
          height: 1px;
          background: rgba(color-txt, 50%);
        }
      }

      .market-link-items {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

MarketLinks.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default MarketLinks;
