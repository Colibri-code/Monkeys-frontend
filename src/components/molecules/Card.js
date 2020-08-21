import React from 'react';
import './card.scss'
const Card = () => {
    return (
        <div className="card card-task">
            <div className="card-titles left">
                <span className="card-title">Name</span>
                <span className="card-subtitle">URL://</span>
            </div>
            <div className="card-titles right">
                <span className="card-title text-left">Package</span>
                <span className="card-subtitle text-left">PHP 0.0</span>
            </div>
        </div>
      );
    }
export {Card}