import Head  from 'next/head'
import React from 'react'
import Header from '../components/Header/Index'
import Footer from './Footer'
import LayoutElement from '../styles/LayoutElement'

interface LayoutProps {
pageTitle: string
description?: string
}

const Layout: React.FC <LayoutProps> = ({pageTitle, children, description = 'Next.js'}) => {
  return (
    <>
    <Head>
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:description" content={description} />
    <title>Next.js/TypeScript - {pageTitle}</title>
    </Head>
    <LayoutElement>
    <Header />
    <main>{children}</main>
    <Footer />
    </LayoutElement>
    </>
  )
}

export default Layout