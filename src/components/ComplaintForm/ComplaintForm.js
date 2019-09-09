import React, { Component } from 'react';
import './ComplaintForm.css';
import { connect } from 'react-redux';
import { createComplaint } from '../../actions/complaint.action';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';

class ComplaintForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: '',
            title: '',
            name: '',
            email: '',
            complaintContent: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title.trim() && this.state.email.trim()
            && this.state.name.trim() && this.state.complaintContent.trim()) {
            const formData = {
                department: this.state.department,
                title: this.state.title.trim(),
                name: this.state.name.trim(),
                email: this.state.email.trim(),
                complaintContent: this.state.complaintContent.trim()
            }
            this.props.createComplaint(formData);
            this.setState({
                department: '',
                title: '',
                name: '',
                email: '',
                complaintContent: ''
            })
        }
        else {
            swal({
                title: "Oops! something went wrong!",
                text: "Please fill blank fields!",
                icon: "warning",
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="col-sm-12 col-md-12 complaint-box">
                            <h6 className="text-secondary">Complaint Box</h6>
                        </div>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="department" className="font-label">Department</label>
                                    <select name={"department"} className="form-control" onChange={this.handleChange}>
                                        <option>select</option>
                                        <option value={'HR'}>HR</option>
                                        <option value={'IT'}>IT</option>
                                        <option value={'Admin'}>Admin</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="title" className="font-label">Issue Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={"title"}
                                        onChange={this.handleChange}
                                        value={this.state.title} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="name" className="font-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={"name"}
                                        onChange={this.handleChange}
                                        value={this.state.name} />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="email" className="font-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name={"email"}
                                        onChange={this.handleChange}
                                        value={this.state.email} />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" style={{ 'height': '120px' }}
                                    placeholder="write your complaint here!"
                                    name={"complaintContent"}
                                    onChange={this.handleChange}
                                    value={this.state.complaintContent} />
                                <button
                                    type="submit"
                                    className="complaint-btn">submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        createComplaint
    }, dispatch),
});
export default connect(null, mapDispatchToProps)(ComplaintForm);;