import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--red);
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding-top: 60px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h1 {
    font-size: 1.4rem;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 90%;
    width: 487px;
    margin-top: auto;
  }
  img {
    height: 305px;
    width: 592px;
  }
`
