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

  /* RESET */
  &::-webkit-outer-spin-button {
  -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`