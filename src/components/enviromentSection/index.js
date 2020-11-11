import React, {useState} from 'react';
import {FaPlus} from "react-icons/fa";

import './style.scss';
import PopUp from './popUp.js';
//import EnviromentCard from '../enviromentcard';


const cards= [
    {id: 1, title: 'Development URL', code: 'Code', database: 'Database', files: 'Files'},
    {id: 2, title: 'Stage URL'},
    {id: 3, title: 'Production URL'}    
];

const EnviromentSection = () =>{
    return(
        <div className="main-container">
            <div className="header-container">
                <div className="actions-header">
                    <a href="#" className="action-button">settings</a>
                    <a href="#" className="action-button">wiki</a>
                    <a id="clone" href="#" className="action-button">clone</a>
                </div>
            </div>            
            <section className="section-container">
                <div className="cards-section"> 
                    {cards.map(({id, title, code, database, files}, i)=>(
                        <EnviromentCard
                        id={id}
                        title={title}
                        code={code}
                        database={database}
                        files={files}
                        key={i}
                    />
                    ))}                                        
                    <CreateEnviromentCard/>
                </div>
            </section>        
        </div>
    );
}


const EnviromentCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp =()=>{
        setIsOpen(!isOpen);
    }

    return(
    <div 
        id={props.id}
        className='enviroment-card'
        onClick={togglePopUp}
    >
            {/*
                <input
                type="button"
                value="Click to Open Popup"
                onClick={togglePopUp}
                />                
            */}
        {isOpen && <PopUp
            handleClose={togglePopUp}    
        />}

        <h3 className='github-title'>{props.title}</h3>    
        <div 
            className="enviroment-card-content"
            onDragOver={(e)=>{e.preventDefault()}}
        >
            <ul>
                <div 
                    className=""
                    draggable
                    onDragStart={(e)=>{
                            e.dataTransfer.setData("id", props.id);                    
                        }
                    }
                >
                    <li><h4 className='github-data-history '>{props.code}</h4></li>
                </div>
                <div 
                    className=""
                    draggable
                    onDragStart={(e)=>{
                            e.dataTransfer.setData("id", props.id);                    
                        }
                    }
                >
                    <li><h4 className='github-data-history '>{props.database}</h4></li>
                </div>
                <div 
                    className=""
                    onDragStart={(e)=>{
                            e.dataTransfer.setData("id", props.id);                    
                        }
                    }
                >
                    <li><h4 className='github-data-history '>{props.files}</h4></li>
                </div>            
            </ul>                    
        </div>    
    </div>
  );
}


const CreateEnviromentCard = () =>{
    return(
        <div 
            id={20}
            className='enviroment-card'>
            <h3 className='github-title'>Create</h3>    
            <div className="enviroment-card-content">                
                <h4 className='github-data-history '>Create Custom </h4>                
                <h4 className='github-data-history '>Enviroment</h4>
                <h4 className='github-data-history '><FaPlus/></h4>
            </div>    
        </div>
    );
}



export default EnviromentSection;