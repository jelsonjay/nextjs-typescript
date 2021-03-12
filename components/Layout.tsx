import Head  from 'next/head'
import React from 'react'
import Header from '../components/Header/Index'
import Footer from './Footer'

interface LayoutProps {
pageTitle: string
}

const Layout: React.FC <LayoutProps> = ({pageTitle, children}) => {
  return (
    <>
    <Head>
    <title>Next.js/TypeScript - {pageTitle}</title>
    </Head>
    <div>
    <Header />
    <main>{children}</main>
    <Footer />
    </div>
    </>
  )
}

export default Layout