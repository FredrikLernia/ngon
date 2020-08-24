import React, { useState } from 'react'
import styled from 'styled-components'
import data from './data.json'

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0 40px;
  background-color: #57544f;
`

const Window = styled.div`
  width: 100%;
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
`

const Img = styled.img`
  margin-bottom: 10px;
  width: 100%;
`

const Heading = styled.h2`
  font-size: 35px;
  color: #ff6289;
`

const Text = styled.p`
  color: #f2f2f2;
`

const Dots = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => p.active ? '#ff6289' : '#999'};
  transition: ${p => `background-color ${p.transitionTime}ms ease`};

  &:not(:last-child) {
    margin-right: 5px;
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
              <Img src={img} alt={heading} />
              <Heading>{heading}</Heading>
              <Text>{text}</Text>
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