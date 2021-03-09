import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import {StyleSpanSearch} from './style'

export default function Search() {
    return (
        <>
        <StyleSpanSearch>
        <FaAngleRight 
          style={{color: "#cc2929", background: "white", margin: "-2px" }}/>
         Busca Avançada
         </StyleSpanSearch>   
        </>
    )
}
