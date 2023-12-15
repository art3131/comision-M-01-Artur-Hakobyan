
import { API_URL } from "../utils/consts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimationWrapper from "../common/page-animation";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { useContext } from "react";
import { useRef } from "react";

const NewPost = () => {

  const ref = useRef(null)

  const navigate = useNavigate();

  const {auth} = useContext (AuthContext)
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target)

    const imageUrl = formData.get("imageUrl");
    const description = formData.get("description");
    const title = formData.get("title")
    const createdAt = Date.now()

    const post={
      imageUrl,
      description,
      title,
      createdAt
    }

    fetch(`${API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
      body: JSON.stringify(post),
    }).then((res) => {
      if (res.status !== 201) return alert("Error creating post");

      navigate("/");
    });
  };
  

  return (
    <div>
      <Navbar/>
        <AnimationWrapper>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
          <form ref={ref} onSubmit={handleSubmit} className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input name="title"  type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
          <input name="imageUrl"  type="url" placeholder='Enter post image' className='px-4 py-2 outline-none'/>
          <input name="description"  type="text" rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button type="submit" className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>
        </div>
        
    </AnimationWrapper>
        <Footer/>

      
    </div>
  )
}

export default NewPost
