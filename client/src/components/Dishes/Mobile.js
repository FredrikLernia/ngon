import React, { useState } from 'react'
import styled from 'styled-components'
import data from './data.json'

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0 30px 0;
  background-color: #464440;

  @media (min-width: 768px) {
    padding: 20px 0 10px;
  }

  @media (min-width: 992px) {
    padding: 20px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Window = styled.div`
  width: 100%;
  max-width: 992px;
  height: fit-content;
  overflow-x: hidden;
`

const Slide = styled.div.attrs(p => ({
  style: {
    transform: `translateX(calc(${-p.itemIndex * 100}% - ${p.x}px))`
  }
}))`
  display: flex;
  height: 100%;
  transition: ${p => p.transition ? `transform ${p.transitionTime}ms ease` : 'none'};
`

const Page = styled.div`
  padding: 10px;
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`

const ImgWrapper = styled.div`
  flex: 1;
`

const TextWrapper = styled.div`
  flex: 1;

  @media (min-width: 992px) {
    padding-left: 30px;
  }
`

const Img = styled.img`
  margin-bottom: 10px;
  width: 100%;
`

const PageHeading = styled.h2`
  font-size: 35px;
  color: #ff6289;

  @media (min-width: 992px) {
    margin-top: -9px;
  }
`

const Text = styled.p`
  color: #f2f2f2;
`

const Dots = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

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
  transition: ${p => `background-color ${p.transitionTime}ms ease`};

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const minSwipe = 100

const transitionTime = 250

const Mobile = () => {
  const [itemIndex, setItemIndex] = useState(0)
  const [xStart, setXStart] = useState(0)
  const [x, setX] = useState(0)
  const [transition, setTransition] = useState(false)

  const onTouchStart = e => {
    setXStart(e.touches[0].clientX)
  }

  const onTouchMove = e => {
    if ((itemIndex === 0 && xStart - e.touches[0].clientX < 0) || (itemIndex === data.length - 1 && xStart - e.touches[0].clientX > 0)) {
      return
    }

    setX(xStart - e.touches[0].clientX)
  }

  const onTouchEnd = e => {
    if (xStart - e.changedTouches[0].clientX > minSwipe && itemIndex < data.length - 1) {
      setItemIndex(itemIndex + 1)
    }

    if (xStart - e.changedTouches[0].clientX < -minSwipe && itemIndex > 0) {
      setItemIndex(itemIndex - 1)
    }

    setTransition(true)
    setTimeout(() => setTransition(false), transitionTime)
    setX(0)
  }

  return (
    <Wrapper id="dishes">
      <Window>
        <Slide itemIndex={itemIndex} x={x} transition={transition} transitionTime={transitionTime} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {data.map(({ heading, text, img }, i) => (
            <Page key={i}>
              <ImgWrapper>
                <Img src={img} alt={heading} />
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
        {data.map((dish, i) => <Dot key={i} active={i === itemIndex} transitionTime={transitionTime} />)}
      </Dots>
    </Wrapper>
  )
}

export default Mobile