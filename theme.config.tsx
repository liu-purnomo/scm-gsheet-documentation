import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const logo = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      fontWeight: "bold",
      gap: "0.5rem",
    }}
  >
    <div className="flex">Documentation</div>
  </div>
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Tutorial",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://scm-docs.ikat.id/og.jpeg"
        : `https://scm-docs.ikat.id/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="SCM Documentation" />
        <meta name="og:description" content="SCM Documentation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="scm-docs.ikat.id" />
        <meta name="twitter:url" content="https://scm-docs.ikat.id" />
        <meta name="og:title" content={title ? title + " – Documentation" : "Documentation"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="tutorial" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1b2951" />
        <meta name="msapplication-TileColor" content="#1b2951" />
        <meta name="theme-color" content="#ffffff" />
      </>
    );
  },
  // project: {
  //   link: "https://github.com/liu-purnomo",
  // },
  docsRepositoryBase: "https://github.com/liu-purnomo/scm-gsheet-documentation",
  search: {
    placeholder: "Cari tutorial..."
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center">
        <p className="">
          © {new Date().getFullYear()} <a href="#">Arta Daya Taruna</a>
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },

};

export default config;
