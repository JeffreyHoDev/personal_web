import Image from "next/image";

type ArtProps = {
    title: string;
    description: string;
    imagePath: string;
    width: number;
    height: number;
    alt: string;
};


const ArtCard = ({title, description, alt, imagePath, width, height} : ArtProps) => {
    return (
        <div className={`flex flex-col justify-center items-center border-2`}>
            <Image 
                src={imagePath}
                alt={alt}
                width={width}
                height={height}
                className='py-5'
            />
            <div className="info-section px-2 pt-5 bg-slate-800">
                <h4 className="text-lg font-extrabold">{title}</h4>
                <p className="text-wrap leading-7 py-5 text-center font-semibold">{description}</p>
            </div>
        </div>
    )
}

export default ArtCard;