import Script from 'next/script'
import Head from 'next/head'

const Meta = () => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#971c27" />
            <meta name="apple-mobile-web-app-title" content="امیری" />

            <link rel="manifest" href="/manifest.json" />

            <link rel="apple-touch-icon" sizes="57x57" href="'../images/apple-icon-57.png'" />
            <link rel="apple-touch-icon" sizes="114x114" href="'../images/apple-icon-114.png'" />
            <link rel="apple-touch-icon" sizes="72x72" href="'../images/apple-icon-72.png'" />
            <link rel="apple-touch-icon" sizes="144x144" href="'../images/apple-icon-144.png'" />
            <link rel="apple-touch-icon" sizes="60x60" href="'../images/apple-icon-60.png'" />
            <link rel="apple-touch-icon" sizes="120x120" href="'../images/apple-icon-120.png'" />
            <link rel="apple-touch-icon" sizes="76x76" href="'../images/apple-icon-76.png'" />
            <link rel="apple-touch-icon" sizes="152x152" href="'../images/apple-icon-152.png'" />
            <link rel="apple-touch-icon" sizes="180x180" href="'../images/apple-icon-180.png'" />

            <link rel="alternate" hrefLang="fa-ir" href="https://www.quizzland.net" />

            {/* <script type="text/javascript"
                src="https://platform-api.sharethis.com/js/sharethis.js#property=613188f7eae16400120a4fef&product=sticky-share-buttons"
                async="async"
                strategy='lazyLoad'>
            </script>

            <script>
                {`
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2587894,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `}
            </script> */}

        </Head>
    );
}
 
export default Meta;