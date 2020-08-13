import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"
import {CardTitle, CardSubTitle, CardBase, CardTexts} from '../atoms/atoms';

const Card = () => {
    return (
        <CardBase>
            <CardTexts>
                <CardTitle>Name</CardTitle>
                <CardSubTitle>URL://</CardSubTitle>
            </CardTexts>
        </CardBase>
      );
    }
export {Card}