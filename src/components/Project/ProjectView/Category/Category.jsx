import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjCategory } from './CategoryStyles';
import { UploadPhotoBtn } from './CategoryStyles';

export const Category = () => {

    const [category, setCategory] = useState('');

    const url = 'http://localhost:3001/api/projects/';  
    const currentProjectId = '5cd85cba6947af0f3c967d98';    //pobrać od mateusza dany projekt

    
    useEffect(() => {
        const getCategory = async () => {
            const project = await axios({
                method: 'get',
                url: `${url}`,
                body: {
                    _id: `${currentProjectId}`
                }})
                .then(function (resp) {
                    resp.data.map( item => {
                        if(item._id === currentProjectId){
                        setCategory(item.category)
                        };
                    });
                });
        };
        getCategory();
    });
    

    return (
        <div>
            <p>Category:</p>
            <ProjCategory><p>JavaScript</p></ProjCategory>
            <UploadPhotoBtn>
                <p className="Btntxt">Upload<br></br>photo</p>
            </UploadPhotoBtn>
        </div>
    );
};


// ostatecznie zmienić JavaScript w <p> na {category0}