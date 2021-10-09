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

  width: ${({width}) => width ? width : 'initial'};
  height: ${({fullScreen}) => fullScreen ? '100vh' : 'initial'};
  gap: 16px;
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
export const StyledTipText = styled.label`
width: 0px;
height: 0px;

position: relative;
left: -93px;
top: -16px;

color:${colors.lightGrayishCyan2};
font-size: ${formInputSize};
font-weight: bold;
font-family: ${fontFamily};
text-align: center;
`

export const StyledTipOption = styled.input`
  width: 147px;
  height: 47px;

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
  &:checked { background-color: ${colors.strongCyan}; }
  &:focus { outline: none;  }
`

export const CustomTipOption = styled(StyledTipOption)`
  background-color: ${colors.lightGrayishCyan};
  color: ${colors.veryDarkCyan};
  text-align: right;

  /* reset */
  border: 0px;
  padding: 0px;

  &::-webkit-outer-spin-button {
  -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
  &::placeholder {
    color: ${colors.darkGrayishCyan};
    text-align: center;
  }
`