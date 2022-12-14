## NodeJS-Weather-Fetcher
---
### Prerequisites
    
These packages are needed beforehand :
- [nodejs (v16.16.1)](https://github.com/nodejs/node/tree/v16.x) 
- [npm@8.15.1](https://github.com/npm/cli/tree/latest)
- Create an account in [openweathermap.org/](https://openweathermap.org/)

### Getting Started 

 Clone the repo into your local machine
```sh
git clone https://github.com/d3v-anaxa/NodeJS-Weather-Fetcher.git
```
 Move to the cloned directory

```sh
cd ./NodeJS-Weather-Fetcher
```
 start npm
```sh
npm init -y
```

 Install npm packages
```sh
npm i request dotenv
```

Login to [openweathermap.org/](https://openweathermap.org/) and go to 'My API Keys'

>![login to OpenWeather](asset/asset_1.png)

Generate a new API key and copy that

>![Generate and copy API key](asset/asset_2.png)

Then run the following command in the terminal[^1]

```sh
echo "APIKEY=<APIKEY>" >> .env
```

### Running Through the program

Run this command for furthur results[^2] 

```sh
node main.js <location-name>
```

**Example Commands :**
```sh
node main.js Asia
```

```sh
node main.js India
```

### Contribution

Please give feedback about the project 💟

<!-- NOTES -->
[^1]: ***< APIKEY > is copied from OpenWeather Account***

[^2]: ***< location-name > can be a valid name of any Continent | Country | City***