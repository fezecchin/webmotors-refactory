import React from 'react'
import Car from '../../assets/img/car.svg'
import Moto from '../../assets/img/motorcycle.svg'
import ButtonSell from '../ButtonSell'
import {Teste, NavContainer,NavStyle,BoxImg,NavCar,Paragraph,StyleLiCar,StyleUl,StyleLiMoto,BoxButton} from './style'

export default function Nav() {
  return (
    <NavContainer>
    <NavStyle>
      <Teste>
      <BoxImg>
        <img src={Car}
        width='40px'
        height='40px'
        alt='comprar carros'/>
      </BoxImg>
      <NavCar>
      <div>
        <Paragraph>Comprar</Paragraph>
      </div>    
      <div>
        <StyleUl>
          <StyleLiCar>Carros</StyleLiCar>
        </StyleUl>
      </div>
      </NavCar>
      </Teste>
    </NavStyle>

    <NavStyle>
      <Teste>
      <BoxImg>
        <img src={Moto}
        width='40px'
        height='40px'
        alt='comprar motos'/>
      </BoxImg>
      <NavCar>
      <div>
        <Paragraph>Comprar</Paragraph>
      </div>    
      <div>
        <StyleUl>
          <StyleLiMoto>Moto</StyleLiMoto>
        </StyleUl>
      </div>
      
      </NavCar>
      </Teste>
    </NavStyle>
    <BoxButton>
      <ButtonSell/>
     </BoxButton>
    </NavContainer>
  )
}
