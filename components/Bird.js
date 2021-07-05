import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 50;
  const birdHeight = 60;
  return (
   <Image source={require("../images/budgie.png")} style={{
      position: 'absolute',
     // backgroundColor: 'blue',
      width: birdWidth,
      height: birdHeight,
      left: birdLeft - (birdWidth / 2),
      bottom: birdBottom- (birdHeight / 2),
   }}>

   </Image>
  );
}

export default Bird;