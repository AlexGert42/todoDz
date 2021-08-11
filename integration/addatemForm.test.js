discribe('addItemForm', () => {

    it('test_1', async () => {
        await page.goto('http://localhost:6006/iframe.html?path=/story/todolist-createtodo--create-todo-list')
        const image = await page.screenshot()

        expect(image).toMatchInlineSnapshot()
    })
})