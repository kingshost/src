import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
