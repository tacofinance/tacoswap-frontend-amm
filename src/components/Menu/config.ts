import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://taco.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.taco.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.taco.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://taco.finance/farms',
  },
  {
    label: 'Trucks',
    icon: 'PoolIcon',
    href: 'https://taco.finance/trucks',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9066e87Bac891409D690cfEfA41379b34af06391',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/taco-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/taco-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x3BB3B98c0FABE30166E6B7D62aEef393249871E4', // taco-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Hacken Audit',
        href: 'https://taco.finance/files/TacoSwap_SC_Audit_Report.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/tacofinance/',
      },
      {
        label: 'Docs',
        href: 'https://taco-finance.gitbook.io/taco-finance/',
      },
      {
        label: 'Blog',
        href: 'https://taco-finance.medium.com/',
      },
    ],
  },
  {
    label: 'Hacken Audit',
    icon: 'AuditIcon',
    href: 'https://taco.finance/files/TacoSwap_SC_Audit_Report.pdf',
  },
]

export default config
