import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalHeading: this.props.modalHeading,
            modalContent : this.props.modalContent
        }
    }
    componentDidMount(){
        var y = document.getElementById('dialogHeading');
        (this.state.modalHeading === "Failed!") ? y.className+= " failure" : y.className = "heading";
    }
    render(){
        return(
            <div id='dialog' className='modal modal-open'>
                <div className='modal-content'>
                    <button className="close" onClick={()=>{
                        toggleModal();
                    }}>&times;</button>
                    <h4 id="dialogHeading" className='heading'>{this.state.modalHeading}</h4>
                    <p id='dialogMsg'>{this.state.modalContent}</p>
                </div>
            </div>
        )
    }
}

function toggleModal() {
    var x = document.getElementById("dialog");
	if (x.className === "modal") {
        x.className += " modal-open";
	}
	else {
		x.className = "modal";
	}
}

export default Modal;