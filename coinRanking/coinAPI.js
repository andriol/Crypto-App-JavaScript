export default class coinAPI {
  static getCoins() {
    const url = 'https://coinranking1.p.rapidapi.com/coins';
    const options = {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': '247bf9327cmsh63962b874b3526ep1c9081jsncb7bb8fdb34e',
      },
    };
    const res = fetch(url, options).then((response) => response.json());
    return res;
  }
}
