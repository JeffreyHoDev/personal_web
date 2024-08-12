import type { Metadata } from 'next';
import ArtCard from '@/app/ui/artCard'
import '@/app/page.css'
import './page.css'


export const metadata: Metadata = {
    title: "Other Digital Art",
    description: "This page shows the other digital arts I produced",
  };


const DigitalArtPage = () => {
    return (
        <div className={`digital-art-container background w-screen h-screen`}>
            <div className={`info-container flex flex-col items-center`}>
                <h1 className={`text-6xl py-10`}>Digital Arts</h1>
                <div className='pixel-art-container text-center'>
                    <div className='pixel-art-section'>
                        <ArtCard title="Starfall" description='A couple looking at the starfall during the night on hill, create romantic atmosphere' alt="Couple looking at starfall" imagePath='/Starfall.png' width={400} height={100}/>
                        <ArtCard title="Meowboo" description='Zenless Zone Zero game fan art, one of the participate production. Concept of combining the cunning cat and Bangboo from the game' alt="ZZZ game fan art 1" imagePath='/Meowboo.png' width={400} height={100}/>
                        <ArtCard title="Punkboo" description='Zenless Zone Zero game fan art, one of the participate production. Concept of combining punk style with Bangboo from the game' alt="ZZZ game fan art 2" imagePath='/Punkboo.png' width={400} height={100}/>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default DigitalArtPage