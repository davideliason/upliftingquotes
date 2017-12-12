
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

		case 'AddQuotesRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'AddQuotesRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'AddQuotesFulfilled': {
			return Object.assign({},state,{
				inProgress: false,
				error: false
			})
		}

		default:
			return state;
	}
}

