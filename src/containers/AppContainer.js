import App from '../components/App/App.js';
import {connect} from 'react-redux';
import getQuotes from '../redux/actions/get_quotes.js';
import addQuote from '../redux/actions/add_quote.js';


function mapStateToProps(state){
	return {
		quotes: state.quotes
		   }
}

function mapDispatchToProps(dispatch){
	return {
		getQuotes : () => dispatch(getQuotes()),
		addQuote  : (x,y) => dispatch(addQuote(x,y))
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;