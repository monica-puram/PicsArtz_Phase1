import React from 'react';
import axios from 'axios';

class CareersForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            resume: null
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
        console.log((this.state.resume));
        console.log(document.getElementById('myfile').value);
        const data = new FormData()
        data.append("file", this.state.resume);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        axios.post('http://localhost:3001/applyNow', data)
            .then(response=>{
                if(response.status === 200) 
                    alert("Submitted!")
                else
                    alert("Error occurred while submitting information!")
            }).catch(error =>{
                console.log(error);
            })
    }
    render(){
        return(
            <div className='careersForm container'>
                <form id ='careersFormId'>
                    <label>First Name: </label>
                    <input type= 'text' placeholder='First name' name = 'firstName' value={this.state.firstName} onChange={this.handleChange} required/>
                    <label>Last Name: </label>
                    <input type= 'text' placeholder='Last name' name = 'lastName' value={this.state.lastName} onChange={this.handleChange}/>
                    <label htmlFor="myfile">Please upload your Resume: </label><br/>
                    <input type="file" id="myfile" name="resume" accept=".doc,.docx,.pdf,.txt" onChange={this.handleFileChange} required></input><br/>
                </form>
                <button onClick={this.handleSubmit}>Apply Now</button>
            </div>
        )
    }
}

export default CareersForm;