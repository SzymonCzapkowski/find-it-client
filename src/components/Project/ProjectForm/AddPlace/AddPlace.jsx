import React from 'react';
import Modal from 'react-modal';
import { withFormik, Field } from 'formik';
import { Button } from 'react-bootstrap';


Modal.setAppElement('#root')

class AddPlaceClass extends React.Component {
        constructor() {
            super();

            this.state = {
                modalIsOpen: false
            };

            this.openModal = this.openModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
        }

        openModal() {
            console.log("openmomdal");
            this.setState({
                modalIsOpen: true
            });
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
          onRequestClose={this.closeModal}
          contentLabel= "Modal"
        >

          <div>
              <form>
                <div>
                  <label> Place </label>
                  <input name = "place" type = "text" />
                </div>
                <div>
                     <label> Skills </label> 
                    <Field
                        name = "skills"
                        component = "textarea"
                        rows = "5" />
                </div>
              </form>
          </div>
          <Button onClick={this.closeModal}>Add Project</Button>
          
          <Button onClick={this.closeModal}> x </Button>
        </Modal>
      </div>
    );
  }
}


const AddPlace = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;
}
export default withFormik({
    mapPropsToValues: () => ({
        title: ''

    }),

})(AddPlaceClass);
