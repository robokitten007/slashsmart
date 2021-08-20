import React from 'react'


class CreateCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const {createComment} = this.props
        // this.setState({bill_id: bill.id})
        createComment(this.state)
        this.setState({body: ''})
    }

    update(field){
        return e=>this.setState({[field]: e.currentTarget.value})
    }


    render(){
    
       
        return(
            <div className='comment-form-container'>
                <form className='comment-form'onSubmit={this.handleSubmit} >
                    <textarea
                    placeholder='Add a comment'
                    value={this.state.body}
                    onChange={this.update('body')}/>
                    <button className='create-post-btn' type='submit'>Post</button>
                </form>
            </div>
        )
    }
}

export default CreateCommentForm