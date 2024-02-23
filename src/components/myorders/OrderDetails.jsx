import React from "react";

const OrdderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"asef 12-45ss"}
          </p>
        </div>
        <div>
          <h1>Contanct</h1>
          <p>
            <b>Name</b>
            {"sankalp"}
          </p>
          <p>
            <b>Phone</b>
            {89358329761}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"processing"}
          </p>
          <p>
            <b>Placed at</b>
            {"23-02-2023"}
          </p>
          <p>
            <b>Delivered at</b>
            {"23-03-2023"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment refrence</b>
            {"segxdhset34"}
          </p>
          <p>
            <b>Paid at</b>
            {"23-03-2023"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2312}
          </p>
          <p>
            <b>Delivery Charges</b>₹{199}
          </p>
          <p>
            <b>Taxes</b>₹{49}
          </p>
          <p>
            <b>Total Amount</b>₹{49 + 199 + 2312}
          </p>
        </div>

        <article>

          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span> 
            </div>
          </div>
          <div>
            <h4> Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{199}</span> 
            </div>
          </div>
          <div>
            <h4>Chicken Burger</h4>
            <div>
              <span>{4}</span> x <span>{399}</span> 
            </div>
          </div>

          <div>
            <h4 style={{
              fontWeight:800,
            }}
            >
              Sub Total</h4>
            <div
             style={{
              fontWeight:800,
            }}>
              ₹{2312}
              </div>
            </div>
          
        </article>
      </main>
    </section>
  );
};

export default OrdderDetails;
