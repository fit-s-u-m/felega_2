import Image from "next/image"
import Link from "next/link"
import "./card.css"
type CardProps = {
	name: string
	image: string
	url: string
}
export default function Card({ name, image, url }: CardProps) {
	return (
		<Link href={url}>
			<div className="card">
				<div className="w-fit relative">
					<Image
						src={image}
						alt="quest card"
						width={2048}
						height={1152}
						style={{
							width: '100%',
							height: '100%',
						}}
						className="rounded-lg unselectable :hover:scale-110"
					/>
				</div>
				<div className="text-lg h-fit ">{name}</div>
			</div>

		</Link>
	)
}
