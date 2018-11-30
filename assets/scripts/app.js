'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
const gameLogic = require('./gamelogic.js')

// document on ready
$(() => {
  // Auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Game events
  $('#create-game-button').on('click', gameEvents.onCreateGame)
  $('#get-game-button').on('click', gameEvents.onGetGame)
  // $('.box').on('click', gameEvents.onUpdateGame)
  gameLogic.gameLogic()
})
