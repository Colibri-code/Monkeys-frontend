import styled from 'styled-components'; // "styled-components": "^5.1.1"

// The Button from the last section without the interpolations
const ColumnTitle = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.13px;
    color: #b0bac9;
`;

const Badge = styled.span`
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
`;

const CardTitle = styled.span`
    width: 42px;
    height: 18px;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2e384d;
    float: left;
`;
const CardSubTitle = styled.span`
    width: 59px;
    height: 20px;
    font-family: Rubik;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: #8798ad;
`;

const ColumnCss = styled.div`
    padding: 10px;
`;

// const Badge = styled.span`

// `;

// const Badge = styled.span`

// `;
export {ColumnCss, Badge, ColumnTitle, CardTitle, CardSubTitle };
