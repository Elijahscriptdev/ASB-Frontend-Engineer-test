import React from "react";
import "./SecondSection.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiArrowRightDownLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import { RiArrowUpLine } from "react-icons/ri";

const SecondSection = () => {
  return (
    <div className='second-section-container'>
      <div className='summary'>
        <div className='summary-card'>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611919374/Icon_x0kiiw.png'
              alt='img'
            />
            <h6>Division Summary</h6>
          </div>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611924304/Vector_kidlmz.png'
              alt='img'
            />
            <h6>08012345678</h6>
          </div>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611924304/envelope_1_swiecp.png'
              alt='img'
            />
            <h6>asbfefr@gmail.com</h6>
          </div>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611924304/pin_1_wym0yt.png'
              alt='img'
            />
            <h6>Mojidi, Lagos</h6>
          </div>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611924304/notes-book_1_rr6gjx.png'
              alt='img'
            />
            <h6>2 jornal Entries</h6>
          </div>
          <div className='header'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611924304/Group_1800_c4ihp0.png'
              alt='img'
            />
            <h6>24 fingerprints enrolled</h6>
          </div>
        </div>
        <div className='other-info'>
          <div className='header'>
            <div className='img-container'>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1611919379/announcement_1_ifzmxz.png'
                alt='img'
              />
            </div>

            <h6>Model History</h6>
          </div>

          <div className='other-info-items'>
            <div className='vertical_dotted_line'></div>
            <div className='other-info-item'>
              <span>&#8226;</span>
              <p>Search "Journal Entries" on Division module</p>
            </div>
            <p className='time'>22:10 15/09/2020 . Web</p>
          </div>
          <div className='other-info-items'>
            <div className='vertical_dotted_line'></div>
            <div className='other-info-item'>
              <span>&#8226;</span>
              <p>Search "Journal Entries" on Division module</p>
            </div>
            <p className='time'>22:10 15/09/2020 . Web</p>
          </div>
          <div className='other-info-items'>
            <div className='other-info-item'>
              <span>&#8226;</span>
              <p>Search "Journal Entries" on Division module</p>
            </div>
            <p className='time'>22:10 15/09/2020 . Web</p>
          </div>
        </div>
      </div>

      <div className='information'>
        <table>
          <thead>
            <tr>
              <th>
                <input type='checkbox' />
              </th>
              <th></th>
              <th>NAME</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>ENTRIES</th>
              <th>RISK PROFILE</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Courtney Henry</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>775 Rolling Green Rd.</p>
              </td>
              <td className='status-purple'>
                <span>No Issues</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 19 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='low-risk'>
                <span className='icon'>
                  <RiArrowRightDownLine />
                </span>
                <span className='text'>Low Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Darrell Steward</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>7529 E. Pecan St.</p>
              </td>
              <td className='status-yellow'>
                <span>2 Issues found</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 10 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='mid-risk'>
                <span className='icon'>
                  <RiArrowRightLine />
                </span>
                <span className='text'>Mid Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Cody Fisher</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>775 Rolling Green Rd.</p>
              </td>
              <td className='status-purple'>
                <span>No Issues</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 8 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='mid-risk'>
                <span className='icon'>
                  <RiArrowRightLine />
                </span>
                <span className='text'>Mid Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Bessie Cooper</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>7529 E. Pecan St.</p>
              </td>
              <td className='status-yellow'>
                <span>1 Issues found</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 12 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='high-risk'>
                <span className='icon'>
                  <RiArrowUpLine />
                </span>
                <span className='text'>High Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Annette Black</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>8080 Railroad St.</p>
              </td>
              <td className='status-purple'>
                <span>No Issues</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 13 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='low-risk'>
                <span className='icon'>
                  <RiArrowRightDownLine />
                </span>
                <span className='text'>Low Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Jenny Wilson</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>8080 Railroad St.</p>
              </td>
              <td className='status-yellow'>
                <span>5 Issues found</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 18 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='high-risk'>
                <span className='icon'>
                  <RiArrowUpLine />
                </span>
                <span className='text'>High Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Darlene Robertson</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>3890 Poplar Dr.</p>
              </td>
              <td className='status-yellow'>
                <span>1 Issues found</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 6 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='mid-risk'>
                <span className='icon'>
                  <RiArrowRightLine />
                </span>
                <span className='text'>Mid Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
            <tr className='last'>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <IoIosArrowDropdown />
              </td>
              <td className='one'>Ralph Edwards</td>
              <td className='two'>
                <p>Lagos state</p>
                <p className='light'>8558 Green Rd.</p>
              </td>
              <td className='status-purple'>
                <span>No Issues</span>
              </td>
              <td className='two'>
                <p>
                  <span>&#8226;</span> 14 Unique Entries
                </p>
                <p className='light'>Homogenous</p>
              </td>
              <td className='low-risk'>
                <span className='icon'>
                  <RiArrowRightDownLine />
                </span>
                <span className='text'>Low Risk</span>
              </td>
              <td>
                <BiDotsVerticalRounded />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondSection;
