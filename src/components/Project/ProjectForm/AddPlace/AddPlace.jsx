import React from 'react';
import Modal from 'react-modal';
import { withFormik, Field } from 'formik';
import { Button } from 'react-bootstrap';
import {Container, Placelabel, Placeinput, Skillslabel, Skillsinput, AddProjectButton, ButtonX, ButtonContainer } from './AddPlaceStyles'


Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '30vh',
    left: '30vh',
    right: 'auto',
    bottom: 'auto'
  }
};

class AddPlaceClass extends React.Component {

  render() {
    return (
      <Container>
        <Modal  style={customStyles}
          isOpen
          onRequestClose={this.closeModal}
          contentLabel= "Modal"
        >
              <form>
                
                  <Placelabel> Place </Placelabel>
                  <Placeinput>
                  <Field className = "placeinput" name = "place" type = "text" />
                </Placeinput>
               
                     <Skillslabel> Skills </Skillslabel> 
                     <Skillsinput>
                    <Field className = 'skillsinput'
                        name = "skills"
                        component = "textarea"
                        rows = "5" />
                    </Skillsinput>
                
              </form>
              <ButtonContainer>
          <AddProjectButton>
          <Button className= 'button' onClick={() => this.props.addPlace({name: this.props.values.place, requiredSkills: this.props.values.skills})}>Add Project</Button>
          </AddProjectButton>
          <ButtonX>
          <Button className = 'button' onClick={this.props.closeModal}> x </Button>
          </ButtonX>
          </ButtonContainer>
        </Modal>
      </Container>
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
