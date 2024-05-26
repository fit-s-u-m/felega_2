import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import localFont from 'next/font/local'

const myFont = localFont({
	src: '../public/fonts/JejuHallasan-Regular.ttf',
	display: 'swap',
})


type TabProps = {
	tabs: string[],
	contents: string[],
	images: string[]

}
export default function Tab({ tabs, contents, images }: TabProps) {

	return (
		<Tabs defaultValue={tabs[0]} className="w-auto   flex flex-col  gap-5 items-center justify-center "  >
			<TabsList className="gap-5 w-full  bg-transparent h-44">
				{tabs.map((tab, index) => (
					<TabsTrigger key={index} value={tab} className="flex flex-col gap-5 justify-between bg-transparent">
						<Image
							src={images[index]}
							width={100}
							height={200}
							alt={`tabs of : ${tabs[index]}`}
							className="scale-50 m-0"
						/>
						<div className={myFont.className}>
							{tab}
						</div>
					</TabsTrigger>
				))}
			</TabsList>
			{contents.map((content, index) => (<TabsContent key={index} value={tabs[index]}>
				{content}
			</TabsContent>
			))}
		</Tabs>
	)

}
// const [activeTab, setActiveTab] = useState(tabs[0])
// function onTabChange(value: string) {
// 	setActiveTab(value)
// }onValueChange={onTabChange}
// className={activeTab === tab ? "invert scale-50 m-0" : "invert-0 scale-50 m-0"}
