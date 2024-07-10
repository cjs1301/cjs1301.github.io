import { RenderBodyArgs } from 'gatsby';
import React from 'react';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: `kr` });
  setHeadComponents([
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansLight'
    />,
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansMedium'
    />,
    <link
      rel='preload'
      href='https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='GmarketSansBold'
    />,
  ]);
  setPreBodyComponents([
    React.createElement('script', {
      key: 'darkmode',
      dangerouslySetInnerHTML: {
        __html: `
          (function () {
            let darkMode;
        
            try {
              const settings = JSON.parse(localStorage.getItem('settings'));
              if (typeof settings.manualDarkMode === 'boolean') {
                darkMode = settings.manualDarkMode;
              } else {
                throw new Error();
              }
            } catch (err) {
              darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        
            if (darkMode) {
              document.body.dataset.theme = 'dark';
            } else {
              document.body.dataset.theme = 'light';
            }
          })();
        `,
      },
    }),
  ]);
};
