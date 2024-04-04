import { Input, Table, TableProps } from 'antd';
import React, { useState } from 'react'
import { DisclosureData } from '../Data/DisclosureData';
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { IoSearch } from "react-icons/io5";

interface DataType {
  date: string;
  title: string;
  PIC: string;
}

export const Disclosure = () => {
  const { Data } = DisclosureData();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data);

  const handleSearch = () => {
    const filtered = Data.filter(item => item?.title?.includes(keyword));
    setFilteredData(filtered);
  };

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
      dataIndex: 'title',
      title: '공시제목',
      render: (value, data, index) => {
        return (
          <div key={index} className='title'>
            <p>{data?.title}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'PIC',
      title: '제출의무자',
      render: (value, data, index) => {
        return (
          <div key={index} className='PIC'>
            <p>{data?.PIC}</p>
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
          placeholder='공시제목 검색' 
        />
        <IRSearchIcon onClick={handleSearch}>
          <IoSearch />
        </IRSearchIcon>
      </IRSearchArea>
      <Table className='disclosure' dataSource={filteredData} columns={columns} />
    </IRContent>
  )
}

export default React.memo(Disclosure);