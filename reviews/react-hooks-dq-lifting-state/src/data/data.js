import coffee_dad from './coffee_dad.json'
import dog_feelings from './dog_feelings.json'
import horse_ebooks from './horse_ebooks.json'
import microsff from './microsff.json'

const getTweets = (json) => json.map(({ id, text, created_at, favorite_count }) => ({ id, text, created_at, favorite_count }))

export const users = [
  {
    id: 1,
    handle: "@coffee_dad",
    description: "just a dad who loves his coffee",
    photo: "https://pbs.twimg.com/profile_images/378800000823347939/036f78135425d19367fcbb76ef58e86d_bigger.jpeg",
    tweets: getTweets(coffee_dad)
  },
  {
    id: 2,
    handle: "@dog_feelings",
    description: "Thoughts of Dog",
    photo: "https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_400x400.jpg",
    tweets: getTweets(dog_feelings)
  },
  {
    id: 3,
    handle: "@horse_ebooks",
    description: "Horse ebooks",
    photo: "https://pbs.twimg.com/profile_images/1096005346/1_400x400.jpg",
    tweets: getTweets(horse_ebooks)
  },
  {
    id: 4,
    handle: "@microsff",
    description: "Very short science fiction/fantasy stories by O. Westin.",
    photo: "https://pbs.twimg.com/profile_images/522520775002058752/ZD7KK74G_400x400.jpeg",
    tweets: getTweets(microsff)
  }
]