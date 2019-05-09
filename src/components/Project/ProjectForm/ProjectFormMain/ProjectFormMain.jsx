import React from 'react';
import { Formik } from 'formik';


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

        return ( 
            <form>
                <h1> Create new project </h1>
                <div>
                    <label>Title</label>
                    <input name="title" type="text" />
                </div>
            </form>               
        );
    }

export default Formik({
            mapPropsToValues: (props) => ({
                title: props.projectform.title
            }),
            
})(ProjectFormMain);