import React, { Component } from 'react';
import './BuzzCreate.css';
import { connect } from 'react-redux';
import { createBuzz } from '../../actions/buzz.action';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';



class BuzzCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buzzContent: '',
            category: '',
            buzzImage: null
        }
    }
         buildFileSelector  = () =>  {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('name', 'buzzImage');
        fileSelector.addEventListener('change', (e) => {
            this.setState({
                buzzImage: e.target.files[0]
            })
        })
        return fileSelector;
    }
    componentDidMount() {
        this.fileSelector = this.buildFileSelector();
    }
    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.buzzContent.trim()) {
            const formData = new FormData();
            formData.append('buzzContent', this.state.buzzContent.trim());
            formData.append('category', this.state.category);
            formData.append('buzzImage', this.state.buzzImage);
            this.props.createBuzz(formData);
            this.setState({
                buzzContent: '',
                category: '',
                buzzImage: null
            });
        }
        else {
            swal({
                title: "Oops! something went wrong!",
                text: "Please fill blank fields!",
                icon: "warning",
            });
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChangeHandler = event => {

        this.setState({
            buzzImage: event.target.files[0]
        })

    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="widget-area no-padding blank">
                            <div className="col-sm-12 col-md-12 buzz-box">
                                <h6 className="text-secondary" >Buzz Box</h6>
                            </div>
                            <div className="status-upload">
                                <form onSubmit={this.handleSubmit}>
                                    <textarea placeholder="Share your thoughts!"
                                        name={'buzzContent'}
                                        onChange={this.handleChange}
                                        value={this.state.buzzContent}
                                    />
                                    <span className="custom-dropdown small">
                                        <select name={'category'} onChange={this.handleChange}>
                                            <option>Category</option>
                                            <option value={'activity'}>Activity</option>
                                            <option value={'lostFound'}>Lost and Found</option>
                                        </select>
                                    </span>
                                    <span >
                                        <a className="buzz-upload custom-dropdown small" href="" onClick={this.handleFileSelect}>Select Image</a>
                                    </span>
                                    <button type="submit" className="buzz"><i className="fa fa-paper-plane"></i> submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        createBuzz
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(BuzzCreate);



// const mapDispatchToProps = {
//     createBuzz
// };

// <input type="file" name="buzzImage" onChange={this.onChangeHandler} /> 

