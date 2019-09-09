import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ComplaintList.css';
import ComplaintItem from '../ComplaintItem/ComplaintItem';
import Pagination from '../Pagination/Pagination';

class ComplaintList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            postsPerPage: 1
        }
    }
    setCurrentPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }
    // static getDerivedStateFromProps(newProps, prevState, newState) {
    //     console.log('getDerivedStateFromProps')
    //     console.log(newState, prevState)
    //     return null;
    // }
    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // componentWillReceiveProps(newProps){
    //     console.log('componentwillReceiveProps')
    // }
    // componentWillUpdate(newProps, newState){
    //     console.log('componentWillUpdate',newProps, newState)
    // }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }


    render() {
        console.log('render');
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.complaintList.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <Fragment>
                {currentPosts.length > 0 ? <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <table className="table table-hover" id="complaintList" >
                                <thead style={{ background: '#1abc9c' }}>
                                    <tr>
                                        <th>Department</th>
                                        <th>Issue Id</th>
                                        <th>Assigned To</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                {
                                    currentPosts.map((item, index) => {
                                        return <ComplaintItem
                                            item={item}
                                            key={index} />
                                    })
                                }
                            </table>
                        </div>
                    </div>
                    <div className="row page-table">
                        <div className="col-sm-12 col-md-12">

                        </div>
                    </div>
                    <div className="row" style={{ 'float': 'right' }}>
                        <div className="col-sm-6 col-md-6">
                            <Pagination buzzPerPage={this.state.postsPerPage}
                                totalBuzzs={this.props.complaintList.length}
                                paginate={this.setCurrentPage}
                                currentPage={this.state.currentPage} />
                        </div>
                    </div>
                </div> : 'No complaint found'}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        complaintList: state.complaint.complaintList
    }
}
export default connect(mapStateToProps, null)(ComplaintList);




