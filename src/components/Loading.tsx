import React from 'react'
import styled from 'styled-components'

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 4em;
    font-family: "Flexo",arial,sans-serif;
  }
`

const Loading: React.FC = () => {

    return (
        <LoadingDiv>
            <h2>Carregando...</h2>
        </LoadingDiv>
    )
}

export default Loading