import { Map, MapMarker} from "react-kakao-maps-sdk"
import { useEffect,useState } from 'react'
import MapOverlay from "./MapOverlay";
import MapLine from "./MapLine";
import Image from "next/image";

export default function Mapscreen() {
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
    let path_data =[]

    const EventMarkerContainer = ({ position, content, address }) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <MapMarker
          position={position} // 마커를 표시할 위치
          onClick={() => {
            setIsOpen(true)
          }}
          clickable={true}
        >
          {isOpen && (
            <>
            <div className="p-2">
              <MapOverlay content={content} address={address} />
              <div>
                <Image
                alt="close"
                width="14"
                height="13"
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </>
          )}
        </MapMarker>
      )
    }
  
    useEffect(() => {
      if (!map) return
      const ps = new kakao.maps.services.Places()
  
      ps.keywordSearch("한동대 버거킹", (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
              address: data[i].place_url,
            })
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })
    }, [map])
  
    return (
      <>
      {/* <RemovableCustomOverlayStyle /> */}
       <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={3} // 지도의 확대 레벨
      onCreate={setMap}
    >
      {/* 장소 연결하는 선그리기 */}
      
      {markers.map((value) => (
        console.log(value.place_url),
        path_data.push(value.position),
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.position.lat}-${value.position.lng}`}
          position={value.position}
          content={value.content}
          address={value.address}
          removable={true}
        />
      ))}

      <MapLine data={path_data} />
    </Map>
      </>
    )
  }