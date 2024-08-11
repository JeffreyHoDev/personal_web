"use client"
import { useState } from "react"
import { BsChevronDown, BsChevronUp, BsBoxArrowInUpRight   } from "react-icons/bs";
const DigitalArtCollapsibleCard = ({title}) => {
    const [visible, setVisibility] = useState(false)

    return (
        <div className="my-5 w-full">
            <h4 className={`${visible ? "linearcolor" : ""}  flex items-center  w-full text-2xl py-3 px-3 cursor-pointer`} onClick={() => setVisibility(!visible)}>{title} {visible ? <BsChevronUp /> : <BsChevronDown/>}</h4>
            {
                visible ? (
                    <div className={`px-3 py-5 leading-loose font-extrabold border-2 ${visible ? "animate" : "" }`}>
                        <h5>Sometimes during my free time I also produce some digital arts just for fun and some are used for personal game assets</h5>
                        <ul>
                            <li className="flex items-center text-slate-900 font-extrabold"><a href="/digitalarts/projectsins" target="_blank" rel="noopener noreferrer">Project Sins (Game)</a><BsBoxArrowInUpRight/></li>
                            <li className="flex items-center text-slate-900 font-extrabold"><a href="/projects/videostoragecalculator" target="_blank" rel="noopener noreferrer">Others</a><BsBoxArrowInUpRight/></li>
                        </ul>

                    </div>
                ) : null  
            }
            

            
        </div>
    )
}

export default DigitalArtCollapsibleCard