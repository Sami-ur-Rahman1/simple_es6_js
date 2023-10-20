document.addEventListener('DOMContentLoaded', function () {
    // Temperature Converter
    const tempConverterForm = document.getElementById('temp-converter-form');
    const celsiusInput = document.getElementById('celsius-input');
    const tempResult = document.getElementById('temp-result');

    tempConverterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the Celsius temperature from the input field
        const celsius = parseFloat(celsiusInput.value);

        // Check if the input is a valid number
        if (!isNaN(celsius)) {
            // Convert Celsius to Fahrenheit
            const fahrenheit = (celsius * 9/5) + 32;

            // Display the result on the page
            tempResult.textContent = `Result: ${celsius}°C is equal to ${fahrenheit}°F`;
        } else {
            tempResult.textContent = 'Please enter a valid temperature';
        }
    });

    // Marla to Square Feet Converter
    const marlaConverterForm = document.getElementById('marla-converter-form');
    const marlaInput = document.getElementById('marla-input');
    const marlaResult = document.getElementById('marla-result');

    marlaConverterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the Marla value from the input field
        const marla = parseFloat(marlaInput.value);

        // Check if the input is a valid number
        if (!isNaN(marla)) {
            // Convert Marla to square feet (1 Marla = 272.25 square feet in Pakistan)
            const squareFeet = marla * 272.25;

            // Display the result on the page
            marlaResult.textContent = `Result: ${marla} Marla is equal to ${squareFeet} square feet`;
        } else {
            marlaResult.textContent = 'Please enter a valid Marla value';
        }
    });

    // Yards to Square Feet Converter
    const yardConverterForm = document.getElementById('yard-converter-form');
    const yardInput = document.getElementById('yard-input');
    const yardResult = document.getElementById('yard-result');

    yardConverterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the Yard value from the input field
        const yard = parseFloat(yardInput.value);

        // Check if the input is a valid number
        if (!isNaN(yard)) {
            // Convert Yards to square feet according to Pakistani measurements (1 Yard = 9 square feet)
            const squareFeet = yard * 9;

            // Display the result on the page
            yardResult.textContent = `Result: ${yard} Yards is equal to ${squareFeet} square feet`;
        } else {
            yardResult.textContent = 'Please enter a valid Yard value';
        }
    });
});
