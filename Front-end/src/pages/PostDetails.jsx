
import AnimationWrapper from "../common/page-animation"
import Comment from "../components/Comment"

const PostDetails = () => {
  return (
    <AnimationWrapper>
    <div>
      
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl"> 10 uses of</h1>
                <div className="Flex items-center justify-center space-x-2">
                    <a href="/posts/post/delete/{:id}"><i className="fi fi-rr-trash"></i></a>
                    <a href="/posts/post/edit/{:id}"><i className="fi fi-rr-edit"></i></a>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@art</p>
                <div className="flex space-x-2">
                    <p>15/1/15</p>
                    <p>14:14</p>
                </div>
            </div>
            <img src="https://dibujando.net/files/fs/p/c/900x1000/2022/78/artoria_servant_483933.jpg" className="w-full mx-auto mt-8"/>
            <p className="mx-auto mt-8">POASFDKLÑASDGKASJDGÑAJSLGKHSAÑLKGJSDÑLKFGSDLÑKFGDJSÑLFKGHNSDFLÑKGSDÑLFGH</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex Justify-center items-center space-x-2">
                    <div className="bg-gray rounded-lg px-3 py-1 ">tech</div>
                    <div className="bg-gray rounded-lg px-3 py-1 "> ai</div>
                </div>    
            </div>
            <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* comment */}
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
               {/* write a comment */}     
            <div className="flex w-full flex-col mt-4 md:flex-row">
                <input className="md:w-[90%] outline-none px-4 mt-4 md:mt-0" placeholder="Write a comment" type="text" />
                <button type="submit" className="bg-black text-sm rounded-lg text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
            </div>
        </div> 
    </div>
    </AnimationWrapper>
  )
}

export default PostDetails
