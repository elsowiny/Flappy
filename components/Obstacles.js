import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


const Obstacles = ({color,
     obstaclesWidth, 
     obstaclesHeight,
     gap,
     obstaclesLeft,
     randomBottom}) => {
    
    return (
        <>
        <Image source={require("../images/pipeb.png")} style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstaclesWidth,
            height: obstaclesHeight+50,
            left: obstaclesLeft,
            bottom: randomBottom + obstaclesHeight + gap,
        }}>
        </Image>
        <Image source={require("../images/pipe.png")} style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstaclesWidth,
            height: obstaclesHeight,
            left: obstaclesLeft,
            bottom: randomBottom,
        }}>
        </Image>
        </>

    )
}

export default Obstacles;