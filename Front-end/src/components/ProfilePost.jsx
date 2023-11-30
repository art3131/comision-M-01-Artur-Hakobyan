import React from 'react'

const ProfilePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src="https://dibujando.net/files/fs/p/c/900x1000/2022/78/artoria_servant_483933.jpg" alt=""  className="h-full w-full object-cover"/>
        </div>
    {/* right */}
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            10 usees of artificial intelligence
            </h1>
            <div className="flex mb-2 text sm font-semibold text-dark-grey items-center justify-between  md:mb-4">
                <p>@art</p>
                <div className="flex space-x-2">
                    <p>15/1/15</p>
                    <p>14:14</p>

                </div>
            </div>
            <p className="text-sm md:text-lg">POST DESCRIPTION</p>
        </div>
    </div>
  )
}

export default ProfilePost
