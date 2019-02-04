import { bindActionCreators } from 'redux'; // Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
import { connect } from 'react-redux'; // connects a React component to a Redux store
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';


// mapStateToProps / mapDispatchToProps explanation: https://medium.com/ovrsea/mapstatetoprops-and-why-you-may-not-need-mapdispatchtoprops-as-a-beginner-dd012a3da5e6
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
