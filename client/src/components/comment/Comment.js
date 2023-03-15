import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { createComment, getCommentById } from '../../services/commentService';
import { AllComments } from './AllComments';
import './comment.css';
export const Comments = () => {
    const { id } = useParams();
    const [coments, setComment] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(id);
    useEffect(() => {
        getCommentById(id)
            .then(com => {
                console.log(com);
                setComment(com)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    const submitComment = async (e) => {
        e.preventDefault();
        const {comment, stars} = Object.fromEntries(new FormData(e.target));
        let comented = {
            comment,
            stars,
            itemId: id,
        }
        try {
            const data = await createComment(comented);
            console.log('the coment data >>>', data);
            data.commentOwnerId = {
                _id: user._id,
                profileImg: user.profileImg,
                username: user.username,
            }
            console.log('after change>>>', data);
            setComment(state => [...state, data]);
        } catch (error) {
            console.log(error);  
        }
        
    }
    console.log(coments);
    console.log(">>>",user);
    return(
            <>
            <section className="commnet-section">
            {user._id ? 
            <form onSubmit={submitComment}>
                <h2>Create commnet</h2>
                <div className='labels'>
                    <label htmlFor="comment">Comment</label>
                    <label htmlFor="stars">Raiting</label>
                </div>
                <div className="form-input">
                    <input className='comment-input' type="text" id="comment" name="comment" placeholder="Enter comment"/>
                    <select name="stars" id="starts">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select> 
                <input className="btn primary-btn commentBtn" type="submit" value="Coment"/>
                </div>

                <div className="form-element">
                </div>
            </form>
            : <h2>Comment Section: </h2>}   
            {coments.length > 0 ?
             coments.map(c => <AllComments key={c._id} comment={c}></AllComments>)
            :
            <h2>No Comments!</h2>
            }
            </section>
            </>
    );
}
