import React, { useEffect, useState } from 'react'
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { Input, Table, TableColumnType, TableProps } from 'antd';
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
            <p style={{fontSize: width >= 610 ? 14 : 11}}>{data?.title}</p>
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
            <p style={{fontSize: width >= 610 ? 14 : 11, whiteSpace: 'nowrap'}}>{data?.name}</p>
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
            <p style={{fontSize: width >= 610 ? 14 : 11, whiteSpace: 'nowrap'}}>{width >= 570 ? data?.data : data?.data?.slice(2)}</p>
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
            <p style={{fontSize: width >= 610 ? 14 : 11, whiteSpace: 'nowrap'}}>{data?.isAnswer ? 'O' : 'X'}</p>
          </div>
        )
      }
    },
  ];

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'id' && width < 620) return false;
    return true;
  });

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
      <Table className='disclosure' dataSource={filteredData} columns={filteredColumns} />
      {select !== 0 && <SelectEmploymentFaq select={select} setSelect={setSelect} />}
    </IRContent>
  )
}

export default React.memo(EmploymentFAQ);