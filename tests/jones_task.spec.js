const { test, expect } = require('@playwright/test');

test('Jones Web Form Automation', async ({ page }) => {
    
    // 1. Navigation
    await page.goto('https://test.netlify.app/');

    // 2. Fill out the form fields
    await page.locator('#name').fill('Maor Sheiman');
    await page.locator('#email').fill('sheimanmaor@gmail.com');
    await page.locator('#phone').fill('054-6500014');
    await page.locator('#company').fill('Jones PropTech');
    await page.locator('#website').fill('https://maor-sheiman.com');

    // 3. Bonus: Change the Number of Employees from 1-10 to 51-500
    await page.locator('#employees').selectOption('51-500');

    // 4. Create a screenshot before clicking
    await page.screenshot({ path: 'before_submit.png' });

    // 5. Click the "Request a call back" button
    await page.getByRole('button', { name: 'Request a call back' }).click();

    // 6. Wait for the URL to change to the thank you page
    await expect(page).toHaveURL(/.*thank-you\.html/);
    
    // 7. Write to console when reaching the thank you page
    console.log('Successfully reached the thank you page!');
});