/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import "../css/styles.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {motion } from 'framer-motion'

const LandingPage = () => {
  const{user}=useContext(AuthContext)
  const Navigate=useNavigate();
  const handleSneakIn=()=>{
    if(user.email && !user.admin){
      Navigate('/explore')
    }
    else if(user.admin){
      Navigate('/approval')
    }
    else{
      alert("Pls Login");
      Navigate('/login')
    }
    
  }
  return (
    <section className="pic">
    <div className=" container d">
      <div className="row">
        <div className="col-12 m-auto text-center">
          <motion.h1 className=" main mt-5"  animate={{scale:1.5}} transition={{duration:1}}
          
          
          >ShoeLag</motion.h1>
          <motion.h2 className=" para text me-0" initial={{y:"-100vw"}} animate={{y:0}} transition={{type:'spring',stiffness:100,delay:0.5,duration:3}}>
            <strong>Where Shoe Meets You!!</strong>
          </motion.h2>
        </div>
        <hr className="mx-auto w-50" />
        <div className="col-12 mt-5 text-center">
          <p className="para1">Sell Your Shoes,Buy other's shoes </p>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-outline-info w-100 h-100 border-0"
              onClick={handleSneakIn}
            >
              <motion.h3 className="para m-auto text-decoration-underline"  whileHover={{scale:1.2}}>
                <strong>Sneak in</strong>
              </motion.h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default LandingPage;
