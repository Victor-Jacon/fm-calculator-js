import { parse } from 'querystring';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import DollarIcon from './components/DollarIcon';
import PersonIcon from './components/PersonIcon';
import { Container,TipSubgroup, StyledTipOption, StyledTipText, CustomTipOption, Sum, ResultsRow, ResultsColumn, ButtonResults, Logo, Card, BillValueColumn, Title, FormContainer, BillInput, TitleTip, PeopleColumn, PeopleRow, BillResults, Detail, Subheading, PeopleWarning } from './components/StyledComponents';
import { colors, formInputSize, fontFamily } from './components/StyledComponents'

const App = () => {
  // handleBil + people + tip + customTip
  const [bill, setBill] = useState<string>('0');
  const [people, setPeople] = useState<number>(1);
  const [tipPercentage, setTipPercentage] = useState<any>('');
  const [customTip, setCustomTip] = useState<number | string>()

  // handleTotalBill
  const [billPerPerson, setBillPerPerson] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const handleBill = (e: any) => {
    // converts comma to point
    const billParsed = e.target.value.replace(/,/g, '.')

    setBill(billParsed)
    console.log(billParsed)
    // handleTotalBillAndTip(bill, tipPercentageLS, people)
  }

  function handleTip(e: any) {
    // check if event value is being passed
    // console.log(e.target.value)
    setTipPercentage(e.target.value);

    // If user clicks in other option, the custom tip is reset
    setCustomTip('');
  }

  function handleTipLabel(e: any) {
    // check if dataset tip value is being passed
    // console.log(e.target.dataset.tip)
    setTipPercentage(e.target.dataset.tip);

    // If user clicks in other option, the custom tip is reset
    setCustomTip('');
  }

  const [label, setLabel] = useState<boolean>(false); // [helper] handleTip + label text color

  const handleTipPercentage = (tipValue: string) => {
    if (tipPercentage === tipValue) {
      return true
    }
  }

  const handleCustom = (e:any) => {
    // console.log(e.target.value)
    setCustomTip(e.target.value)
    setTipPercentage(e.target.value)
  }
  
  const clearTipPercentage = () => setTipPercentage('') // [helper] reset tip

  function handlePeople(e: any) {
    // console.log(e.target.value)
    setPeople(e.target.value)
  }

  function handleTotalBillAndTip (bill: string, tipPercentage: string, people:number) {
    // converting data - tip
    const tipPercentageParsed = parseFloat(tipPercentage)
    // console.log('tipPercentage: ', tipPercentage);
    // console.log('tipPercentageParsed: ', tipPercentageParsed)

     // converting data - tip
     let billParsed = parseFloat(bill)
     // console.log(billParsed)


    // tip - ok
    const tipTotal = (billParsed / 100) * tipPercentageParsed
    const tipSplit = tipTotal / people
    setTipAmount(tipSplit)

    // bill
    const billWithTips = billParsed + tipTotal
    const billWithTipsSplit = billWithTips / people
    setBillPerPerson(billWithTipsSplit)

    return {
      billInfo: {
        tipSplit,
        billWithTipsSplit,
      }
    }
  }

  useEffect(() => {
    handleTotalBillAndTip(bill, tipPercentage, people)
  }, [bill, people, tipPercentage, customTip])

  const resetData = () => {
    setBill('0')
    setBillPerPerson(0)
    setPeople(1)
    setTipAmount(0)
    setCustomTip('')
  }

  return (
    <Container bgColor={colors.lightGrayishCyan} fullScreen justContent='start'>
      <Logo id="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="54">
          <path fill="#3D6666" d="M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 001.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 01-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 01-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 00-.396-1.968 4.762 4.762 0 00-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 001.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 001.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 001.596-1.14 4.833 4.833 0 00.96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 00-.96-1.56A4.737 4.737 0 0034.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 00.552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 00-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z"/>
        </svg>
      </Logo>

      <Card id="card">
        <BillValueColumn id="bill-value-column">
          <Title>Bill</Title>
          <FormContainer id="form-container">
            <BillInput value={bill} onChange={(e) => handleBill(e)} placeholder="0" type="text" />
            <DollarIcon />
          </FormContainer>
        </BillValueColumn>
        
        <>
          <TitleTip>Select Tip %</TitleTip>
          <div className='tip-container' id='tip-container'>
            <TipSubgroup className='tip-subgroup'>
                <StyledTipOption value={5} checked={handleTipPercentage('5')} onChange={(e) => handleTip(e)} type="radio"/>
                <StyledTipText active={handleTipPercentage('5')} data-tip={5} onClick={(e) => handleTipLabel(e)} className="first-tip-text">5%</StyledTipText>
            </TipSubgroup>
            <TipSubgroup className='tip-subgroup'>
                <StyledTipOption value={10} checked={handleTipPercentage('10')} onChange={(e) => handleTip(e)} type="radio"/>
                <StyledTipText active={handleTipPercentage('10')} data-tip={10} onClick={(e) => handleTipLabel(e)}>10%</StyledTipText>
            </TipSubgroup>
            <TipSubgroup className='tip-subgroup'>
                <StyledTipOption value={15} checked={handleTipPercentage('15')} onChange={(e) => handleTip(e)} type="radio"/>
                <StyledTipText active={handleTipPercentage('15')} data-tip={15} onClick={(e) => handleTipLabel(e)}>15%</StyledTipText>
            </TipSubgroup>
            <TipSubgroup className='tip-subgroup'>
                <StyledTipOption value={25} checked={handleTipPercentage('25')} onChange={(e) => handleTip(e)} type="radio"/>
                <StyledTipText active={handleTipPercentage('25')} data-tip={25} onClick={(e) => handleTipLabel(e)}>25%</StyledTipText>
            </TipSubgroup>
            <TipSubgroup className='tip-subgroup'>
                <StyledTipOption value={50} checked={handleTipPercentage('50')} onChange={(e) => handleTip(e)} type="radio"/>
                <StyledTipText active={handleTipPercentage('50')} data-tip={50} onClick={(e) => handleTipLabel(e)}>50%</StyledTipText>
            </TipSubgroup>
            <div className='custom-tip'>
                <CustomTipOption value={customTip} onChange={(e) => handleCustom(e)} onClick={() => clearTipPercentage()} placeholder="Custom" type="number" />
            </div>
          </div>
        </>

        <PeopleColumn id='people-column'>
          <PeopleRow>
            <Title id='number-of-people'>Number of People</Title>
            {Number(people) === 0 && (
              <PeopleWarning>Can't be zero</PeopleWarning>
            )}
          </PeopleRow>
          <FormContainer id='form-container-2'>
            <BillInput warning={Number(people) === 0} value={people} onChange={(e) => handlePeople(e)} placeholder="0" type="text" />
            <PersonIcon />
          </FormContainer>
        </PeopleColumn>

        <BillResults id="bill-results">

          <ResultsRow id="results-row">

            <ResultsColumn id="results-column">
              <Subheading>Tip Amount</Subheading>
              <Detail id='detail'>/ person</Detail>
            </ResultsColumn>

            <ResultsColumn id="results-column">
              <Sum>${tipAmount.toFixed(2)}</Sum>
            </ResultsColumn>

          </ResultsRow>

          <ResultsRow id="results-row-2">

            <ResultsColumn id="results-column">
              <Subheading>Total</Subheading>
              <Detail id='detail'>/ person</Detail>
            </ResultsColumn>

            <ResultsColumn id="results-column">
              <Sum>${billPerPerson.toFixed(2)}</Sum>
            </ResultsColumn>

          </ResultsRow>

          <ResultsRow id="results-row-3">

            <ResultsColumn id="results-column">
              <ButtonResults onClick={() => resetData()}>RESET</ButtonResults>
            </ResultsColumn>

          </ResultsRow>

        </BillResults>      
      </Card>
    </Container>
  );
}

export default App;
