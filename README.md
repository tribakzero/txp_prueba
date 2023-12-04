# TXP Prueba

Challenge solution built by Alejandro Camarillo. Using a combination of Vue 3, Vite, Pinia and TailwindCSS.

## Tasks

[x] Task 1: Create UserList Component

    - Using vite for the speed when compared to Vue CLI.
    - Pinia as a Store Manager instead of Vuex due to it's API. I know Pinia may be a little too much for this small project, but thinking on a bigger project, it is a good move to add a State Manager from the beginning.
    - TailwindCSS for speed of styling, adding it early to have it all together.
    - Using pravatar.cc to quickly get some avatars going.
    - Will be doing some minor styling between tasks so the current product version is still appealing to the eye.
    - Even when the task _implicitly_ called for a List, I ended up using a Table as it's a better tool for the job, it has great default styling and allows for this kind of tabulated data to fit nicely.
    - Used a hardcoded mock with an array of fake users, I considered where to put this set of data, decided to put it inside the component for commodity and even more when you think on how it was going to be handled in the next iteration.
    - Wanted to add a UserRow component to make things easy to read, but it seems an overengineering at the moment, will continue to consider it, specialy when styling the view.

[x] Task 2: Fetch Users Data

    - Loads Users directly on the UserList component to prevent prop drilling data that only concerns to that component.
    - I didn't wanted to use a third party dependency for the API call since it was too simple. Pinia in the other hand will come handy for the search functionality and the state management in general.
    - I know I could also make this work without Pinia, but I've been thinking on how this project could grow, if the API was a little more versatile I'd even prefer using Vue Query to manage the requests, loading and error scenarios without any hassle.
    - Used Pinia to handle the data with a simple store for the users and an action to trigger the API call, which is moved to a separated place to prevent mixing responsibilities between the store and the API request(s).

[x] Task 3: Add User Search Functionality

    - There was a little uncertainty inside the task description where it suggested that the search feature could use one or the other (name or email) as a filter, but at the same time it reads as it could use both at the same time. I went with the latter as it was a little more complex but in a real scenario I would be asking the team for a definition instead so that the ticket was clearer and we only do what was expected, not what we assumed.
    - Filtering works locally, I initially thought it could be done via the API itself, but it isn't as smart (even when you can do [partial lookups via this undocumented syntax](https://github.com/typicode/jsonplaceholder/issues/156), it can't search on two different object properties at the same time, there's [an open issue](https://github.com/typicode/json-server/issues/938) asking for an `or` logic to the filters, but has been stale since 2021).
    - There's a "hack" to how User Rows are being styled, the avatar is pushed to give space to the whole row, but there could be some edge cases where this seems badly, the problem is mostly related to the top-border added to each row, these are 100% the size of the container, but the rows should have a padding inside, I'm still considering how to solve this, may need to style each TD to have said padding so that both the start and the end have the space around them, not only the avatar as it is right now, a nice challenge for the next task.
    - Added a couple transitional scenarios that aren't considered in the designs, I like when designs cover these scenarios, but since they are pretty obvious it's easy to imagine them and build them directly on the code instead.

[ ] Task 4: Styling

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
