import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import withPageWrapper from '../../hocs/withPageWrapper'
import data from './data.json'

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0 0 0;
  background-color: #575258;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 20px 10px 10px 10px;
  }

  @media (min-width: 992px) {
    padding: 0;
  }
`

const Window = styled.div`
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 992px) {
    position: relative;
    width: 1092px;
    padding: 20px;
  } 
`

const Slide = styled.div`
  width: 100%;
  display: flex;
  transform: ${p => `translateX(${p.displayIdx * -100}%)`};
  transition: transform 1200ms ease;

  @media (min-width: 992px) {
    height: 100%;
  }
`

const Page = styled.div`
  padding: 10px;
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 992px) {
    width: 100%;
    padding: 0 50px;
    height: 100%;
    display: flex;
  }
`

const ImgWrapper = styled.div`
  @media (min-width: 992px) {
    width: 50%;
  }
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  
  @media (min-width: 992px) {
    height: 100%;
  }
`

const TextWrapper = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    padding-left: 30px;
  }
`

const PageHeading = styled.h2`
  font-size: 40px;
  color: #ff6289;

  @media (min-width: 992px) {
    font-size: 50px;
    margin-top: -12px;
  }
`

const Text = styled.p`
  color: #f2f2f2;
`

const Dots = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    margin-top: 30px;
    margin-bottom: 0;
  }
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => p.active ? '#ff6289' : '#999'};
  transition: background-color 1500ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`

const Desktop = () => {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    if (stop) {
      return
    }

    const interval = setInterval(() => {
      setDisplayIdx(displayIdx === 3 ? 0 : displayIdx + 1)
    }, 7000)

    return () => clearInterval(interval)
  }, [displayIdx, stop])

  return (
    <Wrapper>
      <Window>
        <Slide displayIdx={displayIdx}>
          {data.map(({ heading, text, img }, i) => (
            <Page key={i}>
              <ImgWrapper>
                <Img src={img} alt={heading}></Img>
              </ImgWrapper>
              <TextWrapper>
                <PageHeading>{heading}</PageHeading>
                <Text>{text}</Text>
              </TextWrapper>
            </Page>
          ))}
        </Slide>
      </Window>
      <Dots>
        {data.map((dish, i) => (
          <Dot key={i} active={i === displayIdx} onClick={() => { setStop(true); setDisplayIdx(i) }} />
        ))}
      </Dots>
    </Wrapper>
  )
}

export default withPageWrapper(Desktop)