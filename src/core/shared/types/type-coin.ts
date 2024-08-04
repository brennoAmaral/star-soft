export const coins = {
  etherium: 'ETH'
}

type Coin = typeof coins

export type TCoin = keyof Coin

export interface ICoin<T> extends Record<TCoin,  T>{
 
}
