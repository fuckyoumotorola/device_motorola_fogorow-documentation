import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Motorola G24/G24 Power",

  url: "https://fuckyoumotorola.github.io",
  baseUrl: "/device_motorola_fogorow-documentation/",

  organizationName: "fuckyoumotorola",
  projectName: "device_motorola_fogorow-documentation",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/fuckyoumotorola/fogorow-documentation/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },
  plugins: ["docusaurus-plugin-zooming", "docusaurus-lunr-search", "./plugins/raw-txt"],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    metadata: [
    ],
    announcementBar: {
      id: "bootloader_unlock",
      content:
        "🎉 Found a way to unlock the bootloader for free with mtkclient!",
      isCloseable: true,
    },
    navbar: {
      title: "Motorola G24/G24 Power",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://fuckyoumoto.xyz",
          position: "left",
          label: "Fuckyoumoto project",
        },
        {
          href: "https://github.com/fuckyoumotorola/fogorow-documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Documentation",
              to: "/docs/about",
            },
          ],
        },
        {
          title: "Get in touch",
          items: [
            {
              label: "Forum",
              href: "https://github.com/orgs/moto-fogorow/discussions",
            },
            {
              label: "Telegram",
              href: "https://t.me/motoheliog85",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/orgs/moto-fogorow/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} fuckyoumoto`,
    },
    zooming: {
      selector: ".markdown img",
      delay: 500,
      background: {
        light: "rgba(101,108,133,0.8)",
        dark: "rgba(9,10,17,0.8)",
      },
      options: {
        // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
