import { Input, Table, TableProps } from 'antd';
import React, { useState } from 'react'
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { IoSearch } from "react-icons/io5";
import { BusinessData } from '../Data/BusinessData';

interface DataType {
  date: string;
  title: string;
  name: string;
}

interface Props {
  setSelect: React.Dispatch<React.SetStateAction<number>>;
}

export const BusinessPerformance: React.FC<Props> = ({ setSelect }) => {
  const { Data } = BusinessData();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data?.reverse());
  

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
            <p>{index + 1}</p>
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
            style={{color: '#0072fd', cursor: 'pointer'}}
            onClick={() => setSelect(index + 1)}
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
            <p>{data?.date}</p>
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
      <Table dataSource={filteredData} columns={columns} />
    </IRContent>
  )
}

export default React.memo(BusinessPerformance);