# SimplyWriting

# Fetching documents and their fields from Sanity

# Use the GENERATE_DOC_QUERY to generate the query with the needed params.

# This keeps the queries.ts file clean, esp. if you have a lot of components fetching different data.

// const data = await loadQuery<PagePayload | null>({
// query: GENERATE_DOC_QUERY({ documentType: "post" }),
// });

## Description

SimplyWriting is a professional services site for a writer. It provides a clean and simple interface to showcase writing services, portfolio, and blog posts. The site includes a custom page builder that can be accessed and managed directly from the Sanity dashboard.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Content Management:** Sanity.io
- **Deployment:** Vercel

## Page Builder

SimplyWriting features a custom page builder integrated with the Sanity dashboard. This allows users to create and manage pages dynamically without needing to write code. The page builder supports various content types and layouts, making it easy to customize the site to fit your needs.
