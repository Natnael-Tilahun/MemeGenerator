import React,{useState} from 'react'

const Form = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const input1ChangeHandler=(e)=>{
        setInput1(e.target.value)
    }
    const input2ChangeHandler=(e)=>{
        setInput2(e.target.value)
    }
  return (
    <div className='flex p-5 mt-10 flex-col justify-center text-white max-w-lg mx-auto items-center lg:mt-20'>
        <div className='flex justify-center my-4 gap-2 md:gap-5 w-full text-black'>
             <input type="text" className='border-gray-200 border-2 px-3 py-1 rounded-md w-40 md:w-full' value={input1} placeholder='shut up' onChange={input1ChangeHandler} />
            <input type="text" className='border-gray-200 border-2 px-3 py-1 rounded-md w-40 md:w-full' value={input2} placeholder='and take my money' onChange={input2ChangeHandler}/>
        </div>
        <button className='bg-gradient-to-r from-[#601c79] to-[#A626D3] w-80 p-2 self-center rounded-md  md:w-full'>Get a new meme image</button>
       <div className="uppercase font-extrabold text-center flex flex-col bg-[url('/memeimg.png')] w-80 self-center mt-10 rounded-md h-[268px] bg-cover bg-auto bg-no-repeat md:w-full justify-between p-8 text-2xl">
           <h1 className=''>{input1}</h1>
           <h1>{input2}</h1>
       </div>
    </div>
  )
}

export default Form