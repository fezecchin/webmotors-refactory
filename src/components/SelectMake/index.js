import React from 'react'
import {SelectMakeStyle} from './style'
import {useSelector, useDispatch} from 'react-redux'
import api from '../Api'


export default function SelectMake() {
    const make = useSelector(state => state.makeSelected)
    const dispatch = useDispatch()
    const [list, setList] = React.useState([])

    React.useEffect(() => {
     api.get('api/OnlineChallenge/Make').then(response => {
       setList(response.data)
     })
    },[])

    const handleSelect=(e) => {
      const make = e.target.value
      dispatch({type: 'LIST_MAKE', make})
    }
  
  return(
    <>
      <SelectMakeStyle  onChange={(event) => handleSelect(event, make)}>
          <option selected>Marca: Todas</option>
        {list.map((makes) => <option  key={makes.ID} value={make.ID}>{makes.Name}</option>)}  
          
      </SelectMakeStyle>  
    </>
  )
}
