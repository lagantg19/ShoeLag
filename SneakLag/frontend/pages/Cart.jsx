import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { InventoryContext } from "../context/InventoryContext";
import CartComponent from "../components/CartComponent";
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { exploreItems, getExplore } = useContext(InventoryContext);
  const [total, setTotal] = useState(0);
  const Navigate=useNavigate();

  useEffect(() => {
    getExplore();
  }, []);

  useEffect(() => {
    let tot = 0;
    exploreItems
      .filter(
        (item) =>
          user.user_id !== item.user_id && item.buy && user.email === item.buyer
      )
      .map((item) => {
        tot = tot + item.price;
      });
    setTotal(tot);
  }, [exploreItems]);

  const handlePay=(e)=>{
    e.preventDefault();
    if(total===0){
        alert("MACHA BUY SOMETHING FIRST")
        Navigate('/cart');
    }else{
        var options = {
            key: "YOUR_KEY",
            key_secret:"YOUR_KEY_SECRET",
            amount: total *100,
            currency:"INR",
            name:"LAGBAY",
            description:"for testing purpose",
            handler: function(response){
              
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"bro",
              email:user.email,
              contact:"9999999999"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
          Navigate('/cart')
        }
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col para  d-flex justify-content-center">
          <h1>
            <strong>Checkout</strong>
          </h1>
        </div>
      </div>
      <div className="row g-5 mt-4">
        <div className="col ">
          {exploreItems.map((item) => {
            if (
              user.user_id !== item.user_id &&
              item.buy &&
              user.email === item.buyer
            ) {
              return <CartComponent key={item._id} {...item} />;
            }
          })}
        </div>
        <div className="col-6">
          <div className="card mb-3">
            <img
              src="https://images.unsplash.com/photo-1588541536236-a65adf58af7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className="card-img-top"
              alt="..."
              style={{ maxWidth: "1000px", maxHeight: "80vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">Total Amount</h5>
              <h1>RS {total}</h1>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-dark" style={{"width":"200px"}} onClick={handlePay}>
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;
