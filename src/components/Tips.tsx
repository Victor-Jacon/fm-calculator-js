import styled from 'styled-components'
import React, { useState } from 'react'
import '../index.css'
import { Column, Row, StyledTipOption, StyledTipText, CustomTipOption } from './StyledComponents'
import { Title, TitleTip } from '../App'

const Tips = () => {
  // handleTip
  const [tipPercentage, setTipPercentage] = useState<any>('');

  function handleTip(e: any) {
    // check if event value is being passed
    // console.log(e.target.value)
    setTipPercentage(e.target.value);

    // Save to LocalStorage
    let tipLS = e.target.value
    localStorage.setItem('tipLS', tipLS)

    // check if localStorage and useState match values
    // console.log(tipPercentage)
  }

  function handleTipLabel(e: any) {
    // check if dataset tip value is being passed
    // console.log(e.target.dataset.tip)
    setTipPercentage(e.target.dataset.tip);
    
    // Save to LocalStorage
    let tipLS = e.target.dataset.tip
    localStorage.setItem('tipLS', tipLS)

    // check if localStorage and useState match values
    // console.log(tipPercentage)
  }

  // handleCustomTip
  const [customTip, setCustomTip] = useState<number>()

  const handleCustom = async (e:any) => {
    // console.log(e.target.value)
    setCustomTip(e.target.value)

    // Save to LocalStorage
    let tipLS = e.target.value
    localStorage.setItem('tipLS', tipLS)

    // check if states match
    // console.log(localStorage.getItem('tipLS'))
  }

  const clearTipPercentage = () => setTipPercentage('')

  // handleTip + label text color
  const [label, setLabel] = useState<boolean>(false);

  const handleTipPercentage = (tipValue: string) => {
    if (tipPercentage === tipValue) {
      return true
    }
  }

  return (
    <>
      <TitleTip>Select Tip %</TitleTip>
      <div className='tip-container' id='tip-container'>
        <div className='tip-subgroup'>
            <StyledTipOption value={5} checked={handleTipPercentage('5')} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText active={handleTipPercentage('5')} data-tip={5} onClick={(e) => handleTipLabel(e)} className="first-tip-text">5%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={10} checked={handleTipPercentage('10')} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText active={handleTipPercentage('10')} data-tip={10} onClick={(e) => handleTipLabel(e)}>10%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={15} checked={handleTipPercentage('15')} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText active={handleTipPercentage('15')} data-tip={15} onClick={(e) => handleTipLabel(e)}>15%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={25} checked={handleTipPercentage('25')} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText active={handleTipPercentage('25')} data-tip={25} onClick={(e) => handleTipLabel(e)}>25%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={50} checked={handleTipPercentage('50')} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText active={handleTipPercentage('50')} data-tip={50} onClick={(e) => handleTipLabel(e)}>50%</StyledTipText>
        </div>
        <div className='custom-tip'>
            <CustomTipOption value={customTip} onChange={(e) => handleCustom(e)} onClick={() => clearTipPercentage()} placeholder="Custom" type="number" />
        </div>
      </div>
    </>
  )
}

export default Tips
