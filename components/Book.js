import PropTypes from 'prop-types';

import assetsPath from '../util/assetsPath';

const COVER_IMG_WIDTHS = [208, 416, 624];

const getCoverSrcSet = srcPrefix => COVER_IMG_WIDTHS
  .map(w => `${assetsPath}/images/${srcPrefix}-w${w}.jpg ${w}w`)
  .join(', ');

const Book = ({ title, imgAlt, srcPrefix, children }) => (
  <div className="book">
    <div className="content">
      <div className="title">{title}</div>
      <div className="call-to-action">
        {children}
      </div>
      <img
        className="picture"
        alt={imgAlt}
        src={`${assetsPath}/images/${srcPrefix}-w52.jpg`}
        srcSet={getCoverSrcSet(srcPrefix)}
        sizes="(max-width: 500px) 104px, 208px"
      />
    </div>
    <style jsx>{`
      @import theme;

      .book {
        margin: 0.5em 0 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 1024px) {
          margin: 1em 36px 0 0;
        }
      }

      .content {
        text-align: center;
        text-transform: uppercase;
      }

      .title {
        margin-bottom: 0.75em;
        &::after {
          display: block;
          margin: 0.2em auto;
          content: '';
          width: 30px;
          height: 1px;
          background: color-txt;
          transition: background 0.2s, transform 0.2s;
        }
      }

      .call-to-action {
        padding: 0 7px 0 3px;
      }

      .picture {
        margin-top: 0.75em;
        width: 208px;
      }
    `}</style>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  srcPrefix: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Book;
