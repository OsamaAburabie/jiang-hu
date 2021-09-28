import Study from '@/components/Study';
import React, { useEffect, useState } from 'react';
import './Home.css';
export default function Home() {
  const [stars, setStars] = useState([
    {
      num: 1,
      attributes: '',
      connected: false,
    },
    {
      num: 2,
      attributes: '',
      connected: false,
    },
    {
      num: 3,
      attributes: '',
      connected: false,
    },
    {
      num: 4,
      attributes: '',
      connected: false,
    },
    {
      num: 5,
      attributes: '',
      connected: false,
    },
    {
      num: 6,
      attributes: '',
      connected: false,
    },
    {
      num: 7,
      attributes: '',
      connected: false,
    },
    {
      num: 8,
      attributes: '',
      connected: false,
    },
    {
      num: 9,
      attributes: '',
      connected: false,
    },
  ]);

  const [selectedStar, setSelectedStar] = useState(stars[0]);

  //sum all the values of the attributes of the stars
  const TotalAttribute = (attribute) => {
    // total of attribute values
    const sumOfValues = stars
      .filter((star) => star.attributes?.attribute === attribute)
      .map((star) => star.attributes.value)
      .reduce((prev, curr) => prev + curr, 0);
    //numnber of connected stars with same attribute
    const connected =
      stars.filter(
        (star) =>
          star.attributes?.attribute === attribute && star.connected === true
      ).length + 1;

    const total = (sum, con) => {
      if (con === 1) return sum;
      if (con === 2) return sum + sum * 0.1;
      if (con === 3) return sum + sum * 0.13;
      if (con === 4) return sum + sum * 0.15;
      if (con === 5) return sum + sum * 0.18;
      if (con === 6) return sum + sum * 0.21;
      if (con === 7) return sum + sum * 0.25;
      if (con === 8) return sum + sum * 0.3;
      if (con === 9) return sum + sum * 0.5;
    };
    return parseFloat(total(sumOfValues, connected)).toFixed(1);
  };

  //function to add attributes to stars
  const addAttribute = (num, attributes) => {
    const newStars = [...stars];
    newStars[num - 1].attributes = attributes;
    setStars(newStars);

    //set selected star to be the next star if the next star has empty attributes

    if (newStars[num]?.attributes === '') {
      setSelectedStar(newStars[num]);
    }

    for (let i = 0; i < stars.length - 1; i++) {
      if (
        stars[i]?.attributes?.attribute ===
          stars[i + 1]?.attributes?.attribute &&
        stars[i]?.attributes !== ''
      ) {
        const newStars = [...stars];
        newStars[i].connected = true;
        setStars(newStars);
      } else {
        const newStars = [...stars];
        newStars[i].connected = false;
        setStars(newStars);
      }
    }
  };

  //function to set selected star
  const selectStar = (num) => {
    //dont allow selecting next star if current and previous star are empty
    // if (selectedStar.attributes === '') {
    //   return;
    // }
    if (stars[num - 1].attributes === '') {
      return;
    }
    const star = stars.filter((star) => star.num === num);
    setSelectedStar(...star);
  };

  //function to switch on star colors
  const switchColor = (attribute) => {
    switch (attribute) {
      case 'M-attack':
        return 'bg-[#ff0000]';
      case 'P-attack':
        return 'bg-[#ffa500]';
      case 'HB':
        return 'bg-[#ffff00]';
      case 'breakthrough':
        return 'bg-[#008000]';
      case 'P-strike':
        return 'bg-[#0000ff]';

      default:
        return 'bg-[#333]';
    }
  };
  //function to switch on star border color
  const switchBorderColor = (quality) => {
    switch (quality) {
      case 'epic':
        return 'border-[12px] border-[#A83547]';
      case 'ultra':
        return 'border-[12px] border-[#E8A651]';
      case 'elite':
        return 'border-[12px] border-[#643CA8]';
      case 'unique':
        return 'border-[12px] border-[#3A7858]';
      case 'rare':
        return 'border-[12px] border-[#6380AA]';
      case 'normal':
        return 'border-[12px] border-[##B6B4B2]';

      default:
        return 'border-[12px] border-[#333]';
    }
  };
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full bg-gray-600 flex justify-center flex-wrap '>
        <div className='w-full h-[7rem] bg-[#222222] flex items-center justify-center'>
          {stars.map((star) => (
            <div className='flex items-center' key={star.num}>
              <div
                onClick={() => selectStar(star.num)}
                className={`${switchColor(
                  star.attributes.attribute
                )}  w-20 h-20 flex justify-center items-center rounded-full cursor-pointer m-2   ${switchBorderColor(
                  star.attributes.quality
                )} ${star == selectedStar ? 'glow' : ''}`}
              >
                {/* <h1 className='text-white'>{star.num}</h1> */}
              </div>
              {star.connected && <div className='w-8 h-2 bg-white'></div>}
            </div>
          ))}

          {/* button to addatts */}
        </div>
        <div className='w-full h-[calc(100%-7rem)] bg-gray-600  p-2'>
          <div className='w-full text-lg text-white'>
            <p>M-Attack: {TotalAttribute('M-attack')}</p>
            <p>P-Attack: {TotalAttribute('P-attack')}</p>
            <p>breakthrough: {TotalAttribute('breakthrough')}</p>
            <p>P-strike: {TotalAttribute('P-strike')}</p>
            <p>HB: {TotalAttribute('HB')}</p>
          </div>
          <button
            className='w-20 h-10 bg-yellow-400 mt-5'
            onClick={() => addAttribute(selectedStar.num, Study())}
          >
            Study
          </button>
        </div>
      </div>
    </div>
  );
}
