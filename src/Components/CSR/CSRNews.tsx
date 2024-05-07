import { Input, Table, TableColumnType, TableProps } from 'antd';
import React, { useEffect, useState } from 'react'
import { DisclosureData } from '../Data/DisclosureData';
import { IRContent, IRSearchArea, IRSearchIcon } from '../../organism/Company/IR/styles';
import { IoSearch } from "react-icons/io5";
import { CSR_NewsData } from '../Data/CSR_NewsData';
import styled from 'styled-components';

interface DataType {
  id: number;
  src: string;
  title: string;
  writer: string;
  date: string;
  content: any;
}

export const CSRNews = () => {
  const { Data } = CSR_NewsData();
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [select, setSelect] = useState(0);
  const selectNews = Data?.find(it => it?.id == select);
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
      dataIndex: 'img',
      title: '',
      render: (value, data, index) => {
        return (
          <div key={index} className='img'>
            <img src={data?.src} style={{borderRadius: 20}} />
          </div>
        )
      }
    },
    {
      dataIndex: 'title',
      title: '내용',
      render: (value, data, index) => {
        return (
          <div key={index} className='title' style={{cursor: 'pointer', color: '#4096ff'}} onClick={() => setSelect(data?.id)}>
            <p style={{fontSize: width >= 610 ? 14 : 11}}>{data?.title}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'writer',
      title: '글쓴이',
      render: (value, data, index) => {
        return (
          <div key={index} className='writer'>
            <p style={{fontSize: width >= 610 ? 14 : 11, whiteSpace: 'nowrap'}}>{data?.writer}</p>
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
            <p style={{fontSize: width >= 610 ? 14 : 11, whiteSpace: 'nowrap'}}>{width >= 1024 ? data?.date : data?.date?.slice(2)}</p>
          </div>
        )
      }
    },
  ];

  const filteredColumns = columns.filter(column => {
    if (column.dataIndex === 'id' && width < 1024) return false;
    if (column.dataIndex === 'img' && width < 500) return false;
    return true;
  });

  return (
    <>
      {select == 0 ? (
        <IRContent style={{minHeight: 660}}>
          <IRSearchArea>
            <Input 
              value={keyword} 
              onChange={(e) => setKeyword(e.target.value)} 
              onPressEnter={handleSearch}
              placeholder='내용 검색' 
            />
            <IRSearchIcon onClick={handleSearch}>
              <IoSearch />
            </IRSearchIcon>
          </IRSearchArea>
          <Table className='disclosure' dataSource={filteredData} columns={filteredColumns} pagination={{ pageSize: 3 }} />
        </IRContent>
      ) : (
        <IRContent style={{alignItems: 'flex-start', position: 'relative', maxWidth: 1000}}>
          <SelectNewsHeader>
            <div>
              <span>제목</span>
              <p>{selectNews?.title}</p>
            </div>
            <div>
              <span>날짜</span>
              <p>{selectNews?.date}</p>
            </div>
          </SelectNewsHeader>
          <SelectNewsContent>{selectNews?.content}</SelectNewsContent>
          <GotoList onClick={() => setSelect(0)}>목록</GotoList>
        </IRContent>
      )}
    </>
  )
}

export default React.memo(CSRNews);

const SelectNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  text-align: center;
  border: 2px solid #111;
  font-size: 15px;
  font-weight: 500;
  gap: 20px;
  > div {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 30px;
  }
  span {
    font-size: 15px;
    width: 100px;
    padding: 8px 0;
    background-color: #999;
    color: #fff;
  }
`
export const SelectNewsContent = styled.div`
  padding: 30px;
  min-height: 452px;
  p {
    font-size: 20px;
  }
`
export const GotoList = styled.button`
  font-family: 'Pretendard';
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: #111;
  color: #fff;
  padding: 4px 15px;
  font-size: 16px;
`