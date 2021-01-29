import React from "react";
import "./FirstSection.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const FirstSection = () => {
  return (
    <div className='first-section-container'>
      <p className='links'>
        Divisions{" "}
        <span className="side-arrow">
          <IoIosArrowForward />
        </span>
        <span>Module</span>
      </p>
      <div className='card-container'>
        <div className='card'>
          <div className='card-content'>
            <h6>31454</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Ongoing metric</p>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h6>2344</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Past metric</p>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h6>14224</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Missed metric</p>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h6>635</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Failed metric</p>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h6>11334</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Pending metric</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
