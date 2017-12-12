import App from '../components/App/App.js';
import {connect} from 'react-redux';
import getQuotes from '../redux/actions/get_quotes.js';
import addQuote from '../redux/actions/add_quote.js';
import watchIfQuoteAdded from '../redux/actions/watch_if_quote_added.js';



function mapStateToProps(state){
	return {
		quotes: state.quotes
		   }
}

function mapDispatchToProps(dispatch){
    watchIfQuoteAdded(dispatch);

	return {
		getQuotes : () => dispatch(getQuotes()),
		addQuote  : (quote,author) => dispatch(addQuote(quote,author))
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;