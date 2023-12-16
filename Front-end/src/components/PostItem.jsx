import { Link } from "react-router-dom";
import styles from "../styles/Post.module.css";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { useId } from "react";
import DeletePostModel from "./DeletePostModel";

const PostItem = ({ post, getPost }) => {
  const modalId = useId();
    const CreatedAt = new Date(post.createdAt)
   

  
  


  return (
    <div
    key={post._id}
    className={styles.item}
    onClick={(e) => {
      // stop propagation to avoid triggering the onClick of the parent

      e.stopPropagation();

      onClick();
    }}
  >
    <div>
      <div className="Container-box">
        <div className="card">
            <div>
            <h5 className="card-title">
                {post.title}
            </h5>
        </div>
        <img src={post.imageUrl} alt="post image" className="card-img-top" />
        <div className="card-body">
            <p className="card-text">{post.description}</p>
        </div>
        <div className="date">
            <p className="date-text"> Posted: {CreatedAt.toLocaleDateString()} </p>
        </div>
      </div>
        
        
        <div>
        <Link
          style={{ fontSize: "30px", color: "green" }}
          className="font-warning"
        >
          
          
          <HiOutlinePencilAlt />
        </Link>
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          data-bs-toggle="modal"
          data-bs-target={"#modal" + post._id}
          style={{ fontSize: "30px", color: "red" }}
        >
          <HiOutlineTrash />
        </Link>

        <DeletePostModel
          getPost={getPost}
          modalId={modalId}
          postId={post._id}
        />
      </div>
      </div>
      {post.comments.map((comment)=>{
        return(
            <div id="list-example" className="list-group">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">
                    <p id="list-item-1"> {comment.author.username}:</p>
                    <p> {comment.description}</p>
                </div>
                
            </div>
        )
      })}
      </div> 
      </div> 
  );
};

export default PostItem;