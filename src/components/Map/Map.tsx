import { clsx } from 'clsx'
import _ from 'lodash-es'
import MMarker from './MMarker.tsx'
import React, { useEffect } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
interface Props {
  flag: string
  calling_code: string
  currency_name: string
  currency_symbol: string
  latitude: number
  longitude: number
}

function Component({
  flag,
  calling_code,
  currency_symbol,
  currency_name,
  latitude,
  longitude,
}: Props) {
  const customIcon = L.icon({
    iconUrl: '/markerIcon.png',
    iconSize: [47 * 0.7, 69 * 0.7], // size of the icon
  })

  const position: any = [latitude, longitude]
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '300px', width: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <MMarker
              flag={flag}
              calling_code={calling_code}
              currency_symbol={currency_symbol}
              currency_name={currency_name}
            ></MMarker>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Component
