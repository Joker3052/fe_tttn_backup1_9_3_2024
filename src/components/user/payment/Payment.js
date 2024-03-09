// Home.js

import React, { useEffect, useState } from 'react';
import wellcomePic from '../../../assets/images/slogan.png';
import Footer from '../Footer/Footer';
import { FetchAllUser } from '../../../Services/UserServices';
import { baseURL } from '../../../Services/axios-customize';
import starImage from '../../../assets/images/star.png';
import axios from 'axios';
function Payment() {
  const [listStore, setListStore] = useState([]);
  useEffect(() => {
    getStore();
  }, []);

  const getStore = async () => {
    try {
      // Gọi hàm FetchAllStore và thêm '/123' vào URL
      let res = await FetchAllUser();
      let modifiedRes = await axios.get(`${res.config.url}/6576b69d97c01f5ba8040ffa`);
  
      if (modifiedRes && modifiedRes.data) {
        setListStore(modifiedRes.data);
        console.log('stores: ', modifiedRes.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
   <div className="home-header">
        <img src={wellcomePic} alt="wellcome" className="welcome" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="home-container">
      <section className="button-section">
          <button className="action-button">Click me</button>
          <label for="dropdown" className="label">Chọn một tùy chọn:</label>
          <select className="selection-button" title='món ăn'>
            <option value="1">O 1</option>
            <option value="2">O 2</option>
            <option value="3">O 3</option>
          </select>
          <label className="radio-label">
            <input type="radio" name="radioGroup" className="radio-input" />
            Radio Button
          </label>
          <label className="radio-label">
            <input type="radio" name="radioGroup" className="radio-input" />
            Radio Button
          </label>
        </section>
        <ul className="image-list-store">
        {listStore.map((image) => (
          <li key={image.id}>
            <img src={`${baseURL}${image.imgStore}`} alt={`Ảnh ${image.id}`} />
            <p>{image.name}</p>
            <p>
              {typeof image.ratings === 'number'
                ? image.ratings % 1 !== 0
                  ? image.ratings.toFixed(2)
                  : image.ratings
                : image.ratings}{' '}
              <img src={starImage} alt="Star" style={{ width: '20px', height: '20px' }} />{' '}
              {image.numRated} reviews
            </p>
          </li>
        ))}
      </ul>
      </div>
      <Footer/>
    </>
  );
}

export default Payment;
