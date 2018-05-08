import App, { Container } from 'next/app';
import Head from 'next/head';
import getConfig from 'next/config';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Forest from '../components/Forest';
import Menu from '../components/Menu';

const { publicRuntimeConfig: { domain } } = getConfig();

if (process.browser) {
  require('lazysizes');
  require('lazysizes/plugins/bgset/ls.bgset');
  // TODO: uncomment to enable Google Analytics
  // require('next/router').default.onRouteChangeComplete = (url) => {
  //   global.ga('send', 'pageview', url);
  // };
}

export default class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router: { asPath } } = this.props;
    const { title, description } = pageProps;
    return (
      <Container>
        <Head>
          <title>{title}</title>
          <meta itemProp="name" content={title} />
          <meta property="og:url" content={`${domain}${asPath === '/' ? '' : `${asPath}/`}`} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
          <meta itemProp="description" content={description} />
        </Head>
        <Header />
        {asPath === '/' ? <Hero /> : <Forest />}
        <Menu />
        <Component {...pageProps} />
        <Footer />
        <style jsx global>{`
          @import theme;

          body, html {
            margin: 0;
          }

          body {
            font: 1em/1.5 font-family-default;
            color: color-txt;
            background: color-bgr;
          }

          h1 {
            text-transform: uppercase;
            font: 300 1.66em/1.5 font-family-accent;
            @media (min-width: 768px) {
              font-size: 2em;
            }
            @media (min-width: 1024px) {
              font-size: 2.5em;
            }
          }

          h2 {
            font-weight: 400;
            color: rgba(color-txt, 75%);
          }

          a {
            color: color-link;
            &:hover {
              color: darken(saturation(color-link, 100%), 30%);
            }
          }

          .text {
            text-align: justify;
            p {
              text-indent: 1.5em;
              &.no-indent {
                text-indent: 0;
              }
              &.no-margin-top {
                margin-top: 0;
              }
              &.no-margin-bottom {
                margin-bottom: 0;
              }
            }
          }


          /* disable the annoying focus border */
          :focus {
            outline: none;
          }
          ::-moz-focus-inner {
            border: 0;
          }

          /* customize scrollbars on webkit/desktop-width */
          @media (min-width: 1024px) {
            ::-webkit-scrollbar {
              width: 16px;
              height: 16px;
              background: lighten(black, 3%);
            }
            ::-webkit-scrollbar-thumb {
              background-color: lighten(black, 15%);
              background-size: cover;
              background-origin: border-box;
              border: solid lighten(black, 3%);
              border-width: 2px;
              border-radius: 4px;
              &:hover {
                background-color: lighten(black, 20%);
              }
            }
          }
        `}</style>
      </Container>
    );
  }
}
