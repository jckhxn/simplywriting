// All groq queries
import { groq } from "next-sanity";

// Services query
export const SERVICES_QUERY = groq`*[_type == "service"]`;
// Feature Work query
export const FEATURED_WORK_QUERY = groq`*[_type == "work" && isFeatured == true]
{
   "image": image.asset->url,
    title,
    excerpt,
     "slug": slug.current,
         "category": category->title,
}`;
// All Work query
export const ALL_WORKS_QUERY = groq`{
  "posts": *[_type == "work" && 
    ($category == "" || category->title == $category)
  ] | order(_createdAt desc)[0...2] {
    title,
    excerpt,
    "category": category->title,
    "slug": slug.current,
    "author": {
      "name": author->name,
      "image": author->image.asset->url
    },
    "image": image.asset->url,
    "date": date
  },
  
  "total": count(*[_type == "work" && 
    ($category == "" || category->title == $category)
  ]),

  "categories": *[_type == "category"]{
    title,
    description
  }
}

`;
// Work Document query
export const WORK_QUERY = groq`*[_type == "work" && slug.current == $slug][0] {
  "image": image.asset->url,
  title,
  excerpt,
  "seo": {
    // Use coalesce to provide defaults from the parent if seo fields are null
    "title": coalesce(seo.title, title),
    "description": coalesce(seo.description, excerpt),
    "ogimage": coalesce(
      seo.ogimage.asset->url,       
      image.asset->url,  // Fallback to the parent's image
      *[_type == "site"][0].ogimage.asset->url  // Fallback to the site default image
    )
  },
  "file": fileUpload.asset->url,
  "author": {
    "name": author->name,
    "image": author->image.asset->url
  },
  date
}

`;
// Post query
export const POST_QUERY = groq`*[_type == "post" && slug.current==$slug][0]{
   "image": image.asset->url,
   title,
   "author": {
     "name": author->name,
     "image": author->image.asset->url
   },
   publishedDate,
   content,
   seo {
     ...,
     "title": coalesce(title, ^.title),
     "ogimage": coalesce(
       ogimage.asset->url,       
       ^.image.asset->url,         
       *[_type == "site"][0].ogimage.asset->url 
     )
   }
}
`;

// All Posts query.
export const POSTS_QUERY = groq` {
  "posts": *[_type == "post"] | order(_createdAt desc) [$start...$end] {
    title,
      description,
    "slug": slug.current,
    "author": {
      "name": author->name,
      "image": author->image.asset->url
    },
    "image": image.asset->url,
    "publishedDate": publishedDate
  },
  "total": count(*[_type == "post"])
}
`;
// Prepare Header
export const HEADER_SECTION = groq`headerPicker[]{...,
links[]{
      ...,
      link{
      ...,
        "internal": internal->{
        ...,
          pathname
}}
  }}`;
// Prepare CTA links
export const CTAs = groq`
    ctas[]{
      ...,
      link{
        ...,
        "internal": internal->{
        ...,
          pathname
        }
    }
  },`;

// Get Site info such as Header and Footer.
export const SITE_QUERY = groq`*[_type == "site"][0] {
    ...,${HEADER_SECTION}}`;
// Gets Page based on current slug.
export const PAGE_QUERY = groq`*[_type == "page" && pathname.current == $pathname][0]{
  ...,
  "globals":${SITE_QUERY},
  sectionsBody[]{
    ...,
    ${CTAs}
  },
  "seo": {
    "title": coalesce(seo.title, title),  // Use seo.title or fallback to title
    "description": coalesce(seo.description, description),  // Use seo.description or fallback to description
    "ogimage": coalesce(
      seo.ogimage.asset->url, 
      *[_type == "site"][0].ogimage.asset->url  // Fallback to the site default image if seo.ogimage is null
    )
  }
}  `;

// Fetch all components (sections) for a page.
export const SECTIONS_QUERY = groq`*[_type == "page" && _id == $docId][0] {
            sectionsBody[] {
              _type,
              _key,
              title
            }
          }`;
