import '../styles/globals.css'
import Script from "next/script"

const dotenv = require('dotenv');
dotenv.config();

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=904475f8c5410b6b15a800d51ba73556&libraries=services,clusterer&autoload=false"
      strategy="beforeInteractive"
    />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
