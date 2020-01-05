import React, { Component } from 'react'
import CommentForm from './CommentForm'

const comments = 'http://localhost:3000/comments'

class DogCard extends Component{

    state = {
        isClicked: false,
        comments: [],
        content: ''
    }

    componentDidMount(){
        fetch(comments)
            .then(respose => respose.json())
            .then(comments => this.setState({comments}))
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            content: event.target.value
        })
    }

    addComment = (comment) => {
        const {comments} = this.state
        this.setState({
            comments: [...comments, comment]
        })
        return(
            <li>{comment}</li>
        )
    }

    postExistingComments = () => {
        const {comments} = this.state
        console.log(comments)
        return comments.map(comment => {
            return(
                <ul>{this.addComment(comment)}</ul>
            )
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        // const formData = new FormData(event.target)
        // const comment = formData.get('content')
        console.log(comments)
        this.addComment(this.state.content)
        this.setState({
            content: '' 
        })
        // fetch(comments, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         content: comment,
        //         'user_id': 1,
        //         'dog_id': `${this.props.dog.id}`          
        //     }) 
        // })
    }
    
    render(){
        const {isClicked} = this.state
        const {dog} = this.props
        return(
            <div className='dog-card'>
                <img onClick={this.handleClick} src={dog.image_url} className='dog-pic'/>
                <h1 className='breed'>Breed: {dog.breed}</h1>
                {isClicked
                    ? <div>
                        <h4>Bred for: {dog.bred_for}</h4>
                        <h6>Life Span: {dog.life_span}</h6>
                        <h6>Temperament: {dog.temperament}</h6>
                        <h6>Height: {dog.height} </h6>
                        <h6>Weight: {dog.weight} </h6>
                        <p className='info-tag'>More Info: <a href={dog.info_url}>{dog.info_url}</a></p>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type='text' placeholder='Comments'
                                value={this.state.content} name='content'
                                onChange={this.handleChange} className='comment-input'
                            />
                            <input type='submit'/>
                        </form>
                        {this.state.comments && 
                            <CommentForm 
                                addComment={this.addComment} 
                                postExistingComments={this.postExistingComments}
                                comments={this.state.comments} 
                            />
                        }
                    </div>
                    : null
                }
                 
            </div>
        )
    }
}
export default DogCard;