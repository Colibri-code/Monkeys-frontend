import React from 'react';
import styled from 'styled-components';
import {CardTitle, CardSubTitle, CardBase, CardTexts} from '../atoms/atoms';

const Card = () => {
    return (
        <CardBase>
            <CardTexts>
                <CardTitle>Name</CardTitle>
                <CardSubTitle>URL://--</CardSubTitle>
            </CardTexts>
            <CardTexts float="right">
                <CardTitle textAling="right">Package</CardTitle>
                <CardSubTitle textAling="right">PHP 0.0</CardSubTitle>
            </CardTexts>
        </CardBase>
      );
    }
export {Card}