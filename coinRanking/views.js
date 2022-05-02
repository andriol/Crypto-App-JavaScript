export default class View {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
<div class="container">
  <div class="card__container">
   </div>
</div>
    `;
  }
  _createCardHTML(
    rank,
    name,
    iconUrl,
    price,
    marketCap,
    change,
    coinrankingUrl
  ) {
    return `
     <div class="card">
    <div class="card__content">
    <div class="card__title">
     <h3 class="card__header">${rank}. ${name}</h3>
       <img class="card__header-img" src=${iconUrl} alt="image"/>
       </div>
       <div class="card__info-card">
        <p class="card__info-one">Price: $${price}</p>
        <p class="card__info-two">Market Cap: ${this._wealthFormat(
          marketCap
        )}</p>
        <p class="card__info-three">Daily Change: ${change}</p>
        <a class="card__info-url" href=${coinrankingUrl} target="_blank"><span>Coin Ranking</span></a>
        </div>
      </div>
       </div>
      `;
  }
  cardList(cards) {
    const container = this.root.querySelector('.card__container');
    container.innerHTML = '';
    for (const card of cards) {
      const html = this._createCardHTML(
        card.rank,
        card.name,
        card.iconUrl,
        Number(card.price).toFixed(2),
        Number(card.marketCap),
        card.change,
        card.coinrankingUrl
      );
      container.insertAdjacentHTML('beforeend', html);
    }
  }

  _wealthFormat(number) {
    var SI_SYMBOL = ['', 'K', 'M', 'B', 'T'];
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;
    // if zero, we don't need a suffix
    if (tier == 0) return number;
    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    // scale the number
    var scaled = number / scale;
    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }
}
