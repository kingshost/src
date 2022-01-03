import PropTypes from 'prop-types';

const PageContent = ({ children }) => (
  <div className="page-content">
    {children}
    <style jsx>{`
      @import theme;

      .page-content {
        border-top: 1px solid rgba(color-txt, 10%);
        padding: 8px;

        @media (min-width: 932px) {
          padding: 0;
        }
      }
    `}</style>
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
