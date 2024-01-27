$(function () {

	let $header = $('.header--wrapper');
	let prevScrollPos = $(window).scrollTop();

	$('.page--information__close').click(function() {
		$('.page--information').hide();
	});

	$(window).on('scroll', function () {
		let scrollPos = $(window).scrollTop();
		if (scrollPos >= 800) {
			$header.addClass('sticky');
			$header.removeClass('fix');
		} else if (scrollPos < 800 && scrollPos > 200 && scrollPos < prevScrollPos) {
			$header.removeClass('sticky');
			$header.addClass('fix');
		} else {
			$header.removeClass('sticky');
			$header.removeClass('fix');
		}
		prevScrollPos = scrollPos;

		let documentHeight = $(document).height();
		let windowHeight = $(window).height();
		let scrollPercent = (prevScrollPos / (documentHeight - windowHeight)) * 100;
		
		$('#scroll--progress').css('width', scrollPercent + '%');
	});

	$('.header--wrapper__city--text').click(function () {
		$('.header--wrapper__city--hidden').toggleClass('active');
	});
	
	$('.burger').click(function () {
		$('.menu--wrapper').addClass('active');
		$('html').addClass('overlay');
	});

	$('.menu--wrapper .modal--close').click(function () {
		$('.menu--wrapper').removeClass('active');
		$('html').removeClass('overlay');
	});

	$('.focus').hover(function () {
		$('.focus-1').toggleClass('active');
	});

	$('.open--modal').click(function (e) {
		e.preventDefault();
		$('.modal--phone').addClass('active');
		$('html').addClass('overlay');
	});

	$('.open--modal__doctor').click(function (e) {
		e.preventDefault();
		$('.modal--doctor').addClass('active');
		$('html').addClass('overlay');
	});

	$('.open--modal__record').click(function (e) {
		e.preventDefault();
		$('.modal--record').addClass('active');
		$('html').addClass('overlay');
	});

	$('.search').click(function (e) {
		e.preventDefault();
		$('.search--widget').addClass('active');
	});

	$('.search--widget__close').click(function () {
		$('.search--widget').removeClass('active');
	});

	$(document).mouseup(function (e) {
		hidden1 = $('.modal');
		if ($(e.target).is('.modal')) {
			hidden1.removeClass('active');
			$('html').removeClass('overlay');
			$('body').removeClass('overlay');
		}
		if ($(e.target).is('.bg')) {
			$('.menu--wrapper').removeClass('active');
			$('html').removeClass('overlay');
			$('body').removeClass('overlay');

		}
		var container = $('.search--widget');
		if (container.has(e.target).length === 0) {
			container.removeClass('active');
		}
		var container3 = $('.header--wrapper__city'),
		hidden3 = $('.header--wrapper__city--hidden');
		if (container3.has(e.target).length === 0) {
			hidden3.removeClass('active');
		}
	});

	// Получаем элементы DOM
	var input = document.querySelector('.search--widget__input input');
	var clearButton = document.querySelector('.search--widget__clear');
	var popularTexts = document.querySelectorAll('.search--widget__popular--text');
	var popularBlock = document.querySelector('.search--widget__popular');
	var resultBlock = document.querySelector('.search--widget__result');
	var headerBlock = document.querySelector('.search--widget__header');

	// Добавляем обработчик события на изменение значения в поле input
	input.addEventListener('input', function () {
		// Если значение в поле input не пустое
		if (input.value !== '') {
			// Показываем блок clearButton
			clearButton.style.display = 'flex';
			popularBlock.style.display = 'none';
			resultBlock.classList.add('active');
			headerBlock.style.paddingBottom = '15px';
		} else {
			// Скрываем блок clearButton
			clearButton.style.display = 'none';
			popularBlock.style.display = 'flex';
			if (window.innerWidth > 480) {
				headerBlock.style.paddingBottom = '45px';
			} else {
				headerBlock.style.paddingBottom = '15px';
			}
			resultBlock.classList.remove('active');
		}

		// Если значение в поле input пустое
		if (input.value === '') {
			// Показываем блок search--widget__popular
			popularBlock.style.display = 'flex';
			if (window.innerWidth > 480) {
				headerBlock.style.paddingBottom = '45px';
			} else {
				headerBlock.style.paddingBottom = '15px';
			}
			resultBlock.classList.remove('active');
		}
	});

	// Добавляем обработчик события на клик по кнопке clearButton
	clearButton.addEventListener('click', function () {
		// Очищаем значение в поле input
		input.value = '';
		// Скрываем блок clearButton
		clearButton.style.display = 'none';
		popularBlock.style.display = 'flex';
		if (window.innerWidth > 480) {
			headerBlock.style.paddingBottom = '45px';
		} else {
			headerBlock.style.paddingBottom = '15px';
		}
		resultBlock.classList.remove('active');
	});

	// Добавляем обработчик события на клик для каждого элемента с классом "search--widget__popular--text"
	popularTexts.forEach(function (text) {
		text.addEventListener('click', function () {
			// Получаем текст из выбранного элемента
			var searchText = text.textContent;
			// Устанавливаем текст в значение поля input
			input.value = searchText;
			// Показываем блок clearButton
			clearButton.style.display = 'flex';
			headerBlock.style.paddingBottom = '15px';
			// Скрываем блок search--widget__popular
			popularBlock.style.display = 'none';
			resultBlock.classList.add('active');
		});
	});

	$('.modal--close').click(function (e) {
		e.preventDefault();
		$('.modal').removeClass('active');
		$('html').removeClass('overlay');
		$('body').removeClass('overlay');
	});

	if (window.innerWidth > 992){
		$('.submenu li .arrow--right, .submenu-2').hover(function () {
			$('.submenu-1').toggleClass('active');
			$('.submenu-2').parent('li').toggleClass('hover');
		});
	} else {
		$('.menu .list li > span').click(function(){
			$(this).parent().find('.submenu').toggleClass('active');
			$(this).toggleClass('current');
		});
	}

	$(".phone--input").mask("+7 (999) 999-99-99");

	$('.slider-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		swipe: false,
		asNavFor: '.slider-1',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 651,
				settings: {
					fade: false,
					swipe: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					variableWidth: true,
				}
			},
		]
	});
	$('.slider-1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		infinite: true,
		asNavFor: '.slider-2',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});

	function initSlider() {
		$('.main--youtube__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: $('.youtube--prev'),
			nextArrow: $('.youtube--next')
		});
	}
	
	function destroySlider() {
		$('.main--youtube__slider').slick('unslick');
	}
	
	if (window.innerWidth > 992) {
		initSlider();
	}
	
	$(window).on('resize', function() {
		if (window.innerWidth > 992) {
			if (!$('.main--youtube__slider').hasClass('slick-initialized')) {
				initSlider();
			}
		} else {
			if ($('.main--youtube__slider').hasClass('slick-initialized')) {
				destroySlider();
			}
		}
	});

	$('.div1').click(function () {
		$('.modal1').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div2').click(function () {
		$('.modal2').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div3').click(function () {
		$('.modal3').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div4').click(function () {
		$('.modal4').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div5').click(function () {
		$('.modal5').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div6').click(function () {
		$('.modal6').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div7').click(function () {
		$('.modal7').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div8').click(function () {
		$('.modal8').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});
	$('.div9').click(function () {
		$('.modal9').addClass('active');
		$('html').addClass('overlay');
		$('body').addClass('overlay');
	});

	let gsapImage = document.querySelector(".main--gallery__image");
	if (window.innerWidth > 1200 && gsapImage){
		gsap.from("#gallery__image--1", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--2", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--3", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--4", {
			y: 250,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--5", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--6", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--7", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-30% 70%",
				end: "70% 50%",
				scrub: true,
				markers: false,
			},
		});
	} else if ((window.innerWidth <= 1200) && (window.innerWidth > 992) && gsapImage){
		gsap.from("#gallery__image--1", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--2", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--3", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--4", {
			y: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--5", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--6", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--7", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-50% 70%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
	} else if ((window.innerWidth <= 992) && (window.innerWidth > 480) && gsapImage) {
		gsap.from("#gallery__image--1", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--2", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--3", {
			x: -150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--4", {
			y: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--5", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--6", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
		gsap.from("#gallery__image--7", {
			x: 150,
			scrollTrigger: {
				trigger: ".main--gallery",
				start: "-80% 80%",
				end: "50% 50%",
				scrub: true,
				markers: false,
			},
		});
	} else if (window.innerWidth <= 480) { }

	// Получаем ссылки и блоки
	let linksNav = document.querySelectorAll('.single--item__article--doctor__nav a'),
	blocksNav = document.querySelectorAll('.single--item__article--doctor__item');

	// Перебираем все ссылки
	for (var i = 0; i < linksNav.length; i++) {
		// Добавляем обработчик события щелчка на каждую ссылку
		linksNav[i].addEventListener('click', function(event) {
			event.preventDefault(); // Отменяем переход по ссылке

			// Удаляем класс "active" у всех ссылок
			for (var j = 0; j < linksNav.length; j++) {
				linksNav[j].classList.remove('active');
			}
			// Удаляем класс "active" у всех блоков
			for (var k = 0; k < blocksNav.length; k++) {
				blocksNav[k].classList.remove('active');
			}

			// Получаем id целевого блока
			var targetId = this.getAttribute('href');

			// Добавляем класс "active" всем блокам с соответствующим id
			var targetBlocks = document.querySelectorAll(targetId);
			for (var m = 0; m < targetBlocks.length; m++) {
				targetBlocks[m].classList.add('active');
			}

			// Добавляем класс "active" текущей ссылке
			this.classList.add('active');
		});
	}

	// Получаем ссылки
	var linksArticle = document.querySelectorAll('.single--item__content a');

	// Обходим все ссылки
	linksArticle.forEach(function(link) {
		// Получаем id целевого блока
		var targetId = link.getAttribute('href');

		// Назначаем обработчик события клика на ссылку
		link.addEventListener('click', function(e) {
			// Отменяем стандартное поведение ссылки (переход по якорю)
			e.preventDefault();

			// Получаем целевой блок по его id
			var target = document.querySelector(targetId);

			// Проверяем, что целевой блок существует
			if (target) {
				// Вычисляем позицию целевого блока относительно верха страницы
				var offsetTop = target.offsetTop;

				// Скроллируем страницу до целевого блока
				if (window.innerWidth > 992) {
					window.scrollTo({
						top: offsetTop - 140,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth <= 992 && window.innerWidth > 480){
					window.scrollTo({
						top: offsetTop - 100,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth > 390 && window.innerWidth <= 480) {
					window.scrollTo({
						top: offsetTop - 60,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth <= 390) {
					window.scrollTo({
						top: offsetTop - 100,
						behavior: 'smooth' // Плавная прокрутка
					});
				}
			}
		});
	});
	
	$('.single--item__slider').on('init reInit',function(e,slick){
		if(slick.slideCount<=slick.options.slidesToShow){
			slick.slickAdd(slick.$slides.clone())
		}
	});

	$('.single--item__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: $('.single--item__slider--prev'),
		nextArrow: $('.single--item__slider--next'),
		swipe: false,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					swipe: true,
					slidesToShow: 1,
					variableWidth: false,
					centerMode: false
				}
			},
		]
	});

	if (innerWidth > 992){
		function setArrowWidth() {
			const prevArrow = document.querySelector('.single--item__slider--prev');
			const nextArrow = document.querySelector('.single--item__slider--next');
			const screenWidth = window.innerWidth;
	
			const baseWidth = 580; // Базовая ширина стрелок
			const pixelIncrement = 0.5; // Инкремент ширины на пиксель

			if (prevArrow && nextArrow){
				// Вычисление новой ширины стрелок
				const prevArrowWidth = Math.floor(baseWidth + ((screenWidth - 1920) * pixelIncrement));
				const nextArrowWidth = Math.floor(baseWidth + ((screenWidth - 1920) * pixelIncrement));
		
				// Применение новой ширины к стрелкам
				prevArrow.style.width = `${prevArrowWidth}px`;
				nextArrow.style.width = `${nextArrowWidth}px`;
			}
		}
	
		// Вызов функции при загрузке страницы и при изменении размера окна
		window.addEventListener('resize', setArrowWidth);
		window.addEventListener('load', setArrowWidth);
	}

	// Получаем все кнопки
	var buttons = document.querySelectorAll(".services--stages__choose button");

	// Добавляем обработчик события для каждой кнопки
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			// Получаем класс блока "services--stages__choosen" связанный с данной кнопкой
			var chooseClass = this.getAttribute("data-choose");
			
			if (!document.querySelector(".services--stages__choosen." + chooseClass).classList.contains("active")) {
				// Удаляем класс "active" у всех блоков
				document.querySelectorAll(".services--stages__choosen").forEach(function(element) {
					element.classList.remove("active");
				});
				// Добавляем класс "active" к соответствующему блоку
				document.querySelector(".services--stages__choosen." + chooseClass).classList.add("active");
			}

			// Удаляем класс "active" у всех кнопок
			document.querySelectorAll(".services--stages__choose button").forEach(function(element) {
				element.classList.remove("active");
			});
			// Добавляем класс "active" к текущей кнопке
			this.classList.add("active");
		});
	}

	if (innerWidth > 900){
		for (let i = 1; i <= 10; i++) {
			let elementId = "price-" + i;
		
			if (document.getElementById(elementId)) {
				document.getElementById(elementId).addEventListener("click", function() {
					let blockSelector = ".services--price__block." + elementId;
		
					if (!document.querySelector(blockSelector).classList.contains("active")) {
						document.querySelectorAll(".services--price__block").forEach(function(element) {
							element.classList.remove("active");
						});
						document.querySelector(blockSelector).classList.add("active");
					}
		
					// Удаляем класс "active" у всех кнопок
					document.querySelectorAll(".services--price__buttons button").forEach(function(element) {
						element.classList.remove("active");
					});
					
					this.classList.add("active");
				});
			}
		}
	} else {
		var buttons = document.querySelectorAll(".services--price__buttons button");
		var priceBlocks = document.querySelectorAll(".services--price__block");

		buttons.forEach(function(button) {
			button.addEventListener("click", function() {
					// Проверяем, является ли текущая кнопка активной
					if (this.classList.contains("active")) {
						// Если является, то оставляем у всех кнопок стиль display:flex
						togglePrices("flex");
					} else {
						// Если не является,
						// сначала сбрасываем стиль display:none у всех кнопок
						togglePrices("none");
						// Удаляем класс active у всех кнопок
						buttons.forEach(function(btn) {
								btn.classList.remove("active");
								btn.style.display = "none";
						});
						// Добавляем класс active к текущей кнопке
						this.classList.add("active");
						this.style.display = "flex";
						// Получаем id текущей кнопки
						var priceId = this.id.substring(6);
						// Удаляем класс active у всех блоков цены
						priceBlocks.forEach(function(priceBlock) {
								priceBlock.classList.remove("active");
						});
						// Находим соответствующий блок цены
						var selectedPriceBlock = document.querySelector(".services--price__block.price-" + priceId);
						// Добавляем класс active к выбранному блоку цены
						selectedPriceBlock.classList.add("active");
					}
			});
		});

		function togglePrices(displayValue) {
			buttons.forEach(function(btn) {
					btn.style.display = displayValue;
			});
		}
	}
	
	$('.services--says__youtube--slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.services--says__right .youtube--prev'),
		nextArrow: $('.services--says__right .youtube--next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					swipe: true,
					slidesToShow: 2,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 521,
				settings: {
					swipe: true,
					slidesToShow: 1,
					variableWidth: true,
					centerMode: false,
					arrows: false,
					adaptiveHeight: true
				}
			},
		]
	});

	const circles = document.querySelectorAll(".progress--ring__circle");
	const targetElement = document.querySelector('.services--resorptionFalling');
	if (targetElement){
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					circles.forEach(circle => {
						const radius = circle.r.baseVal.value;
						const circumference = 2 * Math.PI * radius;
						const count = circle.nextElementSibling;
		
						circle.style.strokeDasharray = `${circumference} ${circumference}`;
						circle.style.strokeDashoffset = circumference;
		
						function setProgress(percent) {
							const offset = circumference - percent / 100 * circumference;
							circle.style.strokeDashoffset = offset;
						}
		
						function animateProgress() {
							$({ Counter: 0 }).animate({ Counter: count.textContent }, {
								duration: 3000,
								easing: 'linear',
								step: function() {
									count.textContent = Math.ceil(this.Counter) + "%";
									setProgress(this.Counter);
								}
							});
						}
						animateProgress();
					});
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);
		observer.observe(document.querySelector('.services--resorptionFalling'));
	}

	const questions = document.querySelectorAll(".services--questions__item");
	questions.forEach((accSection) => {
		const accHeader = accSection.querySelector('.question');
		const accBody = accSection.querySelector('.answer');
		const accContent = accSection.querySelector('.answer > *');
		
		accHeader.addEventListener('click', () => {
			// Удаляем класс active у всех questions
			questions.forEach((question) => {
				question.classList.remove('active');
				question.querySelector('.answer').style.maxHeight = "0px"; // Добавляем max-height: 0 у неактивных questions
			});
			
			// Добавляем класс active и задаем max-height для нажатого question
			accSection.classList.add("active");
			
			if ( accSection.classList.contains("active") ) {
				accBody.style.maxHeight = `${accContent.clientHeight}px`;
			} else {
				accBody.style.maxHeight = "0px";
			}
		});
	});

	
	$('.articles--slider__expert').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.articles--slider .youtube--prev'),
		nextArrow: $('.articles--slider .youtube--next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					swipe: true,
					slidesToShow: 2,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 521,
				settings: {
					swipe: true,
					slidesToShow: 1,
					variableWidth: false,
					centerMode: false
				}
			},
		]
	});

	var items = Array.from(document.querySelectorAll('.articles--single__item'));
	var showMoreButton = document.querySelector('.articles--single .button');
	var categoryLinks = Array.from(document.getElementsByClassName('category-link'));
	var showAllButton = document.querySelector('.articles--all__categories a[href="#all"]');

	if (items){
		// Изначально показывать только 6 элементов
		items.forEach(function(item, index) {
			if (index < 6) {
				item.style.display = 'flex';
			} else {
				item.style.display = 'none';
			}
		});
	
		// Код для проверки количества записей с классом "articles--single__item"
		var singleItemsCount = document.querySelectorAll('.articles--single__item').length;
		if (singleItemsCount){
			if (singleItemsCount > 6) {
				showMoreButton.style.display = 'flex';
			} else {
				showMoreButton.style.display = 'none';
			}
		}
	
		// Код для обработки клика на ссылку категории
		categoryLinks.forEach(function(link) {
			link.addEventListener('click', function(event) {
				event.preventDefault();
				var categoryId = this.getAttribute('href').replace('#', '');
				showItemsByCategory(categoryId);
	
				categoryLinks.forEach(function(link) {
					link.classList.remove("active");
				});
				// Добавление класса active к текущему link
				this.classList.add("active");
				
				// Код для проверки количества записей с указанной категорией
				var categoryItemsCount = document.querySelectorAll('.articles--singleitem[id="' + categoryId + '"]').length;
				if (categoryItemsCount > 6) {
					showMoreButton.style.display = 'flex';
				} else {
					showMoreButton.style.display = 'none';
				}
			});
		});
	
		// Функция показа элементов по выбранной категории
		function showItemsByCategory(categoryId) {
			items.forEach(function(item) {
				if (item.getAttribute('id') === categoryId) {
					item.style.display = 'flex';
				} else {
					item.style.display = 'none';
				}
			});
		}
	
		// Обработчик клика на кнопку "Все"
		if (showAllButton) {
			showAllButton.addEventListener('click', function(event) {
				event.preventDefault();
				// showItemsByCategory('all');
				let singleItem = document.querySelectorAll('.articles--single__item.all');
				singleItem.forEach((Item, index) => {
					if (index < 6) {
						Item.style.display = "flex";
						showMoreButton.style.display = "none";
					} else {
						Item.style.display = "none";
						showMoreButton.style.display = "flex";
		
					}
				});
			});
		}
	
		if (showMoreButton) {
			// Обработчик клика на кнопку "Показать ещё"
			showMoreButton.addEventListener('click', function() {
				var visibleItemsCount = document.querySelectorAll('.articles--single__item[style*="display: flex"]').length;
				var nextItems = Array.from(document.querySelectorAll('.articles--single__item:not([style*="display: flex"])'));
				
				if (nextItems.length <= 6) {
					showMoreButton.style.display = 'none';
				}
				
				nextItems.slice(0, 6).forEach(function(item, index) {
					item.style.display = 'flex';
				});
			});
		}
	}

	var resorptionItem = document.querySelectorAll(".resorption--wrapper__item");
	var html = document.html || document.getElementsByTagName('html')[0];
	var headerHidden = document.getElementsByTagName('header')[0];

	if (resorptionItem) {
		resorptionItem.forEach(function(item) {
			item.addEventListener("click", function(event) {
				event.preventDefault();
				if (item.classList.contains("active")) {
				} else {
					this.classList.add("active");
					html.style.overflow = 'hidden';
					headerHidden.style.zIndex = '-1';
				}
			});
			
			var closeButton = item.querySelector(".resorption--wrapper__item--close");
			if (closeButton) {
				closeButton.addEventListener("click", function(event) {
					event.stopPropagation();
					item.classList.remove("active");
					html.style.overflow = '';
					headerHidden.style.zIndex = '1';
				});
			}
			
			var fullImage = document.querySelectorAll(".resorption--wrapper__item--full .resorption--wrapper__item--image img");
			if (fullImage) {
				fullImage.forEach(function(image) {
					image.addEventListener("click", function(event) {
						event.stopPropagation();
						var currentItem = this.closest(".resorption--wrapper__item");
						currentItem.classList.add("full--image");
					});
				});
			}
			
			var closeImage = item.querySelector(".image--close");
			if (closeImage) {
				closeImage.addEventListener("click", function(event) {
					event.stopPropagation();
					var currentItem = this.closest(".resorption--wrapper__item");
					currentItem.classList.remove("full--image");
				});
			}
			
			document.addEventListener("click", function(event) {
				var currentItem = document.querySelector(".resorption--wrapper__item.full-image");
				if (currentItem) {
					currentItem.classList.remove("full--image");
				}
			});
		});
	}

	// Получаем элементы для навигации
	const allBtn = document.querySelector('.resorption--wrapper__filter .active');
	const cervicalBtn = document.querySelector('.resorption--wrapper__filter span:nth-child(2)');
	const vertebralBtn = document.querySelector('.resorption--wrapper__filter span:nth-child(3)');

	// Получаем блоки для отображения
	const cervicalBlock = document.querySelector('.resorption--wrapper__cervical');
	const vertebralBlock = document.querySelector('.resorption--wrapper__vertebral');
	var glassElements = document.getElementsByClassName('glass');
	
	
	if(cervicalBlock && vertebralBlock){

		const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (screenWidth < 1024) {
			// Получаем список всех span внутри div
			const spans = document.querySelectorAll('.resorption--wrapper__filter span');

			// Добавляем обработчик события клика для каждого span
			spans.forEach(span => {
				span.addEventListener('click', () => {
					// Проверяем, есть ли у нажатого span класс active
					if (span.classList.contains('active')) {
						// Если есть, удаляем класс hidden у всех span
						spans.forEach(el => el.classList.remove('hidden'));
						spans.forEach(el => el.classList.remove('active'));
					} else {
						// Если нет, добавляем класс hidden всем span
						spans.forEach(el => el.classList.add('hidden'));
						// Удаляем класс hidden у нажатого span и добавляем класс active
						span.classList.remove('hidden');
						span.classList.add('active');
					}
				});
			});
		} else { }
		// Назначаем обработчики событий на кнопки
		cervicalBtn.addEventListener('click', () => {
			// Удаляем класс 'active' для всех span
			allBtn.classList.remove('active');
			vertebralBtn.classList.remove('active');
			// Добавляем класс 'active' для текущего span
			cervicalBtn.classList.add('active');
			// Отображаем только блок cervical
			cervicalBlock.style.display = 'flex';
			vertebralBlock.style.display = 'none';
		});
		
		vertebralBtn.addEventListener('click', () => {
			// Удаляем класс 'active' для всех span
			allBtn.classList.remove('active');
			cervicalBtn.classList.remove('active');
			// Добавляем класс 'active' для текущего span
			vertebralBtn.classList.add('active');
			// Отображаем только блок vertebral
			cervicalBlock.style.display = 'none';
			vertebralBlock.style.display = 'flex';
		});
		
		allBtn.addEventListener('click', () => {
			// Добавляем класс 'active' для всех span
			cervicalBtn.classList.remove('active');
			vertebralBtn.classList.remove('active');
			allBtn.classList.add('active');
			// Отображаем все блоки
			cervicalBlock.style.display = 'flex';
			vertebralBlock.style.display = 'flex';
		});
	
		// Добавляем обработчик события для каждого элемента
		for (var i = 0; i < glassElements.length; i++) {
			glassElements[i].addEventListener('click', function() {
				// Получаем родительский элемент с классом "resorption--wrapper__item--image"
				var parentElement = this.closest('.resorption--wrapper__item--image');
				
				// Добавляем или удаляем класс "zoom" у родительского элемента
				parentElement.classList.toggle('zoom');
				
				// Удаляем возможность скроллировать изображение, если класс "zoom" отсутствует
				var image = parentElement.querySelector('img');
				image.classList.toggle("zoom-in");
				if (!parentElement.classList.contains('zoom')) {
					parentElement.style.overflow = 'hidden';
					parentElement.style.WebkitOverflowScrolling = 'auto';
				} else {
					parentElement.style.overflow = 'auto';
					parentElement.style.WebkitOverflowScrolling = 'touch';
				}
			});
		}

		
	}

	var cervicalWrapper = document.querySelector(".resorption--wrapper__cervical");
	var vertebralWrapper = document.querySelector(".resorption--wrapper__vertebral");
	
	if(cervicalWrapper || vertebralWrapper){
		var cervicalItems = cervicalWrapper.querySelectorAll(".resorption--wrapper__item");
		var vertebralItems = vertebralWrapper.querySelectorAll(".resorption--wrapper__item");
		var cervicalVisibleCount = 12;
		var vertebralVisibleCount = 12;

		// Функция для показа следующих 12 элементов внутри cervicalWrapper
		function showMoreCervicalItems() {
			cervicalVisibleCount += 12;
			if (cervicalVisibleCount >= cervicalItems.length) {
				cervicalButton.style.display = "none";
			}
			for (var i = 0; i < cervicalItems.length; i++) {
				if (i < cervicalVisibleCount) {
					cervicalItems[i].style.display = "";
				} else {
					cervicalItems[i].style.display = "none";
				}
			}
		}
	
		// Функция для показа следующих 12 элементов внутри vertebralWrapper
		function showMoreVertebralItems() {
			vertebralVisibleCount += 12;
			if (vertebralVisibleCount >= vertebralItems.length) {
				vertebralButton.style.display = "none";
			}
			for (var i = 0; i < vertebralItems.length; i++) {
				if (i < vertebralVisibleCount) {
					vertebralItems[i].style.display = "";
				} else {
					vertebralItems[i].style.display = "none";
				}
			}
		}
	
		// Скрываем все элементы, кроме первых 12
		for (var i = 12; i < cervicalItems.length; i++) {
			cervicalItems[i].style.display = "none";
		}
		for (var j = 12; j < vertebralItems.length; j++) {
			vertebralItems[j].style.display = "none";
		}
	
		// Добавляем кнопку "Загрузить еще" внутри элементов при необходимости
		if (cervicalItems.length > 12) {
			var cervicalButton = document.createElement("button");
			cervicalButton.innerText = "Загрузить еще";
			cervicalButton.addEventListener("click", showMoreCervicalItems);
			cervicalWrapper.appendChild(cervicalButton);
		}
	
		if (vertebralItems.length > 12) {
			var vertebralButton = document.createElement("button");
			vertebralButton.innerText = "Загрузить еще";
			vertebralButton.addEventListener("click", showMoreVertebralItems);
			vertebralWrapper.appendChild(vertebralButton);
		}
	}

	$('.clinic--slider__slides').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.clinic--prev'),
		nextArrow: $('.clinic--next'),
		infinite: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 786,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		]
	});

	// Получаем ссылки
	var linksServices = document.querySelectorAll('.services--general__menu a');

	// Обходим все ссылки
	linksServices.forEach(function(link) {
		// Получаем id целевого блока
		var targetId = link.getAttribute('href');

		// Назначаем обработчик события клика на ссылку
		link.addEventListener('click', function(e) {
			// Отменяем стандартное поведение ссылки (переход по якорю)
			e.preventDefault();

			// Получаем целевой блок по его id
			var target = document.querySelector(targetId);

			// Проверяем, что целевой блок существует
			if (target) {
				// Вычисляем позицию целевого блока относительно верха страницы
				var offsetTop = target.offsetTop;

				// Скроллируем страницу до целевого блока
				if (window.innerWidth > 992) {
					window.scrollTo({
						top: offsetTop - 140,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth <= 992 && window.innerWidth > 480){
					window.scrollTo({
						top: offsetTop - 100,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth > 390 && window.innerWidth <= 480) {
					window.scrollTo({
						top: offsetTop - 60,
						behavior: 'smooth' // Плавная прокрутка
					});
				} else if (window.innerWidth <= 390) {
					window.scrollTo({
						top: offsetTop - 100,
						behavior: 'smooth' // Плавная прокрутка
					});
				}
			}
		});
	});

	const goTop = document.querySelector('.goTop');
	const socialFixed = document.querySelector('.social--fixed');
	if (goTop && socialFixed){
		window.addEventListener('scroll', function() {
			var scrollPosition = window.scrollY || document.documentElement.scrollTop;
			var goTopButton = document.querySelector('.goTop');
	
			if (scrollPosition >= 840) {
				goTopButton.classList.add('active');
				socialFixed.classList.add('active')
			} else {
				goTopButton.classList.remove('active');
				socialFixed.classList.remove('active')

			}
		});
	
		goTop.addEventListener('click', function() {
			goTop.classList.remove('active');
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
	}

	$('.main--licenses__wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.licenses--prev'),
		nextArrow: $('.licenses--next'),
		infinite: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 821,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 421,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		]
	});

	let links = document.querySelectorAll(".modal--open");
	let modals = document.querySelectorAll(".modal--id");
	// Добавляем обработчик события клика на каждую ссылку
	links.forEach(function(link) {
		let html = document.html || document.getElementsByTagName('html')[0];
		link.addEventListener("click", function(e) {
			e.preventDefault();

			// Получаем id модального окна из href атрибута ссылки
			let id = link.getAttribute("href").substring(1);

			// Перебираем модальные окна и добавляем класс "active" к соответствующему модальному окну
			modals.forEach(function(modal) {
				if (modal.id === id) {
					modal.classList.add("active");
					html.classList.add("overlay");
				} else {
					modal.classList.remove("active");
				}
			});
		});
	});

		// Находим все кнопки с классом open--modal
	let openModalButtons = document.querySelectorAll('.modal--problem__buttons .open--modal');

	// Для каждой кнопки навешиваем обработчик события "click"
	openModalButtons.forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.preventDefault(); // Отменяем стандартное действие ссылки или кнопки

			let modal = button.closest('.modal--problem'); // Находим ближайший родительский элемент с классом modal--problem
			modal.classList.remove('active'); // Удаляем класс "active" у найденного модального окна
		});
	});

	let openParking = document.querySelector('.open--parking');
	if (openParking){
		openParking.addEventListener('click', function(e){
			e.preventDefault();
			html.classList.add('overlay');
			let modal = document.querySelector('.modal--parking');
			modal.classList.toggle('active');
		});
	}

	$('.single--item__info--slider').on('init reInit',function(e,slick){
		if(slick.slideCount<=slick.options.slidesToShow){
			slick.slickAdd(slick.$slides.clone())
		}
	});

	function initCarousel(){
		$('.single--item__info--slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			prevArrow: $('.single--item__info--slider--prev'),
			nextArrow: $('.single--item__info--slider--next'),
			swipe: false,
			responsive: [
				{
					breakpoint: 481,
					settings: {
						swipe: true,
						slidesToShow: 1,
						variableWidth: false,
						centerMode: false
					}
				},
			]
		});
		function setArrowWidthsingle() {
			const prevArrow = document.querySelector('.single--item__info--slider--prev');
			const nextArrow = document.querySelector('.single--item__info--slider--next');
			const screenWidth = window.innerWidth;
	
			const baseWidth = 70; // Базовая ширина стрелок
			const pixelIncrement = 0.5; // Инкремент ширины на пиксель
	
			if (prevArrow && nextArrow){
				// Вычисление новой ширины стрелок
				const prevArrowWidth = Math.floor(baseWidth + ((screenWidth - 768) * pixelIncrement));
				const nextArrowWidth = Math.floor(baseWidth + ((screenWidth - 768) * pixelIncrement));
		
				// Применение новой ширины к стрелкам
				prevArrow.style.width = `${prevArrowWidth}px`;
				nextArrow.style.width = `${nextArrowWidth}px`;
			}
		}
		// Вызов функции при загрузке страницы и при изменении размера окна
		window.addEventListener('resize', setArrowWidthsingle);
		window.addEventListener('load', setArrowWidthsingle);
	}
	
	function destroyCarousel() {
		if ($('.single--item__info--slider').hasClass('slick-initialized')) {
			$('.single--item__info--slider').slick('unslick');
		}
	}

	function handleWindowResize() {
		if (window.innerWidth <= 992){
			initCarousel();
		} else { // Проверяем условие, когда нужно уничтожить карусель
			destroyCarousel();
		}
	}

	$(window).on('resize', handleWindowResize); // Добавляем обработчик события resize на объект window
	
	// Вызываем функцию handleWindowResize для проверки ширины окна сразу после загрузки страницы
	handleWindowResize();

	const smoothHeight = (itemSelector, buttonSelector, contentSelector) => { // объявляем основную функцию, которая принимает в качестве параметров селекторы элемента, кнопки внутри элемента и блока с контентом

		const items = document.querySelectorAll(itemSelector) // находим все элементы по переданному селектору в параметре itemSelector и записываем в константу items

		if (!items.length) return // если таких элементов нет, прекращаем выполнение функции

		items.forEach(el => { // для каждого элемента
			const button = el.querySelector(buttonSelector) // находим кнопку и записываем в константу button
			const content = el.querySelector(contentSelector) // находим блок с контентом и записываем в константу content

			button.addEventListener('click', () => { // при клике на кнопку
				if (el.dataset.open !== 'true') { // если значение data-атрибута open у элемента не равно 'true' и блок с контентом еще не отображен
					el.dataset.open = 'true' // тогда устанавливаем значение 'true'
					content.style.maxHeight = `${content.scrollHeight}px` // и блоку с контентом устанавливаем inline-свойсво max-height со вычисленным значением полной высоты этого блока
					button.style.display = 'none';
				} else { // если блок с контентом отображен и значение data-атрибута open у элемента равно 'true'
					el.dataset.open = 'false' // тогда устанавливаем значение 'false'
					content.style.maxHeight = '' // и сбрасываем ранее установленное inline-свойсво max-height
				}
			})

			const onResize = () => { // объявляем функцию onResize, которая будет корректировать значение inline-свойства max-height при изменении размеров окна браузера
				if (el.dataset.open === 'true') { // если значение data-атрибута open у элемента равно 'true' (коректировать высоту нужно только если блок контента отображен)
					if (parseInt(content.style.maxHeight) !== content.scrollHeight) { // если текущее значение inline-свойства max-height у блока контента не равно полной высоте
						content.style.maxHeight = `${content.scrollHeight}px` // только тогда блоку с контентом корректируем значение inline-свойсва max-height
					}
				}
			}

			window.addEventListener('resize', onResize) // вызываем функцию onResize при изменении размеров окна браузера
		})

	}

	smoothHeight('.main--advice__text', '.readmore', '.readmore--hidden') // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

	$('.services--physiotherapeuticEquipment__wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('.services--physiotherapeuticEquipment__prev'),
		nextArrow: $('.services--physiotherapeuticEquipment__next'),
		infinite: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 821,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		]
	});

	const smoothHeightQuestion = (itemSelector, buttonSelector, contentSelector) => {
		const items = document.querySelectorAll(itemSelector);
	
		if (!items.length) return;
	
		items.forEach(el => {
			const button = el.querySelector(buttonSelector);
			const content = el.querySelector(contentSelector);
	
			if (el.dataset.open === 'true') { // проверяем значение data-атрибута open у элемента
				button.classList.add('active') // добавляем класс 'active' в элемент
				content.style.maxHeight = `${content.scrollHeight}px` // устанавливаем высоту блока с контентом
			}
	
			button.addEventListener('click', () => {
				if (el.dataset.open !== 'true') {
					el.dataset.open = 'true';
					button.classList.add('active');
					content.style.maxHeight = `${content.scrollHeight}px`;
				} else {
					el.dataset.open = 'false';
					button.classList.remove('active');
					content.style.maxHeight = '';
				}
			})
	
			const onResize = () => {
				if (el.dataset.open === 'true') {
					if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
						content.style.maxHeight = `${content.scrollHeight}px`;
					}
				}
			}
	
			window.addEventListener('resize', onResize);
		})
	}
	smoothHeightQuestion('.kakpodgotovitsya--questions__item', '.kakpodgotovitsya--questions__item--title', '.kakpodgotovitsya--questions__item--answer'); // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

	const buttonsRes = document.querySelectorAll('.main--resorption__bottom--button');
	const bannersRes = document.querySelectorAll('.main--resorption__bottom--banner');

	buttonsRes.forEach( (button, index) => {
		button.addEventListener('click', (e) => {
			buttonsRes.forEach(btn => btn.classList.remove('active'));
			bannersRes.forEach(banner => banner.classList.remove('active'));
			button.classList.add('active');
			bannersRes[index].classList.add('active');
		});
	});

});