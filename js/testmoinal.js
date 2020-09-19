  	$(function () {
 	const testiWrapper = document.querySelector('.testimonial-wrapper-new');
		const testiWrapperRow = document.querySelector('.testimonial-wrapper-new .row');
		const imgToClick = document.querySelectorAll('.test-jeq-img img');
		const title = document.querySelector('.test-hed-det h3');
		const image = document.querySelector('.test-imhg-1 img');
		const name = document.querySelector('.test-hed h4');
		const star = document.querySelector('.icon-star');
		const text = document.querySelector('.test-para-det p');

		testiWrapper.style.overflow = 'hidden';
		testiWrapperRow.style.transition = 'all .5s';

		imgToClick.forEach(img => {
			img.addEventListener('click', (e) => {
				e.preventDefault();
				clearInterval(interChange);
				e.target.dataset.pos === 4 ? null : count = parseInt(e.target.dataset.pos) + 1;
				activeAction(e.target);
				interChange = setInterval(myInterval, 4000);
			});
		});

		const imgArr = Array.from(imgToClick);
		let count = 1;
		let interChange;
		interChange = setInterval(myInterval, 4000);

		//		function myInterval(){
		//			if(count >= imgArr.length){
		//				count = 0;
		//			}else{
		//				activeAction(imgArr[count]);
		//				count ++;
		//			}
		//		}
		function activeAction(e) {
			testiWrapperRow.style.opacity = 0;
			clearActive();
			setActive(e);
			setTimeout(function() {
				image.src = "img/" + e.dataset.img;
				title.textContent = e.dataset.title;
				name.textContent = e.dataset.name;
				text.textContent = e.dataset.text;
				setStar(e.dataset.star);
				testiWrapperRow.style.opacity = 1;
			}, 700);
		}

		function clearActive() {
			imgToClick.forEach(img => img.className = '');
		}

		function setActive(e) {
			e.className = 'active';
		}

		function setStar(count) {
			star.innerHTML = '';
			let str = '';
			for (let i = 0; i < count; i++) {
				str += `<i class="fas fa-star"></i>`;
			}
			star.innerHTML = str;
		}
 	}); 