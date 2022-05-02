import coinAPI from './coinAPI.js';
import View from './views.js';
export default class App {
  constructor(root) {
    this.root = root;
    this.coins = [];
    this.equities = [];
    this.view = new View(root, this.getCoins());
  }
  getCoins() {
    coinAPI.getCoins().then(({ data }) => {
      this._addCoins(data.coins);
    });
  }
  _addCoins(coins) {
    this.coins = coins;
    this.view.cardList(coins);
  }
}
