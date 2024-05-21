import * as React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom'

import useEmblaCarousel from 'embla-carousel-react'

export default function Services() {
	const size = useWindowSize();
	const setStartIndex = (): number => {
		if (size) {
			let screenWidth = size.width;
			if (screenWidth && screenWidth >= 587) {
				return 2;
			}
		}
		return 1;
	}
	
	const [emblaRef] = useEmblaCarousel({ align: "center", containScroll: false, loop: true, startIndex: setStartIndex() });
	


	return (
	<div className="bg-[#d7ddea] pt-8 mx-auto">
		<h1 className="text-2xl font-bold text-center">Our Services</h1>
		<div className='hidden 
		lg:grid lg:grid-cols-3 lg:gap-x-2 lg:pt-6 lg:pb-8
		gap-y-8 py-8 px-10 mx-auto
		'>
			<Link to="/services/#adopt" className='mx-auto'>
				<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<div className="flex items-center justify-center">
						<img src='./services/adopt.svg' alt="Adoption Icon" height={48} width={48}></img>
					</div>
					<h1 className='text-center relative pb-1'>Adoption</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
					With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
					have a best friend for you.</p>
				</div>
			</Link>
			<Link to="/services/#rescue-and-control" className='mx-auto'>
				<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<div className="flex items-center justify-center">
						<img src='./services/rescue.svg' alt="Rescue Icon" height={48} width={48}></img>
					</div>
					<h1 className='text-center relative pb-1'>Rescue & Control</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
					With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
					have a best friend for you.</p>
				</div>
			</Link>
			<Link to="/services/#veterinary" className='mx-auto'>
				<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<div className="flex items-center justify-center">
						<img src='./services/vet.svg' alt="Veterinary Icon" height={48} width={48}></img>
					</div>
					<h1 className='text-center relative pb-1'>Veterinary</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
					With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
					have a best friend for you.</p>
				</div>
			</Link>
		</div>
		
		<div className='lg:hidden py-6 px-2 m-auto bg-[#d7ddea]'>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						<Link to="/services/#adopt" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<div className="flex items-center justify-center">
									<img src='./services/adopt.svg' alt="Adoption Icon" height={48} width={48}></img>
								</div>
								<h1 className='text-center relative pb-1'>Adoption</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
								With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
								have a best friend for you.</p>
							</div>
						</Link>
						<Link to="/services/#rescue-and-control" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<div className="flex items-center justify-center">
									<img src='./services/rescue.svg' alt="Rescue Icon" height={48} width={48}></img>
								</div>
								<h1 className='text-center relative pb-1'>Rescue & Control</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
								With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
								have a best friend for you.</p>
							</div>
						</Link>
						<Link to="/services/#veterinary" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<div className="flex items-center justify-center">
									<img src='./services/vet.svg' alt="Veterinary Icon" height={48} width={48}></img>
								</div>
								<h1 className='text-center relative pb-1'>Veterinary</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
								With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
								have a best friend for you.</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
