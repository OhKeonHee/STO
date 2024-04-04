import React from 'react'

export const StockData = () => {
  const Data = [
    {
      date: '2024/04/03',
      upDown: 'down',
      price: {
        closing: 2160,
        market: 2180,
        high: 2190,
        low: 2135,
      },
      than: 30,
      rate: 1.37,
      amount: 25716,
      money: 55352980,
      stock: 12500976,
      total: 27002108160
    },
    {
      date: '2024/04/02',
      upDown: 'up',
      price: {
        closing: 2190,
        market: 2145,
        high: 2225,
        low: 2145,
      },
      than: 45,
      rate: 2.1,
      amount: 81407,
      money: 176606620,
      stock: 12500976,
      total: 27377137440
    },
    {
      date: '2024/04/01',
      upDown: 'up',
      price: {
        closing: 2145,
        market: 2125,
        high: 2170,
        low: 2100,
      },
      than: 15,
      rate: 0.7,
      amount: 62574,
      money: 134568600,
      stock: 12500976,
      total: 26814593520
    },
    {
      date: '2024/03/29',
      upDown: 'up',
      price: {
        closing: 2130,
        market: 2120,
        high: 2150,
        low: 2105,
      },
      than: 30,
      rate: 1.43,
      amount: 16181,
      money: 34510270,
      stock: 12500976,
      total: 26627078880
    },
    {
      date: '2024/03/28',
      upDown: 'up',
      price: {
        closing: 2100,
        market: 2090,
        high: 2120,
        low: 2090,
      },
      than: 10,
      rate: 0.48,
      amount: 9867,
      money: 20818210,
      stock: 12500976,
      total: 26252049600
    },
    {
      date: '2024/03/27',
      upDown: 'up',
      price: {
        closing: 2090,
        market: 2085,
        high: 2150,
        low: 2085,
      },
      than: 5,
      rate: 0.24,
      amount: 15145,
      money: 31902030,
      stock: 12500976,
      total: 26127039840
    },
    {
      date: '2024/03/26',
      upDown: 'down',
      price: {
        closing: 2085,
        market: 2105,
        high: 2150,
        low: 2085,
      },
      than: 40,
      rate: 1.88,
      amount: 22430,
      money: 47448930,
      stock: 12500976,
      total: 26064534960
    },
    {
      date: '2024/03/25',
      upDown: 'down',
      price: {
        closing: 2125,
        market: 2175,
        high: 2175,
        low: 2115,
      },
      than: 20,
      rate: 0.93,
      amount: 26825,
      money: 57286310,
      stock: 12500976,
      total: 26564574000
    },
    {
      date: '2024/03/22',
      upDown: 'up',
      price: {
        closing: 2145,
        market: 2050,
        high: 2150,
        low: 2050,
      },
      than: 95,
      rate: 4.63,
      amount: 49910,
      money: 105587250,
      stock: 12500976,
      total: 26814593520
    },
    {
      date: '2024/03/21',
      upDown: 'up',
      price: {
        closing: 2050,
        market: 2055,
        high: 2120,
        low: 2040,
      },
      than: 15,
      rate: 0.74,
      amount: 26661,
      money: 54980450,
      stock: 12500976,
      total: 25627000800
    },
    {
      date: '2024/03/20',
      upDown: 'down',
      price: {
        closing: 2035,
        market: 2070,
        high: 2070,
        low: 1991,
      },
      than: 40,
      rate: 1.93,
      amount: 18913,
      money: 38123134,
      stock: 12500976,
      total: 25439486160
    },
    {
      date: '2024/03/19',
      upDown: 'up',
      price: {
        closing: 2075,
        market: 1995,
        high: 2110,
        low: 1995,
      },
      than: 80,
      rate: 4.01,
      amount: 11218,
      money: 22858759,
      stock: 12500976,
      total: 25939525200
    },
    {
      date: '2024/03/18',
      upDown: 'down',
      price: {
        closing: 1995,
        market: 2005,
        high: 2025,
        low: 1995,
      },
      than: 30,
      rate: 1.48,
      amount: 5876,
      money: 11777799,
      stock: 12500976,
      total: 24939447120
    },
    {
      date: '2024/03/15',
      upDown: 'up',
      price: {
        closing: 2025,
        market: 1996,
        high: 2055,
        low: 1988,
      },
      than: 29,
      rate: 1.45,
      amount: 13423,
      money: 27147398,
      stock: 12500976,
      total: 25314476400
    },
    {
      date: '2024/03/14',
      upDown: 'down',
      price: {
        closing: 1996,
        market: 1999,
        high: 2015,
        low: 1994,
      },
      than: 19,
      rate: 0.94,
      amount: 8125,
      money: 16274818,
      stock: 12500976,
      total: 24951948096
    },
    {
      date: '2024/03/13',
      upDown: 'down',
      price: {
        closing: 2015,
        market: 2045,
        high: 2045,
        low: 1999,
      },
      than: 30,
      rate: 1.47,
      amount: 19091,
      money: 38393137,
      stock: 12500976,
      total: 25189466640
    },
    {
      date: '2024/03/12',
      upDown: 'down',
      price: {
        closing: 2045,
        market: 2090,
        high: 2090,
        low: 2005,
      },
      than: 45,
      rate: 2.15,
      amount: 34518,
      money: 70228455,
      stock: 12500976,
      total: 25564495920
    },
    {
      date: '2024/03/11',
      upDown: 'up',
      price: {
        closing: 2090,
        market: 2075,
        high: 2170,
        low: 2060,
      },
      than: 15,
      rate: 0.72,
      amount: 8614,
      money: 18002545,
      stock: 12500976,
      total: 26127039840
    },
    {
      date: '2024/03/08',
      upDown: 'up',
      price: {
        closing: 2075,
        market: 2070,
        high: 2085,
        low: 2040,
      },
      than: 5,
      rate: 0.24,
      amount: 14871,
      money: 30650875,
      stock: 12500976,
      total: 25939525200
    },
    {
      date: '2024/03/07',
      upDown: 'down',
      price: {
        closing: 2070,
        market: 2020,
        high: 2075,
        low: 2020,
      },
      than: 5,
      rate: 0.24,
      amount: 9572,
      money: 19687180,
      stock: 12500976,
      total: 25877020320
    },
  ];
  
  return { Data };
};
