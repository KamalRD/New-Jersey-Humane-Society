import React from 'react'
import { Link } from 'react-router-dom'

import useEmblaCarousel from 'embla-carousel-react'

export default function Services() {
	const [emblaRef] = useEmblaCarousel({ align: "start" });

	return (
	<>
		<div className='hidden md:grid md:grid-cols-3 md:gap-x-2 gap-y-8 md:py-24 py-8 px-10 m-auto bg-[#d7ddea]'>
			<Link to="/services/#adoption" className='hidden md:block'>
				<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<h1 className='text-center relative pb-1'>Adoption</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
					With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
					have a best friend for you.</p>
				</div>
			</Link>
			<Link to="/services/#rescue&control" className='hidden md:block'>
				<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<h1 className='text-center relative pb-1'>Rescue & Control</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>SOME COPY HERE</p>
				</div>
			</Link>
			<Link to="/services/#vet" className='hidden md:block'>
				<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
					<h1 className='text-center relative pb-1'>Veterinary</h1>
					<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
					<p className='pt-2'>SOME COPY HERE</p>
				</div>
			</Link>
		</div>
		<div className='md:hidden py-6 px-2 m-auto bg-[#d7ddea]'>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						<Link to="/services/#adoption" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<h1 className='text-center relative pb-1'>Adoption</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>As a proud <strong>no-kill</strong> shelter, we strive to find save, loving, forever homes for all the animals in our care.
								With both dogs - ranging from energetic pups for calm and loving seniors dogs - and cats, each with their own unique personality waiting to brighten your home, we are sure to
								have a best friend for you.</p>
							</div>
						</Link>
						<Link to="/services/#rescue&control" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<h1 className='text-center relative pb-1'>Rescue & Control</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>SOME COPY HERE</p>
							</div>
						</Link>
						<Link to="/services/#vet" className='embla__slide'>
							<div className='h-full py-6 px-6 border-2 rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[275px] group hover:border-4'>
								<h1 className='text-center relative pb-1'>Veterinary</h1>
								<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
								<p className='pt-2'>SOME COPY HERE</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}
