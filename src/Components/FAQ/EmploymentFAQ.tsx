import React, { useState } from 'react'
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { Input, Table, TableProps } from 'antd';
import { IoSearch } from 'react-icons/io5';
import { EmploymentFAQ_Data } from '../Data/FAQ/EmploymentFAQ_Data';
import SelectEmploymentFaq from './SelectEmploymentFaq';

interface DataType {
  id: number;
  title: string;
  name: string;
  data: string;
  isAnswer: boolean;
}

export const EmploymentFAQ = () => {
  const { Data } = EmploymentFAQ_Data();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [select, setSelect] = useState(0);

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
          <div 
            key={index} 
            className='title' 
            style={{textAlign: 'left', cursor: 'pointer', color: '#4096ff'}}
            onClick={() => setSelect(data?.id)}
          >
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
            <p>{data?.data}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'isAnswer',
      title: '답변여부',
      render: (value, data, index) => {
        return (
          <div key={index} className='isAnswer'>
            <p>{data?.isAnswer ? 'O' : 'X'}</p>
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
      {select !== 0 && <SelectEmploymentFaq select={select} setSelect={setSelect} />}
    </IRContent>
  )
}

export default React.memo(EmploymentFAQ);