import { saveQuestion } from '../api/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTIONS,
    question
  }
}

export function answerQuestion (question) {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}


