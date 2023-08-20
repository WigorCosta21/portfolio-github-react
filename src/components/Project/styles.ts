import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem;
`
export const ButtonLink = styled.a`
  display: inline-block;
  font-size: 0.875rem;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  text-decoration: none;
  padding: 0.5rem;
  margin-top: 24px;
`
