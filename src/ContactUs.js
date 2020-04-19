import React from 'react';
import axios from 'axios';
import Modal from './components/Modal';

class ContactUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            comments: "",
            modalShow : false,
            modalMsg : '',
            modalHeading: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        console.log('Submitting: ' + JSON.stringify(this.state));
        event.preventDefault();
        var data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
            comments: this.state.comments
        }
        axios.post('http://localhost:3001/contactInfo', data)
            .then(response=>{
                if(response.status === 200) 
                    //toggleModal('Submitted successfully', 'Success!');
                    this.setState({modalShow : true, modalMsg: 'Submitted successfully', modalHeading: 'Success!'});
                    
                else
                    //toggleModal("Error occurred while submitting information!", "Failed!");
                    this.setState({modalShow : true, modalMsg: 'Error occurred while submitting information!', modalHeading: 'Failed!'});
            }).catch(error =>{
                console.log(error);
                //toggleModal("Error occurred while submitting information! "+error, "Failed!");
                this.setState({modalShow : true, modalMsg: 'Error occurred while submitting information!', modalHeading: 'Failed!'});
            })
        document.getElementById("formId").reset();
        this.setState({modalShow : false, modalMsg: '', modalHeading: ''})
    }

    render(){
        return(
            <div className="form-parent-div container">
                <form onSubmit={this.handleSubmit} id="formId">
                <div>
                    <label htmlFor="fname"> First Name:
                    </label>
                    <input type="text" id="fname" pattern="[a-zA-Z]{2,}" name="fname" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                </div>

                <div>
                    <label htmlFor="lname"> Last Name:
                    </label>
                    <input type="text" id="lname" pattern="[a-zA-Z]{2,}" name="lname" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                </div>

                <div>
                    <label htmlFor="email"> Email:
                    </label>
                    <input type="email" id="email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                </div>

                <div>
                    <label htmlFor="phone"> Contact#:
                    </label>
                    <input type="tel" id="phone" pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9]{10}$)" 
                    name="phone" placeholder="+919876543210" value={this.state.value} onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="comments"> Comments:
                    </label>
                    <textarea name="comments" value={this.state.value} onChange={this.handleChange} />
                </div>
                
                <button type="submit">Submit</button>
                </form>
                {
                    (this.state.modalShow) ?
                    <Modal modalContent = {this.state.modalMsg} modalHeading = {this.state.modalHeading} />
                    :
                    null
                }
          </div>
        )
    }
}

export default ContactUs;