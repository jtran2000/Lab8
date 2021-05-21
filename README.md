# Lab8_Starter

## Check your understanding q's (FILL OUT)

1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    Choice 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    A unit test can check for things like proper metadata and timestamp, but this feature would require a lot of manual testing.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question,    assume the “max message length” feature prevents the user from typing more than 80 characters

    Yes. I would have separate unit tests on both the frontend and the backend. The frontend test would check to make sure the UI prevents messages of over 80 characters from being submitted, and the backend unit test would check if the server side code ensures any message with over 80 characters would either be rejected or truncated. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    The UI would not be rendered in the browser. This is useful if we want to do unit tests.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test cas`e?

I would call `router.setState('settings',false,null);` in `beforeAll`;
