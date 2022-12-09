import { Html, Head, Main, NextScript } from 'next/document';


const image = "https://filezone.my.id/file/k008yn0mngqy4k6fk8sm.jpg";
const description = "My Website";
const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:image" content={image}/>
        <meta property="og:description" content={description}/>
        <meta name="description" content="Hewoo My Name Is Aiman, Nice try. " />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
