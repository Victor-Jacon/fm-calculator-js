import styled from 'styled-components'

//  ########## Styled Components
export const colors = {
  strongCyan: 'hsl(172, 67%, 45%)',
  veryDarkCyan: 'hsl(183, 100%, 15%)',
  darkGrayishCyan: 'hsl(186, 14%, 43%)',
  darkGrayishCyan2: 'hsl(184, 14%, 56%)',
  lightGrayishCyan: 'hsl(185, 41%, 84%)',
  lightGrayishCyan2: 'hsl(189, 41%, 97%)',
  white: 'hsl(0, 0%, 100%)'
}

export const formInputSize = '24px'
export const fontFamily = `'Space Mono', monospace`;
export const sectionWidth = '310px'
export const cardMaxWidth = '377px'

export const desktopCardMaxWidth = '920px'
export const desktopCardHeight = '483px'

export const desktopSectionWidth = '341px'

export const desktopBillResultsWidth = '413px'
export const desktopBillResultsHeight = '417px'

// Container
export interface ContainerProps {
  bgColor?: any;
  fullScreen?: boolean;
  alItems?: any;
  justContent?: any;
  flexDir?: any;
  width?: any;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({flexDir}) => flexDir ? flexDir : 'column'};
  align-items: ${({alItems}) => alItems ? alItems : 'center'};
  justify-content: ${({justContent}) => justContent ? justContent : 'center'};
  background-color: ${({bgColor}) => bgColor ? bgColor : 'red' };
  flex-wrap: wrap;
  flex-shrink: 1;

  width: ${({width}) => width ? width : 'initial'};
  height: ${({fullScreen}) => fullScreen ? '100vh' : 'initial'};
  gap: 16px;

  /* General styling */
  font-family: ${fontFamily}
`

export interface RowAndColumnProps {
  Valign?:any;
  Halign?: any;
  Calign?: any;
}

export const Row = styled.div<RowAndColumnProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // width: 100%;
  // align-items: ${({ Calign }) => Calign ? 'center' : 'normal'};
`

export const Column = styled.div<RowAndColumnProps>`
  display: flex;
  flex-direction: column;
  // flex-basis: 100%;
  flex: 1;
`

export const TipCard = styled.div`
`

export const TipContainer = styled.div`
`

// Radio Button
export const StyledTipForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 16px 8px;
  
  background-color: blue;
`

/*  ##################### */

export const TipSubgroup= styled.div`
`

export const StyledTipOption = styled.input`
  width: 146px;
  height: 48px;

  align-self: center;
  flex-shrink: 1;

  border-radius: 5px;
  background-color: ${colors.veryDarkCyan};

  color: ${colors.white};
  font-size: ${formInputSize};
  font-weight: bold;
  text-align: center;
  font-family: ${fontFamily};

  /* RESET */
  margin: 0px;

  /*disables default appearance of radio*/
  -webkit-appearance: none; 
  -moz-appearance: none;
  &:focus { outline: none;  }

  &:checked { 
    background-color: ${colors.strongCyan}; 
  }
  ${TipSubgroup}:hover & {
    background-color: #C5E4E7;
  }
`

interface LabelProps {
  active?: boolean;
}

export const StyledTipText = styled.label<LabelProps>`
  width: 0px;
  height: 0px;

  position: relative;
  left: -96px;
  top: -18px;

  color:${({ active }) => active ? `${colors.veryDarkCyan}` : `${colors.lightGrayishCyan2}`};
  font-size: ${formInputSize};
  font-weight: bold;
  font-family: ${fontFamily};
  text-align: center;
