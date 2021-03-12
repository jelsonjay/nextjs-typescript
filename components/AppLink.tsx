import React from 'react'
import Link, {LinkProps} from 'next/link'

interface AppLinkPrors extends LinkProps {
  label: string;
}

 const AppLink: React.FC <AppLinkPrors> = ({href, label}) => {
  return (
  <div>
  <Link href={href}>
  <a>{label}</a>
  </Link>
  </div>
  )
}

export default AppLink
