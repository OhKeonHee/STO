import { Table, TableProps } from 'antd';
import React from 'react'
import { IRContent } from '../../organism/Company/IR/styles';
import { StockData } from '../Data/StockData';

interface DataType {
  date: string;
  upDown: string;
  price: {
    closing: number,
    market: number,
    high: number,
    low: number,
  };
  than: number;
  rate: number;
  amount: number;
  money: number;
  stock: number;
  total: number;
}

export const Stock = () => {
  const { Data } = StockData();

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'date',
      title: '일자',
      render: (value, data, index) => {
        return (
          <div key={index} className='date'>
            <p>{data?.date}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'closing',
      title: '종가',
      render: (value, data, index) => {
        return (
          <div key={index} className='closing'>
            <p>{data?.price?.closing?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'than',
      title: '대비',
      render: (value, data, index) => {
        return (
          <div key={index} className='than'>
            <p style={{color: data?.upDown == 'up' ? 'red' : 'blue'}}>
              {data?.upDown == 'up' ? '▲' : '▼'} {data?.than}
            </p>
          </div>
        )
      }
    },
    {
      dataIndex: 'rate',
      title: '등락률',
      render: (value, data, index) => {
        return (
          <div key={index} className='rate'>
            <p style={{color: data?.upDown == 'up' ? 'red' : 'blue'}}>
              {data?.upDown == 'up' ? '▲' : '▼'} {data?.rate}
            </p>
          </div>
        )
      }
    },
    {
      dataIndex: 'market',
      title: '시가',
      render: (value, data, index) => {
        return (
          <div key={index} className='market'>
            <p>{data?.price?.market?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'high',
      title: '고가',
      render: (value, data, index) => {
        return (
          <div key={index} className='high'>
            <p>{data?.price?.high?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'low',
      title: '저가',
      render: (value, data, index) => {
        return (
          <div key={index} className='low'>
            <p>{data?.price?.low?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'amount',
      title: '거래량',
      render: (value, data, index) => {
        return (
          <div key={index} className='amount'>
            <p>{data?.amount?.toLocaleString()} 주</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'money',
      title: '거래대금',
      render: (value, data, index) => {
        return (
          <div key={index} className='money'>
            <p>{data?.money?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'stock',
      title: '상장주식수',
      render: (value, data, index) => {
        return (
          <div key={index} className='stock'>
            <p>{data?.stock?.toLocaleString()} 주</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'total',
      title: '시가총액',
      render: (value, data, index) => {
        return (
          <div key={index} className='total'>
            <p>{data?.total?.toLocaleString()} 원</p>
          </div>
        )
      }
    },
  ];
  return (
    <IRContent>
      <Table className='stock' dataSource={Data} columns={columns} />
    </IRContent>
  )
}

export default React.memo(Stock);