// Third libs
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

// Local
import "./style.scss";

const TaskCard = ({ task: { id, name, date, state }, color }) => { 
//Agregar parametro state que servira para saber a que columna pertenece
  const history = useHistory();

  const handleClick = useCallback((e) => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnTaskCard":
        history.push(`/task-detail/${id}`)
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <div
      id= {id}
      className="task-card pointer"      
      style={{ borderLeftColor: color }}
      onClick={handleClick}
      data-el_name="btnTaskCard"
      data-el_value={id}
    >      
      <div className="task-card-top">
        <h4>Issue Name</h4>
        <h4>{state}</h4>
      </div>
      <div className="task-card-bottom">
        <h4>{name}</h4>
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default TaskCard;
