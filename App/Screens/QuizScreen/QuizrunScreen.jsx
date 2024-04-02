import React, { useState } from 'react'
import { View, Text , TouchableOpacity, StyleSheet, Image} from 'react-native'
import { useEffect } from 'react'


const QuizrunScreen = (props)=> {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore , setShowScore] = useState(false);

  const quizData = [
  {
    question: "1.Which planet is closest to the Sun?",
    options: ['Mercury','Venus','Earth','Mars'],
    answer: 'Mercury'
  },
{
    question: "2.How many planets are there in our solar system?",
    options: ['7','8','9','10'],
    answer: '7'
  },
{
    question: "3.Which planet is known as the 'Red Planet'?",
    options: ['Mars','Venus','Jupiter','Saturn'],
    answer: 'Mars'
  },
{
    question: "4.Which planet is the largest in our solar system?",
    options: ['Jupiter','Saturn','Uranus','Neptune'],
    answer: 'Jupiter'
  },
{
  question: "5.Which planet is the smallest in our solar system?",
  options: ['Mercury','Venus','Earth','Mars'],
  answer: 'Mercury'
},
{
  question: "6.What is the name of the moon that orbits Earth?",
  options: ['Phobos','Deimos','Luna','Io'],
  answer: 'Luna'
},
{
  question: "7.What is the name of the largest asteroid in our solar system?",
  options: ['Ceres','Pallas','Vesta','Hygiea'],
  answer: 'Ceres'
},
{
  question: "8.What is the name of the comet that is visible from Earth every 76 years?",
  options: ['Halley\'s Comet','Hale-Bopp Comet','Hyakutake Comet','Shoemaker-Levy 9'],
  answer: 'Halley\'s Comet'
},
{
  question: "9.What is the name of the first person to walk on the moon?",
  options: ['Neil Armstrong','Buzz Aldrin','Michael Collins','Yuri Gagarin'],
  answer: 'Neil Armstrong'
},
{
  question: "10.What is the name of the space agency of the United States?",
  options: ['NASA','ESA','JAXA','Roscosmos'],
  answer: 'NASA'
}
]

const handleAnswer = (selectedAnswer) => {
  const answer = quizData[currentQuestion]?.answer;
  if(answer === selectedAnswer){
    setScore((prevScore) => prevScore + 1 );
  }

  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < quizData.length) {
    setCurrentQuestion(nextQuestion);
  }else{
    setShowScore(true);
  }
}

const handleRestart = () => {
  setCurrentQuestion(0);
  setScore(0);
  setShowScore(false);
}

  return (
    <View style={styles.container}>
    {showScore ? <View style={styles.scoreContainer}> 
    <Text style={styles.text}>SCORE BOARD</Text>
    <Text style={styles.score}> {score} </Text>
    <TouchableOpacity style={styles.resetContainer} onPress={handleRestart}>
      <Text style= {styles.reset} >Reset</Text>
    </TouchableOpacity>
    
    </View> : 
          <View style={styles.questionContainer}>
          <Text style={styles.question}>{quizData[currentQuestion]?.question}</Text>
          {quizData[currentQuestion]?.options.map((item) => {
            return <TouchableOpacity onPress={()=> handleAnswer(item)}>
              <Text style={styles.options}> {item} </Text>
            </TouchableOpacity>
          })}
          </View>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#defcf9',
    width: "100%",
    height: "100%",
  },
  questionContainer: {
    color: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  question: {
    fontSize: 30,
  },
  options: {
    fontSize: 25, 
    backgroundColor: '#c3bef0',
    borderRadius: 15,
    marginTop: 20,
    textAlign: 'center',
    height: 45,
    width: '100%',    
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  reset: {
    fontSize: 25, 
    textAlign: 'center',
    alignSelf: 'center',   
  },
  resetContainer: {
    // fontSize: 25, 
    backgroundColor: '#c3bef0',
    borderRadius: 15,
    marginTop: 20,
    height: 45,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  scoreContainer: {
    marginTop: 10,
    width: '50%',
  },
  score: {
    fontSize: 75, 
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '500',
    alignSelf:"center"
  }
});

export default QuizrunScreen;          