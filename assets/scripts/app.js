'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

// document on ready
$(() => {
  // JS ajax code
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#new-game-button').on('click', events.onNewGame)
})

// players
let currentPlayer = 'x'
//
if (currentPlayer === 'x') {
  currentPlayer = 'o'
} else {
  currentPlayer = 'x'
}

// number of games played
// const gamesPlayed = []
// playerOne always goes first
// gameArray = [0,1,2,3,4,5,6,7,8]

$(() => {
  // JS game code
  $('#0').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#1').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#2').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#3').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#4').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#5').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#6').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#7').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
  $('#8').on('click', function (event) {
    $(event.target).text(currentPlayer)
  })
})
