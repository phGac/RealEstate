import { connect } from 'react-redux';
import SearchFormResults from '../components/SearchFormResults';

const mapStateToProps = state => ({
    searched: state.searched,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFormResults);