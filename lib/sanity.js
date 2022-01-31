import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "cecku22p",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: "skEhzJbFgoQl78ZdRZVoDUby3IxhaFEpiJjx0uPac421Z40v2wzvrxVvilMkaGdghjlYt6Sc7XvQyTCDpUa7S5yXskwiYju1NLxL91o0gSKq62IO9IiC5Y2Cu3hAxiz3RdCwu88WJXoBtQoBRSknCWIVW6rX1vEaD5DgBrR0teBmst3nyT7R", // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});