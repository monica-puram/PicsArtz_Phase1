import React from 'react';
import axios from 'axios';
import Modal from './Modal';

class CareersForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            resume: null,
            modalShow : false,
            modalHeading : '',
            modalMsg : ''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange=this.handleFileChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleFileChange(e){
        this.setState({resume:e.target.files[0]});
    }
    handleSubmit(e){
        e.preventDefault() // Stop form submit
        const data = new FormData()
        data.append("file", this.state.resume);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        axios.post('http://picsartz.com:3001/applyNow', data)
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
            document.getElementById("careersFormId").reset();
            this.setState({modalShow : false, modalMsg: '', modalHeading: ''})
    }
    render(){
        return(
            <div className='careersForm container'>
                <form onSubmit = {this.handleSubmit} id ='careersFormId'>
                    <label>First Name: </label>
                    <input type= 'text' placeholder='First name' name = 'firstName' value={this.state.firstName} onChange={this.handleChange} required/>
                    <label>Last Name: </label>
                    <input type= 'text' placeholder='Last name' name = 'lastName' value={this.state.lastName} onChange={this.handleChange}/>
                    <label htmlFor="myfile">Please upload your Resume: </label><br/>
                    <input type="file" id="myfile" name="resume" accept=".doc,.docx,.pdf,.txt" onChange={this.handleFileChange} required></input><br/>
                    <button type = 'submit'>Apply Now</button>
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

export default CareersForm;