import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"
import {ColumnTitle, Badge} from '../atoms/atoms';
import ActionButtons from './actionButtons';

const Example = () => {
    return (
        <div>
          <ActionButtons></ActionButtons>
          <ColumnTitle>MAINTENANCE</ColumnTitle>
          <Badge>47</Badge>
        </div>
      );
    }
    
export default Example;
