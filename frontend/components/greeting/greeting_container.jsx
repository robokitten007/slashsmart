import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => {
  return {
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
}}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting))