import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import localFont from 'next/font/local'
import "./Home.css"
import Card from "@/components/card"

const myFont = localFont({
  src: '../../public/fonts/JejuHallasan-Regular.ttf',
  display: 'swap',
})


export default function Tab() {

  return (
    <Tabs defaultValue={"quest"} className="w-auto flex flex-col  items-center justify-center  "  >
      <TabsList className="flex justify-evenly  items-center w-full  bg-transparent h-44">

        <TabsTrigger value={"checkpoint"} className="flex flex-col gap-6 justify-center  bg-transparent">
          <div className="w-auto  h-24">
            <Image
              src={"/vectors/checkpoint.png"}
              width={100}
              height={200}
              alt={"ckeckpoint tab"}
              className="scale-50 m-0"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={`tab-name ${myFont.className}`} >
            Check Points
          </div>
        </TabsTrigger>

        <TabsTrigger value={"quest"} className="flex flex-col gap-5 justify-between bg-transparent">
          <div className="w-auto  h-24">
            <Image
              src={"/vectors/quest.png"}
              width={100}
              height={200}
              alt={"quest tab"}
              className="scale-50 m-0"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={`tab-name ${myFont.className}`}>
            Quest
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="quest" className="home-cards">
        <Card name="Adwa" url="quest" image="/adwa.jpg" />
        <Card name="Adwa" url="quest" image="/entoto.jpg" />
      </TabsContent>

      <TabsContent value="checkpoint" className="home-cards">
        <Card name="Adwa" url="checkpoint" image="/adwa.jpg" />
        <Card name="Entoto" url="checkpoint" image="/entoto.jpg" />
      </TabsContent>
    </Tabs>
  )

}
// const [activeTab, setActiveTab] = useState(tabs[0])
// function onTabChange(value: string) {
// 	setActiveTab(value)
// }onValueChange={onTabChange}
// className={activeTab === tab ? "invert scale-50 m-0" : "invert-0 scale-50 m-0"}
