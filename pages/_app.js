import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services`}
    />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
