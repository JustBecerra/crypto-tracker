export interface cryptoType {
  Asset: {
    id: string;
    symbol: string;
    name: string;
    slug: string;
  };
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
}
