import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions'
import CreateCommentForm from './create_comment_form';

const mSTP = (state, ownProps) => ({

    comment: {
        author_id: state.session.id, 
        bill_id: ownProps.bill.id,
        body:''

    }
})

const mDTP = dispatch =>({
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CreateCommentForm)
