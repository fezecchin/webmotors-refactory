import React from 'react'
import {StyleLabel, StyleCheckbox} from './style'

const vehiclesArray = ['Novos', 'Usados']

export default function Checkbox() {

  const [vehiclesTypes, setVehiclesTypes] = React.useState([]);

  function handleChange({target}) {
    const {checked, value} = target;
    if(checked) {
      setVehiclesTypes([...vehiclesTypes, target.value]);
    } else {
      setVehiclesTypes(vehiclesTypes.filter((types) => types !== value));
    }
  }

  return (
    <>
      {vehiclesArray.map((types => <StyleLabel key={types}>
        <StyleCheckbox
          type="checkbox"
          value={types}
          checked={vehiclesTypes.includes(types)}
          onChange={handleChange}     
          />
          {types}
       </StyleLabel>
      ))}
    
    </>
  )
}
