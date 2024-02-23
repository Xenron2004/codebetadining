import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSucess = () => {
  return (
    <section className='paymentSucess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order placed sucessfully ,Check order status below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSucess