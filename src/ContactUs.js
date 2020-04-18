import React from 'react';
import axios from 'axios';

class ContactUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            comments: ""
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
        axios.post('http://localhost:3001/contactInfo', this.state)
            .then(response=>{
                if(response.status === 200) 
                    toggleModal('Submitted successfully', 'Success!');
                else
                    toggleModal("Error occurred while submitting information!", "Failed!");
            }).catch(error =>{
                console.log(error);
                toggleModal("Error occurred while submitting information! "+error, "Failed!");
            })
        document.getElementById("formId").reset();
    }

    render(){
        return(
            <div className="form-parent-div">
                <form onSubmit={this.handleSubmit} id="formId">
                <div>
                    <label htmlFor="fname"> First Name:
                    <input type="text" id="fname" pattern="[a-zA-Z]{2,}" name="fname" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                    </label>
                </div>

                <div>
                    <label htmlFor="lname"> Last Name:
                    <input type="text" id="lname" pattern="[a-zA-Z]{2,}" name="lname" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                    </label>
                </div>

                <div>
                    <label htmlFor="email"> Email:
                    <input type="email" id="email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                    <span className="validity"></span>
                    </label>
                </div>

                <div>
                    <label htmlFor="phone"> Contact#:
                    <input type="tel" id="phone" pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9]{10}$)" 
                    name="phone" placeholder="+919876543210" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="comments"> Comments:
                    <textarea name="comments" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                
                <button type="submit">Submit</button>
                </form>
                <div id='dialog' className='modal'>
                    <div className='modal-content'>
                        <button className="close" onClick={()=>{
                            toggleModal();
                        }}>&times;</button>
                        <h4 id="dialogHeading" className='heading'> </h4>
                        <p id='dialogMsg'></p>
                    </div>
                </div>
          </div>
        )
    }
}

function toggleModal(dialogMsg, dialogHeading) {
    var x = document.getElementById("dialog");
    var y= document.getElementById('dialogMsg');
    var z= document.getElementById('dialogHeading');
    (dialogHeading==="Failed!") ? z.className+= " failure" : z.className = "heading";
    
	if (x.className === "modal") {
        x.className += " modal-open";
        y.innerHTML = dialogMsg;
        z.innerHTML = dialogHeading;
	}
	else {
		x.className = "modal";
	}
}
export default ContactUs;