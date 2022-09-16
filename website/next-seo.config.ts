import { NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/branding/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/branding/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/branding/site.webmanifest",
    },
  ],
  defaultTitle: "I D E A - D C 5 B",
  openGraph: {
    description: "You must have a head",
    images: [
      {
        url: "https://idea.dc5b.com/branding/branding.png",
        width: 1280,
        height: 640,
        alt: "",
      },
    ],
    type: "website",
    locale: "en_GB",
    url: "https://idea.dc5b.com/",
    site_name: "IDEA_DC5B",
  },
};

export default seo;
