import ProfilePost from "../components/ProfilePost"



const Profile = () => {
  return (
    <div>
        <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start'>
        <div className='flex flex-col md:w-[70%] w-full mt-8 md:mt-0'>
            <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            </div>
            <div className='md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end'>
            <div className="flex flex-col space-y-4 items-start">
            <h1 className='text-xl font-bold mb-4 '>Profile</h1>
            <input className=' outline-none px-4 py-2 text-dark-grey' placeholder='Your Username' type="text" />
            <input className=' outline-none px-4 py-2 text-dark-grey' placeholder="Your Email" type="email" />
            <input className=' outline-none px-4 py-2 text-dark-grey' placeholder="Your Password" type="password" />
            <div className='flex items-center space-x-4 mt-8'>
                <button className='text-white font-semibold bg-black rounded-xl hover:text-black hover:bg-grey px-4 py-2'>
                    Update Information
                </button>
                <button className='text-white font-semibold bg-red rounded-xl hover:text-black hover:bg-grey px-4 py-2'>
                    Delete Account
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default Profile
