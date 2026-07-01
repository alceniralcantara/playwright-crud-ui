import { test, expect } from '@playwright/test';

// This test demonstrates basic CRUD operations on the public React TodoMVC
// application. It creates a new todo, verifies it exists, updates the text,
// and finally deletes it. Using user-centric locators (placeholder text,
// double-click to edit, and hover to reveal the delete button) follows
// Playwright best practices for stable selectors【465384592128435†L84-L121】.

test.describe('TodoMVC CRUD operations', () => {
  test('create, read, update and delete a todo item', async ({ page }) => {
    // Navigate to the base URL configured in playwright.config.ts
    await page.goto('/');

    // Create: add a new todo item
    const initialText = 'Write Playwright tests';
    await page.getByPlaceholder('What needs to be done?').fill(initialText);
    await page.keyboard.press('Enter');

    // Read: verify the item appears in the list
    const todoItem = page.locator('.todo-list li', { hasText: initialText });
    await expect(todoItem).toBeVisible();

    // Update: double-click the label to enter edit mode, update the text,
    // then press Enter to save
    const updatedText = 'Write robust Playwright tests';
    await todoItem.dblclick();
    const editInput = todoItem.locator('.edit');
    await editInput.fill(updatedText);
    await editInput.press('Enter');

    // Verify update by ensuring the new text exists and the old text does not
    await expect(page.locator('.todo-list li', { hasText: updatedText })).toBeVisible();
    await expect(page.locator('.todo-list li', { hasText: initialText })).toHaveCount(0);

    // Delete: hover to reveal the destroy button and click it
    const updatedItem = page.locator('.todo-list li', { hasText: updatedText });
    await updatedItem.hover();
    await updatedItem.locator('.destroy').click();

    // Confirm deletion – the updated item should no longer exist
    await expect(page.locator('.todo-list li', { hasText: updatedText })).toHaveCount(0);
  });
});
