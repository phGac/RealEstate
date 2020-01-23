import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
    session: state.session,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);