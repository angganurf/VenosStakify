import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.venosproject.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/venosproject",
      },
      {
        label: "Community",
        href: "https://docs.venosproject.com/contact-us/telegram",
      },
      {
        label: "SHDW",
        href: "https://docs.venosproject.com/tokenomics/cake",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.venosproject.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.venosproject.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.venosproject.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/venosproject",
      },
      {
        label: "Documentation",
        href: "https://docs.venosproject.com",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@venosproject-1/s/VenosStakify/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.venosproject.com/help/faq#is-venosstakify-safe-has-venosstakify-been-audited",
      },
      {
        label: "Sverse Lab",
        href: "https://docs.venosproject.com/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/venosproject",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/venosproject",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/VenosStakifyIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/VenosProject_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/VenosStakifyVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/VenosProject_ita",
      },
      {
        label: "русский",
        href: "https://t.me/VenosProject_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/VenosStakifyturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/VenosStakifyPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/VenosStakifyEs",
      },
      {
        label: "日本語",
        href: "https://t.me/venosprojectjp",
      },
      {
        label: "Français",
        href: "https://t.me/VenosStakifyfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/VenosProject_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/VenosProject_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/VenosStakifyGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/VenosStakifyAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/venosproject",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/VenosProject_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/VenosProject/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/venosproject",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/venosproject",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
