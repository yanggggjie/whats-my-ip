import { clsx } from 'clsx'
import _ from 'lodash-es'
import Test from './components/Test.tsx'
import Copy from './components/Copy.tsx'
import Map from './components/Map/Map.tsx'
import Info from './components/Info.tsx'
import useSWR from 'swr'
import globalAxios from './globalAxios.ts'

function Component() {
  const fetcher = async (url: string) => {
    const res = await globalAxios.get('', {
      params: {
        'api-key': import.meta.env.VITE_IPDATA_KEY,
      },
    })
    return res.data
  }
  const { isLoading, error, data } = useSWR('/', fetcher)
  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>

  const flag = data.flag
  const calling_code = data.calling_code
  const currency_name = data.currency.name
  const currency_symbol = data.currency.symbol
  const latitude = data.latitude
  const longitude = data.longitude

  const ip = data.ip
  const city = data.city
  const country_name = data.country_name

  return (
    <div
      className={clsx(
        'w-screen h-screen bg-[url(/map.png)] bg-cover',
        'grid place-items-center',
      )}
    >
      <div
        className={clsx(
          'rounded-xl overflow-hidden bg-white',
          'flex flex-row items-center justify-around',
        )}
      >
        <Map
          flag={flag}
          calling_code={calling_code}
          currency_name={currency_name}
          currency_symbol={currency_symbol}
          latitude={latitude}
          longitude={longitude}
        ></Map>
        <Info ip={ip} city={city} country_name={country_name}></Info>
      </div>
    </div>
  )
}

export default Component
