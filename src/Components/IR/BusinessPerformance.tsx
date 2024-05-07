import { Input, Table, TableProps } from 'antd';
import React, { useEffect, useState } from 'react'
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
  return (
    <IRContent style={{marginBottom: 110}}>
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