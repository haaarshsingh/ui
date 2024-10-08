import posts from "../[slug]/posts";

export const GET = async () => {
  const itemsXml = await posts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>https://ui.harshsingh.xyz/${post.slug}</link>
          <description>${post.metadata.summary}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Harsh Singh's UI</title>
        <link>https://harshsingh.xyz</link>
        <description>Experimental design laboratory.</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, { headers: { "Content-Type": "text/xml" } });
};
