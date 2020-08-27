import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import withPageWrapper from '../../hocs/withPageWrapper'

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url('imgs/heroImg.jpg');
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 250px;

  @media (min-width: 768px) {
    width: 450px;
  }
`

const SubText = styled.p`
  margin-top: 10px;
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 60px;
  }
`

const Start = ({ setLogoOffsetTop }) => {
  const logoRef = useRef()

  useEffect(() => {
    setLogoOffsetTop(logoRef.current.offsetTop + logoRef.current.offsetHeight)
  }, [])

  return (
    <Wrapper>
      <Logo ref={logoRef} src="imgs/ngon-logo.png" alt="Ngon logo" />
      <SubText>A taste of Vietnam</SubText>
    </Wrapper>
  )
}

export default withPageWrapper(Start)