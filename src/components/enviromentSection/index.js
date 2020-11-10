import React, {useState} from 'react';
import {FaPlus} from "react-icons/fa";

import './style.scss';
import PopUp from './popUp.js';
//import EnviromentCard from '../enviromentcard';


const cards= [
    {id: 1, title: 'Development URL', code: 'Code', database: 'Database', files: 'Files'},
    {id: 2, title: 'Stage URL', code: 'code', database: 'Database', files: 'files'},
    {id: 3, title: 'Production URL', code: 'code', database: 'Database', files: 'files'}    
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
                    {cards.map(({id, title}, i)=>(
                        <EnviromentCard
                        id={id}
                        title={title}
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
        className='enviroment-card'>
        <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopUp}
        />

        {isOpen && <PopUp
            content={<>
                <b>Design your Popup</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={togglePopUp} >Test button</button>
            </>}
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
                    <li><h4 className='github-data-history '>Code</h4></li>
                </div>
                <div 
                    className=""
                    draggable
                    onDragStart={(e)=>{
                            e.dataTransfer.setData("id", props.id);                    
                        }
                    }
                >
                    <li><h4 className='github-data-history '>Databases</h4></li>
                </div>
                <div 
                    className=""
                    onDragStart={(e)=>{
                            e.dataTransfer.setData("id", props.id);                    
                        }
                    }
                >
                    <li><h4 className='github-data-history '>Files</h4></li>
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