import styled from 'styled-components';

export const Teste = styled.div`
  display:flex;

  @media screen and (max-width: 932px) {
    display: flex;
    flex-direction: column;
    margin-left: 2em;
  }
    
`

export const NavContainer = styled.div`
width: 933px;
margin: 0 auto;
display: flex;
margin-top: 3rem;

@media screen and (max-width: 932px) {
  width: 375px;
}

`

export const NavStyle = styled.div`
 display:flex;
      

`
export const BoxImg = styled.div`
 display:flex;
 margin-left: 2em;
 margin-top: 1rem;
 
`

export const NavCar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`

 export const Paragraph = styled.p`
  text-transform: uppercase;
 `

 export const StyleLiCar = styled.li`
  text-transform: uppercase;
  font-size: 2rem;

 `

 export const StyleLiMoto = styled.li`
  text-transform: uppercase;
  font-size: 2rem;
 `

 export const StyleUl = styled.ul`
  list-style:none;
  border-bottom: 3px solid red;
 `
 export const BoxButton = styled.div`
  width: 524px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 932px) {
    margin-top: 9em;
    margin-left: -34em;
  }

 `