import React from 'react'
import PageWrapper from './src/components/page-wrapper'

export const wrapPageElement = ({ element, props }) => (
    <PageWrapper {...props}>{element}</PageWrapper>
)