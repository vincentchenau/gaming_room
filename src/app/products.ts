export const products = [
  {
    "order_no": "SI03693186",
    "order_date": "2020-01-04 00:00:00.000",
    "status": 3,
    "product": "UA43RU7100WXXY",
    "category": "Audio visual",
    "total_amount": 4124.083882409537,
    "total_qty": 1.00000000000000000000
  },
  {
    "order_no": "SI03727212",
    "order_date": "2020-01-21 00:00:00.000",
    "status": 4,
    "product": "WW75J54E0IW",
    "category": "Clothes washers",
    "total_amount": 3683.383625845986,
    "total_qty": 1.00000000000000000000
  },
  {
    "order_no": "SI03734851",
    "order_date": "2020-01-27 00:00:00.000",
    "status": 3,
    "product": "WD75M4453JW",
    "category": "Clothes washers",
    "total_amount": 4657.276785412355,
    "total_qty": 1.00000000000000000000
  }
];

export interface Product {
  order_no: string,
  order_date: string,
  status: number,
  product: string,
  category: string,
  total_amount: number,
  total_qty: number
}
