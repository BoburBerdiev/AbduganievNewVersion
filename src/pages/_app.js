import "@/styles/globals.css";
import Layout from "@/layout/layout";
import store from "@/store";
import {Provider} from "react-redux";
import {QueryClientProvider, QueryClient} from 'react-query';
import dynamic from 'next/dynamic';
import '../localization/i18n';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Script from "next/script";
import { Roboto, Open_Sans } from 'next/font/google';

const queryClient = new QueryClient();

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700', '900'],
    variable: "--font-roboto",
    display: 'swap',
});
const open_sans = Open_Sans({
    subsets: ['latin', 'cyrillic'],
    variable: "--font-open_sans",
    display: 'swap',
});

const LazyNextNProgress = dynamic(() => import('nextjs-progressbar'), {
    ssr: false,
});

export default function App({ Component, pageProps }) {
    return (
        <div>
            <main className={`${open_sans.variable} ${roboto.variable}`}>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <Layout>
                            <LazyNextNProgress />
                            {/*<Script*/}
                            {/*    strategy="lazyOnload"*/}
                            {/*    src="https://www.googletagmanager.com/gtag/js?id=G-VQDW7KM0N1"*/}
                            {/*/>*/}
                            {/*<Script strategy="lazyOnload">*/}
                            {/*    {`*/}
                            {/*        window.dataLayer = window.dataLayer || [];*/}
                            {/*        function gtag(){dataLayer.push(arguments);}*/}
                            {/*        gtag('js', new Date());*/}
                            {/*        gtag('config', 'G-VQDW7KM0N1', {*/}
                            {/*            page_path: window.location.pathname,*/}
                            {/*        });*/}
                            {/*    `}*/}
                            {/*</Script>*/}
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </QueryClientProvider>
            </main>
        </div>
    );
}
