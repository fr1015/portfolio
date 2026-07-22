export default defineSitemapEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .select('path')
    .all()

  return posts.map(post => ({
    loc: post.path
  }))
})