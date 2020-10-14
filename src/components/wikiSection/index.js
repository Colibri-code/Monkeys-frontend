import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File


const WikiSection = props => {
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor />
    </div>
  );
};

export default WikiSection;

/* 
// Third libs
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import {useFormik} from "formik";
import * as Yup from 'yup';


// Local
import "./style.scss";

// Components
import Avatar from "../avatar";


const WikiSection = () => {
    const wikiForm = useFormik({
        initialValues:{
            title: '',
            content: '',
            message: ''
        },
        validationSchema: Yup.object({
            //title: Yup.string().title("You must fill in this field").min(8, "add a title to your page").required().label("title"),
        }),
        onSubmit: values =>{
            console.log(JSON.stringify(values,null,2))
        }
    });

    return ( 
        
        
        <div className="wikiContainer">
            <form onSubmit={wikiForm.handleSubmit}>
                <div className="">
                    <h1 className="titleHeader">Create new wiki</h1>
                </div>            
                <div className="">
                    <input 
                        className="titlebox input-block"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"       
                        onChange={wikiForm.handleChange}                                 
                        value={wikiForm.values.title}
                    >                        
                    </input>                    
                </div>      

                <div className="editor">
                    <div className="mediaBar">
                        <p>Espacio para herramientas tener en cuenta</p>
                    </div>
                    <div className="">
                        <textarea 
                            className="messageBox input-block" 
                            id="content"
                            name="content"
                            rows="20"             
                            onChange={wikiForm.handleChange}                                   
                            value={wikiForm.values.content}
                        >                        
                        </textarea>
                    </div>
                </div>
                
                <div>
                    <p className="smallTitle">Edit message</p>
                    <input 
                        className="smallMessage input-block" 
                        type="text" 
                        id="message"
                        name="message"
                        placeholder="Write a small message here explaining this change. (Optional)"                        
                        
                        onChange={wikiForm.handleChange}
                        value={wikiForm.values.message}
                    >
                    </input>
                </div>
                <div className="">
                    <button className="btnSave" type="submit">Save Page</button>
                </div>            
            </form>               
        </div>   

        
    );
}

export default WikiSection;

*/