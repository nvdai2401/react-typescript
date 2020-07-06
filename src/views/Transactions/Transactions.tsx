import React from 'react'

import { PieChart } from '../components'

export interface Props {
  name: string
}

const Transactions: React.FC<Props> = () => {
  return (
    <div>
      Transactions <PieChart />
    </div>
  )
}

export default Transactions
