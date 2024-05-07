import { Input, Table, TableColumnType, TableProps } from 'antd';
import React, { useEffect, useState } from 'react'
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
          <div key={index} className='title' style={{textAlign: 'left'}}>
            <p style={{fontSize: width >= 550 ? 14 : 11}}>{data?.title}</p>
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
            <p style={{whiteSpace: 'nowrap', fontSize: width >= 550 ? 14 : 11}}>{data?.field}</p>
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
            <p style={{whiteSpace: 'nowrap', fontSize: width >= 550 ? 14 : 11}}>{width >= 610 ? data?.period : data?.period?.slice(11)}</p>
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
            <p style={{color: '#fff', backgroundColor: '#969696', padding: 2, borderRadius: 5, fontSize: width >= 550 ? 14 : 11}}>
              {data?.status}
            </p>
          </div>
        )
      }
    },
  ];

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'id' && width < 655) return false;
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
    </IRContent>
  )
}

export default React.memo(Employment);