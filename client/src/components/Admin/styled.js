import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  padding: 15px;
  min-height: 100vh;
  background-color: #f2f2f2;
`

export const Box = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 0 11px #aaa;

  @media (min-width: 380px) {
    margin: 0 auto;
    width: 350px;
  }
`

export const Form = styled.form``

export const InputGroup = styled.div`
  margin-bottom: 20px;
`

export const Top = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: ${p => p.spaceBetween ? 'space-between' : 'flex-start'};
`

export const Label = styled.label`
  margin-bottom: ${p => p.login ? '8px' : 0};
  margin-right: 15px;
  display: ${p => p.login ? 'block' : 'inline'};
  font-family: 'Amatic SC';
  font-size: 30px;
  color: #406f3b;
`

export const Input = styled.input`
  flex: 1;
  padding: 0;
  padding-bottom: ${p => p.login ? '6px' : '3px'};
  width: auto;
  width: 100%;
  font-family: ${p => p.login ? 'Quicksand' : 'Amatic SC'};
  font-size: ${p => p.login ? '16px' : '26px'};
  color: ${p => p.login ? '#333' : '#406f3b'};
  border: none;
  border-bottom: ${p => p.error ? '2px solid red' : '2px solid #406f3b'};

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
  }
`

export const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  border: ${p => p.error ? '1px solid red' : '1px solid #ddd'};
  border-radius: 4px;
  resize: none;
  font-family: 'Quicksand';
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  padding: 5px;
  width: 100%;
  background-color: #406f3b;
  color: #f5f5f5;
  border: none;
  border-radius: 4px;
  font-family: 'Amatic SC';
  font-size: 28px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const SwitchButtons = styled.div``

export const SwitchButton = styled.button`
  padding: 6px 10px;
  background-color: ${p => p.active ? '#406f3b' : '#fff'};
  color: ${p => p.active ? '#f5f5f5' : '#888'};
  border: 2px solid #406f3b;
  border-radius: 4px;
  font-family: 'Quicksand';
  cursor: pointer;

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  &:focus {
    outline: none;
  }
`

export const SignOutButton = styled.button`
  padding: 6px 10px;
  background-color: #406f3b;
  color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const SignOutIcon = styled.em``

export const StatusText = styled.div`
  margin-bottom: 20px;
  font-family: 'Quicksand';
  font-size: 16px;
  color: ${p => p.status === 'success' ? 'green' : 'red'};
`

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

const ldsSpinner = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Spinner = styled.div`
  color: official;
  display: inline-block;
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;

  & div {
    transform-origin: 40px 40px;
    animation: ${ldsSpinner} 1.2s linear infinite;
  }

  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`