import React, { Component, Fragment } from 'react';
import './BuzzList.css';
import { connect } from 'react-redux';
import Buzz from '../Buzz/Buzz';


class BuzzList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.buzzList.length > 0 ? this.props.buzzList.map((item, index) => {
                    return <Buzz item={item} 
                                index={index} key={item._id} 
                                commentsList={this.props.commentsList} />
                }) : 'No Post Added yet'}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        buzzList: state.buzz.buzzList,
        userInfo: state.user.userInfo,
        commentsList: state.buzz.commentsList
    }
}
;

export default connect(mapStateToProps, null)(BuzzList);

