import React from "react";
import "./FirstSection.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const FirstSection = () => {
  return (
    <div className='first-section-container'>
      <p className='links'>
        Divisions{" "}
        <span>
          <IoIosArrowForward />
        </span>{" "}
        Module
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
            <h6>31454</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Ongoing metric</p>
        </div>
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
            <h6>31454</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Ongoing metric</p>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h6>31454</h6>
            <div className='question'>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <p>Ongoing metric</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
