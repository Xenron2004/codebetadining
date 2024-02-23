import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>Confirm Order</h1>
            <form>
                <div>
                    <label>Cash on delivery</label>
                    <input type="radio"name='payment'/>
                </div>
                <div>
                    <label>Online</label>
                    <input type="radio"name='payment'/>
                </div>
                
                <button type='submits'>Pay now</button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder