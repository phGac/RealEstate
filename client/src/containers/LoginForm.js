import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    login: (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN',
        });
    },
    register: () => {
        dispatch({
            type: 'REGISTER',
        });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);