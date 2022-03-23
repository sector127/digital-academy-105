import PropTypes from 'prop-types';

export const Profile = ({ title }) => {
  return (
    <div className="row p2">
      <h2>Pofile Page</h2>
      <h3>{title}</h3>
    </div>
  );
};

Profile.propTypes = {
  type: PropTypes.string.isRequired,
};
