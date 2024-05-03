import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapInfoWindow } from '../../organism/Main/styles';

export const MapAPI = () => {
  return (
    <Map
      center={{
        lat: 37.55721,
        lng: 126.8644,
      }}
      style={{
        width: "100%",
        height: "450px",
      }}
      level={3}
    >
      <MapMarker
        position={{
          lat: 37.55721,
          lng: 126.8644,
        }}
      >
        <MapInfoWindow>
          (주)에스티오
          <div>
            <a
              href="https://map.kakao.com/link/map/(주)에스티오,37.55721,126.8644"
              target="_blank"
              rel="noreferrer"
            >
              큰지도보기
            </a>{" "}
            <a
              href="https://map.kakao.com/link/to/(주)에스티오,37.55721,126.8644"
              target="_blank"
              rel="noreferrer"
            >
              길찾기
            </a>
          </div>
        </MapInfoWindow>
      </MapMarker>
    </Map>
  )
}

export default React.memo(MapAPI);