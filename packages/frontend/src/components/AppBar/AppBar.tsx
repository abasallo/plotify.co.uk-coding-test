import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../images/logo.png'

import constants from '../../modules/constants'

import { Logo, MaterialUIStyledAppBar, Toolbar } from './AppBar.styled.components'

const AppBar = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => navigate(constants.ROUTE_URL_ROOT)

  return (
    <MaterialUIStyledAppBar position="static">
      <Toolbar>
        <Logo src={logo} onClick={() => handleLogoClick()} />
      </Toolbar>
    </MaterialUIStyledAppBar>
  )
}

export default AppBar
