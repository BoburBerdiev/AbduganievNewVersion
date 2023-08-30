import "@/styles/globals.css";
import Layout from "@/layout/layout";
// import { HydrationProvider, Server, Client } from "react-hydration-provider";
import store from "@/store";
import { Provider } from "react-redux";
import {QueryClientProvider , QueryClient} from 'react-query'

import '../localization/i18n'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Montserrat } from '@next/font/google'

const queryClient = new QueryClient()

const montserrat = Montserrat({
    subsets:['latin'],
    weight:['400','500','700' , '600' , '800']
})
export default function App({ Component, pageProps }) {

  return (
      <div>
        <main className={montserrat.className} >
        <QueryClientProvider client={queryClient}>

          <Provider store={store} >
            <Layout>
              <Component {...pageProps} />
            </Layout>

          </Provider>
        </QueryClientProvider>
        </main>
      </div>
  );
}
