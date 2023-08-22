import "@/styles/globals.css";
import Layout from "@/layout/layout";
// import { HydrationProvider, Server, Client } from "react-hydration-provider";


// import '../localization/i18n'
// import {useEffect, useTransition} from "react";
// import * as i18n from "i18next";
// import {useTranslation} from "react-i18next";
// import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
    subsets:['latin'],
    weight:['400','500','700' , '600' , '800']
})
export default function App({ Component, pageProps }) {
  
  return (
      <div>
        <main className={montserrat.className} >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </div>
  );
}
