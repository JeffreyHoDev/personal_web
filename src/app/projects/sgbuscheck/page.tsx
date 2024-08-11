import Image from 'next/image'
import "@/app/page.css"
const SGBusCheckPage = () => {
    return (
        <div className="h-max w-screen background">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl py-10">SGBus_Check</h1>
                <h2 className="leading-relaxed text-xl">This is a personal project, powered by <b>React Native</b> and <b>LTA DataMall API</b>.</h2>
                <p className="leading-relaxed tracking-wide text-xl">
                    The application shows end user the arrival time of specific bus service and specific bus stop. Google Map is utilized to display the location of user and bus stop nearby so users can easily locate the bus stop they looking for.
                </p>
                <br/>
                <p className="text-2xl py-5 underline">
                    Technologies used in the project:
                </p>
                <ol className='list-disc'>
                    <li className="text-xl font-medium">React Native</li>
                    <li className="text-xl font-medium">styled-components</li>
                    <li className="text-xl font-medium">Expo</li>
                    <li className="text-xl font-medium">Google Map API</li>
                    <li className="text-xl font-medium">LTA DataMall API</li>
                </ol>
                <p className="leading-relaxed tracking-wide text-xl py-3">
                    The application has been launched in Google Play Store. Available only in Singapore Region.
                </p>
                <a className="underline underline-offset-8 py-5 text-xl text-slate-900 font-extrabold hover:text-slate-300" href="https://play.google.com/store/apps/details?id=com.jeffreyhodev.sgbus_check&hl=en" target="_blank" rel="noopener noreferrer">Download here in Google Play Store</a>
                <Image 
                        src="/SGBusLogo.png" 
                        alt='Logo of SGBus_Check'
                        width={200}
                        height={200}
                        className='py-10 shadow-2xl shadow-slate-100'
                        
                    />
                <div className='flex'>
                    <Image 
                        src="/First.png" 
                        alt='First Image of SGBus_Check'
                        width={500}
                        height={1000}
                        className='px-5 py-3'
                        
                    />
                    <Image 
                        src="/Second.png" 
                        alt='First Image of SGBus_Check'
                        width={500}
                        height={1000}
                        className='px-5 py-3'
                       
                    />
                    <Image 
                        src="/Third.png" 
                        alt='First Image of SGBus_Check'
                        width={500}
                        height={1000}
                        className='px-5 py-3'
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default SGBusCheckPage