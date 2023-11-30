import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"

const Comment = () => {
  return (
    
      <div className="px-2 py-2 bg-grey rounded-lg my-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-dark-grey">@Art</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <p className="text-dark-grey text-sm">14/14/21</p>
                            <p className="text-dark-grey text-sm">14:14</p>
                             <div>
                                <p><BiEdit/></p>
                                <p><MdDelete/></p>
                            </div>
                        </div>
                    </div>
                    <p className="px-4 mt-2">
                    asdñsajdñfsajfg
                    </p>
                
    </div>
  )
}

export default Comment
