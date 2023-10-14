export default function PoomiButton ({sendList}) {
    return(
        <div className='fixed w-full bg-opacity-50 backdrop-blur-md bottom-0 py-4 flex justify-center '>
        <button onClick={sendList} className=' w-3/4 px-5 p-3 border rounded-3xl font-semibold text-xl text-amber-800 bg-pink-200 border-amber-800'>Beam me up, Poomi 🎉</button>
      </div>
    )
}