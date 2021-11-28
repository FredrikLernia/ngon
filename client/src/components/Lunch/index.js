import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import withPageWrapper from '../../hocs/withPageWrapper'
import { db } from '../../firebase'

const Wrapper = styled.section`
  padding: 30px 0;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`

const Content = styled.div`
  position: relative;
  max-width: 992px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 72px;
  line-height: 0.8;
  color: #ff6289;
  text-align: center;
`

const CitySwitch = styled.div`
  margin: 0 auto 45px;
  display: flex;
  border: 2px solid #406f3b;
  border-radius: 5px;
  width: fit-content;

  @media (min-width: 992px) {
    margin: 0;
    position: absolute;
    right: 20px;
  }
`

const City = styled.div`
  padding: 10px;
  font-weight: bold;
  background-color: ${p => p.selected ? '#406f3b' : '#fff'};
  color: ${p => p.selected ? '#f5f5f5' : '#999'};
  cursor: pointer;

  ${p => !p.selected && `
    &:hover {
      color: #406f3b;
    }
  `}

  &:first-child {
    border-top-left-radius: 2.5px;
    border-bottom-left-radius: 2.5px;
  }

  &:last-child {
    border-top-right-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
  }
`

const InfoText = styled.p`
  margin-bottom: 45px;
  text-align: center;
  font-style: italic;
`

const Dishes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

const Dish = styled.div`
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;

    &:nth-child(odd) {
      padding-right: 5px;
    }

    &:nth-child(even) {
      padding-left: 5px;
    }
  }

  @media (min-width: 992px) {
    flex: 1;

    &:not(:last-child) {
      margin-right: ${p => p.city === 'lund' ? '10px' : '20px'};
    }
  }
`

const Name = styled.h4`
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  color: #406f3b;
  text-align: center;
`

const Desc = styled.p`
  text-align: center;

  & ul {
    & li {
      word-break: break-word;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`

const Images = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display:none;
  }
`

const ImgWrapper = styled.div`
  flex: 1;
  display: '${p => p.displaySmall ? 'block' : 'none'}';

  @media (min-width: 768px) {
    display: ${p => p.displayMedium ? 'block' : 'none'};

    &:first-child {
      margin-right: 10px;
    }
  }

  @media (min-width: 992px) {
    display: block;
    margin-top: 40px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Lunch = () => {
  const [city, setCity] = useState([])
  const [selectedCity, setSelectedCity] = useState('malmo')

  useEffect(() => {
    db.collection(selectedCity).get().then(querySnapshot => {
      setCity(querySnapshot.docs.map(doc => doc.data()))
    }).catch(error => console.error(error))
  }, [selectedCity])

  const sortLund = (a, b) => {
    if (selectedCity === 'malmo') {
      return
    }

    return a.dayIndex - b.dayIndex
  }

  return (
    <Wrapper>
      <Content>
        <Heading>Lunch</Heading>
        <CitySwitch>
          <City selected={selectedCity === 'malmo'} onClick={() => setSelectedCity('malmo')}>Malmö</City>
          <City selected={selectedCity === 'lund'} onClick={() => setSelectedCity('lund')}>Lund</City>
        </CitySwitch>
        <InfoText>
          Dagens lunch 90:- inkl. sallad & måltidsdryck. Vardagar kl 11-14
        </InfoText>
        <Dishes>
          {city.sort(sortLund).map((lunch, i) => {
            if (selectedCity === 'malmo') {
              const { name, desc } = lunch

              return (
                <Dish key={i}>
                  <Name>{i + 1}. {name}</Name>
                  <Desc>{desc}</Desc>
                </Dish>
              )
            }

            const { weekday, lunches = [] } = lunch

            return (
              <Dish key={i} city="lund">
                <Name>{weekday}</Name>
                <Desc>
                  <ul>
                    {
                      lunches.map((lunch, lunchIdx) => (
                        <li key={lunchIdx}>- {lunch}</li>
                      ))
                    }
                  </ul>
                </Desc>
              </Dish>
            )
          })}
        </Dishes>
      </Content>
      <Images>
        <ImgWrapper displaySmall displayMedium>
          <Img src="/imgs/lunch/1.jpg" alt="Ngon lunch image" />
        </ImgWrapper>
        <ImgWrapper displayMedium>
          <Img src="/imgs/lunch/2.jpg" alt="Ngon lunch image" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/imgs/lunch/3.jpg" alt="Ngon lunch image" />
        </ImgWrapper>
      </Images>
    </Wrapper>
  )
}

export default withPageWrapper(Lunch)