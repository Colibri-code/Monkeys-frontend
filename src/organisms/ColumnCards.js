import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"
import {ColumnCss} from '../atoms/Atoms';
import {Card} from '../molecules/Card'



const ColumnCards = () => {
    return (
        <ColumnCss>
            <Card></Card>
        </ColumnCss>
      );
    }
export {ColumnCards}