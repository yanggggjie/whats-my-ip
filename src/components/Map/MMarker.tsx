import { clsx } from 'clsx'
import _ from 'lodash-es'
import { IoCallSharp } from 'react-icons/io5'
import { GrCurrency } from 'react-icons/gr'
interface Props {
  flag: string
  calling_code: string
  currency_name: string
  currency_symbol: string
}

function Component({
  flag,
  calling_code,
  currency_name,
  currency_symbol,
}: Props) {
  return (
    <div className={clsx('space-y-3')}>
      <div className={clsx('flex flex-row gap-2 items-center')}>
        National flag:
        <img src={flag} alt="" />
      </div>
      <div className={clsx('flex flex-row gap-2 items-center')}>
        <IoCallSharp></IoCallSharp> Int. Country calling code : {calling_code}
      </div>
      <div className={clsx('flex flex-row gap-2 items-center')}>
        <GrCurrency></GrCurrency> Currencies: {currency_name}- {currency_symbol}
      </div>
    </div>
  )
}

export default Component
