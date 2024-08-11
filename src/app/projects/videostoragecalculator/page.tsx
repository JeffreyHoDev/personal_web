"use client"

import Image from "next/image"
import { useState } from "react"
import "@/app/page.css"

const VideoStorageCalculatorPage = () => {
    const [enlargeImage, setEnlargeImage] = useState(false)

    return (
        <div className="w-screen background">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl py-10">Video Storage Calculator</h1>
                <h2 className="leading-relaxed text-xl">This is a personal project built to assist ex-colleagues whereby the question about how long video can be stored is repetitive from different clients, thus providing the tool to help client to understand the duration factored by video resolution and number of channels.</h2>
                <p className="leading-relaxed tracking-wide text-xl">
                    The web also provide video wall so end users can compare different video resolution and frame rate to get the look and feel.
                </p>
                <br/>
                <p className="text-2xl py-5 underline">
                    Technologies used in the project:
                </p>
                <ol>
                    <li className="text-xl font-medium">ReactJS</li>
                    <li className="text-xl font-medium">MaterialUI</li>
                </ol>
                <p className="leading-relaxed tracking-wide text-xl py-3">
                    The application is live now hosted in Github.
                </p>
                <a className="underline underline-offset-8 font-bold py-5 text-xl text-orange-300 hover:text-slate-300" href="https://jeffreyhodev.github.io/storage_video_bitrate_calculator/" target="_blank" rel="noopener noreferrer">View the Website</a>
                <div className="">
                    <Image 
                        src="/VideoCalculator.png" 
                        alt='Homepage of Video Calculator Website'
                        className='py-10 shadow-2xl shadow-slate-100 cursor-pointer' 
                        height={1000} width={1000}
                        onClick={e=> setEnlargeImage(!enlargeImage)} 
                    />
                </div>
            </div>
            {
                enlargeImage ? 
                    <Image 
                        src="/VideoCalculator.png" 
                        alt='Homepage of Video Calculator Website'
                        className='absolute cursor-pointer'
                        objectFit="cover" layout="fill"
                        onClick={e=> setEnlargeImage(!enlargeImage)}

                    />    
                : null
            }
            
        </div>
    )
}

export default VideoStorageCalculatorPage