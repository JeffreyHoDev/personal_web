"use client"
import { useState } from "react"
import { BsChevronDown, BsChevronUp  } from "react-icons/bs";

import "./style.css"

const CollapsibleCard = ({title, content, skills}) => {

    const [visible, setVisibility] = useState(false)
    return (
        <div className={` my-5 w-full`} >
            <h2 className={`${visible ? "linearcolor" : ""} text-2xl flex items-center py-3 px-3 cursor-pointer`} onClick={() => setVisibility(!visible)}><div className="circle"></div>{title} {visible ? <BsChevronUp /> : <BsChevronDown/>}</h2>
            {
                visible ? (
                    <p className={`${visible ? "animate" : ""} border-2 px-3 py-5 leading-10 text-lg font-extrabold`}>{content.split("\n").map((item,key) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                    <div className={` ${visible ? "animate" : ""} flex flex-wrap text-lg leading-10`}>
                        {skills.length > 0 ? skills.map((skill,i) => {
                            return (<h5 className="px-10" key={`skill-${i}`}>{skill}</h5>)
                        }): null}
                    </div>
                    </p>
                    
                ) : null  
            }
            

            
        </div>
    )
}

export default CollapsibleCard