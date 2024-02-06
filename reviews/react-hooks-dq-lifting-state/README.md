# Discussion Questions: Lifting State Exercise

Welcome to `Fwitter`! In this application, you can view tweets from four Twitter
users. It's also got a dark mode theme toggle because dark mode is all the rage
these days.

Here's what the full working app should look like:

![demo](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-dq-lifting-state/master/fwitter-demo.gif)

Before starting work on the deliverables below, you might find it helpful to
draw out the component tree. Think about where state is currently defined in our
app, and if you'll need to move it to another component to get the deliverables
working. You might also need to change some functional components into
class-based components and vice versa.

Your deliverables:

## 1. Toggle dark mode in the Header component

Our `<Header>` component has a dark mode theme feature that can be enabled by
clicking on the toggle. In order to switch the dark mode theme for the header,
you'll need to toggle the `darkMode` key in state from true to false.

## 2. Toggle dark mode throughout the application

It's nice having a theme applied to the nav bar, but what if we want that theme
to apply to our whole application? The CSS for this app is already set up. All
we need to do to apply a dark mode theme to all of our components is change the
`darkMode` prop being passed down to our `<DarkModeWrapper>` in `<App>` to true:

```jsx
<DarkModeWrapper darkMode={true}>// ...</DarkModeWrapper>
```

HINT: You may need to change where the `darkMode` state is being set to get this
feature to work.

## 3. Click 'View Tweets' on the user card to view the user's tweets

We're currently only able to see the tweets for one user! Our data is being
loaded in `<TweetsContainer>` in the format below. Find a way to change which
user's tweets are being displayed.

```js
// Sample user data
[
  {
    id: 1,
    handle: "@coffee_dad",
    description: "just a dad who loves his coffee",
    photo:
      "https://pbs.twimg.com/profile_images/378800000823347939/036f78135425d19367fcbb76ef58e86d_bigger.jpeg",
    tweets: [
      {
        created_at: "Wed Jun 12 13:49:10 +0000 2019",
        favorite_count: 5782,
        id: 1138805443562803200,
        text: "coffee",
      },
      // more tweet objects
    ],
  },
  // more user objects
];
```

## 4. BONUS: Click the Like button to increase likes on a tweet

When you click the Like button under a tweet, it should update the
`favorite_count` attribute for that specific tweet. Since each user has an array
of tweets associated with them, you'll need to work with updating nested state
to get this feature working.

HINT: Consider using `map` to iterate over the array of tweets. Make sure to
only update the tweet object that the user clicked!
