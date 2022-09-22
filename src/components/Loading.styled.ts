import styled, { keyframes } from 'styled-components'

const pokeballAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50% ;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: ${pokeballAnimation} .8s  linear 0s infinite;

  &:after{
    content: '';
    position: absolute;
    width: 80px;
    height: 32px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }

  &:before{
    content: '';
    position: absolute;
    background-color: #fff;
    width: 15px;
    height: 15px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 20px;
    right: 20px;
    z-index: 1;
  }
`