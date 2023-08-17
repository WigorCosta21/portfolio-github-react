import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}rem` : '0.875rem'};
  font-weight: bold;
  margin-bottom: 16px;
`
