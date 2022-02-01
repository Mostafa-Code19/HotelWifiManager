import { useRouter } from "next/router"
import { useEffect } from 'react'

import '../styles/styles.scss'
import '../styles/tailwind_build.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100)
  }, [pathname]);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
