import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 100;
  background-color: rgba(50, 50, 50, 0.95);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #ddd;
  text-transform: uppercase;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  max-width: 992px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`

export const Logo = styled.img`
  display: none;
  cursor: pointer;
  transition: opacity 350ms ease;

  @media (min-width: 768px) {
    display: inline-block;
    height: 40px;
  }
`

export const UL = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const LI = styled.li`
  margin-left: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ddd;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    color: #fff;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const BookingButton = styled.button`
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #E31914;
  color: #eee;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background-color: rgb(207, 27, 24);
    color: #fff;
  }
`

export const CalendarIcon = styled.i`
  margin-right: 7px;
`

export const MobileLogo = styled.img`
  height: 35px;
  cursor: pointer;
  transition: opacity 350ms ease;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Hamburger = styled.i`
  font-size: 30px;
  color: #ddd;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileUL = styled.ul`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.95);

  @media screen and (orientation:landscape) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileLI = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
  line-height: 0.8;
  transition: transform 100ms ease;

  &:active {
    transform: ${p => !p.mobileButton && 'scale(1.2) rotate(-10deg)'};
  }
`