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
		this.sliderContainer.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
		this.sliderContainer.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  
		this.xDown = null;
		this.yDown = null;

		this.addTouchEventListeners();
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
			el.classList.remove('item11');
			el.classList.remove('item12');
			el.classList.remove('item13');
			el.classList.remove('item14');
			el.classList.remove('item15');
			el.classList.remove('item16');
			el.classList.remove('item17');
			el.classList.remove('item18');
			el.classList.remove('item19');
			el.classList.remove('item20');
			el.classList.remove('item21');
			el.classList.remove('item22');
			el.classList.remove('item23');
			el.classList.remove('item24');
			el.classList.remove('item25');
			el.classList.remove('item26');
			el.classList.remove('item27');
			el.classList.remove('item28');
			el.classList.remove('item29');
			el.classList.remove('item30');
			el.classList.remove('item31');
			el.classList.remove('item32');
			el.classList.remove('item33');
			el.classList.remove('item34');
			el.classList.remove('item35');
			el.classList.remove('item36');
			el.classList.remove('item37');
			el.classList.remove('item38');
			el.classList.remove('item39');
			el.classList.remove('item40');
			el.classList.remove('item41');
			el.classList.remove('item42');
			el.classList.remove('item43');
			el.classList.remove('item44');
			el.classList.remove('item45');
			el.classList.remove('item46');
			el.classList.remove('item47');
			el.classList.remove('item48');
			el.classList.remove('item49');
			el.classList.remove('item50');
		});

		this.sliderArray.slice(0, 50).forEach((el, i) => {
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
		if (e.deltaY) {
			return e.deltaY > 0 ? 'previous' : 'next';
		}
		return e.detail > 0 ? 'previous' : 'next';
	}
	// Add touch event listeners
	addTouchEventListeners() {
		sliderContainer.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
		sliderContainer.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
	 }
  
	 handleTouchStart(evt) {
		const firstTouch = evt.touches[0];
		this.xDown = firstTouch.clientX;
		this.yDown = firstTouch.clientY;
	 }
	 
	 handleTouchMove(evt) {
		if (!this.xDown || !this.yDown) {
		  return;
		}

		const xUp = evt.touches[0].clientX;
		const yUp = evt.touches[0].clientY;

		const xDiff = this.xDown - xUp;
		const yDiff = this.yDown - yUp;
  
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
		  if (xDiff > 0) {
			 this.setCurrentState('next');
		  } else {
			 this.setCurrentState('previous');
		  }
		}
  
		this.xDown = null;
		this.yDown = null;
	 }
 }
 
 const heroSlider = new Slider(sliderContainer, sliderItems, sliderControls)
 heroSlider.setControls()
 heroSlider.useControls()
 heroSlider.addTouchEventListeners();