import React, { useEffect, useRef } from 'react';

export default function AuthProvider({ userManager: manager, store, children }) {

    let userManager = useRef();

    useEffect(() => {
        userManager.current = manager       
    }, [manager, store]);

    return (
        React.Children.only(children)
    )
}