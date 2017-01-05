import { connect } from 'react-redux';
import Signup from '../../components/auth/signup';


const mapDispatchToProps = () => ({
  handleSubmitForm: (values, dispatch, props) => {
    console.log(values, dispatch, props);
  }
});

export default connect(mapDispatchToProps)(Signup);
