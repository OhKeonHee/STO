import { Table, TableProps, TableColumnType } from 'antd';
import React, { useEffect, useState } from 'react'
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const columns: TableColumnType<DataType>[] = [
    {
      dataIndex: 'date',
      title: '일자',
      render: (value, data, index) => {
        return (
          <div key={index} className='date'>
            <p>{width >= 1241 ? data?.date : data?.date?.slice(5)}</p>
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

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'money' && width < 1117) return false;
    if (column.dataIndex === 'stock' && width < 1205) return false;
    if (column.dataIndex === 'total' && width < 960) return false;
    if (column.dataIndex === 'amount' && width < 687) return false;
    if (column.dataIndex === 'rate' && width < 594) return false;
    if (column.dataIndex === 'than' && width < 516) return false;
    if (column.dataIndex === 'market' && width < 438) return false;
    return true;
  });

  return (
    <IRContent>
      <Table className='stock' dataSource={Data} columns={filteredColumns} />
    </IRContent>
  )
}

export default React.memo(Stock);