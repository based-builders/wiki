# 🎓 Get started with crypto

# DeFi
- [Guide To Decentralized Finance](https://finematics.com/guide-to-decentralized-finance/) by Finematics
- [DeFi 101](https://www.youtube.com/playlist?list=PLaDcID4s1KronHMKojfjwiHL0DdQEPDcq) by The Defiant
- [Definitive Guide to DeFi](https://newsletter.thedefiant.io/p/the-defiants-definitive-guide-to) by The Defiant
- [Learn Defi](https://learn.zapper.fi/) by Zapper
- [DeFi MOOC](https://www.youtube.com/channel/UCB67PxhB5LAWEbI4etQS7aw/playlists) by Dawn Song
- [Guides](https://wiki.rugdoc.io/docs-category/guides/) by rugdoc
- "How to DeFi (Beginner/Advanced)" book ⭐️ by CoinGecko
- [The DeFi Series — An overview of the ecosystem and major protocols](https://medium.com/alethio/the-defi-series-an-overview-of-the-ecosystem-and-major-protocols-da27d7b11191)
- [Decentralized Lending: An Overview](https://medium.com/dydxderivatives/decentralized-lending-an-overview-1e00fdc2d3ee)
- "How to NFT" book by CoinGecko
- [150% APR? How Are DeFi Yields So High?](https://every.to/almanack/defi-yields) by DeFriday
- [Berkley course on DeFi](https://berkeley-defi.github.io/f21) ⭐️
- https://defieducation.substack.com/
- [Sov's education sources list](https://sovs.notion.site/Education-00cadae763ea4d30ae8149041718fd7a)

# Good sources
- [Binance Academy](https://academy.binance.com/)
	- [What Is Ethereum?](https://academy.binance.com/en/articles/what-is-ethereum)
	- [What Are Smart Contracts?](https://academy.binance.com/en/articles/what-are-smart-contracts)
	- [How to Use MetaMask](https://academy.binance.com/en/articles/how-to-use-metamask)
	- [What Is Uniswap and How Does It Work?](https://academy.binance.com/en/articles/what-is-uniswap-and-how-does-it-work)
	- [What Is an Automated Market Maker (AMM)?](https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm)
	- [What Are Liquidity Pools in DeFi and How Do They Work?](https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi)
	- [What Are Stablecoins?](https://academy.binance.com/en/articles/what-are-stablecoins)
- [Finematics](https://finematics.com/)
- https://github.com/baraldor/defi

# TL;DR
Best way to start understanging DeFi is by using it, learning new things on the way.
You will make mistakes and lose money in the process, so just start with a small sum.

Probably the most confusing new concept is liquidity pools. Make sure you understand it, as most DeFi relies on Uniswap and its forks.

Go to [📊 Fundamentals, DYOR](Fundamentals-DYOR) and click through the popular tools.

### To-Do list to get familiar with DeFi:

#### 1. Get some crypto on your Metamask wallet.
- I recommend trying ==Polygon (MATIC)== blockchain first, because gas is very cheap and there's a lot of good protocols to try.
- You can buy some MATIC on a ==cex== (centralized exchange) like Binance then withdraw to your wallet, or buy it from a friend, or some other on-ramp.
- Make sure you understand how important your ==seed phrase== is. Don't share it with anyone, ever, but also make sure you don't lose it yourself.
- Go to [polygonscan.com/address/{your_address}](https://polygonscan.com/address/YOUR_ADDRESS) and check out your balance. Click and look at the transaction that sent money in.
- You can easily connect Metamask to Polygon network using [Chainlist](https://chainlist.org/). Just connect Metamask, find Polygon in the list, and click connect.

#### 2. Use a dex.
- Try buying and selling some tokens on a ==dex== (decentralized exchange):
	- There are a lot of dexes on Polygon: [Quickswap](https://quickswap.exchange/), [Sushiswap](https://sushi.com/), [Uniswap](https://uniswap.org/), etc.
	- There are also dex aggregators like [1inch](https://1inch.io/) or 0x. They seek the best prices on all available dexes to give you the best swap deals.
	- When spending your MATIC, make sure you don't spend all of it, because you always need some to pay for gas. Every transaction costs some gas.
	- You can buy BTC, ETH, USDC, or any other token.
	- Go to polygonscan and study the swap transactions. You can see ERC-20 tokens being transferred in the corresponding tab.

#### 3. Try lending tokens for a yield.
Try lending your tokens for a yield:
- Try lending tokens on [Aave](https://aave.com/).
- Try lending tokens on [Market](https://polygon.market.xyz/)
	- On some platforms, to deposit MATIC, you need to wrap it into WMATIC first. You can use any dex to do this.
- Go to polygonscan and study the transactions to see where the tokens went. You've been given ==receipt tokens== that can be used later to get your deposit back.


Go to [https://debank.com/profile/{your_address}](https://debank.com/profile/YOUR_ADDRESS) and check out your token balances and deposited assets.

#### 4. Try LP farming for a yield.
Try LP farming for a yield:
- Buy some ETH and USDC of equal amounts.
- Go to [quickswap.exchange/#/pool](https://quickswap.exchange/#/pool).
- Add liquidity for the ETH-USDC pair.
- Check the transaction on polygonscan to see where the tokens went. You've been given ==LP tokens==, which represent your share of the liquidity pool.
- Go to Farms tab on Quickswap and find the [ETH-USDC farm](https://quickswap.exchange/#/quick/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xbB703E95348424FF9e94fbE4FB524f6d280331B8)
- Deposit your LP tokens into it.
- Now you'll slowly be getting dQUICK rewards. You can collect and sell those to get more LP tokens and compound.

Check your [https://debank.com/profile/{your_address}](https://debank.com/profile/YOUR_ADDRESS).

#### 5. Use an autocompounder.
You may notice that regularly claiming and compounding dQUICK wastes a lot of your time as well as money to pay for transactions. There are autocompounders like [Beefy.finance](https://app.beefy.finance/#/polygon) that can do it for you for a small fee.

- Take out your LP tokens from the ETH-USDC farm.
- Find the ETH-USDC quickswap farm on Beefy.finance and deposit your LP tokens there. Now your position will autocompound.
- These types of farms where you don't have to collect any reward tokens are called Vaults.
- Scroll through Beefy to see some more farming opportunities. Notice it also has vaults for single staking options like Aave. 
- Beefy doesn't cover all available farms on Polygon. There are a lot of other opportunities.

Check your [https://debank.com/profile/{your_address}](https://debank.com/profile/YOUR_ADDRESS).

#### 6. Explore other dapps.
[DefiLlama](https://defillama.com/chain/Polygon) is a great service to check ==TVL== (Total Value Locked) of dapps on different chains. Scroll through the list, Polygon has a lot to offer.

Also check out dapps on other chains. The hottest EVM chains right now with tons of dapps are BSC, Fantom, and Avalanche. Also check out dapps on Ethereum mainnet, even if you can't afford to use it. Most innovation happens on Ethereum first.

I recommend checking out all dapps with the biggest TVLs.

Remember to read their docs to understand how they work and what risks they have.

Ask questions in chats and forums associated with those dapps if you feel confused about anything.

#### 7. Try bridging ot another chain.
There are decentralized bridges that let you move funds from chain to chain, even to non-EVM chains.

One of the most popular bridges to move funds across EVM-chains is [Multichain](https://multichain.org/) (formerly known as Anyswap).

- In most cases, bridging tokens requires there to be liquidity on the receiving end. That's why I suggest first converting your money into a popular token like ETH that always has bridge liquidity on all chains.
- Another good choice is stablecoins like USDC, DAI, MIM.
- Try bridging some ETH to Avalanche, BSC, or Fantom.
	- Remember, you can easily connect new networks to Metamask using [Chainlist](https://chainlist.org/)

Multichain bridge doesn't cover all existing chains and tokens. To find the best path for moving from chain to chain, you can use [Fund Movr](https://app.fund.movr.network/).

After you bridge your ETH, you can find yourself unable to sell it on the receiving chain. Because you don't have any native toten for gas (AVAX, BNB, or FTM).
- You can ask a friend to give you a bit of gas so you can sell into native token.
- Or, if you don't have friends and don't want to use a cex, you can use [elk.finance](https://elk.finance/) bridge. It works by bridging its own Elk token across chains. One useful feature it has is "Swap 1 $ELK for gas" feature. If you use it, you'll have some gas on another chain for paying for transactions.

#### 8. Learn about risks of using DeFi
Remember:
- Cryptocurrencies can be very ==volatile== and you can lose money. If you worry about this, consider farming with stablecoins like USDC or DAI, which are not volatile.
- Some farming opportunities with huge APR can still lose your money, because your deposited tokens can dump in price very fast.
	- If you are LP farming, losing money is accelerated with ==IL (Impermanent Loss)==
- Some smart protocols contain bugs and can get ==hacked==, and its users can lose money.
	- See [rekt.news](https://rekt.news/) for the latest news on the biggest hacks.
- A lot of projects are straight up ==scams==, including farms. Developers can put special functions in the protocols to yoink all your deposited money.

Protocols can have ==audits== done by external teams to check if they're safe to use.

Protocol having an audit still ==doesn't mean it's safe==. Auditors could have missed something.

One team that does audits is [rugdoc](https://rugdoc.io/). They check new farming platforms for the most obvious hack and rug possibilities. They also have a cool [wiki](https://wiki.rugdoc.io/) and [articles](https://rugdoc.io/news-updates/) that can help you avoid getting rugged.

If a dapp has huge TVL, it means that a lot of people trust it, and it can probably be considered most safe.

#### 9. Try trading risky tokens

Farming with stablecoins or big coins like BTC and ETH is cool and safe, but you probably read news about people making millions in days.

Hundreds of new projects pop up every day, most of them scams.
The most popular scam mechanics are:
- Rugpull — When developers provide all the liquidity for a token, and remove it after it pumps. If you bought the token, you can't sell it anymore.
	- Check if liquidity is locked, meaning developers can't possibly remove it.
- Honeypot — You can buy a token but can't sell it. Usually followed by a rugpull.
	- rugdoc has a [honeypot checker](https://rugdoc.io/honeypot/)
- Mint exploit — Developer just prints another billion tokens and market dumps it.
- many others

Try finding a trading community that focuses on finding new risky projects.
Some examples:
- [The DeFi Saloon](https://t.me/DeFiSaloon)
- [Fantom Degenerates](https://t.me/FantomDegenerates)
- [Crypto Degens Farming](https://t.me/defifarmingdegens)
- [/biz/chat](https://t.me/slashbiz).
- Some chats related to specific projects often have people discussing other projects as well

You may have heard about the Information Age and how information is the new gold. You can feel it in crypto the best. If you obtain specific information before everyone else, you can become rich overnight.

If you were already using Telegram or Twitter, I suggest making alt accounts for crypto stuff. There's too much information to be mixed with other stuff.

#### 10. Try digging deeper into the ecosystem
With time you'll get more experienced, and see through scams and good opportunities very fast.

You can start noticing how some projects are undervalued, maybe even think about starting your own project for an unexlored niche in the ecosystem.

Maybe other pages on this website can help you.

- [Ape Tax](https://www.youtube.com/watch?v=HJzwEi9iJsc) ⭐️ by rekt.news