`

export const CustomTipOption = styled(StyledTipOption)`
  background-color: ${colors.lightGrayishCyan2};
  color: ${colors.veryDarkCyan};
  text-align: right;
  padding-right: 16px;
  border: 2px solid white;
  caret-color: ${colors.strongCyan};

  &::placeholder {
    color: ${colors.darkGrayishCyan};
    padding-left: 24px;
  }

  &:focus {
    border: 2px solid;
    border-color: ${colors.strongCyan};
  }

  &:hover {
    background-color: ${colors.lightGrayishCyan2};
  }

  /* RESET */
  &::-webkit-outer-spin-button {
  -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`
export const DesktopColumn = styled.div`
`

export const Logo = styled.div`
  display: flex;
  background-color: ${colors.lightGrayishCyan};

  padding-top: 50px;
  padding-bottom: 24px;

  @media (min-width: 1024px) {
    padding-top: 150px;
    padding-bottom: 71px;
  }
`

interface BillInputProps {
  warning?:boolean;
}

export const BillInput = styled.input<BillInputProps>`
  background-color: ${colors.lightGrayishCyan2};
  color: ${colors.veryDarkCyan};
  font-weight: bold;
  text-align: right;
  font-size: ${formInputSize};
  font-family: ${fontFamily};
  line-height: 48px;
  border-radius: 8px;
  border: ${({ warning }) => warning ? '2px solid red' : '2px solid white' };
  caret-color: ${colors.strongCyan};


  width: ${sectionWidth};
  padding-right: 16px;

  &::placeholder {
    color: ${colors.darkGrayishCyan};
    text-align: right;
  }
  &:focus {
    border: 2px solid;
    border-color: ${({ warning }) => warning ? 'red' : `${colors.strongCyan}` } ;
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
  align-items: flex-start;
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

export const PeopleRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const PeopleWarning = styled.p`
  font-family: ${fontFamily};
  justify-content: flex-end;
  color: red;
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

  /* POSITIONING - PIXEL PERFECT DESIGN */
  #bill-value-column {
    padding-top: 32px;
    padding-left: 25px;
    padding-bottom: 1px;
  }

  #bill-title {
    padding-left: 9px;
  }

  #form-container {
    padding-top: 6px;
    padding-bottom: 29px;
    padding-left: 9px;
  }

  #dollar-icon {
    top: 22px;
    left: 26px;
  }

  #tip-container {
    padding-bottom: 32px;
  }

  .tip-container .tip-subgroup .first-tip-text {
    left: -90px;
    top: -17px
  }

  #number-of-people {
    padding-bottom: 4px;
    padding-right: 24px;
  }

  #people-column {
    padding-bottom: 30px;
    padding-left: 32px;
  }

  #bill-results {
    padding-left: 25px;
  }

  #results-column {
    padding-right: 23px;
  }

  #results-row {
    padding-right: 0px;
    padding-top: 38px;
  }

  #results-row-2 {
    padding-right: 0px;
    padding-top: 22px;
  }

  #results-row-3 {
    padding-top: 32px;
  }

  ${Sum} {
    padding-right: 27px;
  }

  #detail {
    line-height: 22px;
  }

  /* Responsive */
  @media (min-width: 1024px) {
    width: 924px; // for development reasons, delete after.
    max-width: ${desktopCardMaxWidth};
    height: ${desktopCardHeight};
    border-radius: 24px;
    flex-direction: row;
    align-items: flex-start;

    ${DesktopColumn} {
      flex-grow: 1;
    }

    /* reset */
    ${TipContainer} {

      padding: 0px;
      gap: 0px;
    }

    ${TipContainer} {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      row-gap: 16px; // reset
      column-gap: 14px;
    }

    ${BillValueColumn} {
      align-items: flex-start;
    }

    ${BillInput} {
      width: 380px;
    }

    ${StyledTipOption} {
      width: 117px;
      height: 48px;
    }

    ${StyledTipText} {
      left: -81px;
      top: -17px;
    }

    ${CustomTipOption} {
      padding-right: 8px;

      &::placeholder {
        text-align: center;
        padding: 0px;
        padding-left: 8px;
      }
    }

    ${ResultsRow} {
      width: 100%;
    }

    ${ResultsColumn} {
      width: 100%;
    }

    ${BillResults} {
      width: ${desktopBillResultsWidth};
      height: ${desktopBillResultsHeight};
      /* reset */
      padding: 0px;
    }

    ${Sum} {
      font-size: 47px;
    }

    /* PIXEL PERFECT DESKTOP */

    // RESET
    #desktop-column, #desktop-column-2, #bill-value-column, #people-column, #bill-results, #results-column, #results-row, #results-row-2, #results-row-3 {
      padding: 0px;
    }

    #desktop-column {
      padding-left: 1px;
    }

    #desktop-column-2 {
      display: flex;
      padding-top: 32px;
      padding-right: 32px;
    }

    #bill-value-column {
      padding-top: 47px;
      padding-left: 38px;
      padding-bottom: 8px;
    }

    #title-tip {
      padding-left: 46px;
      padding-bottom: 16px;
    }

    #tip-container {
      padding-left: 46px;
      padding-bottom: 41px;
    }

    .tip-container .tip-subgroup .first-tip-text {
      left: -74px;
      top: -17px
    }

    #people-column {
      padding-left: 47px;
    }

    #person-icon {
      top: 16px;
      left: 16px;
    }

    #results-row {
      padding-top: 43px;
      padding-left: 39px;
    }

    #results-row-2 {
      padding-left: 39px;
      padding-top: 27px;
    }

    #results-row-3 {
      padding-top: 120px;
      padding-left: 40px;

      button {
        width: 332px;
      }
    }

    #sum {
      padding-right: 41px;
      padding-bottom: 1px;
    }

  }
`