import React, { useState,useEffect } from 'react'

function Navbar() {

    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/world`

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      
    async function url (){
            const res = await fetch(api);
            const data1 = await res.json();
            console.log(data1);
setData(data1)
        };
        url()
    }, [])
    
    const handleClick = async()=>{
        const api1 = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        const res1 = await fetch(api1);
        const data2 = await res1.json();

        setData(data2)
    }

  return (
    <>
    <div className='dic'><h1>DICTIONARY APP</h1></div>
    <div className='back'>
        <div className='texy'>
    <label htmlFor="">Enter Any Text</label>
    <input onChange={(e)=>{
        setSearch(e.target.value)
    }} type="search"/>
    <button class="button-33" onClick={handleClick} role="button">Search 🔍</button>
    
        </div>
    </div>

    {data.map((pack)=>{
        return(
            <>
            <center>
                <div>
                    <div>Name: {pack.word}</div>
                    <div>Defination :{pack.meanings[0].definitions[0].definition}</div>
                </div>
            </center>
            
            </>
        )
    })}


    </>
  )

}

export default Navbar