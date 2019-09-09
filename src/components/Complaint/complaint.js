import React, { Component, Fragment } from 'react';
import ComplaintForm from '../ComplaintForm/ComplaintForm';
import ComplaintList from '../ComplaintList/ComplaintList';
import './complaint.css';
import { connect } from 'react-redux';
import { fetchComplaintList } from '../../actions/complaint.action';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner/Spinner';

class Complaint extends Component {
    componentDidMount() {
        this.props.fetchComplaintList();
    }
    render() {
        return (
            <Fragment>
                <ComplaintForm />
                <div className="complaint-items">
                {this.props.loading ? <Spinner /> : <ComplaintList />}
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        fetchComplaintList,
    }, dispatch),
});
const mapStateToProps = state => {
    return {
        loading: state.complaint.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Complaint);