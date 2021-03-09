import React from 'react'
import {SelectRangeStyle} from './style'

export default function SelectRange() {
  const [range, setRange] = React.useState('')
  return (
    <>
      <SelectRangeStyle value={range} onChange={({target})=> setRange(target.value)}>
        <option value='' disabled>Raio:</option>
        <option value='100km'>Raio:100km</option>
      </SelectRangeStyle>  
    </>
  )
}
