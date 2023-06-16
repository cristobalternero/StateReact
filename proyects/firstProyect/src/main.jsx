import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <>
    <TwitterFollowCard userName="Fernanda" name="Fernanda Contreras"/>
    <TwitterFollowCard userName="SargentMaravilla" name="Cristobal Ternero"/>
    <TwitterFollowCard userName="Nicolas" name="Nicolas Belgentino"/>
  </>
)
