import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = ({initialRating,  ratingSize = 19}) => {
  
  // Number of stars to display
  const totalStars = 5;

  // Array to hold the stars
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <Pressable key={i} style={{marginEnd: 2}}>
        <Icon
          name={i <= initialRating ? 'star' : 'star-o'}
          size={ratingSize}
          color={i <= initialRating ? '#FFD700' : '#808080'}
        />
      </Pressable>,
    );
  }

  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};

export default Rating;
