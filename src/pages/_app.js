import "@/styles/globals.css";
import Layout from "@/layout/layout";
import store from "@/store";
import {Provider} from "react-redux";
import {QueryClientProvider, QueryClient} from 'react-query'
import NextNProgress from 'nextjs-progressbar'

import '../localization/i18n'

import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Script from "next/script";

const queryClient = new QueryClient()
// import { Montserrat  , Open_Sans} from '@next/font/google'


// const montserrat = Montserrat({
//     subsets:['latin' , 'cyrillic'],
//     weight:['400','500','700' , '600' , '800']
// })

// export const open_sans = Open_Sans({
//   subsets: ['latin' , 'cyrillic'],
//   display: 'swap',
// })

export default function App({Component, pageProps}) {

    return (
        <div>
            <main>
                <QueryClientProvider client={queryClient}>

                    <Provider store={store}>
                        <Layout>
                            <NextNProgress/>
                            <Script
                                strategy="lazyOnload"
                                src={`https://www.googletagmanager.com/gtag/js?id=G-VQDW7KM0N1`}
                            />

                            <Script id="ga-script" strategy="lazyOnload">
                                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-VQDW7KM0N1', {
                          page_path: window.location.pathname,
                        });
            `}
                            </Script>
                            <Component {...pageProps} />
                        </Layout>

                    </Provider>
                </QueryClientProvider>
            </main>
        </div>
    );
}
