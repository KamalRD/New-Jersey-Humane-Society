import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { useWindowSize } from "@uidotdev/usehooks";

// Data
import ServiceData from "../../mock-data/services.json";

// Types
import { ServiceHomepageContent } from '../../types/services';

export default function Services() {
	const size = useWindowSize();
	const setStartIndex = (): number => {
		if (size) {
			let screenWidth = size.width;
			if (screenWidth && screenWidth >= 587) {
				return 1;
			}
		}
		return 0;
	}
	
	const [emblaRef] = useEmblaCarousel({ align: "center", containScroll: false, loop: true, startIndex: setStartIndex() });
	
	return (
	<div className="bg-[#d7ddea] py-8 mx-auto">
		<h1 className="text-2xl font-bold text-center">Our Services</h1>
		<div className='hidden 
		lg:grid lg:grid-cols-3 lg:gap-x-2 lg:pt-6 lg:pb-8
		gap-y-8 py-8 px-10 mx-auto
		'>
			{ ServiceData.services.map((service: ServiceHomepageContent) => {
				return (
					<Link to={service.link} className='mx-auto' key={service.title}>
						<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
							<div className="flex items-center justify-center">
								<img src={service.image} alt={service.imageAlt} height={48} width={48}></img>
							</div>
							<h1 className='text-center relative pb-1'>{service.title}</h1>
							<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
							<p className='pt-2' dangerouslySetInnerHTML={ {__html: service.text}}></p>
						</div>
					</Link>
				)
			})}
		</div>
		
		<div className='lg:hidden py-6 px-2 m-auto bg-[#d7ddea]'>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
					{ ServiceData.services.map((service: ServiceHomepageContent) => {
						return (
							<Link to={service.link} className='embla__slide' key={service.title}>
								<div className='h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[300px] group hover:border-4'>
									<div className="flex items-center justify-center">
										<img src={service.image} alt={service.imageAlt} height={48} width={48}></img>
									</div>
									<h1 className='text-center relative pb-1'>{service.title}</h1>
									<span className="block w-0 h-0.5 bg-[#355796] mx-auto group-hover:w-[45%] group-hover:transition-all duration-500"></span>
									<p className='pt-2' dangerouslySetInnerHTML={ {__html: service.text}}></p>
								</div>
							</Link>
						)
					})}
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
