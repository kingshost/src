import PropTypes from 'prop-types';

const MarketLinks = ({ children }) => (
  <div className="market-links">
    <div className="title">Soon available on</div>
    {children}
    <style jsx>{`
      @import theme;

      .market-links {
        margin-top: 2em;
        text-align: center;
      }

      .title {
        text-transform: uppercase;
        white-space: nowrap;
        &::after {
          display: block;
          margin: 0.5em auto;
          content: '';
          width: 60px;
          height: 1px;
          background: rgba(color-txt, 50%);
        }
      }

      @media (min-width: 700px) {
        .market-links {
          margin-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          text-align: left;
          &::after {
           display: none;
          }
        }
      }

      @media (min-width: 1024px) {
        .market-links {
          justify-content: space-between;
        }
      }
    `}</style>
  </div>
);

MarketLinks.propTypes = {
  children: PropTypes.node.isRequired
};

export default MarketLinks;
