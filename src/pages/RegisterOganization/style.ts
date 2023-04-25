import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const BannerPets = styled.div`
  background-color: var(--red);
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
