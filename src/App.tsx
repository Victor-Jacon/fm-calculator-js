import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import DollarIcon from './components/DollarIcon';
import PersonIcon from './components/PersonIcon';
import { Container } from './components/StyledComponents';
import { colors, formInputSize, fontFamily } from './components/StyledComponents'
import Tips from './components/Tips';

const App = () => {
  // handleBil
  const [bill, setBill] = useState<string>('0');

  // handleTotalBill - 2
  const [billPerPerson, setBillPerPerson] = useState<number>(0);

  // handlePeople
  const [people, setPeople] = useState<number>(1);

  // handleTotalBill - 1
  const [tipAmount, setTipAmount] = useState<number>(0);

  // [Get again from localStorage when user clicks inside the tips component]
  const [tipsClicked, setTipsClicked] = useState<number>(0)

  // [Get from localStorage the tip from tips component]
  const [tipPercentageLS, setTipPercentageLS] = useState('')
  
  useEffect(() => {
    let tipPercentageLS = localStorage.getItem('tipLS')
    setTipPercentageLS(tipPercentageLS ? tipPercentageLS : '10')
  }, [billPerPerson, bill, people, tipAmount, tipsClicked])

  const handleBill = (e: any) => {
    // converts comma to point
    const billParsed = e.target.value.replace(/,/g, '.')

    setBill(billParsed)
    console.log(billParsed)
    // handleTotalBillAndTip(bill, tipPercentageLS, people)
  }

  function handlePeople(e: any) {
    console.log(e.target.value)
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

  const resetData = () => {
    setBill('0')
    setBillPerPerson(0)
    setPeople(1)
    setTipAmount(0)
    setTipsClicked(0)
    setTipPercentageLS('')
    localStorage.removeItem('tipLS')
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
            <BillInput value={bill} onChange={(e) => handleBill(e)} type="text" />
            <DollarIcon />
          </FormContainer>
        </BillValueColumn>
        
        <div onClick={() => setTipsClicked(tipsClicked+1)}>
          <Tips />
        </div>

        <PeopleColumn id='people-column'>
          <Title id='number-of-people'>Number of People</Title>
          <FormContainer id='form-container-2'>
            <BillInput value={people} onChange={(e) => handlePeople(e)} type="text" />
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

        <button 
          onClick={() => console.log(handleTotalBillAndTip(bill, tipPercentageLS, people))}>
            Calcular
        </button>
        
      </Card>
    </Container>
  );
}

const sectionWidth = '310px'
const cardMaxWidth = '377px'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 84vh;
  max-width: ${cardMaxWidth};
  flex-shrink: 1;

  background-color: white;
  border-radius: 24px 24px 0px 0px;

  #bill-value-column {
    padding-top: 31px;
    padding-bottom: 1px;
  }

  #form-container {
    padding-top: 8px;
    padding-bottom: 26px;
  }

  #tip-container {
    padding-bottom: 32px;
  }

  #number-of-people {
    padding-bottom: 4px;
  }

  #people-column {
    padding-bottom: 30px;
  }

    #bill-results {
      padding-left: 25px;
    }

    #results-column {
      padding-right: 23px;
    }

    #results-row {
      padding-right: 3px;
      padding-top: 38px;
    }

    #results-row-2 {
      padding-right: 3px;
      padding-top: 20px;
    }

    #results-row-3 {
      padding-top: 32px;
    }

    #detail {
      line-height: 22px;
    }

`

export const Logo = styled.div`
  display: flex;
  background-color: ${colors.lightGrayishCyan};

  padding-top: 52px;
  padding-bottom: 24px;
`

export const BillInput = styled.input`
  background-color: ${colors.lightGrayishCyan2};
  color: ${colors.veryDarkCyan};
  font-weight: bold;
  text-align: right;
  font-size: ${formInputSize};
  line-height: 48px;
  border-radius: 8px;
  border: 2px solid white;

  width: ${sectionWidth};
  padding-right: 16px;

  &::placeholder {
    color: ${colors.darkGrayishCyan};
    text-align: center;
  }
  &:focus {
    border: 2px solid;
    border-color: ${colors.strongCyan};
  }

  /* RESET */
  outline: none;
  box-sizing: border-box;
  &::-webkit-outer-spin-button {
  -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  color: ${colors.darkGrayishCyan};
`

export const TitleTip = styled(Title)`
  align-self: flex-start;
  padding-left: 34px;
`

export const Subheading = styled.h2`
  font-size: 16px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-shrink: 1;

  position: relative;
`

export const IconInput = styled.p`
  position: absolute;
  height: 0px;
  width: 0px;
  top: 22px;

  font-size: 24px;
`

export const BillResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 1;

  width: 328px;
  height: 258px;

  border-radius: 16px;
  background-color: ${colors.veryDarkCyan};
  color: ${colors.white};

  box-sizing: border-box;
`

export const ResultsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${sectionWidth};

`

export const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${sectionWidth};

`

export const Detail = styled.p`
  color: ${colors.darkGrayishCyan};
  font-weight: bold;
  font-size: 13px;
`

export const Sum = styled.p`
  color: ${colors.strongCyan};
  font-size: 32px;
  font-weight: bold;
  text-align: right;
`

export const BillValueColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
`

export const PeopleColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonResults = styled.button`
  background-color: ${colors.strongCyan};
  color: ${colors.veryDarkCyan};
  border-radius: 4px;
  font-weight: bold;
  font-size: 20px;
  font-family: ${fontFamily};

  width: 281px;
  height: 48px;
`

export default App;
