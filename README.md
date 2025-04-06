# Quote Generator App
## Overview

This is a simple and interactive Quote Generator web app built using Vue 3 and styled with Tailwind CSS. The app fetches random quotes from the API Ninjas Quotes API and displays them. Users can click a button to generate a new quote, and the first quote is displayed automatically when the page loads.
Features

✅ Fetches random quotes from the API Ninjas Quotes API.

✅ Displays quote content and author.

✅ Generate new quotes with a button click.

✅ Automatically displays a quote on page load.

✅ Live Demo: Access the app hosted on Vercel [here](https://quotegen-psi.vercel.app/).
## Installation & Setup

Clone this repository:
```
git clone https://github.com/your-username/quote-generator.git
cd quote-generator
```
Install dependencies:
```
npm install
```
Run the development server:
```
npm run serve
```
Open your browser and navigate to http://localhost:8080/ to see the app in action!
## Usage

When the page loads, a random quote will automatically be displayed.

Click the "Generate Quote" button to display a new quote.

Quotes come from the API Ninjas Quotes API.

## API Key

This app uses the API Ninjas Quotes API. You need an API key to use this API.

To get your own API key:

    Visit API Ninjas and sign up for an account.

    Once registered, go to the API dashboard, and you will find your API key.

Replace the ```X-Api-Key``` in the ```generateBtn()``` method with your API key:
```
const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
  headers: { 'X-Api-Key': 'your-api-key' },
})
```
## Future Enhancements

🔹 Theming Options: Customizable light and dark mode for user preference.

🔹 Quote Categories: Allow users to filter quotes by category.
## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for improvements or new features.
## License

This project is licensed under the MIT License.
