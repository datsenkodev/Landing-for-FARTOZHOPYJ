const sliderContainer = document.querySelector('.slider')
const sliderControlsContainer = document.querySelector('.slider-controls')
const sliderItems = document.querySelectorAll('.slider__item')
const sliderControls = ['previous', 'next']

class Slider {

	constructor(container, items, controls){
		this.sliderContainer = container;
		this.sliderControls = controls;
		this.sliderArray = [...items];

		this.sliderContainer.addEventListener('mousewheel', this.handleMouseWheel.bind(this));
		this.sliderContainer.addEventListener('DOMMouseScroll', this.handleMouseWheel.bind(this));
	}

	updateSlider(){
		this.sliderArray.forEach(el => {
			el.classList.remove('item1');
			el.classList.remove('item2');
			el.classList.remove('item3');
			el.classList.remove('item4');
			el.classList.remove('item5');
			el.classList.remove('item6');
			el.classList.remove('item7');
			el.classList.remove('item8');
			el.classList.remove('item9');
			el.classList.remove('item10');
		});

		this.sliderArray.slice(0, 10).forEach((el, i) => {
			el.classList.add(`item${i+1}`);
		});
	}

	setCurrentState(direction){
		if(direction.className == 'slider-controls-previous' || direction == 'previous'){
			this.sliderArray.unshift(this.sliderArray.pop());
		} else {
			this.sliderArray.push(this.sliderArray.shift());
		}
		this.updateSlider();
	}

	setControls() {
		this.sliderControls.forEach(control => {
			sliderControlsContainer.appendChild(document.createElement('button')).className = `slider-controls-${control}`;
		});
		
	}

	useControls() {
		const triggers = [...sliderControlsContainer.childNodes];
		triggers.forEach(control => {
			control.addEventListener('click', e => {
				e.preventDefault();
				const direction = control.className.includes('previous') ? 'previous' : 'next';
				this.setCurrentState(direction);
			})
		})
	}

	handleMouseWheel(e) {
		e.preventDefault();
		const direction = this.detectMouseWheelDirection(e);
		if (direction) {
			this.setCurrentState(direction);
		}
	 }

	detectMouseWheelDirection(e) {
		console.log(e.deltaY)
		if (e.deltaY) {
			return e.deltaY > 0 ? 'previous' : 'next';
		}
		return e.detail > 0 ? 'previous' : 'next';
	}
 }
 
 const heroSlider = new Slider(sliderContainer, sliderItems, sliderControls)
 heroSlider.setControls()
 heroSlider.useControls()
 