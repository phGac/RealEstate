import { connect } from 'react-redux';
import UserPanelHeader from '../components/UserPanelHeader';

const mapStateToProps = state => ({
    session: state.session,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPanelHeader);