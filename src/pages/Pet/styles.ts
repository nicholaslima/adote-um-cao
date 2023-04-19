import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
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
    background-color: var(--white);
  }
`

export const ContainerDogDetails = styled.div`
  padding: 72px;
`

export const DogImages = styled.div`
  .mainImage {
    width: 100%;
    height: 336px;
    border-radius: 20px 20px 0 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    div {
      display: grid;
      grid-template-columns: repeat(6, 80px);
      grid-gap: 1rem;

      img {
        border-radius: 15px;
        height: 80px;
        width: 80px;
      }
    }
  }
`
export const DescDog = styled.div`
  margin-top: 30px;
  .name {
    font-weight: 800;
    font-size: 54px;
    color: var(--blue);
    margin-bottom: 26px;
  }
  .description {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: var(--blue);
  }
  .list-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 36px;
    .card-detail {
      border: 2px solid var(--gray-light);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      padding: 26px;
      gap: 14px;
      svg {
        color: var(--blue);
        height: 25px;
        width: 25px;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        color: var(--blue);
      }
    }
  }
`
