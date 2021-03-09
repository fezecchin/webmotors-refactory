import styled from 'styled-components';

export const BoxMain = styled.div`
 width: 933px;
 height: 312px;
 background: #FFFFFF;
 margin: 0 auto;


 @media screen and (max-width: 932px) {
    width:350px;
    height: 700px;
    margin-top: 2em;
 }
`
export const DivCheckbox = styled.div`
  background: #FFFFFF;
  width: 460px;
  padding: 30px 0px 20px 30px;

  @media screen and (max-width: 932px) {
    width:350px;
    
 }  
`

export const DivInputs = styled.div`
  background: #FFFFFF;
  width: 460px;
  padding: 0px 0px 20px 30px; 
  position: absolute;

  @media screen and (max-width: 932px) {
    width:350px;
    padding: 0.8em;
    
 }
`

export const DivSelects = styled.div`
  background: #FFFFFF;
  float: right;
  padding-right: 30px;

  @media screen and (max-width: 932px) {
    width: 325px;
    position: absolute;
    margin: 117px 0px 0px 12px;
    padding: 0px;
    
 }
`

export const DivSelectsYearPrice = styled.div`
   position: absolute;
   margin: 65px 0px 0px 30px;
   background: #ffffff;

   @media screen and (max-width: 932px) {
    width: 325px;
    position: absolute;
    margin: 220px 0px 0px 12px;
    padding: 0px;
    
 }
`

export const DivSelectVersion = styled.div`
  position: absolute;
  margin: 65px 0px 0px 486px;
  background: #ffffff;

  @media screen and (max-width: 932px) {
    width: 325px;
    position: absolute;
    margin: 323px 0px 0px 12px;
    padding: 0px;
    
 }
`

export const DivSearchClearOffer = styled.div`
    position: absolute;
    width: 865px;
    margin: 155px 0px 0px 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    
    @media screen and (max-width: 932px) {
    width: 325px;
    margin: 387px 0px 0px 12px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      padding: 0;
      margin: 1em;
    }


    
 }

`