import './allComments.css';
export const AllComments = ({comment}) => {
    // console.log('from', comment);
    return(
        <article className='article-comment'>
            <div className="comment-header">
                <img src={comment.commentOwnerId.profileImg} alt="author" />
                <div>
                <h2>{comment.commentOwnerId.username}</h2>
                <p><i className="fa-solid fa-star"></i> {comment.stars}</p>
                </div>
            </div>
            <div className="commented">
                <p>{comment.comment}</p>
            </div>
        </article>
    );
};