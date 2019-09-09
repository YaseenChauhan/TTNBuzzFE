import React, { Fragment, Component } from "react";
import BuzzService from "../../services/buzz.service";
import "./Buzz.css";
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { BASE_URL } from '../../config/constants';
import CommentComponent from '../Comment/Comment';
import moment from 'moment';
import { fetchBuzzList } from '../../actions/buzz.action';
import { bindActionCreators } from 'redux';

class BuzzComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            likes: props.item.likes
        }
    }
    // componentWillReceiveProps(newProps, state) {
    //     console.log('newProps',newProps)
    //     console.log('state',state);
    // }
    // componentDidUpdate(newProps) {
    //     console.log('newProps updated',newProps)
    // }
    handleLikes = (buzz) => {
        console.log('id', this.props.userInfo['_id']);
        console.log('likedBy', this.props.item.likedBy)
        //let isLiked = this.props.item.likedBy.includes(this.props.userInfo['_id']);
        let isLiked = this.props.item.likedBy.indexOf(this.props.userInfo['_id']);
        buzz.likes = isLiked >= 0 ? --this.state.likes : ++this.state.likes;

        this.setState({
            likes: this.state.likes
        })
        BuzzService.likeBuzz(buzz)
            .then(response => {
                this.props.fetchBuzzList();
                this.setState({
                    likes: response.likes
                })
            })
            .catch(error => {
                this.setState({
                    likes: this.state.likes - 1
                })
                swal({
                    title: "something went wrong!",
                    icon: "success",
                });
                console.log(error);
            });
    }
    handleCommentBox = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        console.log('Buzz render ::', this.props);
        const commentsOnBuzz = this.props.commentsList.filter(item => {
            return item.buzzId === this.props.item._id;
        });

        let totalCommentsOnPost = commentsOnBuzz.length;
        const isLiked = this.props.item.likedBy.includes(this.props.userInfo['_id']);

        const date1 = moment(new Date(this.props.item.postedOn.replace(/T/, ' ').
            replace(/\..+/, ''))).format('MMMM Do YYYY, h:mm:ss a');
        let updatedFormat = moment(date1, "MMMM Do YYYY, h:mm:ss a").fromNow();

        return (
            <Fragment>
                <div className="f-card">
                    <div className="header">
                        <div className="options">
                            <i className="fa fa-chevron-down"> </i>
                        </div>
                        {
                            this.props.item.buzzImage && <img
                                className="co-logo"
                                src={`${BASE_URL}${this.props.item.buzzImage}`}
                                alt="nature"
                            />
                        }
                        <div className="co-name">
                            <span> {this.props.item.postedBy.username} </span>
                            <p> {updatedFormat}. <i className="fa fa-globe"></i> </p>
                        </div>
                    </div>
                    <div className="content">
                        <p> {this.props.item.buzzContent} </p>
                    </div>
                    <div className="reference">
                        <img
                            className="reference-thumb"
                            src={`${BASE_URL}${this.props.item.buzzImage}`}
                            alt="nature"
                        />
                    </div>
                    <div className="likes">
                        <span>
                            <i className="fa fa-thumbs-up clicked"> </i> {this.state.likes > 0 ? this.state.likes : null}
                        </span>
                        <span className="comments">
                        {totalCommentsOnPost > 0 ? `${totalCommentsOnPost} Comments` : null}
                        </span>
                    </div>
                        
                    <div className="social-buttons">
                        <span onClick={() => this.handleLikes(this.props.item)} className={isLiked ? 'clicked' : ''}>
                            <i className={isLiked ? 'fa fa-thumbs-up clicked' : 'fa fa-thumbs-up'}> </i>Like
                    </span>
                        <span onClick={() => this.handleCommentBox()}>
                            <i className="fa fa-comment"> </i>Comment
                        </span>
                        {this.state.show ? <CommentComponent item={this.props.item}
                            comments={commentsOnBuzz} /> : null}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    }
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        fetchBuzzList
    }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BuzzComponent);