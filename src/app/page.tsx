import "./page.css"
import CollapsibleCard from '@/app/ui/collapsibleCard'
import ProjectCollapsibleCard from '@/app/ui/projectsCollapsibleCard'
import DigitalArtCollapsibleCard from '@/app/ui/digitalArtCollapsibleCard'

export default function Home() {

  return (
    <div className="flex flex-col h-screen w-screen background">
      <div className="flex h-screen items-center">
          <div className="text-wrap px-5 w-1/3" >
            <h3 className="text-4xl leading-relaxed titleEffect text-center font-extrabold">Hey World, I am Ho Kah Wai (Jeffrey Ho)</h3>
          </div>
          <div className="flex flex-col w-2/3">
            <CollapsibleCard title="About Me" content={`I born in Malaysia, graduate from Nilai University major in Electrical & Electronics Engineering with CGPA: 3.97.\nI was then start working right away in Singapore. Self-study about web development, IT through online and apply it in my work.\nLooking for opportunity to gain more industry experience about software and IT. \nI am currently Singapore PR`} skills={[]}/>
            <CollapsibleCard title="Skillset" content={`The following are my skillsets:`} skills={["JavaScript", "NodeJS" ,"Python" ,"ReactJS" ,"Redux" ,"HTML" ,"CSS" ,"SASS" ,"SharePoint" ,"MS Office: Word, Excel, PowerPoint" ,"PostgreSQL" ,"Linux" ,"Basic Networking" ,"Project Management"]}/>
            <ProjectCollapsibleCard title="Projects"/>
            <DigitalArtCollapsibleCard title="Digital Arts"/>
          </div>
      </div>
      <section className="py-10 px-10 text-2xl font-extrabold" title="My contacts" lang="en">
        <h3>Mobile Phone: (+65) 84276055</h3>
        <h3>Email: jeffreyhodev@gmail.com</h3>
      </section>
      <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
      </div>
    </div>
  );
}
