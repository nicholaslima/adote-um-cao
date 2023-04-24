import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
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
    margin-bottom: 0px;
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
      display: flex;
      grid-gap: 1rem;
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
      border: 1px solid var(--gray-light);
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
export const Map = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: var(--blue);
  border-radius: 20px;

  .map {
      width: 100%;
      height: 291px;
      background-color: var(--white);
      border: 1px solid var(--gray-light);
      border-radius: 20px;
      position: relative;
    }
  }
  .footer-map {
    color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }
`
export const Location = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 34px;
  padding-bottom: 50px;
  padding-top: 50px;
  border-bottom: 1px solid var(--gray-blue);
  border-top: 1px solid var(--gray-blue);
  .orange-square {
    background-color: var(--orange);
    padding: 18px;
    border-radius: 15px;
    height: 64px;
    width: 64px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 17px;
    .address {
      display: flex;
      flex-direction: column;
      gap: 7px;
      h1 {
        font-weight: 700;
        font-size: 30px;
        color: var(--blue);
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: var(--blue);
      }
    }

    .contact {
      background-color: var(--gray-light-3);
      width: 217px;
      height: 54px;
      border-radius: 17px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      svg {
        height: 24px;
        width: 24px;
        color: var(--blue);
      }
      p {
        font-weight: 700;
        font-size: 18px;
        color: var(--blue);
      }
    }
  }
`
export const Requirements = styled.div`
  margin-top: 55px;
  h1 {
    font-weight: 700;
    font-size: 30px;
    color: var(--blue);
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid var(--gray-light);
    padding-bottom: 50px;
    .item-requirements {
      border: 1px solid var(--red);
      background: linear-gradient(
        129.72deg,
        rgba(247, 95, 96, 0.1) 16.45%,
        rgba(241, 81, 86, 0) 67.3%
      );

      display: flex;
      flex-direction: row;
      border-radius: 10px;
      padding: 15px 40px;
      gap: 14px;
      align-items: center;
      svg {
        color: var(--red);
        width: 20px;
        height: 20px;
      }
      p {
        color: var(--red);
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`
export const ButtonContact = styled.button`
  background-color: var(--green);
  border-radius: 20px;
  width: 100%;
  padding: 20px 0 20px 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  svg {
    color: var(--white);
    width: 20px;
    height: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 800;
    color: var(--white);
  }
`
