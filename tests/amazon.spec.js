const{test,expect}= require('@playwright/test');
test('Home Page', async({page})=>{
await page.goto('https://www.amazon.in/');
const title =await page.title();
await page.title();
await page.click();

});