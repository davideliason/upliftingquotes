import database from '../database.js';


export default function addQuote(quote,author){
	return dispatch => {
			dispatch(addQuoteRequestedAction());
			const quotesRef = database.ref('/quotes');
			quotesRef.push({
				quote,
				author,
			})
			.then(() => {
			    dispatch(addQuoteFulfilledAction())
			})
			.catch((error) => {
      console.log(error);
      dispatch(addQuoteRejectedAction());
    });
  }
}

function addQuoteRequestedAction(){
	return {
		type: 'AddQuoteRequested'
	}
}

function addQuoteRejectedAction(){
	return {
		type: 'AddQuoteRejected'
	}
}

function addQuoteFulfilledAction(){
	return {
		type: 'AddQuoteFulfilled',
	}
}