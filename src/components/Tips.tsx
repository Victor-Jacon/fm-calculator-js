import styled from 'styled-components'
import React, { useState } from 'react'
import '../index.css'
import { Column, Row, StyledTipOption, StyledTipText, CustomTipOption } from './StyledComponents'

const Tips = () => {
  // handleTip
  const [tipPercentage, setTipPercentage] = useState<any>('10');

  function handleTip(e: any) {
    console.log(e.target.value)
    setTipPercentage(e.target.value);

    // Save to LocalStorage
    let tipLS = e.target.value
    localStorage.setItem('number', tipLS)
  }

  function handleTipLabel(e: any) {
    console.log(e.target.dataset.tip)
    setTipPercentage(e.target.dataset.tip);
    
    // Save to LocalStorage
    let tipLS = e.target.dataset.tip
    localStorage.setItem('number', tipLS)

    // check if states match
    console.log(localStorage.getItem('number'))
  }

  // handleCustomTip
  const [customTip, setCustomTip] = useState<number>()

  const handleCustom = async (e:any) => {
    console.log(e.target.value)
    setCustomTip(e.target.value)

    // Save to LocalStorage
    let tipLS = e.target.value
    localStorage.setItem('number', tipLS)

    // check if states match
    console.log(localStorage.getItem('number'))
  }

  const LSGetter = () => localStorage.getItem('name')
  const LSRemover = () => localStorage.removeItem('number')

  const clearTipPercentage = () => setTipPercentage('')

  return (
    <div className='tip-container' style={{ backgroundColor: 'purple' }}>
      {/* <h1>Select Tip %</h1> */}
      <div className="tip-group" style={{ backgroundColor: 'red' }}>
        <div className='tip-subgroup' style={{ backgroundColor: 'aqua' }}>
            <StyledTipOption value={5} checked={tipPercentage === '5'} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText data-tip={5} onClick={(e) => handleTipLabel(e)}>5%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={10} checked={tipPercentage === '10'} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText data-tip={10} onClick={(e) => handleTipLabel(e)}>10%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={15} checked={tipPercentage === '15'} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText data-tip={15} onClick={(e) => handleTipLabel(e)}>15%</StyledTipText>
        </div>
      </div>

      <div className="tip-group" style={{ backgroundColor: 'yellow' }}>
        <div className='tip-subgroup'>
            <StyledTipOption value={25} checked={tipPercentage === '25'} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText data-tip={25} onClick={(e) => handleTipLabel(e)}>25%</StyledTipText>
        </div>
        <div className='tip-subgroup'>
            <StyledTipOption value={50} checked={tipPercentage === '50'} onChange={(e) => handleTip(e)} type="radio"/>
            <StyledTipText data-tip={50} onClick={(e) => handleTipLabel(e)}>50%</StyledTipText>
        </div>
        <div className='custom-tip'>
            <CustomTipOption value={customTip} onChange={(e) => handleCustom(e)} onClick={() => clearTipPercentage()} placeholder="Custom" type="number" />
        </div>
      </div>

      <button onClick={() => LSGetter()}> GET LOCAL STORAGE </button>
      <button onClick={() => LSRemover()}> REMOVE LOCAL STORAGE </button>
    </div>
  )
}

export default Tips
