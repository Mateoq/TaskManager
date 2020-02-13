# TaskManager
This one is just a simple ReactJs app that allows a user to create and complete tasks in an easy way. This project was built on top of the NextJs framework, this framework encapsulates all the necessary functionality to run a SSR site and also have some rest services. It consist only in 2 pages:
  - **Auth:** As its name says, it allows the user to create a session, which is necessary to access the tasks.
  - **Home(index):** As its name says, permits the user to create new tasks and also see the available ones as well as complete them. It serves as homepage as well.

## Components
There're also a considerable amount of components that were used as foundation of the pages. These components are separated in two categories:
 - **Base Components:** These are the actual foundation of the app, the only dependency are the native components and these are stateless:
    - Button.
    - Div.
    - Form.
    - FormError.
    - Header.
    - HeaderItem.
    - Input.
    - Label.
    - Task.
- **Complex Components:** These are more robust components, they use base components, are stateful and can even depend on the context, but cannot be put into the page category:
    - TaskForm.
    - TaskList.

## Third-party dependencies
This app depends mainly on Nextjs which has the core functionality but also depends on some other libraries:
 - shortid.
 - Styled Components.
 - Styled Tools.
 - Prop Types.
 - React.
 - React Router.

## Design Decisions
For this particular application and due to its small size, there were two core decisions on the way of development:
  - First, each page controls its own state and flow by using the recent React feature hooks, this to separate dependencies and for easy tracking and management of the state.
  - Second, the styles of the components were managed by using Styled Components, a library that works kind of like the style system in React Native and it's pretty simple to implement, but as everything, it has its issues, issues that won't be visible in a simple app like this one.

## How to make it work.
Just run for development environment:
```
  npm i
  npm run dev
```

And for production:
```
  npm i
  npm run build
  npm run start
```

Production environment has some small optimizations and you need to open in the browser `http://localhost:3000`.

## TODOs:
Yes, there's stuff left to do:
 - **Test:** they are important to maintain the quality of the code and I will add some in the future.
