import styled from 'styled-components'; // "styled-components": "^5.1.1"

const color = {
    EgyptianBlue: '#1e2a9c',
    MidnightBlue: '#15225a',
    BrandeisBlue: '#0273ff',
    Flame: '#f25829',
    Glitter: '#e0eaf8',
    LightslateGray: '#797ca8'
}
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
    width: 278,9px;
    float: left;
`;

const CardBase = styled.div`
    width: 266.8px;
    height: 88px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 2px solid #eff2fe;
    border-left: 2px solid #1e2a9c;
    background-color: #ffffff;
`;

const CardTexts = styled.div`
    margin-top: 24px;
    margin-left: 22px;
    float: left;
`;

const TopColumnCss = styled.div`

`;

// const Badge = styled.span`

// `;

// const Badge = styled.span`

// `;
export {ColumnCss, Badge, ColumnTitle, CardTitle, CardSubTitle, CardBase, TopColumnCss, CardTexts };
