import React from 'react'
import Header from './header'
import { globalHistory } from "@reach/router"

const PageWrapper = ({ children }) => {

    const pageNameCompatibility = () => {
        if (globalHistory && globalHistory.location.pathname) {
                return globalHistory.location.pathname === "/" ? "home" : globalHistory.location.pathname.substring(1)
            } else {
                return "404"
            }
        }
    const isIndex = () => (globalHistory.location.pathname === "/") ? true : false

    return (
        <>
            <Header 
                currentPage={pageNameCompatibility()} 
                index={isIndex()} 
            />
            {children}
        </>
    )
}

export default PageWrapper