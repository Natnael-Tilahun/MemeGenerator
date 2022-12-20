import React,{useState, useEffect} from 'react'

const Form = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImageUrl: "/memeimg.png"
    });
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
            })
    }, []);

    function handleChange(e) {
        const {name, value} = e.target
        setMeme(prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    function getMemeImage() {
        const random = Math.floor(Math.random() * allMemes.length)
        const memeUrl = allMemes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImageUrl: memeUrl
        }))
    }    

  return (
    <div className='flex p-5 mt-10 flex-col justify-center text-white max-w-4xl mx-auto items-center lg:mt-20'>
        <div className='flex justify-center my-4 gap-2 md:gap-5 w-full text-black'>
             <input type="text" className='border-gray-200 border-2 px-3 py-1 rounded-md w-40 md:w-full' name='topText' value={meme.topText} placeholder='shut up' onChange={handleChange} />
            <input type="text" className='border-gray-200 border-2 px-3 py-1 rounded-md w-40 md:w-full' name='bottomText' value={meme.bottomText} placeholder='and take my money' onChange={handleChange}/>
        </div>
        <button className='bg-gradient-to-r from-[#601c79] to-[#A626D3] w-80 p-2 self-center rounded-md  md:w-full' onClick={getMemeImage}>Get a new meme image</button>
       <div className="uppercase font-extrabold text-center flex flex-col w-80 self-center mt-10 rounded-md h-[268px] md:h-[450px] bg-cover bg-no-repeat md:w-full justify-between p-8 text-2xl" style={{ backgroundImage: `url(${meme.randomImageUrl})`}} >
           <h1 className='text-2xl meme-text break-words md:text-5xl'>{meme.topText}</h1>
           <h1 className='text-2xl meme-text break-words md:text-5xl'>{meme.bottomText}</h1>
       </div>
    </div>
  )
}

export default Form