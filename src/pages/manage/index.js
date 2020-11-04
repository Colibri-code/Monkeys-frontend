import React, { useState, useEffect } from "react";

import "./style.scss";
import BreadCrumb from "../../components/breadcrumb";
import {FaUserAlt} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";

const userCollection = [
  {id: 1, value: 'Oscar Melendez' },
  {id: 2, value: 'Eduardo Alvarez' },
  {id: 3, value: 'Carlos Gutierrez' },
  {id: 4, value: 'Alejandro Melendez' },
  {id: 5, value: 'Cesar Mata' },
  {id: 6, value: 'José Peraza' }
];

// Store actions
import useTaskActions from "../../store/task/actions";
const Project = () => {
  const { loadTasks } = useTaskActions();
  const [mode, setMode] = useState("Issues");
  const actions = [
    "Issues",
    "Planning",
    "Boards",
    "Labels",
    "Service Desk",
    "Reports",
  ];

  const tasks = [
    {id: 1, name: '1', date: 'MM/DD/YY', state: 'To do'},
    {id: 2, name: '2', date: 'MM/DD/YY', state: 'Working' },
    {id: 3, name: '3', date: 'MM/DD/YY', state: 'Done' },
    {id: 4, name: '4', date: 'MM/DD/YY', state: 'Working' },
    {id: 5, name: '5', date: 'MM/DD/YY', state: 'To do' },
    {id: 6, name: '6', date: 'MM/DD/YY', state: 'Done' },
    {id: 7, name: '7', date: 'MM/DD/YY', state: 'Working' },
    {id: 8, name: '8', date: 'MM/DD/YY', state: 'Done' },
    {id: 9, name: '9', date: 'MM/DD/YY', state: 'Working' },    
  ];

  const columns = [
    { title: 'To do', color: '#FF4900', number: 76, id: 1 },
    { title: 'Working', color: '#8798ad', number: 69, id: 2 },
    { title: 'Done', color: '#0070ff', number: 28, id: 3 },
  ];

  return (
    <div className="manage-page monkeys-p-5">
      <div className="project-header">
        <BreadCrumb />
        <div className="monkeys-p-1">
          <span className="project-type">Public</span>
        </div>
        <div className="project-enviroment-buttons">
          <button className="env-button">All Enviroment</button>
          <button className="env-button env-active">Dev Enviroment</button>
        </div>
      </div>
      <div className="project-filter-container">
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => setMode(action)}
            className={`project-filter-button ${
              action === mode ? "filter-active" : ""
            } `}
          >
            {action}
          </button>
        ))}
      </div>
      <div className='project-action-container'>
        <div className='project-mode-name'>
          <h3>Issues</h3>
        </div>
        {/*
          ---------------------------user fields---------------------------------
        */}
        <UserList/>
        {/*
            ---------------------------end user fields--------------------------------
        */}
        <div className='project-action-buttons'>
          <button>Complete Sprint</button>
          <button>Edit Boards</button>
          <button className='ction-button-special'>Share</button>
        </div>
      </div>
      <div className='project-tasks'>
        {columns.map(({ title, number, color, id }, i) => (
          <ProjectColumn
            title={title}
            number={number}
            color={color}
            id={id}            
            key={i}
            tasks={tasks}
          />
        ))}
      </div>
    </div>
  );
};

const UserList = () => {
  return(
      <div className="user-filter">
        <ul>
          {userCollection.map(({id, value}, i)=>(
              <li
                key={i} 
              >
                <UserIcon
                    id={id}
                    value={value}
                />
              </li>
            ))
          }
          {/*
        <li><a><span><FaPlus/></span></a></li>
        */}
        </ul>
      </div>
  );
}

const UserIcon = (props) =>{
  return(
      <div className="icon-container">
        <label className="userIcon">
          <input id={props.id} type="checkbox" value={props.value}/>
          <div className="toggle">
            <FaUserAlt/>
          </div>
        </label>
      </div>
  );
}

export default Project;
