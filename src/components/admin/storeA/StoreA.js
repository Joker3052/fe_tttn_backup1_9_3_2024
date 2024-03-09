// Home.js

import React, { useEffect, useState } from 'react';
import wellcomePic from '../../../assets/images/slogan.png';
import { FetchAllStore } from '../../../Services/UserServices';
import { baseURL } from '../../../Services/axios-customize';
import starImage from '../../../assets/images/star.png';
import './StoreA';
function StoreA() {
  const [listStore, setListStore] = useState([]);
  useEffect(() => {
    getStore();
  }, []);

  const getStore = async () => {
    try {
      let res = await FetchAllStore();
      if (res && res.data) {
        setListStore(res.data);
        console.log('stores: ',res.data)
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
    </>
  );
}

export default StoreA;
