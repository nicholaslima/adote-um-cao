import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const BannerPets = styled.div`
  background-color: var(--red);
  margin-top: 80px;
  border-radius: 20px;
  width: 488px;
  height: 661px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  padding-top: 120px;
  .container-logo {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin: 0 auto;

    .logo {
      color: var(--white);

      height: 50px;
      width: 50px;
    }
    h1 {
      font-weight: 700;
      font-size: 21px;
    }
  }

  img {
    bottom: 20px;
    width: 384px;
    margin: 0 auto;
  }
`
export const FormContainer = styled.div`
  width: 488px;
  margin-top: 120px;
  h1 {
    text-align: center;
    font-size: 54px;
    font-weight: 700;
    line-height: 90%;
    color: var(--blue);
  }

  form {
    margin-top: 50px;
    .item-input {
      margin-bottom: 30px;
      label {
        font-size: 16px;
        font-weight: 700;
        color: var(--blue);
      }

      input {
        margin-top: 8px;
        border-radius: 10px;
        padding-left: 18px;
        color: var(--blue);
        background-color: var(--gray-100);
        border: 1px solid var(--gray-blue);
        height: 55px;
        width: 100%;
        font-weight: 600;
      }
    }
    button {
      width: 100%;
      background-color: var(--blue);
      border-radius: 20px;

      color: var(--white);
      font-weight: 800;
      text-align: center;
      border: 0;
      padding: 19px;
    }
    .link {
      margin-bottom: 40px;
      margin-top: 40px;
      text-align: center;
      a {
        color: var(--blue);
        font-size: 20px;
        font-weight: 800;
        text-decoration: underline;
      }
    }
  }
`
