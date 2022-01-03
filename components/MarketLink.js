import cn from 'classnames';
import PropTypes from 'prop-types';
import assetsPath from '../util/assetsPath';

const DENSITIES = [1, 2, 3];

const getSrcSet = (srcPrefix) => DENSITIES.map((n) => `${assetsPath}/images/${srcPrefix}-${n}x.png ${n}x`).join(', ');

const MarketLink = ({ title, href, srcPrefix }) => {
  const inactive = !href;
  const callToAction = `${title} ${inactive ? 'soon' : 'now'}`;
  return (
    <div className={cn('market-link', { inactive })}>
      <a title={callToAction} href={href} target="_blank" rel="noopener noreferrer">
        <img alt={callToAction} src={`${assetsPath}/images/${srcPrefix}-1x.png`} srcSet={getSrcSet(srcPrefix)} />
      </a>
      <style jsx>{`
        .market-link {
          font-size: 0;
          margin: 0 12px 8px;
          &.inactive {
            filter: grayscale(100%) opacity(15%);
          }
        }
      `}</style>
    </div>
  );
};

MarketLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  srcPrefix: PropTypes.string.isRequired,
};

MarketLink.defaultProps = {
  href: null,
};

export default MarketLink;
