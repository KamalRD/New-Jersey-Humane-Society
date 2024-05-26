import React from 'react'
import { useLocation } from 'react-router-dom'

const routeOptions: {[key: string]: string} = {
	"/": "/hero/home.webp",
}



export default function Hero() {
	let imageURL = routeOptions[useLocation().pathname];
	
	return (
		<>
			<div className='w-full bg-cover bg-center max-h-96 xl:max-h-[480px]'
				style={{backgroundImage: `url(${imageURL})`,
						height: 'auto',
						aspectRatio: '196/109'}}
			>
				<h1 className='relative md:text-5xl md:left-[15%] text-2xl left-[10%] top-[25%] max-w-fit text-white drop-shadow-md'
					style={{textShadow: "2px 2px 2px #355796"}}>RESCUE</h1>
				<h1 className='relative md:text-5xl md:left-[20%] md:top-[30%] text-2xl left-[15%] top-[26%] max-w-fit text-white'
					style={{textShadow: "2px 2px 2px #355796"}}>ADOPT</h1>
				<h1 className='relative md:text-5xl md:left-[25%] md:top-[35%] text-2xl left-[20%] top-[27%] max-w-fit text-white'
					style={{textShadow: "2px 2px 2px #355796"}}>PROTECT</h1>
			</div>

			{/* <img src={imageURL}></img> */}
		</>
	)
}
