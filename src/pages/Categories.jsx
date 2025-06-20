import React, { useState } from 'react';
import Header from '../components/Header';
const categories = [
  { name: 'Alternative', color: 'rgb(215, 0, 96)', subcategories: ['Indie Rock', 'Post-Punk', 'Synthpop'] },
  {
    name: 'Blues',
    color: 'rgb(229, 64, 40)',
    subcategories: [
      'Acoustic Blues',
      'Blues Rock',
      'Canadian Blues',
      'Jazz Blues',
      'Piano Blues',
      'Soul Blues',
      'Swamp Blues',
    ],
  },
  { name: 'Classical', color: 'rgb(241, 141, 5)', subcategories: ['Baroque', 'Romantic', 'Modern'] },
  { name: 'Country', color: 'rgb(242, 188, 6)', subcategories: ['Bluegrass', 'Honky Tonk', 'Outlaw Country'] },
  { name: 'Dance', color: 'rgb(94, 177, 28)', subcategories: ['House', 'Trance', 'Techno'] },
  { name: 'Electronic', color: 'rgb(58, 118, 52)', subcategories: ['Ambient', 'Dubstep', 'Drum & Bass'] },
  { name: 'Fitness & Workout', color: 'rgb(10, 190, 190)', subcategories: ['Cardio', 'HIIT', 'Strength'] },
  { name: 'Hip-Hop/Rap', color: 'rgb(0, 161, 203)', subcategories: ['Trap', 'Boom Bap', 'Conscious Rap'] },
  { name: 'Industrial', color: 'rgb(17, 87, 147)', subcategories: ['EBM', 'Noise', 'Synth Industrial'] },
];

const CategoriesAccordion = () => {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (index) => {
    setOpenCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="categories-container">
     <Header title="CATEGORIES"/>

      <h2 className="main-heading">Categories</h2>

      <div className="category-list">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            style={{ backgroundColor: cat.color }}
            onClick={() => toggleCard(index)}
          >
            <div className="card-content">
              <h3>{cat.name}</h3>
              <span className="dots">⋯</span>
            </div>
            {openCards[index] && (
              <ul
                className="subcategory-list"
                style={{ backgroundColor: cat.color }}
              >
                {cat.subcategories.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategoriesAccordion;
