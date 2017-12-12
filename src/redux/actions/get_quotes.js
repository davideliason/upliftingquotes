import database from '../constants/database.js'

export default function getQuotes() {
  return dispatch => {
    dispatch(getQuotesRequestedAction());
    return database.ref('/').once('value', snap => {
      const quotes = snap.val(); // FB DB object
      dispatch(getQuotesFulfilledAction(quotes))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getQuotesRejectedAction());
    });
  }
}


function getQuotesRequestedAction() {
  return {
    type: 'GetQuotesRequested'
  };
}

function getQuotesRejectedAction() {
  return {
    type: 'GetQuotesRejected'
  }
}

function getQuotesFulfilledAction(quotes) {
  return {
    type: 'GetQuotesFulfilled',
    quotes
  };
}