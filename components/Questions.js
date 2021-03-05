import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Questions() {
  const questSet =
  [
    //Set One//
    { number: 1,
      question: "Given the choice of anyone in the world, who would you want as a dinner guest?"},
    { number: 2,
      question: "Would you like to be famous? In what way?"},
    { number: 3,
      question: "Before making a telephone call, do you ever rehearse what you are going to say? Why?"},
    { number: 4,
      question: "What would constitute a 'perfect' day for you?"},
    { number: 5,
      question: "When did you last sing to yourself? To someone else?"},
    { number: 6,
      question: "If you were able to live to the age of 90 and retain either the mind or the body of a 30-year-old for the last 60 years of your life, which would you want?"},
    { number: 7,
      question: "Do you have a secret hunch about how you will die?"},
    { number: 8,
      question: "Name three things you and your friend appear to have in common."},
    { number: 9,
      question: "For what in your life do you feel most grateful?"},
    { number: 10,
      question: "If you could change anything about the way you were raised, what would it be?"},
    { number: 11,
      question: "Take 4 minutes and record your life story in as much detail as possible."},
    { number: 12,
      question: "If you could wake up tomorrow having gained any one quality or ability, what would it be?"},
    //Set Two//
    { number: 13,
      question: "If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, would you want to know?"},
    { number: 14,
      question: "Is there something that you've dreamed of doing for a long time? Why haven't you done it?"},
    { number: 15,
      question: "What is the greatest accomplishment of your life?"},
    { number: 16,
      question: "What do you value most in friendship?"},
    { number: 17,
      question: "What is your most treasured memory?"},
    { number: 18,
      question: "What is your most terrible memory?"},
    { number: 19,
      question: "If you knew that in one year you would die suddenly, would you change anyhing about the way you are now living? Why?"},
    { number: 20,
      question: "What does friendship mean to you?"},
    { number: 21,
      question: "What roles do love and attention play in your life?"},
    { number: 22,
      question: "Share 5 positive characteristics of  your friend."},
    { number: 23,
      question: "How close and warm is your family? Do you feel your childhood was happier than most other people's?"},
    { number: 24,
      question: "How do you feel about your relationship with your mother?"},
  //Set Three//
    { number: 25,
      question: "Make 3 true 'we' statements. For instance 'We are both looking for a deep connection.'"},
    { number: 26,
      question: "Complete this sentence: 'I wish I had someone with whom I could share..."},
    { number: 27,
      question: "If you are going to be close friends, what is important for your friend to know?"},
    { number: 28,
      question: "Tell your friend what you like about them; be very honest saying things that you might not say to someone your not close with."},
    { number: 29,
      question: "Share with your friend an embarassing moment in your life."},
    { number: 30,
      question: "When did you last cry in front of another person? By yourself?"},
    { number: 31,
      question: "Share something you've learned that you like about your friend since starting this process."},
    { number: 32,
      question: "What, if anything, is too serious to be joked about?"},
    { number: 33,
      question: "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven't you told them yet?"},
    { number: 34,
      question: "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?"},
    { number: 35,
      question: "Of all the people in your family, whose death would you find the most disturbing? Why?"},
    { number: 36,
      question: "Share a personal problem and ask your friend's advice on how they might handle it. Also, ask your friend to reflect back to you how you seem to be feeling about the problem you have chosen."},
  ]
  // const askQuestion = () => {

  //   }


  return (
    <View>
      <Text style={styles.text}>{questSet[33].question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 40,
  },
})

export default Questions;