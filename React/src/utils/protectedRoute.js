import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ children, component: Component, ...rest }) {
    const user = useSelector(state => state.auth.user)

    return user
        ? (<Route {...rest} component={Component} />)
        : (<Redirect to={'/auth/login-page'} />)
}

export default ProtectedRoute