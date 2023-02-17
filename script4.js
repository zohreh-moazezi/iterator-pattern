// Iterator Pattern

// another method of iterating through list of items

// array of objects (newsfeed)
newsfeeds = [
  {
    type: "top-headlines",
    query: "sources=bbc-news",
  },
  {
    type: "everything",
    query: "domains=techcrunch.com&language=en",
  },
  {
    type: "technology",
    query: "domains=comicbookmovie.com&language=en",
  },
];

for (let feed of newsfeeds) {
  console.log(feed.type);
}
