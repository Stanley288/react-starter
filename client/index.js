import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Routes from './routes'
import App from './App'
import './styles/index.css'

render(
  Routes,
  document.getElementById('root'),
)
