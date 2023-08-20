import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}rem` : '0.875rem'};
  color: ${(props) =>
    props.type === 'main' ? props.theme.mainColor : props.theme.secondaryColor};
  line-height: 1.375rem;
`
