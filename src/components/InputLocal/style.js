import styled from 'styled-components';

export const PinPosition = styled.img`
    background: #FFFFFF;
    position: absolute;
    margin: 5px 0px 0px 5px;
`
export const StyleInput = styled.input`
    width: 290px;
    background: #FFFFFF;
    padding: 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
    border-radius: 4px;
    outline: none;

    @media screen and (max-width: 932px) {
    width: 100%;
    }
`
export const RemovePosition = styled.img`
    background: #FFFFFF;
    position: absolute;
    float: right;
    margin: 9px 0px 0px -23px;

`