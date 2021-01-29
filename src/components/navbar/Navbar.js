import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from 'react-icons/ri'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-logo'>
        <ul>
          <li>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611871710/Screen_Shot_2021-01-20_at_14.38_1_t4feuj.png'
              alt='logo'
            />
          </li>
          <li className='logo-text'>FE Engineer Test 1</li>
        </ul>
      </div>
      <div className='nav-links'>
        <div className='nav-links-container'>
          <ul>
            <li>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611867081/Shape_kpj9dj.png'
                alt='home'
              />{" "}
              Home
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611867258/Shape_mlbske.png'
                alt='entries'
              />{" "}
              Entries
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611867297/Opportunitiy_k9cck2.png'
                alt='division'
              />{" "}
              Divisions
            </li>
          </ul>
        </div>
        <div className='nav-links-container'>
          <ul>
            <li>
              <HiSearch />
              <input type='text' />
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611867642/Shape_ihvxu9.png'
                alt='notification'
              />
            </li>
            <li>
              {/* <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611867661/Shape_yezqow.png'
                alt='Account'
              /> */}
              <BsFillPersonFill />
              <RiArrowDropDownLine />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
