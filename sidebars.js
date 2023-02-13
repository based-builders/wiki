/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  //tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  defiSidebar: [
    'Farming',
    {
      type: 'category', label: 'DeFi Primitives', link: { type: 'generated-index', }, items: [
        'DEX',
        'Stablecoins',
        'Lending',
        //{ type: 'doc', id: '', label: '💸 Fees and Staking', },
        'Options',
        'Futures',
        'Other-Derivatives',
        'Liquid-Staking',
        'Wrapped',
        'Floaters',
        'Bridges',
        'Oracles',
        'Insurance',
        'Mixing',
        'Uncollateralized-Loans',
        'Synthetics',
        'RWA',
        'Asset-Management',
        'Money-Streaming',
      ]
    },
    {
      type: 'category', label: 'DeFi Mechanics', link: { type: 'generated-index', }, items: [
        'Incentives',
        'Protocol-Owned-Liquidity',
        'Vote-Escrow',
        'Real-Yield',
        'Bribes',
        'Auctions',
        'Whitelists-Airdrops',
        'Token-gated-Access',
      ]
    },
  ],
  daoSidebar: [
    'DAOscape',
    'Governance',
    'DAO-Frameworks',
    'Treasury-Management',
    'Justice-Legal',
    'Sybil-Attacks-KYC',
    'Community-Tools',
  ],
  metaverseSidebar: [
    {
      type: 'category', label: 'Identity', items: [
        'Identity',
        'Brands-Creator-Economy',
        'Social-Media',
        'Messaging',
        'Collaboration-Virtual-Worlds',
      ]
    },
  ],
  aiSidebar: [
    {
      type: 'category',
      label: '🎨 AI Tools',
      link: { type: 'doc', id: 'AI-Tools' },
      items: [
        'Image-Wrangling',
        'Voice-Wrangling',
        'Text-Wrangling',
        'Video-Wrangling',
        '3D-Wrangling',
      ]
    },
  ],
  opsecSidebar: [
    {
      type: 'category',
      label: '👁️‍🗨️ OpSec',
      link: { type: 'doc', id: 'OpSec' },
      items: [
        'Internet-Security-and-Privacy',
        'Crypto-Holder-Security',
        'DeFi-Degen-Tools',
        'Sock-Puppeting',
      ]
    },
  ],
  piracySidebar: [
    {
      type: 'category',
      label: '🏴‍☠️ Piracy',
      link: { type: 'doc', id: 'Piracy-Open-Content' },
      items: [

      ]
    },
  ],
  osintSidebar: [
    {
      type: 'category',
      label: '🔎 OSINT',
      link: { type: 'doc', id: 'OSINT' },
      items: [

      ]
    },
  ],
  devSidebar: [
    {
      type: 'category',
      label: 'Cryptography',
      items: [
        'Primitives-ZKP-FHE-MPC',
        'Blockchain',
        'Ethereum-L2-Sidechains',
        'Gas-MEV'
      ]
    },
    {
      type: 'category',
      label: 'Solidity',
      items: [
        'Solidity',
        'Security-for-Developers-Audits'
      ]
    },
    {
      type: 'category',
      label: 'Web3 dev',
      items: [
        'Wallets-and-Auth',
        'Storage',
        'Naming',
      ]
    },
    {
      type: 'category',
      label: 'NFT dev',
      items: [
        'NFT-Art-Generator-Provenance',
      ]
    },
  ],
  analyticsSidebar: [
    'Tokenomics',
    'DeFi-Metrics',
    'On-Chain-Data',
    'Data-Wrangling',
    'NFT-Analytics',
    'Economics',
    'Fundamentals-DYOR',
    'Technicals-Charts',
  ],
  jobsSidebar: [
    'Hackathons-Grants-VCs',
    'Jobs',
    'product-management',
  ],
  useSidebar: [
    'CEX',
    'Crypto-friendly-products-and-services'
  ],
  psyopsSidebar: [
    'Community-Building',
    'SMM-Onboarding-Metrics',
    'Marketing',
    'Memetics-Psyops',
  ],
  nftSidebar: [
    {
      type: 'category', label: 'NFTfi', link: { type: 'generated-index', }, items: [
        'NFT-Marketplace',
        'NFT-Lend-and-Rent',
        'NFT-Case-Studies',
        'NFT-Analytics',
      ]
    },
    {
      type: 'category', label: 'GameFi', link: { type: 'generated-index', }, items: [
        'Gaming',
        'Gambling-Prediction-Markets'
      ]
    },
  ],
};

module.exports = sidebars;
