import type { AppProps } from 'next/app'
import {GlobalStyles} from "../components/common/GlobalStyles";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <GlobalStyles/>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </>
      )

}

export default MyApp
