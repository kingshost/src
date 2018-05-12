import PropTypes from 'prop-types';

const DownloadLinks = ({ children }) => (
  <div className="download-links">
    {children}
    <style jsx>{`
      .download-links {
        display: flex;
        max-width: 300px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

DownloadLinks.propTypes = {
  children: PropTypes.node.isRequired
};

export default DownloadLinks;
