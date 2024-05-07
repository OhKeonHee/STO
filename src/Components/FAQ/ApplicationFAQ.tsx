import React, { useEffect, useState } from 'react'
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { Input, Table, TableColumnType, TableProps } from 'antd';
import { IoSearch } from 'react-icons/io5';
import { ApplicationFAQ_Data } from '../Data/FAQ/ApplicationFAQ_Data';
import SelectApplicationFaq from './SelectApplicationFaq';

interface DataType {
  id: number;
  question: string;
  answer: string;
}

export const ApplicationFAQ = () => {
  const { Data } = ApplicationFAQ_Data();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data?.reverse());
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
    const filtered = Data.filter(item => item?.question?.includes(keyword));
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
      dataIndex: 'question',
      title: '질문',
      render: (value, data, index) => {
        return (
          <div 
            key={index} 
            className='question' 
            style={{textAlign: 'left', cursor: 'pointer', color: '#4096ff'}}
            onClick={() => setSelect(data?.id)}
          >
            <p>Q. {data?.question}</p>
          </div>
        )
      }
    },
  ];

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'id' && width < 550) return false;
    return true;
  });

  return (
    <IRContent>
      <IRSearchArea>
        <Input 
          value={keyword} 
          onChange={(e) => setKeyword(e.target.value)} 
          onPressEnter={handleSearch}
          placeholder='질문 검색' 
        />
        <IRSearchIcon onClick={handleSearch}>
          <IoSearch />
        </IRSearchIcon>
      </IRSearchArea>
      <Table className='disclosure' dataSource={filteredData} columns={filteredColumns} />
      {select !== 0 && <SelectApplicationFaq select={select} setSelect={setSelect} />}
    </IRContent>
  )
}

export default React.memo(ApplicationFAQ);