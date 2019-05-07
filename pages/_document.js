import Document, { Head, Main, NextScript } from 'next/document';
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';
import getConfig from 'next/config';

import assetsPath from '../util/assetsPath';
import {
  googleAnalyticsCode,
  iconSizes,
  appleIconSizes,
  bookTitle,
  themeColor,
  fonts,
  websiteAuthor
} from '../util/meta';

const {
  publicRuntimeConfig: { domain }
} = getConfig();

const IMAGE = `${domain}${assetsPath}/images/kings-host-book-by-irinel-ramona-florescu.jpg`;

const icons = [
  <link
    key="shortcut-icon"
    rel="shortcut icon"
    type="image/x-icon"
    href={`${assetsPath}/icons/favicon.ico`}
  />,
  ...iconSizes.map(size => (
    <link
      key={`icon-${size}`}
      rel="icon"
      type="image/png"
      href={`${assetsPath}/icons/icon-${size}x${size}.png`}
    />
  )),
  ...appleIconSizes.map(size => (
    <link
      key={`apple-icon-${size}`}
      rel="apple-touch-icon"
      type="image/png"
      href={`${assetsPath}/icons/icon-apple-${size}x${size}.png`}
    />
  ))
];

export default class MainDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en" itemScope itemType="http://schema.org/WebSite">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content={bookTitle} />
          <meta name="application-name" content={bookTitle} />
          <meta name="theme-color" content={themeColor} />
          <link rel="manifest" href="/manifest.json" />
          {icons}
          <link href={fonts} rel="stylesheet" />
          <meta name="author" content={websiteAuthor} />
          <meta itemProp="image" content={IMAGE} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@iriflorescu" />
          <meta property="og:site_name" content={domain} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={IMAGE} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1500" />
          <meta property="og:image:alt" content={bookTitle} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: googleAnalyticsCode }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
