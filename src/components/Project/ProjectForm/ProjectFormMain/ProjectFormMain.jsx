import React from 'react';
import { withFormik, Field } from 'formik';
import Places from '../Places/Places';
import { Background, ProjectFormMainContainer, PlacesContainer, Section, Headerh1, Headerh3, FormContainer, ProjectName, ProjectNameLabel, Description, DescriptionLabel, Category, CategoryLabel, AddProjectButton } from './ProjectFormMainStyles';
import { Button } from 'react-bootstrap';
const axios = require('axios');



class ProjectFormMainClass extends React.Component {

    addProject = () => {
        axios({
        url: 'https://sleepy-sands-37154.herokuapp.com/api/projects/',
        method: 'post',
        data: {
            name: this.props.values.projectname,
            description: this.props.values.messageText,
            category: this.props.values.category,
            "places": this.listElements
        }
        })
    }

    listElements = [];

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
                    <Field className = "projectnameinput" 
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
                            <option value = ""> Select category </option> 
                            <option value = "JavaScript"> Java Script </option> 
                            <option value = "Java" > Java </option>
                            <option value = "HTML"> HTML </option>
                            <option value = "CSS"> CSS </option>
                            <option value = "REACT"> REACT </option>
                        </Field>
                    </Category>
                    

                    <PlacesContainer>
                    <Places
                    places={this.listElements} 
                    />  
                    </PlacesContainer>
                </Section>
                <AddProjectButton>
                <Button className = "addprojectbutton" onClick={this.addProject}> Add Project </Button>
                </AddProjectButton>
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