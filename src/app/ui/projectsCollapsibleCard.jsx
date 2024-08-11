"use client"
import { useState } from "react"
import { BsChevronDown, BsChevronUp, BsBoxArrowInUpRight   } from "react-icons/bs";
const ProjectsCollapsibleCard = ({title}) => {
    const [visible, setVisibility] = useState(false)
    const [showTelematicsDetail, setShowTelematicsDetail] = useState(false)
    return (
        <div className="my-5 w-full">
            <h4 className={` ${visible ? "linearcolor" : ""}  flex items-center w-full text-2xl  py-3 px-3 cursor-pointer`} onClick={() => setVisibility(!visible)}>{title} {visible ? <BsChevronUp /> : <BsChevronDown/>}</h4>
            {
                visible ? (
                    <div className={`px-3 py-5 leading-loose font-extrabold border-2 ${visible ? "animate" : "" }`}>
                        <h5 >The following are some projects I involved with, some are personal, practice, and some are for business</h5>
                        <ul className={`list-disc text-lg leading-10`} >
                            <li className="flex items-center text-slate-900 font-extrabold"><a href="/projects/sgbuscheck" target="_blank" rel="noopener noreferrer">SGBus_Check</a><BsBoxArrowInUpRight/></li>
                            <li className="flex items-center text-slate-900 font-extrabold"><a href="/projects/videostoragecalculator" target="_blank" rel="noopener noreferrer">Video Storage Calculator</a><BsBoxArrowInUpRight/></li>
                            <li className={`${showTelematicsDetail ? "text-slate-900" : ""} flex items-center cursor-pointer`} onClick={e => setShowTelematicsDetail(!showTelematicsDetail)}>Telematics API endpoint {showTelematicsDetail ? <BsChevronUp /> : <BsChevronDown/>}</li>
                            {
                                showTelematicsDetail ?    
                                <div className={`animate px-5 border-2 border-dashed`}>
                                    <p className="py-5">This project is from my ex-employer. The client request for API endpoint from a vendor software program. I am involved to extract the data from database and create my own RESTful API endpoint for query. </p>
                                    <p className="py-5 underline">
                                        Technologies used in the project:
                                    </p>
                                    <ol className="px-10 leading-8 list-disc">
                                        <li className="font-medium">ExpressJS</li>
                                        <li className="font-medium">KnexJS</li>
                                        <li className="font-medium">SQL on Clickhouse</li>
                                    </ol>
                                </div>: null

                            }
                        </ul>
                    </div>
                ) : null  
            }
            

            
        </div>
    )
}

export default ProjectsCollapsibleCard