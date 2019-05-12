import React from 'react';
import { withFormik, Field } from 'formik';
import AddPlaceClass from '../AddPlace/AddPlace';
import { Button } from 'react-bootstrap';
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
                    <ProjectNameInput style = {{
                        "border-radius": "6%",
                        "width": "60%"
                    }}
                    name = "projectname" type = "text"/> 
                </ProjectName>


                <Description>
                    <DescriptionLabel>
                        Description 
                    </DescriptionLabel>

                    <Field style = {
                        {
                            "border-radius": "6%",
                            "width": "60%"                 
                        }
                    }
                    name = "messageText"
                    component = "textarea"
                    rows = "6" />
                </Description>
                <Section>
                    <Category>  
                        <CategoryLabel> Category </CategoryLabel>
                        <Field style = {
                            {
                                "display": "inline-block",
                                "margin-top": "1%",
                                "font-size": "18px"
                            }
                        }
                
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
                    
                    <PlusButton>
                        {this.state.isModalOpen ? 
                                <AddPlaceClass closeModal={this.closeModal} addPlace={this.addPlace}/>
                                : null
                            }
                                <Button style = {{
                                        "background-color": "rgba(55, 88, 206, 0.8)",
                                        "font-size": "30px",
                                        "width": "100%",
                                        "border-radius": "30%",
                                        "border-style": "none"

                                }}
                                
                                
                                
                                onClick={() => this.setState({isModalOpen: true})}>+</Button>
                        
                    </PlusButton>
                    <PlacesContainer>
                    <Places
                    places={this.listElements}/>  
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