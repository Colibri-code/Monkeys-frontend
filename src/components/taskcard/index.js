import React from 'react';

import './style.scss';

const TaskCard = ({ task: { name, date }, color }) => {
  return (
    <div className='task-card pointer' style={{ borderLeftColor: color }}>
      <div className='task-card-top'>
        <h4>Issue Name</h4>
        <h4>Status</h4>
      </div>
      <div className='task-card-bottom'>
        <h4>{name}</h4>
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default TaskCard;
