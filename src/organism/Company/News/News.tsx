import { Input, Table, TableColumnType, TableProps } from 'antd';
import React, { useEffect, useState } from 'react'
import { IRContent, IRSearchArea, IRSearchIcon, IRTitle, IRWrapper } from '../../../organism/Company/IR/styles';
import { IoSearch } from "react-icons/io5";
import { NewsData } from '../../../Components/Data/NewsData';

interface DataType {
  id: number;
  date: string;
  title: string;
  name: string;
}

export const News = () => {
  const { Data } = NewsData();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    const filtered = Data.filter(item => item?.title?.includes(keyword));
    setFilteredData(filtered);
  };

  const columns: TableColumnType<DataType>[] = [
    {
      dataIndex: 'index',
      title: '번호',
      render: (value, data, index) => {
        return (
          <div key={index} className='index'>
            <p style={{fontSize: width >= 600 ? '14px' : '11px', whiteSpace: 'nowrap'}}>{data?.id}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'title',
      title: '제목',
      render: (value, data, index) => {
        return (
          <div key={index} className='title'>
            <p style={{fontSize: width >= 600 ? '14px' : '11px'}}>{data?.title}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'name',
      title: '이름',
      render: (value, data, index) => {
        return (
          <div key={index} className='name'>
            <p style={{fontSize: width >= 600 ? '14px' : '11px', whiteSpace: 'nowrap'}}>{data?.name}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'date',
      title: '날짜',
      render: (value, data, index) => {
        return (
          <div key={index} className='date'>
            <p style={{fontSize: width >= 600 ? '14px' : '11px', whiteSpace: 'nowrap'}}>{width >= 550 ? data?.date : data?.date?.slice(2)}</p>
          </div>
        )
      }
    },
  ];

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'index' && width < 448) return false;
    return true;
  });

  return (
    <IRWrapper>
      <IRTitle>NEWS</IRTitle>
      <p>에스티오에서 새로운 뉴스를 알려드립니다.</p>
      <IRContent>
        <IRSearchArea>
          <Input 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
            onPressEnter={handleSearch}
            placeholder='제목 검색' 
          />
          <IRSearchIcon onClick={handleSearch}>
            <IoSearch />
          </IRSearchIcon>
        </IRSearchArea>
        <Table className='disclosure' dataSource={filteredData} columns={filteredColumns} />
      </IRContent>
    </IRWrapper>
  )
}

export default React.memo(News);