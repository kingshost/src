import PropTypes from 'prop-types';

const CallToAction = ({ title, children }) => (
  <div>
    <div className="title">{title}</div>
    <div className="content">
      {children}
    </div>
    <style jsx>{`
      @import theme;

      .title {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 0.75em;
        &::after {
          display: block;
          margin: 0.2em auto;
          content: '';
          width: 30px;
          height: 1px;
          background: rgba(color-txt, 50%);
        }
      }

      .content {
        padding: 0 7px 0 3px;
      }
    `}</style>
  </div>
);

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default CallToAction;
