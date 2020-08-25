import React from 'react'
import styled from 'styled-components'
import withPageWrapper from '../../hocs/withPageWrapper'
// import './style.css'
import data from './data.json'

const Wrapper = styled.section`
  padding: 30px 0;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const Content = styled.div`
  max-width: 992px;
  padding: 0 10px;

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
      margin-right: 20px;
    }
  }
`

const Name = styled.h4`
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  color: #406f3b;
`

const Desc = styled.p``

const Images = styled.div`
  display: flex;
  width: 100%;
`

const ImgWrapper = styled.div`
  flex: 1;
  display: ${p => p.displaySmall ? 'block' : 'none'};

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
  return (
    <Wrapper>
      <Content>
        <Heading>Lunch</Heading>
        <InfoText>
          Dagens lunch 99:- inkl. sallad & måltidsdryck. Vardagar kl 11:30-14:30 
        </InfoText>
        <Dishes>
          {data.map(({ name, desc }, i) => (
            <Dish key={i}>
              <Name>{i + 1}. {name}</Name>
              <Desc>{desc}</Desc>
            </Dish>
          ))}
        </Dishes>
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
      </Content>
    </Wrapper>
  )

  return (
    <section className="lunch">
      <h1>Lunch</h1>
      <p className="info">
        Dagens lunch 99kr. Vardagar kl. 11:30-14:30
        <br />
        inkl. måltidsdrycka & sallad, läsk + 10kr
      </p>
      <div className="container">
        {data.map(({ name, desc }, i) => (
          <div key={i} className="lunch-item">
            <h4>{i + 1}. {name}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <div className="imgs-container">
        <div className="img-wrapper">
          <img src="/imgs/lunch/1.jpg" alt="Ngon lunch image" />
        </div>
        <div className="img-wrapper">
          <img src="/imgs/lunch/2.jpg" alt="Ngon lunch image" />
        </div>
        <div className="img-wrapper">
          <img src="/imgs/lunch/3.jpg" alt="Ngon lunch image" />
        </div>
      </div>
    </section>
  )
}

export default withPageWrapper(Lunch)