import React, { Fragment, Component } from 'react';
import './Comment.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { createComment } from '../../actions/buzz.action';
import { bindActionCreators } from 'redux';
import { fetchCommentList } from '../../actions/buzz.action';

class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }
    handleComment = (e, item) => {
        e.preventDefault();

        const formData = {
            'comments': this.state.comments
        }
        this.props.createComment(formData, item._id);
        this.setState({
            comments: ''
        })
        this.props.fetchCommentList();
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <div className="detail-box" style={{ 'borderTop': '1px solid  #e5e5e5', 'marginTop': '10px' }}>
                    <div className="actionBox">
                        <ul className="commentList">
                            {this.props.comments.map(item => {
                                const date1 = moment(new Date(this.props.item.postedOn.replace(/T/, ' ').
                                    replace(/\..+/, ''))).format('MMMM Do YYYY, h:mm:ss a');
                                let updatedFormat = moment(date1, "MMMM Do YYYY, h:mm:ss a").fromNow()

                                return <li key={item._id}>
                                    <div className="commentText">
                                        <span style={{ 'margin': '0px', 'color': 'rgb(49, 160, 125)' }}>{item.commentedBy.username}
                                        </span>  <span style={{ 'margin': '0px' }} className="">{item.comments}</span>
                                        <p className="date sub-text">{updatedFormat}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <form className="form-inline" onSubmit={(e) => this.handleComment(e, this.props.item)}>
                            <div className="form-group" style={{ 'width': '80%' }}>
                                <input className="form-control" type="text"
                                    name={"comments"}
                                    placeholder="Your comments"
                                    onChange={this.handleChange}
                                    value={this.state.comments}
                                    style={{ 'width': '100%' }} />
                            </div>
                            <div className="form-group" >
                                <button className="btn btn-default" style={{ 'marginLeft': '10px' }}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        createComment,
        fetchCommentList
    }, dispatch),
});
export default connect(null, mapDispatchToProps)(CommentComponent);