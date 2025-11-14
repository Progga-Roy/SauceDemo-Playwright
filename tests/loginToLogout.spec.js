// @ts-check
import { test, expect } from '@playwright/test';

test('A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out',
 async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
 // Logs in with valid credentials
 await page.fill("#user-name","standard_user")
 await page.fill("//input[@id='password']","secret_sauce");
 await page.click("//input[@id='login-button']");
 await page.waitForTimeout(3000);


});


