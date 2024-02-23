import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.no.</label>
            <input type="text" placeholder="Enter House no." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter city" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">Uttar Pradesh</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pincode</label>
            <input type="number" placeholder="Enter Postal code" />
          </div>
          <div>
            <label>Phone</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>
          <button type="submit">Confirm order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
