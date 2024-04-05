import { Input, Table, TableProps } from 'antd';
import React, { useState } from 'react'
import { DisclosureData } from '../Data/DisclosureData';
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { IoSearch } from "react-icons/io5";
import { EmploymentData } from '../Data/EmploymentData';

interface DataType {
  id: number;
  title: string;
  field: string;
  period: string;
  status: string;
}

export const Employment = () => {
  const { Data } = EmploymentData();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data?.reverse());

  const handleSearch = () => {
    const filtered = Data.filter(item => item?.title?.includes(keyword));
    setFilteredData(filtered);
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'id',
      title: '번호',
      render: (value, data, index) => {
        return (
          <div key={index} className='id'>
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
          <div key={index} className='title' style={{textAlign: 'left'}}>
            <p>{data?.title}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'field',
      title: '분야',
      render: (value, data, index) => {
        return (
          <div key={index} className='field'>
            <p>{data?.field}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'period',
      title: '기간',
      render: (value, data, index) => {
        return (
          <div key={index} className='period'>
            <p>{data?.period}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'status',
      title: '상태',
      render: (value, data, index) => {
        return (
          <div key={index} className='status'>
            <p style={{color: '#fff', backgroundColor: '#969696', padding: 2, borderRadius: 5}}>
              {data?.status}
            </p>
          </div>
        )
      }
    },
  ];
  return (
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
  )
}

export default React.memo(Employment);