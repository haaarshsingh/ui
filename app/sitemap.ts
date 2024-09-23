import posts from "./[slug]/posts";

export default () => [
  ...["", "/craft", "/writing"].map((route) => ({
    url: `https://harshsingh.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  })),
  ...posts().map((post) => ({
    url: `https://harshsingh.xyz/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  })),
];
