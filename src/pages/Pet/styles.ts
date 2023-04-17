import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background);

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: var(--red);
    width: 96px;
    height: 100%;
    position: fixed;
    padding-top: 32px;
    padding-bottom: 32px;

    button {
      background-color: var(--yellow);
      border-radius: 15px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      svg {
        color: var(--blue);
      }
    }
  }
  .title {
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    font-size: 18px;
    padding-top: 40px;
  }
  main {
    width: 704px;
    margin: 40px auto;
    margin-bottom: 32px;
    border-radius: 20px;
  }
`
