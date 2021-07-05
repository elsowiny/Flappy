import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';
let screenWidthGlobal = Dimensions.get("screen").width;
export default function App() {
  const obstaclesWidth = 60;
  const obstaclesHeight = 300;
  const gap = 300;
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight/2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth/2 + 30);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(- Math.random() * 200);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(- Math.random() * 200);
  const [score, setScore] = useState(0);
  const gravity = 3;

  let gameTimerId;
  let obstaclesTimer;
  let obstaclesTimerTwo;
 const [isGameOver, setIsGameOver] = useState(false);
 // console.log(screenWidth);
  //console.log(screenHeight);

  //start bird falling
  useEffect(() => {
      if(birdBottom > 0){
        gameTimerId =  setInterval(()=>{

          setBirdBottom(birdBottom => birdBottom - gravity);
        }, 30)

        return () => {
          clearInterval(gameTimerId);
        }
      }

  }, [birdBottom])
//  console.log(birdBottom);

const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50);
      console.log("I flap my wings to fly");
    }
}

  // start first obstacles
  useEffect(() => {
        if(obstaclesLeft > -obstaclesWidth) {
          obstaclesTimer = setInterval(()=>{

            setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
          }, 30)

          return () => {
            clearInterval(obstaclesTimer);
          }
        }  else{
          setObstaclesLeft(screenWidth);
          setObstaclesNegHeight(- Math.random() * 200);
          setScore(score => score + 1);
        }
  }, [obstaclesLeft])


  //set second obstacle
  useEffect(() => {
    if(obstaclesLeftTwo > -obstaclesWidth) { 
      obstaclesTimerTwo = setInterval(()=>{

        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5);
      }, 30)

      return () => {
        clearInterval(obstaclesTimerTwo);
      }
    }  else{
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(- Math.random() * 200);
      console.log(obstaclesNegHeightTwo);
      setScore(score => score + 1);
    }
}, [obstaclesLeftTwo])


// check for collisions with obstacles
  useEffect(() => {
    if (
      ((birdBottom < (obstaclesNegHeight + obstaclesHeight + 30) ||
      birdBottom > (obstaclesNegHeight + obstaclesHeight + gap -30)) &&
      (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30 )
      )
      || 
      ((birdBottom < (obstaclesNegHeightTwo + obstaclesHeight + 30) ||
      birdBottom > (obstaclesNegHeightTwo + obstaclesHeight + gap -30)) &&
      (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30 )
      )
      ) 
      {
      console.log('game over')
      gameOver()
    }
      
  })


  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesTimer);
    clearInterval(obstaclesTimerTwo);
    setIsGameOver(true);
  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
      <ImageBackground source={require("./app/img/bg.png")} style={styles.background}>
    
      <Text>{score}</Text>
      
     <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
     />

    <Obstacles
         color={'purple'}
          obstaclesHeight={obstaclesHeight}
          obstaclesLeft={obstaclesLeft}
          obstaclesWidth={obstaclesWidth}
          randomBottom={obstaclesNegHeight}
          gap={gap}
    />
      <Obstacles
      color={'red'}
          obstaclesHeight={obstaclesHeight}
          obstaclesLeft={obstaclesLeftTwo}
          obstaclesWidth={obstaclesWidth}
          randomBottom={obstaclesNegHeightTwo}
          gap={gap}
    />
    </ImageBackground>
    </View>
    
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background : {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    width: screenWidthGlobal,
  }
});
//