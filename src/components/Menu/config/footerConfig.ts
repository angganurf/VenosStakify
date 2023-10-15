import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.venosproject.com/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.venosproject.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/venosproject',
      },
      {
        label: t('Community'),
        href: 'https://docs.venosproject.com/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.venosproject.com/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://venosproject.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.venosproject.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.venosproject.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.venosproject.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/venosproject',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.venosproject.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.venosproject.com/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.venosproject.com/help/faq#is-venosstakify-safe-has-venosstakify-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.venosproject.com/hiring/become-a-chef',
      },
    ],
  },
]
