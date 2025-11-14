// @ts-check
import { test, expect } from '@playwright/test';

test('A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out',
 async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
 // Logs in with valid credentials
 await page.fill("#user-name","standard_user")
 await page.fill("//input[@id='password']","secret_sauce");
 await page.click("//input[@id='login-button']");
 await page.waitForTimeout(1000);
// Click for the item "Sauce Labs Bike Light and add to cart"
 await page.click("//div[normalize-space()='Sauce Labs Bike Light']");
 await page.click("//button[@id='add-to-cart']");
 //Click cart icon to verify the product name
 await page.click("//a[@class='shopping_cart_link']")
 await expect(page.locator("//div[@class='inventory_item_name']")).toHaveText("Sauce Labs Bike Light");
 await page.waitForTimeout(2000);


});


