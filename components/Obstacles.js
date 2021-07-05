import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Obstacles = ({color,
     obstaclesWidth, 
     obstaclesHeight,
     gap,
     obstaclesLeft,
     randomBottom}) => {
    
    return (
        <>
        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstaclesWidth,
            height: obstaclesHeight,
            left: obstaclesLeft,
            bottom: randomBottom + obstaclesHeight + gap,
        }}>
        </View>
        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstaclesWidth,
            height: obstaclesHeight,
            left: obstaclesLeft,
            bottom: randomBottom,
        }}>
        </View>
        </>

    )
}

export default Obstacles;