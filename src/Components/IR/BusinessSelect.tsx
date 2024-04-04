import React from 'react'
import { GoToListWrapper, IRContent, IRTitle, IRWrapper } from '../../organism/Company/IR/styles';
import { Table, TableProps } from 'antd';
import { BusinessData } from '../Data/BusinessData';

interface DataType {
  date: string;
  title: string;
  name: string;
}

export const BusinessSelect = ({ select, setSelect }: {select: number, setSelect: any}) => {
  const { Data } = BusinessData();
  const selectData = Data?.reverse()?.find((it, idx) => idx == select);

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'title',
      title: '제목',
      render: (value, data, index) => {
        return (
          <div key={index} className='title'>
            <p>첨부파일</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'title',
      title: selectData?.title,
      render: (value, data, index) => {
        return (
          <div 
            key={index} 
            className='title' 
            style={{color: '#0072fd', cursor: 'pointer'}}
          >
            <p>{data?.title}</p>
          </div>
        )
      }
    },
    {
      dataIndex: 'date',
      title: '날짜',
      render: (value, data, index) => {
        return (
          ''
        )
      }
    },
    {
      dataIndex: 'date',
      title: selectData?.date,
      render: (value, data, index) => {
        return (
          ''
        )
      }
    },
  ];

  return (
    <IRWrapper style={{ minHeight: 830 }}>
      <IRTitle>경영실적</IRTitle>
      {selectData && (
        <IRContent className='select'>
          <Table dataSource={[selectData]} columns={columns} />
        </IRContent>
      )}
      <GoToListWrapper>
        <button 
          onClick={() => setSelect(0)}
        >
          목록
        </button>
      </GoToListWrapper>
    </IRWrapper>
  )
}

export default React.memo(BusinessSelect);