import React from 'react'
import MapAPI from './MapAPI';
import { Address, ContactIcon, ContactInfo, ContactInfoHeader, ContactInfoTitle, ContactTitle, ContactWrapper, Directions, Traffic } from '../../organism/Main/styles';
import { FaBusAlt } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";

export const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Contact</ContactTitle>
      <MapAPI />
      <Directions>
        <Traffic>
          <ContactInfoHeader>
            <ContactIcon>
              <FaBusAlt />
            </ContactIcon>
            <ContactInfoTitle>교통정보</ContactInfoTitle>
          </ContactInfoHeader>
          <ContactInfo>
            <p><span>지하철</span> - 9호선 중미역</p>
            <p><span>버스</span> - 블루나인 비즈니스 센터. 이마트</p>
            <p><span className='badge' style={{backgroundColor: '#3F6091'}}>간선</span> 670 672</p>
            <p><span className='badge' style={{backgroundColor: '#5B8950'}}>지선</span> 6627 6631 6712</p>
            <p><span className='badge' style={{backgroundColor: '#5B8950'}}>일반</span> 1002</p>
            <p><span className='badge' style={{backgroundColor: '#84B2C2'}}>공항</span> 6018</p>
          </ContactInfo>
        </Traffic>
        <Address>
          <ContactInfoHeader>
            <ContactIcon>
              <FaMapSigns />
            </ContactIcon>
            <ContactInfoTitle>주소</ContactInfoTitle>
          </ContactInfoHeader>
          <ContactInfo>
            <p>㉾07547 서울시 강서구 양천로 583 우림블루나인 B동 15층</p>
          </ContactInfo>
        </Address>
      </Directions>
    </ContactWrapper>
  )
}

export default React.memo(Contact);