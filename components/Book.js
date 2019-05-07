import PropTypes from 'prop-types';

import assetsPath from '../util/assetsPath';

const COVER_IMG_WIDTHS = [208, 416, 624];

const getCoverSrcSet = srcPrefix => COVER_IMG_WIDTHS.map(
  w => `${assetsPath}/images/${srcPrefix}-w${w}.jpg ${w}w`
).join(', ');

const Book = ({ srcPrefix, imgAlt, children }) => (
  <div className="book">
    {children}
    <img
      className="picture"
      alt={imgAlt}
      src={`${assetsPath}/images/${srcPrefix}-w52.jpg`}
      srcSet={getCoverSrcSet(srcPrefix)}
      sizes="(max-width: 500px) 104px, 208px"
    />
    <style jsx>{`
      @import theme;

      .book {
        width: 208px;
        margin: 0.5em auto 1.5em;
        @media (min-width: 1024px) {
          margin: 1em 36px 0 0;
        }
      }

      .picture {
        margin-top: 0.75em;
        width: 208px;
      }
    `}</style>
  </div>
);

Book.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  srcPrefix: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Book;
