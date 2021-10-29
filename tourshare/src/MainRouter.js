import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'

export default function MainRouter() {
    return (
       <>
        <Navigation />
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
       </>
    )
}
