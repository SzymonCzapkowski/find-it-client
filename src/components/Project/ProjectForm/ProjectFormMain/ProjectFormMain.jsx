import React from 'react';
import { withFormik, Field } from 'formik';
import Places from '../Places/Places';
import { Background, ProjectFormMainContainer, PlacesContainer, Section, Headerh1, Headerh3, FormContainer, ProjectName, ProjectNameLabel, ProjectNameInput, Description, DescriptionLabel, Category, CategoryLabel, PlusButton } from './ProjectFormMainStyles';


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
        <Background>
        <ProjectFormMainContainer>
            <Headerh1>
                Create new project
            </Headerh1>

            <Headerh3>
                Create new project and find your best team!
            </Headerh3>

            <FormContainer>
                <ProjectName>
                    <ProjectNameLabel > Project Name </ProjectNameLabel>
                    <ProjectNameInput className = "projectnameinput" 
                    name = "projectname" type = "text"/> 
                </ProjectName>


                <Description>
                    <DescriptionLabel>
                        Description 
                    </DescriptionLabel>

                    <Field className = "description"      
                    name = "messageText"
                    component = "textarea"
                    rows = "6" />
                </Description>
                <Section>
                    <Category>  
                        <CategoryLabel> Category </CategoryLabel>
                        <Field className = "category"
                        name = "category"
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
                    </Category>
                    

                    <PlacesContainer>
                    <Places
                    places={this.listElements} 
                    //closeModal={this.closeModal} addPlace={this.addPlace}
                    />  
                    </PlacesContainer>
                </Section>
            </FormContainer>
        </ProjectFormMainContainer>
        </Background>
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