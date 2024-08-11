import type { Metadata } from 'next';
import ArtCard from '@/app/ui/artCard'
import '@/app/page.css'
import './page.css'


export const metadata: Metadata = {
    title: "Project Sins Digital Art",
    description: "This page shows the digital arts for ongoing game development project named Project Sins",
  };


const ProjectSinsDigitalArt = () => {
    return (
        <div className={`digital-art-container background w-screen h-screen`}>
            <div className={`info-container flex flex-col items-center`}>
                <h1 className={`text-6xl py-10`}>Project Sins (Game)</h1>
                <p className={`text-2xl`}>This is an undergoing personal game development project. Below are my digital artworks that might or might not be used in the game.</p>
                <div className='pixel-art-container text-center'>
                    <h3 className='text-4xl py-6'>Pixel Art</h3>
                    <div className='pixel-art-section'>
                        <ArtCard title="Main Character Idling v1" description='The idling animation of main character when holding dual daggers, which will be the 1st weapon character has in the game' alt="Main char holding two daggers standing idle" imagePath='/projectsins/Idle.gif' width={200} height={100}/>
                        <ArtCard title="Main Character Stabbing v1" description='The Stabbing animation of main character when holding dual daggers, perform two stabs first and followed up by dash stab which most likely will launch character forward in the game' alt="Main char stabbing three times with two daggers" imagePath='/projectsins/Stab.gif' width={200} height={100}/>
                        <ArtCard title="Main Character Running v1" description='The Running animation of main character when holding dual daggers' alt="Main char running with daggers" imagePath='/projectsins/Run.gif' width={200} height={100}/>


                    </div>
                </div>
                <div className='concept-art-container text-center'>
                    <h3 className='text-4xl py-6'>Concept Art</h3>
                    <div className='concept-art-section w-max'>
                        <ArtCard title="The Pyramid" description='The location at which one of the boss monster will be at' alt="Main char arrive at the pyramid" imagePath='/projectsins/Pyramid.png' width={400} height={100}/>
                        <ArtCard title="Greedmud (Temp)" description='Monster bornt with greed. Coins are all over the body and firmly attached' alt="Mud body with coins all over" imagePath='/projectsins/Greedmud.png' width={400} height={100}/>
                        <ArtCard title="Hawk (Temp)" description='Monster bornt with envy. Desire to be free and powerful' alt="Hawk wing with muscular body to symbolize" imagePath='/projectsins/Hawk.png' width={300} height={100}/>
                        <ArtCard title="Multihand (Temp)" description='Monster bornt with sloth and greed. Desire to walk without needing to walk by leg themselves, be powerful without the need of training, and the greed to have more arms to do things' alt="Weak being with multiple strong arms" imagePath='/projectsins/Multihand.png' width={300} height={100}/>
                        <ArtCard title="Soulless (Temp)" description='Monster without soul or desires, consider the pre-form of any monster and just unconciously attacking' alt="Small abstract kind of monster" imagePath='/projectsins/Soulless.png' width={300} height={100}/>
                        <ArtCard title="Troll (Temp)" description='Monster envy with physically powerful and angry' alt="Muscular monster looks like troll" imagePath='/projectsins/Troll.png' width={300} height={100}/>
                        <ArtCard title="Wrath (Temp)" description='Monster that always angry, thus the name. Always want for destruction of surrounding' alt="Very muscular and powerful monster that anger all the time" imagePath='/projectsins/Wrath.png' width={300} height={100}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectSinsDigitalArt