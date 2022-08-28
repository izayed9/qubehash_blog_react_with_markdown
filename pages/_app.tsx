import React from 'react';
import Head from 'next/head';
import '../styles/base.scss';
import { globals } from '../globals';
import Footer from '../components/footer';
import { Header } from '../components/header';

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
			{globals.googleAnalyticsId && ( <script async src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}></script> )}
			{globals.googleAnalyticsId && (<script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('globals', '${globals.googleAnalyticsId}');`,}}></script>)}
		  </Head>
      <Header />
      <div className="container">
           <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default App;
