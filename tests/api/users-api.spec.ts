import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.use({ baseURL: 'https://jsonplaceholder.typicode.com' });

test('API: GET /users from jsonplaceholder', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/users`);
    expect(response.status()).toBe(200);
    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
});

// POST /posts test
test('API: POST /posts to jsonplaceholder', async ({ request, baseURL }) => {
    // payload for new post
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    // send POST request
    const response = await request.post(`${baseURL}/posts`, { data: newPost });
    // expect resource created
    expect(response.status()).toBe(201);
    const created = await response.json();
    // response should include submitted fields
    expect(created).toMatchObject(newPost);
    // API returns an id for the new post
    expect(created.id).toBeDefined();
});

// POST /comments test
test('API: POST /comments to jsonplaceholder', async ({ request, baseURL }) => {
    // payload for new comment
    const newComment = {
        name: 'Test Comment',
        email: 'tester@example.com',
        body: 'This is a test comment.',
        postId: 1
    };
    // send POST request
    const response = await request.post(`${baseURL}/comments`, { data: newComment });
    // expect resource created
    expect(response.status()).toBe(201);
    const created = await response.json();
    // response should include submitted fields
    expect(created).toMatchObject(newComment);
    // API returns an id for the new comment
    expect(created.id).toBeDefined();
});

