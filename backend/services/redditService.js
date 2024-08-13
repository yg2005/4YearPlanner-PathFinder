// backend/services/redditService.js
const snoowrap = require("snoowrap");

const reddit = new snoowrap({
  userAgent: "your-user-agent",
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  refreshToken: process.env.REDDIT_REFRESH_TOKEN,
});

const fetchRedditData = async (major) => {
  try {
    const subreddit = await reddit.getSubreddit("rutgers");
    const posts = await subreddit.search({
      query: `${major} courses`,
      time: "all",
      sort: "relevance",
    });

    const recommendations = posts.map((post) => ({
      title: post.title,
      url: post.url,
      score: post.score,
      comments: post.num_comments,
    }));

    return recommendations;
  } catch (error) {
    console.error("Error fetching Reddit data:", error);
    throw error;
  }
};

module.exports = { fetchRedditData };
