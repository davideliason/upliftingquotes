
export default function quotesReducer(state={},action){
	switch(action.type){
		case 'GetQuotesRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'GetQuotesRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'GetQuotesFulfilled': {
			const {quotes} = action.quotes;
			const newState = Object.assign({},state,{
				inProgress: false,
				error: false
			});
			newState.quotes = [];
			if(quotes){
				newState.quotes = Object.keys(quotes).map(k => quotes[k]);
			}
			return newState;
		}

		case 'AddQuoteRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'AddQuoteRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'AddQuoteFulfilled': {
			return Object.assign({},state,{
				inProgress: false,
				error: false
			})
		}

		case 'quoteAdded': {
			const newState = Object.assign({}, state);
      		newState.quotes = newState.quotes || [];
      		newState.quotes = newState.quotes.slice();
      		newState.quotes.push(action.quote);
      		return newState;
		}

		default:
			return state;
	}
}

