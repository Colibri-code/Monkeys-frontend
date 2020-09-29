import React, { useState } from 'react';

import './style.scss';
import ActivityContainer from '../../components/activitycontainer';

const DevEnviroment = () => {
  const [mode, setMode] = useState('Overview');
  const actions = ['Overview', 'DataBases', 'Users & SSH Keys'];
  return (
    <div className='dev-enviroment-page'>
      <div className='project-header'>
        <div className='project-name'>
          <p>
            Organization Name <span>/</span>
            <strong>App Name</strong>
          </p>
        </div>
        <span className='project-type'>Public</span>
        <div className='project-enviroment-buttons'>
          <button className='env-button'>All Enviroment</button>
          <button className='env-button env-active'>Dev Enviroment</button>
        </div>
      </div>
      <div className='project-filter-container'>
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => setMode(action)}
            className={`project-filter-button ${
              action === mode ? 'filter-active' : ''
            } `}
          >
            {action}
          </button>
        ))}
      </div>
      <ActivityContainer title='Free | Drupal' />
      <ActivityContainer title='Git Flow' />
    </div>
  );
};

export default DevEnviroment;
