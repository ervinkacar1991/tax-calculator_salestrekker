
<p align="center">
  <a href="https://www.salestrekker.com">
    <img src="https://www.salestrekker.com/images/logo.png" />
  </a>
</p>


<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,tailwind" />
  </a>
</p>

# Income tax calculator

Income Tax Calculator is a utility app that helps you calculate 
the tax for your income in no time based on the latest
tax rates. This app is a useful tool for individuals,
especially Salaried employees. In this app,
you can calculate 20% tax on your salary on a weekly, monthly and
yearly basis.


## Usage/Examples - Component based example

```javascript
import {useState} from 'react
import IncomeTaxCalculator  from './IncomeTaxCalculator'

function IncomeTaxCalculator() {

     const INCOME_TAX_RATE = 0.2;
     const [grossIncome, setGrossIncome] = useState(0);
     const [netIncome, setNetIncome] = useState(0);
     const tax = grossIncome - netIncome;

  function handleGrossIncomeChange(e) {
     setGrossIncome(e.target.value);
  }

  function handleCalculateClick() {
     const tax = grossIncome * INCOME_TAX_RATE;
     const net = grossIncome - tax;
     setNetIncome(net);
  }

  return (
      <> Here we will present the result in a table ... </>
  )
}
export default IncomeTaxCalculator;
```


## Income-tax App ScreenShots


# HomePage - Calculator

![App Screenshot](https://github.com/ervinkacar1991/tax-calculator_salestrekker/blob/master/ScreenShots/Screenshot%202023-01-13%20200234.png?raw=true)

## Details - Table

![App Screenshot](https://github.com/ervinkacar1991/tax-calculator_salestrekker/blob/master/ScreenShots/Screenshot%202023-01-13%20200317.png?raw=true)

## Installation

Install my-project with yarn

```bash
  Create empty folder "test_salestrekker"
  cd test_salestrekker
   -yarn init -y 
   -yarn add react and react-dom

     **Setup webpack**
   -yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
     
     **Setup babel**
   -yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader

     **Configuration**
   -Create: index.html
   -Create: index.js
   -Create: webpack.config.js
   -Create: .babelrc


   ***START APP***

   -yarn server

   -PORT: 9000




```
    
## Features


- Fullscreen mode



## Tech Stack

**Client:** React, TailwindCSS




## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ervin-kacar-bbb801223/)

