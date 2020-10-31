import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './style.scss';
import TaskCard from '../taskcard';


const ColumnHeader = ({ title, color, number}) => {
  const [show, setShow] = useState(false);
  return(        
    <div className='project-column-header'>
      <h5 className='title'>
        {title}
        <span className='badge-counter' style={{ color }}>
          {number}
        </span>
      </h5>
      <div className='accordion-icon-container'>
        <FaCaretDown
          className='accordion-icon'
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
}

const ProjectColumn = ({ title, color, number, id , tasks = [] }) => {
  const [show, setShow] = useState(false);  
  const [list, setList] = React.useState(tasks);
  
  return (
    <div id={id} 
        className='project-column'
        onDragOver={(e) => { e.preventDefault();}}
        onDrop={(e) => {             
            let id = JSON.parse(e.dataTransfer.getData('id'));   
            console.log('dragged id: ', id)                     
            let columnTitle = title;              

            const test = list.filter((task) => {
                if(task.id == id){
                  console.log('current state: ', task.state)
                  task.state = columnTitle;
                  console.log('new state: ', task.state)
                }
              return task;
            });

            setList(test);            
            console.log('test array: ', test);                        
          }
        }
    >                         
      <div className='project-column-header'>        
        <h5 className='title'>
          {title}
          <span className='badge-counter' style={{ color }}>
            {number}
          </span>
        </h5>
        <div className='accordion-icon-container'>
          <FaCaretDown
            className='accordion-icon'
            onClick={() => setShow(!show)}
          />
        </div>
      </div>       
      <div className={`project-tasks-container ${show ? 'show-tasks' : ''}`}>           
        {list.filter(task => task.state == title).map((filteredTask, i) => (    
          <div
            onDragStart = {(e) =>{
                console.log('Filtered task id: ', filteredTask.id);
                e.dataTransfer.setData("id", JSON.stringify(filteredTask.id));
              }
            }
            draggable
            key={i}
          >
            <TaskCard task={filteredTask} key={i} color={color} />        
          </div>          
        )) }                
      </div>           
    </div>
  );
};

export default ProjectColumn;
