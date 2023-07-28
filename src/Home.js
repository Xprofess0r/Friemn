import { useState ,useEffect} from 'react';

import useFetch from './usefetch';
import { useHistory } from 'react-router-dom';


const Home = () => {
      //  const{ data: posts,error,} = useFetch('http://localhost:8000/posts');
      
       const[isPending,setISPending]=useState(true);
       const history = useHistory();
       const [isPostCreated, setIsPostCreated] = useState(false);
       const [isEditing, setIsEditing] = useState(false);
       const[newUsername,setNewUsername] = useState("");
       const[usernames,setUsernames] = useState([]);
       const [showEditSuccessMessage, setShowEditSuccessMessage] = useState(false);
       const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
     

      //  const handleShare = (e) =>{
      //   e.preventDefault();
      //   const post = {title,body,username};
      //    //setISPending('true');

         const[newItem,setNewItem]=useState("");
         const[items,setItems]=useState([]);

         const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
         const [dislikes, setDislikes] = useState(0);
 
    const handleLike = () => {
      setLikes((prevLikes) => prevLikes + 1);
    };
  
    const handleDislike = () => {
      setLikes((prevLikes) => prevLikes - 1);
    };
  
  
    // Function to simulate small incremental likes and dislikes
    const simulateLikesAndDislikes = () => {
      setLikes((prevLikes) => prevLikes + Math.floor(Math.random() * 3)); // Increment likes by a random number between 0 and 4
      setDislikes((prevDislikes) => prevDislikes + Math.floor(Math.random() * 3)); // Increment dislikes by a random number between 0 and 2
    };
  
    // useEffect to update likes and dislikes every 5 seconds
    useEffect(() => {
      const interval = setInterval(simulateLikesAndDislikes, 10000); // Update likes and dislikes every 5 seconds
      return () => clearInterval(interval);
    }, []);
    
    // const backgroundStyles = {
    //   backgroundImage: 'url("/facebook/src/image/like.png")',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    // };]
  

  // const handleClick = () => {
  //   fetch('http://localhost:8000/posts/' + post.id, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     setShowDeleteSuccessMessage(true);
  //     setTimeout(() => {
  //       history.push('/');
  //     }, 3000);
  //   });
  // };

  const toggleEditMode = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  // const handleShare = async (e) => {
  //   e.preventDefault();
  //   const updatedPost = { ...post, body };

  //   try {
  //     const response = await fetch(`http://localhost:8000/posts/${id}`, {
  //       method: 'PUT',
  //       headers: { 'Content-type': 'application/json' },
  //       body: JSON.stringify(updatedPost),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     setShowEditSuccessMessage(true);
  //     setTimeout(() => {
  //       setShowEditSuccessMessage(false);
  //     }, 3000);

  //     setPost(updatedPost);
  //     toggleEditMode();
  //   } catch (error) {
  //     console.error('Error updating post:', error);
  //   }
  // };
       
         function addItem(){
          if(!newItem || !newUsername){
            alert("Enter both an item and a username");
            return;
          }
           const item ={
             id:Math.floor(Math.random()*1000),
             value:newItem,
             username:newUsername,
           };
        
         setItems(oldList => [...oldList,item]);
         setNewItem("");
         setNewUsername("");
                
         console.log(items)
        
        
         }
       
    //     fetch('http://localhost:8000/posts',{
    //        method:'POST',
    //        headers:{"Content-type":"application/json"},
    //        body:JSON.stringify(post)
    //     }).then(()=>{
    //        console.log('new post added');
    //        //setIsPending(false);
    //   setIsPostCreated(true);
    //   setTimeout(() => {
    //     setIsPostCreated(false);
    //     window.location.reload();
    //   }, 1000);
    // });
          
    //   }
    //     useEffect(() => {
        
    //      setTimeout(() => {
    //        setISPending(false); // Set loading state to false after data is fetched (simulated with a delay)
    //      }, 1000);
    //    }, []);
    const handleDelete = (id) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setShowDeleteSuccessMessage(true);
      // setTimeout(() => {
      //   setShowDeleteSuccessMessage(false);
      // }, 3000);
    };
   
   useEffect(() => {
    setISPending(false);
   },[]);

    return (
      <div className="dashBoard">
        
        <label>
          <input
            className="username"
            type="text"
            placeholder="username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
        <button id="share" onClick={addItem}>
          Share
        </button>
    
        <textarea
          type="text"
          placeholder="Create your post"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        ></textarea>
        <div className='blog-details'>
        {items.map((item) => (
          <article key={item.id}>
            {isEditing ? (
              <form>
                <textarea
                  defaultValue={item.value}
                  name="body"
                  onChange={(e) => setNewItem(e.target.value)}
                  required
                ></textarea>
              
                <div className="edit">
                  <button type="submit" onClick={() => addItem()}>
                    Save
                  </button>
                  <button onClick={toggleEditMode}>Cancel</button>
                </div>
              </form>
            ) : (
              <>
                
                <div className="container">
                 <h3>{item.username}</h3>
                <div className='edit-delete'>
                  <button className="edit-button" onClick={toggleEditMode}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
              </div>
                  <h4>{item.value}</h4>
                  <div className="react">
                  <button className="like-button" onClick={handleLike}></button>
                  <button className="dislike-button" onClick={handleDislike}></button>
                </div>
                <span>Liked by {item.username} and {likes} others</span>

                
                </div>
               
              </>
            )}
            {showEditSuccessMessage && <h2 className="warning">Post edited successfully</h2>}
            {showDeleteSuccessMessage && <h2 className="warning">Deleting your post...</h2>}
          </article>
        ))}
      </div>
      </div>
    );
    
}
 
export default Home;