import React from 'react';
import { withFormik, Field } from 'formik';
import AddPlaceClass from '../AddPlace/AddPlace';
import { Button } from 'react-bootstrap';
import Places from '../Places/Places';


class ProjectFormMainClass extends React.Component {

    state = {
        isModalOpen: false,
    }

    closeModal = () => { 
        this.setState({isModalOpen: false})
    }

    addPlace = (place) => {
        this.setState({isModalOpen: false})
        this.listElements.push(place)
    }
    
    listElements = [{place: "tester", skills: "manual testing"}, {place: "programmer", skills: "java script"}];

render() {
    return (
        <form>
        <h1> Create new project </h1> 
        <h3>Create new project and find your best team!</h3>
        <div>
        <label> Project Name </label> 
        <input name = "projectname" type = "text" />
        </div> 
        <div>
           <label> Description </label> 
           <Field
           name = "messageText"
           component = "textarea"
           rows = "3" />
        </div>
        <div>
        <label> Category </label>
            <Field name = "category"
            component = "select"
            placeholder = "Category">
                <option value = "javascript"> Java Script </option> 
                <option value = "python" > Python </option> 
                <option value = "java" > Java </option>
                <option value = "PHP" > PHP </option>
                <option value = "C#"> C# </option>
                <option value = "C++"> C++ </option>
                <option value = "Ruby"> Ruby </option>
            </Field>
        </div>
       <div>
       {this.state.isModalOpen ? 
            <AddPlaceClass closeModal={this.closeModal} addPlace={this.addPlace}/>
            : null
        }
            <Button onClick={() => this.setState({isModalOpen: true})}>+</Button>
       </div>
            <Places places={this.listElements}/>
        </form>   
    );
}
}

const ProjectFormMain = (props) => {
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

})(ProjectFormMainClass);