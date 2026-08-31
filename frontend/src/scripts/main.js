import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const splide = new Splide( '.splide', {
	type   : 'loop',
	drag   : 'free',
	focus  : 'center',
	pauseOnHover: false,
	pauseOnFocus: false,
	lazyLoad: 'nearby',
	perPage: 5,
	breakpoints: {
    	1536: {
      		perPage: 4, // For screens smaller than 1024px
    	},
    	1280: {
      		perPage: 3, // For screens smaller than 640px
    	},
    	500: {
      		perPage: 2, // For screens smaller than 640px
			autoScroll: {
				speed: 0.75,
			},
    	},
	},
	arrows: false,
	autoScroll: {
		speed: 1,
	},
} );

splide.mount( {AutoScroll} );
console.log("Howdy from the console!")