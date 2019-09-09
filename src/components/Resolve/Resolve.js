import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Resolve.css';
import {
    fetchAllComplaintsList,
    changeComplaintStatus
}
    from '../../actions/complaint.action';
import ResolveComplaint from '../ResolveComplaint/ResolveComplaint';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';


class Resolve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 1,
            postsPerPage : 5
        }
    }
    setCurrentPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }
    componentDidMount() {
        this.props.fetchAllComplaintsList();
    }
    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.allComplaintsList.slice(indexOfFirstPost, indexOfLastPost);
        let resolveComponent =  <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h6 className="left-Align text-secondary">Your complaints</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <table className="table table-hover" >
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
                                    return < ResolveComplaint
                                        item={item}
                                        index={index}
                                        key={index}
                                        changeComplaintStatus={this.props.changeComplaintStatus} />
                                })
                            }
                        </table>
                    </div>
                </div>
                <div className="row page-table">
                            <div className="col-sm-12 col-md-12">

                            </div>
                </div>
                <div className="row" style={{'float': 'right'}}>
                            <div className="col-sm-6 col-md-6">
                            <Pagination buzzPerPage={this.state.postsPerPage}
                                        totalBuzzs={this.props.allComplaintsList.length} 
                                        paginate={this.setCurrentPage}
                                        currentPage= {this.state.currentPage}/>
                            </div>
                </div>
            </div>;
        return (
            <Fragment>
                {this.props.loading ? <Spinner /> : resolveComponent}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        allComplaintsList: state.complaint.allComplaintsList,
        loading: state.complaint.loading
    }
}
const mapDisptachToProps = {
    fetchAllComplaintsList,
    changeComplaintStatus
}
export default connect(mapStateToProps, mapDisptachToProps)(Resolve);




