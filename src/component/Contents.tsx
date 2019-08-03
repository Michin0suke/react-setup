import React from 'react'
import styled from 'styled-components'

const Contents = (props) => (
  <div>
    <D>Congratulations!!</D>
    <D>Setup is complete.</D>
    <D>React-Setup will allow you to setup react project.</D>
    <D>As I think, This is more useful than React-Create-App.</D>
  </div>
)

const D = styled.p`
  color: #333;
  padding: 3px;
`

export default Contents