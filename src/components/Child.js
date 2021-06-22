import { connect } from 'react-redux';
import {childAction} from '../actions/childActions';

export const Child = () => {

    return <>test</>;
}

// Map state to propes
 const mapStateToProps = state => ({
    data: state,
  });
  
  // Map Dispatch actions with propes
  const mapDispatchToProps = {
    childAction,
  };
  
  const ChildContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Child);

export default ChildContainer;