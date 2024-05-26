'use client'
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import localFont from 'next/font/local'
import "./checkpoints.css"
import Card from "./card"
import { useState } from "react"

const myFont = localFont({
	src: '../public/fonts/JejuHallasan-Regular.ttf',
	display: 'swap',
})


export default function CheckPointCard() {
	const [activeTab, setActiveTab] = useState("description")
	function onTabChange(value: string) {
		setActiveTab(value)
	}
	function returnImages() {
		if (activeTab === "facalities") {
			return (
				<p>faclities</p>
			)
		}
		else if (activeTab === "Activities") {
			return (<p>Activities</p>
			)

		}
		else {
			return (
				<Image
					src="/adwa.jpg"
					alt="tab image"
					width={2048}
					height={1152}
					style={{
						width: '100%',
						height: '100%',
					}}
					className="rounded-lg unselectable :hover:scale-110"
				/>
			)

		}
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<div className={`check-point-name ${myFont.className}`} >
				ADWA MUSEUM
			</div>
			<div className="grid grid-cols-2 m-3">
				<Tabs onValueChange={onTabChange} defaultValue={"description"} className="justify-evenly bg-none m-5"  > <TabsList className="bg-none   justify-evenly ">

					<TabsTrigger value={"description"} >
						Description
					</TabsTrigger>

					<TabsTrigger value={"facalities"} >
						Facalities
					</TabsTrigger>
					<TabsTrigger value={"Activities"}  >
						Activities
					</TabsTrigger>
				</TabsList>
					<TabsContent value="description">
						<div className="flex flex-col text-sm text-white">
							<p>
								The Adwa Museum in Addis Ababa commemorates the Battle of Adwa, where Ethiopian forces triumphed over Italian invaders on March 1, 1896. This victory ensured Ethiopia's sovereignty and symbolized resistance against colonialism in Africa. Located in the heart of Addis Ababa, the museum showcases historical artifacts, documents, photographs, and interactive displays, offering a comprehensive understanding of the battle. It also hosts educational programs, guided tours, and workshops to educate visitors about Ethiopia's rich history. As a living memorial, the Adwa Museum celebrates Ethiopian unity, resilience, and independence, making it a must-visit for those interested in Ethiopian and African heritage.
							</p>
							<div className="flex flex-col items-center justify-center">
								<p className="underline">This checkpoint is featured in this Quest</p>
								<div className="w-[50%] text-center">
									<Card name="Adwa victory" image="/adwa.jpg" url="/Quest" />
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="facalities">
						<div className="flex flex-col text-sm text-white gap-10">
							<div className="flex flex-col gap-5">
								<div className="flex gap-5 list ">
									<div>
										<Image
											src="/vectors/hotel.png"
											width={400}
											height={400}
											style={{ width: '100%', height: '100%' }}
											alt="shop"
										/>
									</div>
									<h1>Hotels</h1>
								</div>
								<ul>
									<li>Itegue Taitu Hotel</li>
									<li>Eliana Hotel</li>
									<li>Hilton Hotel</li>
									<li>Sharaton Hotel</li>
								</ul>
							</div>

							<div>
								<div className="flex gap-3 list">
									<div>
										<Image
											src="/vectors/hospital.png"
											width={400}
											height={400}
											style={{ width: '100%', height: '100%' }}
											alt="shop"
										/>
									</div>
									<h1>hosplital</h1>
								</div>
								<ul>
									<li>Washington Clinic</li>
									<li>Family Clinic</li>
									<li>Bethel Hospital</li>
									<li>Girum Hospital</li>
								</ul>
							</div>

							<div>
								<div className="flex gap-3 list">
									<div>
										<Image
											src="/vectors/cafe.png"
											width={400}
											height={400}
											style={{ width: '100%', height: '100%' }}
											alt="shop"
										/>
									</div>
									<h1>Cafe</h1>
								</div>
								<ul >
									<li>Downtown Fast-food</li>
									<li>Kaldis Cafe</li>
									<li>Tomoca Cofffee</li>
									<li>Injoy Burgers</li>
								</ul>
							</div>

							<div>
								<div className="flex gap-3 list">
									<div>
										<Image
											src="/vectors/shop.png"
											width={400}
											height={400}
											style={{ width: '100%', height: '100%' }}
											alt="shop"
										/>
									</div>
									<h1>shops</h1>
								</div>
								<ul>
									<li>Shewa Supermarket</li>
									<li>Queens Supermarket</li>
									<li>Ayele Shop</li>
									<li>Century Mall</li>
								</ul>
							</div>
						</div>

					</TabsContent>

				</Tabs>
				<div>
					{
						returnImages()
					}
				</div>
			</div>
		</div>
	)

}
