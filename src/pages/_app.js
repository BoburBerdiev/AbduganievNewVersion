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
import { Roboto , Open_Sans } from '@next/font/google'


const roboto = Roboto({
    subsets:['latin' , 'cyrillic'],
    weight:['400','500','700' ,'900' ],
    variable: "--font-roboto"
})
const open_sans = Open_Sans({
    subsets:['latin' , 'cyrillic'],
    variable: "--font-open_sans"

})


export default function App({Component, pageProps}) {

    return (
        <div>
            <main className={`[ ${open_sans.variable} , ${roboto.variable} ]`}>
                <QueryClientProvider client={queryClient}>

                    <Provider store={store}>
                        <Layout>
                            <NextNProgress/>
                            <Script
                                strategy="lazyOnload"
                                src={`https://www.googletagmanager.com/gtag/js?id=G-VQDW7KM0N1`}
                            />

                            <Script  strategy="lazyOnload">
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
                            <Script language="javascript" type="text/javascript">
                            </Script>
                            <Script language="javascript1.1" type="text/javascript">

                            </Script>
                            <Script language="javascript1.2" type="text/javascript">

                            </Script>
                            <Script language="javascript1.3" type="text/javascript">

                            </Script>
                            <Script language="JavaScript" type="text/javascript">

                            </Script>
                        </Layout>

                    </Provider>
                </QueryClientProvider>
            </main>
        </div>
    );
}
