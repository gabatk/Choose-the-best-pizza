const input = document.querySelector('search');
const ingredients = document.querySelectorAll('.list-details');

const search = () => {
	let insertedValue = input.value.toLowerCase();
    
	ingredients.forEach(element => {
		if (!element.textContent.toLowerCase().includes(insertedValue)) {
			element.parentElement.classList.add('hidden');
		} else {
			element.parentElement.classList.remove('hidden');
		}
	});
};

input.addEventListener('keyup', search);
