import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { customMUITheme } from './customMUITheme'

import Home from './views/home/Home'
import Main from './views/main/Main'
import RandomFact from './views/randomFact/RandomFact'

import constants from './modules/constants'

const App = () => (
  <MuiThemeProvider theme={customMUITheme}>
    <StylesProvider injectFirst>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path={constants.ROUTE_URL_ROOT} element={<Home />} />
          <Route path={`${constants.ROUTE_URL_COMPANY}/${constants.ROUTE_URL_COMPANY_PARAMS}`} element={<Main />} />
          <Route path={constants.ROUTE_URL_RANDOM_FACT} element={<RandomFact />} />
        </Routes>
      </Router>
    </StylesProvider>
  </MuiThemeProvider>
)

export default App
