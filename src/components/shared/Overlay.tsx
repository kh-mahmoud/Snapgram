import Lottie from 'lottie-react'
import loader from "@/../public/assets/lotties"


const Overlay = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center absolute z-[1000]'>
        <div className='flex flex-col items-center'>
            <Lottie loop={true} style={{height:'100px',width:'100px'}} animationData={loader}/>
            <p className='font-inter text-lg'>Loading...</p>

        </div>
    </div>
  )
}

export default Overlay