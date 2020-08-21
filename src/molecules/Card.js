import React from 'react';
import styled from 'styled-components';
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