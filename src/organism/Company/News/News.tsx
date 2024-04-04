import { Input, Table, TableProps } from 'antd';
import React, { useState } from 'react'
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

  const handleSearch = () => {
    const filtered = Data.filter(item => item?.title?.includes(keyword));
    setFilteredData(filtered);
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'index',
      title: '번호',
      render: (value, data, index) => {
        return (
          <div key={index} className='index'>
            <p>{data?.id}</p>
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
            <p>{data?.title}</p>
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
            <p>{data?.name}</p>
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
            <p>{data?.date}</p>
          </div>
        )
      }
    },
  ];
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
        <Table className='disclosure' dataSource={filteredData} columns={columns} />
      </IRContent>
    </IRWrapper>
  )
}

export default React.memo(News);