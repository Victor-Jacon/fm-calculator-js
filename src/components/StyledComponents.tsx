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

  /* PIXEL PERFECT DESIGN */
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
    padding-right: 24px;
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

    /* Responsive */
    @media (min-width: 1024px) {
      max-width: ${desktopCardMaxWidth};
      height: ${desktopCardHeight};
      border-radius: 24px;
      flex-direction: row;

      #tip-container {
        display: flex;
        flex-direction: row;
      }

      #tip-subgroup {
        display: flex;
        flex-direction: row;
      }
    }
`

export const DesktopColumn = styled.div`
`

export const Logo = styled.div`
  display: flex;
  background-color: ${colors.lightGrayishCyan};

  padding-top: 52px;
  padding-bottom: 24px;
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