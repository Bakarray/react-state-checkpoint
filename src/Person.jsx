import { useState } from "react"

const Person = ({ fullName, bio, imgSrc, profession }) => {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-md p-4 w-[400px] mx-auto my-50">
        {
            show && 
            <>
                <img src={imgSrc} alt={fullName} />
                <div className="flex flex-col">
                    <h1>{fullName}</h1>
                    <p>{bio}</p>
                    <p>{profession}</p> 
                </div>
            </>
        }

        <button 
            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10"
            onClick={handleShow}
        >
            {show ? 'Hide' : 'Show'}
        </button>
    </div>
  )
}

export default Person