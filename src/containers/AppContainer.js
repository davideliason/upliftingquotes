import App from '../components/App.js';
import {connect} from 'react-redux';
import getQuotes from '../redux/actions/get_quotes.js';

function mapStateToProps(state){
	return {
		quotes: state.quotes
		   }
}

function mapDispatchToProps(dispatch){
	return {
		getQuotes : () => dispatch(getQuotes())
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;