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
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  .title {
    font-size: 24px;
    line-height: 600;
    line-height: 34px;
    width: 407px;
  }

  form {
    display: flex;
    align-items: center;
    p {
      font-size: 1rem;
      font-weight: 400;
      margin-right: 23px;
    }

    .estados {
      border-radius: 20px;
      border: 1px solid var(--white);
      background-color: var(--red);
      padding: 21px 12px;
      margin-right: 10px;

      display: flex;
      align-items: center;

      select {
        background-color: var(--red);
        border: 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--white);
        appearance: none;
        margin-right: 5px;
      }

      img {
        height: 7px;
      }
    }

    .cidades {
      background-color: var(--red-500);
      height: 72px;
      width: 280px;
      border-radius: 20px;
      border: 0;
      margin-right: 32px;

      display: flex;
      align-items: center;
      justify-content: center;

      select {
        background-color: var(--red-500);
        border: 0;
        font-size: 20px;
        font-weight: 800;
        color: var(--white);
        appearance: none;
        margin-right: 5px;
        width: 75%;
      }

      img {
        height: 7px;
      }
    }

    .buscar {
      background-color: var(--yellow);
      width: 72px;
      height: 72px;
      border-radius: 20px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
