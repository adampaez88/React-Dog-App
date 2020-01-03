import React from 'react'

function Comments({addComment, comments}){
    const aComment = comments.map(comment => {
        return( 
            <div className='comment-list'>
                 <li>{comment}</li>
                 {/* <button>Update</button> */}
                 <button>Delete</button>
            </div>
           
        )
    })
    
    return(
        <ul>
            { 
                (comments.length > 0) 
                    ? aComment
                    : null
            }
        </ul>
    )
}
export default Comments;