import React from "react";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { total_amt } from "../redux/action";

// import { useSelector } from "react-redux";

import "./payment.css";

const Payment = () => {
  let dispatch = useDispatch()
  const Paymentobj = {
    image:
      "https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.webp",
    name: "Care Supreme",
  };

  // dynamic price change

  const [year, setYear] = useState(0);
  const [year_plan, setYear_plan] = useState([9212, 17733, 26024]);
  const [total_price, setTotal_price] = useState(year_plan[year]);

  // for riders
  const [is_rider_hc, setIs_rider_hc] = useState(false);
  const [is_rider_bonus, setIs_rider_bonus] = useState(false);
  const [rider_hc, setRider_hc] = useState([477, 918, 1347]);
  const [rider_bonus, setRider_bonus] = useState([866, 1667, 2447]);

  // for add-on
  const [is_addon, setIs_addon] = useState(false);
  const [addon, setAddon] = useState(2657);

  const updateTotalPrice = (priceList, index, rider1, rider2, hc, bonus, add_on) => {
    let total = priceList[index];
    total += hc ? rider1[index] : 0;
    total += bonus ? rider2[index] : 0;
    total += add_on ? addon : 0;
    
    setTotal_price(total);
  };

  const selectYear = (target) => {
    let value = parseInt(target.value);

    setYear(value);
    updateTotalPrice(year_plan, value, rider_hc, rider_bonus,is_rider_hc,is_rider_bonus ,is_addon);
  };

  const changePrice = (target) => {
    let value = target.value;
    let price = [9212, 17733, 26024];
    let rider1 = [477, 918, 1347];
    let rider2 = [866, 1667, 2447];

    if (value === "15l") {
      price = [12097, 23288, 34176];
      rider1 = [477, 918, 1347];
      rider2 = [866, 1667, 2447];
    } else if (value === "10l") {
      price = [10186, 19699, 28777];
      rider1 = [477, 918, 1347];
      rider2 = [963, 1855, 2722];
    } else {
      price = [9212, 17733, 26024];
      rider1 = [636, 1224, 1797];
      rider2 = [1154, 2223, 3262];
    }

    setYear_plan(price);
    setRider_hc(rider1);
    setRider_bonus(rider2);
    updateTotalPrice(price, year, rider1, rider2,is_rider_hc, is_rider_bonus ,is_addon);
  };

  const add_booster = (val) => {

    let hc = val === "hc" ? !is_rider_hc : is_rider_hc;
    let bonus = val === "bonus" ? !is_rider_bonus : is_rider_bonus;
    let add_on = val === "add_on"? !is_addon: is_addon;

    setIs_rider_hc(hc)
    setIs_rider_bonus(bonus)
    setIs_addon(add_on)

    updateTotalPrice(year_plan, year, rider_hc, rider_bonus, hc, bonus, add_on)
  }

  // setTotal_price(year_plan[year])

  /********************************/

  // proceed to next page
  
  // const mrp = useSelector((store) => store.total_amt);
  
  const proceed_to_proposal = () => {
    dispatch(total_amt(total_price))

    //use navigate render new page

  }

  return (
    <div className="paymentPage-top-container">
      <div className="paymentpage-container">
        <div className="care-image-div">
          <div className="care-image">
            <img src={Paymentobj.image} alt="img" />
            <ul type="none">
              <h3>
                <li id="care-supreme">{Paymentobj.name}</li>
              </h3>
              <li className="seeAllfeature">
                See All Feature{" "}
                <span id="cashless"> &#9733;175 Cashless Hospitals</span>
              </li>
            </ul>
          </div>
          <div id="extra-info">
            <p>Policy Bazaar is 5 star partner for health care</p>
          </div>
        </div>
        <div>
          <div className="cover-amount">
            <h3>Cover Amount</h3>
            <p>
              Medical treatments are getting costlier every year. Higher the
              cover better it is.
            </p>
            <select
              name=""
              id="medical-treatment-every-year"
              onChange={(e) => changePrice(e.target)}
            >
              <option value="7l" selected>
                &#8377;7 Lakhs
              </option>
              <option value="10l">&#8377;10 Lakhs</option>
              <option value="15l">&#8377;15 Lakhs</option>
            </select>
          </div>
        </div>
        <div className="policy-classes">
          <div className="policy-name">
            <h3 className="policy-heading">Policy Period</h3>
            <p className="policy-multiyearPlan">
              Choosing a multi-year plan saves your money and the trouble of
              remembering yearly renewals.
            </p>
          </div>
          <div className="policy-year" onChange={(e) => selectYear(e.target)}>
            <div>
              <input
                type="radio"
                id="price1"
                name="price"
                value="0"
                checked={year === 0 ? "checked" : false}
              />
              <label for="price1">
                1 Year @ ₹{year_plan[0].toLocaleString("en-US")}
              </label>
            </div>
            <div>
              <input type="radio" id="price2" name="price" value="1" />
              <label for="price2">
                2 Year @ ₹{year_plan[1].toLocaleString("en-US")}
              </label>
            </div>
            <div>
              <input type="radio" id="price3" name="price" value="2" />
              <label for="price3">
                3 Year @ ₹{year_plan[2].toLocaleString("en-US")}
              </label>
            </div>
          </div>
          <div className="easy-emi">
            <p>
              Easy EMI options starting from ₹()/month.{" "}
              <span style={{ color: "green", cursor: "pointer" }}>
                View details ›
              </span>
            </p>
          </div>
        </div>
        <div className="rider" id="riders">
          <h2>Riders</h2>
          <p>
            You should get these additional benefits to enhance your current
            plan
          </p>

          <div className="rider2">
            <div>
              <h3 className="rider2-heading">Annual Health Check-up</h3>
              <p className="rider2-para">
                Once for all insured every policy year
              </p>
            </div>
            <div
              className="pricebox"
              style={{
                color: is_rider_hc ? "green" : "rgb(255,86,48)",
                cursor: "pointer",
              }}
            >
              <p
                className="rider3-prices"
                onClick={()=>add_booster("hc")}
                style={{
                  borderColor: is_rider_hc ? "green" : "rgb(255,86,48)",
                }}
              >
                &#8377;{rider_hc[year]}
              </p>
              <p className="plus">{is_rider_hc ? "✓" : "+"}</p>
            </div>
          </div>
          <div className="rider3">
            <div>
              <h3 className="cumulative">Cumulative Bonus Super</h3>
              <p className="rider3-cumulative">
                Up to 100% of cover amount per year, max up to 500% of sum
                insured; shall not reduce in case of claim
              </p>
            </div>
            <div
              className="pricebox"
              style={{
                color: is_rider_bonus ? "green" : "rgb(255,86,48)",
                cursor: "pointer",
              }}
            >
              <p
                className="rider3-prices"
                onClick={()=>add_booster("bonus")}
                style={{
                  borderColor: is_rider_bonus ? "green" : "rgb(255,86,48)",
                }}
              >
                &#8377;{rider_bonus[year]}
              </p>
              <p className="plus">{is_rider_bonus ? "✓" : "+"}</p>
            </div>
          </div>
          <div className="add-on" id="add-on">
            <div className="recommend">
              <br />
              <h3>Recommended Add-Ons</h3>
              <p>
                Add-ons are a smart way to enhance your cover at a fraction of
                the cost.
              </p>
            </div>
            <div class="all-btn">
              <button>All</button>
              <button className="all-btn-2">Super Top-Up</button>
              <button className="all-btn-2">Cancer</button>
            </div>
            <div className="enhance">
              <div className="enhance-img">
                <img
                  src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.webp"
                  alt=""
                />
                <h5>Enhance</h5>
              </div>
              <div>
                <table className="myTable" cellSpacing={10}>
                  <thead>
                    <th>Cover</th>
                    <th>Member(s)</th>
                  </thead>
                  <tbody>
                    <td>
                      <select
                        name=""
                        id="tbody-select-tag"
                        onChange={(e) => setAddon(parseInt(e.target.value))}
                      >
                        <option value="2657">&#8377;10L</option>
                        <option value="3456">&#8377;25L</option>
                        <option value="3524">&#8377;50L</option>
                        <option value="5128">&#8377;1Cr</option>
                        <option value="5376">&#8377;2Cr</option>
                      </select>
                    </td>
                    <td>All</td>
                  </tbody>
                </table>

                <span
                  className="enhance-amount"
                  onClick={()=>add_booster("add_on")}
                  style={{
                    borderColor: is_addon ? "green" : "rgb(255,86,48)",
                    color: is_addon ? "green" : "rgb(255,86,48)",
                    cursor: "pointer"
                  }}
                >
                  &#8377;{addon.toLocaleString("en-US")}
                </span>
              </div>
            </div>
          </div>
          <p id="para-deductible">Deductible : 7L</p>
          <div className="member-covered">
            <h3>Members Covered</h3>
            <div id="members-2">
              <p>name(22)</p>
              <p style={{ color: "orange" }}>Edit Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="final-payment">
        <div>
          <h3 className="summary-payment">Summary</h3>
        </div>
        <hr style={{ marginTop: "-2%" }} />
        <div>
          <div className="basePremium">
            <p style={{ marginTop: "1%" }}>Base premium - 1 year </p>
            <h5 style={{ marginTop: "1%" }}>
              &#8377; {year_plan[year].toLocaleString("en-US")}
            </h5>
          </div>
          <div className="addon-on-payment">
            <h3>
              {is_rider_hc || is_rider_bonus
                ? "Selected Rider(s)"
                : "Select Rider(s)"}
            </h3>
            <div
              className="selectRider-payment"
              style={{
                border:
                  is_rider_hc || is_rider_bonus ? "none" : "1px dashed black",
              }}
            >
              {is_rider_hc === false && is_rider_bonus === false ? (
                <div>
                  <p>Missing out on benefits</p>
                  <h5 ><a href="#riders" className="view_extra">VIEW RIDERS</a></h5>
                </div>
              ) : is_rider_bonus && is_rider_hc ? (
                <>
                  <div>
                    <p>Annual Health Check-up</p>
                    <h5>&#8377; {rider_hc[year].toLocaleString("en-US")}</h5>
                  </div>
                  <div>
                    <p>Cumulative Bonus Super</p>
                    <h5>&#8377; {rider_bonus[year].toLocaleString("en-US")}</h5>
                  </div>
                </>
              ) : is_rider_hc ? (
                <div>
                  <p>Annual Health Check-up</p>
                  <h5>&#8377; {rider_hc[year].toLocaleString("en-US")}</h5>
                </div>
              ) : (
                <div>
                  <p>Cumulative Bonus Super</p>
                  <h5>&#8377; {rider_bonus[year].toLocaleString("en-US")}</h5>
                </div>
              )}
            </div>
            <h3>Select Add-ons</h3>
            <div className="selectRider-payment" style={{
                border:
                  is_addon ? "none" : "1px dashed black",
              }}>
              {is_addon?(
                <div>
                <p>Enhance (All)</p>
                <h5>&#8377; {addon.toLocaleString("en-US")}</h5>
                </div>
              ):(
                <div>
              <p>Missing out on benefits</p>
              <h5><a href="#add-on" className="view_extra">VIEW ADD ONS</a></h5>
              </div>
              )}
            </div>
          </div>
          <div>
            <h4 style={{ marginTop: "4%" }}>Port Existing Policy</h4>
            <div className="payment-check-box">
              <input type="checkbox" name="" />
              <span style={{ marginLeft: "2%" }}>
                Do you wish to port your existing policy?
              </span>
            </div>
            <div className="premium-payment">
              <h3>Total Premium</h3>
              <h3>&#8377; {total_price.toLocaleString("en-US")}</h3>
            </div>
          </div>
        </div>
        <p className="effictively">
          Effectively costs just ₹{total_price.toLocaleString("en-US")}
          <span style={{ color: "green" }}> See How </span>
        </p>
        <button className="proceed-to-pay-button" onClick={proceed_to_proposal}>PROCEED TO PROPOSAL</button>
      </div>

      <div className="payment-footer">
        <div className="payment-footer-1">
          <h2>Need Help? We’re just one click away</h2>
          <button className="footer-para-button">Call Me Now</button>
        </div>
        <div className="footer-payment-para">
          <hr />
          <p>
            *A 30-minute Claim Support Service is provided for the purpose of
            giving reasonable assistance to the client in pursuance of the
            claim. For further details, 24x7 Claims Support Helpline can be
            reached out at 1800-258-5881. Terms and Conditions Apply*.
            Policybazaar strives to provide best claim support services to its
            clients. The settlement of the claim is the responsibility of the
            insurance company in accordance with the terms and conditions of the
            insurance policy opted by you. The 30-minute Claim support is not
            valid if our operations are impacted by a system failure or force
            majeure event or unavailability of company’s executives for reasons
            which are beyond our control. These terms may change without notice.
            <br />
            Policybazaar Insurance Brokers Private Limited | CIN:
            U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector -
            44, Gurgaon, Haryana - 122001 Contact Us | Legal and Admin Policies
            Policybazaar is now registered as a Direct Broker |Registration No.
            742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024,
            License category- Direct Broker (Life & General)| Visitors are
            hereby informed that their information submitted on the website may
            be shared with insurers.Product information is authentic and solely
            based on the information received from the insurers. © Copyright
            2008-2023 policybazaar.com. All Rights Reserved.
            
            
      
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
