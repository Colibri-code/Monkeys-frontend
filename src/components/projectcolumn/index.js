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
//Con el parametro id identificamos los id de las columnas
  const [show, setShow] = useState(false);

  return (
    <div id={id} 
        className='project-column'
        onDragOver={(e) => { e.preventDefault();}}
        onDrop={(e) => {             
            let id = JSON.parse(e.dataTransfer.getData('id'));                        
            let columnTitle = title;              

            const test = tasks.filter((task) => {
                if(task.id == id.id){
                  console.log('current state: ', task.state)
                  task.state = columnTitle;
                  console.log('new state: ', task.state)
                }
              return task;
            });

            {
              /*Retornamos el nuevo arreglo actualizado
            this.setState({
              ...this.state,
              test
            });
              */
            } 
            console.log('test array: ', test);
                        
          }
        }
    >                         
      <div className='project-column-header'>
        {
          // Creacion de los titulos que poseeran las columnas en su encabezado
        }
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
        {
          // Creacion de cada una de las tareas que vienen en el arreglo
        }
        {tasks.filter(task => task.state == title).map((filteredTask, i) => (         
          <TaskCard task={filteredTask} key={i} color={color} />        
        )) }

        {
        /*
          Usamos la implementacion de un array.filter esto ayuda a saber donde dajar caer los tasks
          al realizar el mapeo o loop que nos ayuda a cargar el objeto de tasks  
        */
        }
      </div>           
    </div>
  );
};

export default ProjectColumn;
