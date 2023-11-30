import {useState} from "react"
import {ImCross} from "react-icons/im"
import AnimationWrapper from "../common/page-animation"

const EditPost = () => {

         /** Add / Delete categories for post */

    const [cat,setCat] = useState("")
    const [cats,setCats] =useState([])

    const deleteCategory = (i)=>{
        let updatedCats =[...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
    }

    const addCategory = () =>{
        let updatedCats =[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }

  return (
    <AnimationWrapper>
    <div>
      <div className="px-6 md:px-[200px] mt-8">
            <h1 className="font-bold md:text-2xl text-xl">Edit Post</h1>
            <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
            <input type="text" placeholder="Enter Post Title" className="px-4 py-2 outline-none" />
            <input type="file" className="px-4"/>
            <div className="flex flex-col">
                <div className="flex items-center space-x-4 md:space-x-8 ">
                    <input value={cat} onChange={(e)=>setCat(e.target.value)} type="text" className="px-4 py-2 outline-none" placeholder="Enter Post Category" />
                    <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-lg" >Add</div>
                </div>
                
                {/* categories */}
                
                <div className="flex px-4 mt-3">
                    {cats?.map((c,i)=>(
                    <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-grey px-2 py-1 rounded-md">
                        <p>{c}</p>
                        <p onClick={deleteCategory} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"><ImCross/></p> 
                    </div>
                    ))}
                </div>
            </div>
            <textarea cols={30} rows={15} className="px-4 py-2 outline-none bg-grey" placeholder="Enter post description"/>
            <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl rounded-lg text-lg">Edit</button>
            </form>
        </div>
    </div>
    </AnimationWrapper>
  )
}

export default EditPost
