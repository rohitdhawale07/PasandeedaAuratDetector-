const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['Diksha', 'Baby', 'Jaan', 'Meri Vali', 'kritika']; // Add multiple names
const nextPageUrl = 'main.html'; // URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim().toLowerCase();

	// Convert all secret codes to lowercase and check if input exists
	const isCorrect = secretCodes.some(name => name.toLowerCase() === userInput);

	if (isCorrect) {
		// resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		alert('Naa, Tum meri baby nhi hoo kon hooo tum!!!! kaha hai meri Vali...');

		// Add a hint below the input field
		let hintDiv = document.getElementById('hint');
		if (!hintDiv) {
			hintDiv = document.createElement('div');
			hintDiv.id = 'hint';
			hintDiv.style.marginTop = '10px';
			hintDiv.style.color = 'red';
			hintDiv.style.fontSize = '14px';
			hintDiv.style.fontWeight = 'bold';
			form.appendChild(hintDiv);
		}
		hintDiv.innerHTML = '💡 Hint: Humari Pasandeeda Aurat ka naam yaad hai? 🤔😉';
	}
});
