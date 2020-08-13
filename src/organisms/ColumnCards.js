import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"
import {ColumnCss, TopColumnCss, ColumnTitle, Badge} from '../atoms/atoms';
import {Card} from '../molecules/Card'



const ColumnCards = () => {
    return (
        <ColumnCss>
            <TopColumnCss>
                <ColumnTitle>MAINTENANCE</ColumnTitle>
                <Badge>47</Badge>
            </TopColumnCss>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </ColumnCss>
      );
    }
export {ColumnCards}