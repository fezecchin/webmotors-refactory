import React from 'react'
import {StyleInput, PinPosition, RemovePosition} from './style'
import Pin from '../../assets/img/pin_icon.svg'
import Remove from '../../assets/img/remove.svg'


export default function InputLocal() {
  return (
    <>
     <PinPosition src={Pin} width='20' alt="pin"/>
      <StyleInput type="text"/>
     <RemovePosition src={Remove} width='20' alt='remove'/>
           
    </>
  )
}
