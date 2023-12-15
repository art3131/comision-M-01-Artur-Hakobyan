import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { API_URL } from "../utils/consts"
import Post from "../components/Post"
import { useCallback, useState,useEffect } from "react"
import styles from "../styles/Post.module.css"

const Home = () => {
    
    const [posts,setPosts]=useState()
    const getPost = useCallback(()=>{
      fetch(`${API_URL}/post`,{
        headers:{
          "Content-Type":"application/json"
          
        }
      })
      .then((res)=>res.json())
      .then((data)=>setPosts(data))
      .catch((err)=>console.log(err))
    })
    useEffect(()=>{
      getPost()
    })
    return (
    
      <>
      <Navbar/>
      <div className={styles.container}>
        <h1 className={styles.h1}>Titulo</h1>
    {/*    {posts.length === 0 ?<p className={styles.p}>Posts not found</p> : null }*/}
        <main className="">
          <Post getPost={getPost} posts={posts}/>
        </main>
      </div>
      <Footer/>
      </>
      
    )
  }
export default Home