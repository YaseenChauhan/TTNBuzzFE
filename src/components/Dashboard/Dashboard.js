import React, { Component, Fragment } from 'react';
import Buzz from '../BuzzCreate/BuzzCreate';
import BuzzList from '../BuzzList/BuzzList';
import './Dashboard.css';
import { connect } from 'react-redux';
import { fetchBuzzList, fetchCommentList } from '../../actions/buzz.action';
import { fetchUserDetails } from '../../actions/user.action';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner/Spinner';
class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchUserDetails();
        this.props.fetchBuzzList();
        this.props.fetchCommentList();
    }
    componentWillReceiveProps(newProps, state) {
        console.log('newProps',newProps)
        console.log('state',state);
    }
    render() {
        return (
            <Fragment>
                <Buzz />
                <div className="buzz-items">
                    {(this.props.loading || !this.props.userInfo) ? <Spinner /> : <BuzzList />}
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        buzzList: state.buzz.buzzList,
        loading: state.buzz.loading,
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        fetchUserDetails,
        fetchBuzzList,
        fetchCommentList
    }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// const mapDispatchToProps = {
//     fetchBuzzList
// };