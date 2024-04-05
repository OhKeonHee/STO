import React from 'react'
import CSR_Introduce from '../../Assets/imgs/CSR/CSR_Introduce.jpg'

export const Introduce = () => {
  return (
    <div>
      <img src={CSR_Introduce} alt="Introduce" style={{marginTop: 70}} />
    </div>
  )
}

export default React.memo(Introduce);