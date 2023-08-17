import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: 0.875rem;
  color: ${(props) => (props.type === 'main' ? '#282A35' : '#949494')};
  line-height: 1.375rem;
`
