import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import assetsPath from '../util/assetsPath';

class DownloadLink extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    humanReadableFileName: PropTypes.string,
    open: PropTypes.bool,
  };

  static defaultProps = {
    humanReadableFileName: null,
    open: false,
  };

  onClick = () => {
    if (global.ga) {
      global.ga('send', 'event', 'Book View Request', 'request', this.props.format);
    }
  };

  render() {
    const { title, fileName, format, humanReadableFileName, open } = this.props;
    const uppercaseFormat = format.toUpperCase();
    return (
      <a
        className="download-link"
        title={`Download ${title} as ${uppercaseFormat} for free!`}
        href={`${assetsPath}/${fileName}.${format}`}
        download={humanReadableFileName ? `${humanReadableFileName}.${format}` : null}
        target={open ? '_blank' : null}
        onClick={this.onClick}
        rel="noreferrer"
      >
        {uppercaseFormat}
        <style jsx>{`
          @import theme;

          .download-link {
            font-weight: bold;
            line-height: 38px;
            text-align: center;
            text-decoration: none;
            color: rgba(black, 90%);
            background: darken(saturation(color-link, 100%), 30%);
            flex: 1 1 33.33%;
            margin-left: 1px;
            &:first-child {
              margin-left: 0;
              border-top-left-radius: 2px;
              border-bottom-left-radius: 2px;
            }
            &:last-child {
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
            }
            &:hover {
              background: color-link-current;
            }
            @media (min-width: 1024px) {
              line-height: 24px;
            }
          }
        `}</style>
      </a>
    );
  }
}

export default DownloadLink;
