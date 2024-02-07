---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L7 - React Client Side Routing slides"
---

<h1> Client Side Routing 📲 </h1>

---

<h2><strong> ✅ Objectives </strong></h2>

- Create a multi-page SPA
- Utilize the most common react-router components to build a SPA: RouterProvider, Outlet, NavLink, Link
- Use custom hooks like useOutletContext and useParams to access the state of the router
- Use the navigate function to navigate pages
- Create dynamic routes and use params

---

### 💡 What is client side routing and React router?

<div style="font-size: 0.8em">

"React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."
[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/tutorial) {.fragment}

<div class="fragment">⬇️ 

"Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content" - Will Taylor
</div>
</div>

---

### 🗒️ Planning Routes 

<div style="font-size: 0.8em">
Before we do anything, we need to make a plan about what we want.

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| ProjectForm     | /projects/new      |
| ProjectDetail   | /projects/:id      |
| ProjectList     | /projects          |

</div>

---

### The Primary React Router Components 

- RouterProvider

- Outlet

- Link

- NavLink
---

### 1️⃣ RouterProvider 

<div style="font-size: 0.8em">

<div style="display: flex">

  <div style="width: 30%; text-align: left;">

  <small>

💡 `RouterProvider` provides the router to our application.

</small>

  </div>
  <div class="fragment" style="width: 80%">

```js
// src/index.js
  import {RouterProvider} from "react-router-dom"

  const root = createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />)
```

  </div>
</div>


</div>

---

### 1️⃣ createBrowserRouter 

<div style="font-size: 0.8em">

<div style="display: flex">

  <div style="width: 30%; text-align: left;">

  <small>

💡 `createBrowserRouter` function is used to create the router for our application.


</small>
We pass it and array of objects. Each object is a route we add to our application. (You can also declare routes with JSX using the createRoutesFromElements function and the Route component)

It uses the DOM History API to update the URL and manage the history stack.

  </div>
  <div class="fragment" style="width: 80%">

```js
// src/index.js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/some-other-route",
      element: <About />
    }
  ]);
```

  </div>
</div>


</div>

---

### Child Routes // Nested Routes

<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">

  Add a `children` property to a route. This will be an array of route objects.

  a route with a property of index true will be the default child route when you navigate to the parent route.

  </div>
  <div style="width: 65%; font-size: 0.95em" class="fragment">

  ```js
  // src/index.js
    const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <DefaultChild /> },
        {
          path: 'projects',
          element: <ProjectContainer />
          children: [
            {
              index: true
              element: <ProjectList />,
            },
            {
              path: "new",
              element: <ProjectForm />,
            },
            {
              path: ":projectId",
              element: <ProjectDetails />,
            },
          ]
        }
      ],
    }
  ]);
  ```

  </div>
</div>

---

### Outlet Component
<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">
    An `Outlet` should be used in parent route elements to render their child route elements. 
    
    This allows nested UI to show up when child routes are rendered. 
    
    If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

  </div>
  <div style="width: 65%; font-size: 0.95em" class="fragment">

  ```js

    import { useState } from "react"
    import { Outlet } from "react-router-dom"

    import Header from "./components/Header"

    function App() {
      const [ darkMode, setDarkMode ] = useState(true)

      function onDarkModeToggle() {
        setDarkMode(!darkMode)
      }

      const className = darkMode ? 'App' : 'App light'

      return <div className={className}>
        <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
        <Outlet />
      </div>;
    }

    export default App;
  ```

  </div>
</div>

---

### useOutletContext hook
<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">
    Often parent routes manage state or other values you want shared with child routes.

    To share context with child routes you pass the `Outlet` component a `context` prop.

    In the child route you can access the context with the `useOutletCotext` hook

  </div>
  <div style="width: 65%; font-size: 0.95em" class="fragment">

  ```js
function ProjectContainer() {
    const [ projects, setProjects ] = useState([])

    // other code to get projects and onAddProjects

    // context object passed as prop to Outlet
    const context = {
      projects: projects,
      onAddProject
    }
    return (
        <div>
            Project Container
            <Outlet context={context} />
        </div>
    )
}

import {useOutletContext} from "react-router-dom"

function ProjectForm() {
  const { onAddProject } = useOutletContext()

    return (
        <form className="form" onSubmit={handleSubmit}>
          form inputs here
        </form>
    )
}

  ```


  </div>
</div>

---

### Link Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `Link` creates an anchor tag in your application that will navigate using React Router instead of the browser default {.fragment}

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>` {.fragment}

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href) {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      <Link to="/" style={{ borderBottom: "none" }}>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
      </Link>
      <div className="navigation">
        <Link className="button" to="/projects">
          All Projects
        </Link>
        <Link className="button" to="/projects/new">
          Add Project
        </Link>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

---

### NavLink Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `NavLink` is the same as Link with the additional feature that an "active" class will be added when the url matches the value of the 'to' prop {.fragment}

💥 If you're building sidebar navigation with subsections, you may want the active class to apply to multiple links (the main and subsection) {.fragment}

💥 Otherwise, if you want the active class to only apply if the current URL is an exact match to the `NavLink`, then add the `exact` prop to the `NavLink` {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      ...
      <div className="navigation">
        <NavLink 
          className="button" 
          exact to="/projects"
        >
          All Projects
        </NavLink>
        <NavLink 
          className="button" 
          exact to="/projects/new"
        >
          Add Project
        </NavLink>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

