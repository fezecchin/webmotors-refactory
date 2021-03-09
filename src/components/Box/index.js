import React from 'react'
import ButtonOffer from '../ButtonOffer'
import Checkbox from '../Checkbox'
import ClearFilter from '../ClearFilter'
import InputLocal from '../InputLocal'
import Search from '../Search'
import SelectMake from '../SelectMake'
import SelectModel from '../SelectModel'
import SelectPrice from '../SelectPrice'
import SelectRange from '../SelectRange'
import SelectVersion from '../SelectVersion'
import SelectYear from '../SelectYear'
import {BoxMain, DivCheckbox, DivInputs, DivSelects, DivSelectsYearPrice, DivSelectVersion,  DivSearchClearOffer} from './style'

export default function Box() {
  return (
    <BoxMain>
      <DivCheckbox>
        <Checkbox/>
      </DivCheckbox>

      <DivInputs>
        <InputLocal/>
        <SelectRange/>
      </DivInputs>

      <DivSelects>
        <SelectMake/>
        <SelectModel/>
      </DivSelects> 

      <DivSelectsYearPrice>
        <SelectYear/>
        <SelectPrice/>
      </DivSelectsYearPrice>

      <DivSelectVersion>
        <SelectVersion/>
      </DivSelectVersion>

      < DivSearchClearOffer>
        <Search/>
        <ClearFilter/>
        <ButtonOffer/>
      </ DivSearchClearOffer>

    </BoxMain>
  )
}
