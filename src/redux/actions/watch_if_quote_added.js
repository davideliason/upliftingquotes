import database from '../constants/database.js';

export default function watchIfQuoteAdded(dispatch) {
  database.ref('/quotes').on('child_added', (snap) => {
    dispatch(getQuoteAddedAction(snap.val()))
  });
}

function getQuoteAddedAction(quote){
	return {
		type: 'quoteAdded',
		quote
	};
}


