import React from 'react'
import styled from 'styled-components'
import Contents from './component/Contents'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Title>React-Setup</Title>
        <hr/>
        <Contents />
      </div>
    )
  }
}

const Title = styled.h1`
  color: dimgray;
`
