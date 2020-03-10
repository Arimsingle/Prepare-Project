// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}