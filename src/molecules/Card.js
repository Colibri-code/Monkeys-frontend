import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"
import {ColumnTitle, Badge, CardTitle, CardSubTitle} from '../atoms/Atoms';

const CardBase = styled.div`
    width: 266.8px;
    height: 88px;
    border-radius: 5px;
    border: solid 1px rgba(46, 91, 255, 0.08);
    background-color: #ffffff;
`;

const Card = () => {
    return (
        <CardBase>
            <ColumnTitle>MAINTENANCE</ColumnTitle>
            <Badge>47</Badge>
            <CardTitle>Name</CardTitle>
            <CardSubTitle>URL://</CardSubTitle>
        </CardBase>
      );
    }
export {Card}