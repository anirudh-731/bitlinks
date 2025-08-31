"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

         fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your Short URLs</h1>
            <div className='flex flex-col gap-5'>
                <input type='url'
                    placeholder='Enter your URL'
                    value={url}
                    className='px-4 py-2 focus:outline-purple-700 rounded-md'
                    onChange={e => { seturl(e.target.value) }} />

                <input type='text'
                    className='px-4 py-2 focus:outline-purple-700 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    value={shorturl}
                    onChange={e => { setshorturl(e.target.value) }} />

                <button
                    onClick={generate}
                    disabled={url.length < 3 || shorturl.length < 1}
                    className={`rounded-lg shadow-lg p-3 py-1 my-2 font-bold ${url.length < 3 || shorturl.length < 1
                        ? 'bg-purple-400 text-gray-200 cursor-not-allowed'
                        : 'bg-purple-500 text-white hover:bg-purple-600'}`}>
                    Generate
                </button>
            </div>

            {generated && <><span className='font-bold text-lg'>Your Link: </span><code>
                <a
                    href={generated}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline">
                    {generated} </a>
            </code></>}
        </div>
    )
}

export default Shorten
