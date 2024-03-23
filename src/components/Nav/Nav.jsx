import PropTypes from 'prop-types';
const Nav = ({ route }) => {
    return (
        <li><a href={route.path}>{route.name}</a></li>
    );
};
Nav.propTypes = {
    route: PropTypes.object.isRequired
}

export default Nav;