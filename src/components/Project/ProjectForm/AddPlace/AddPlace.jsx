import React from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root')

class AddPlace extends React.Component {
        constructor() {
            super();

            this.state = {
                modalIsOpen: false
            };

            this.openModal = this.openModal.bind(this);
            this.afterOpenModal = this.afterOpenModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
        }

        openModal() {
            console.log("openmomdal");
            this.setState({
                modalIsOpen: true
            });
        }

        afterOpenModal() {
            this.subtitle.style.color = '#f00';
        }

        closeModal() {
            this.setState({
                modalIsOpen: false
            });
        }

        render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel= "Modal"
        >

          
          <button onClick={this.closeModal}>Add Project</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}
    
export default AddPlace;