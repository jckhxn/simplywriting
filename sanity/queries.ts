// All groq queries
import { groq } from "next-sanity";

// Services query
export const SERVICES_QUERY = groq`*[_type == "service"] | order(order asc, _createdAt asc)`;

// Testimonials query
export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] | order(order asc, _createdAt desc) {
  name,
  position,
  company,
  testimonial,
  "image": image.asset->url,
  featured,
  order,
  "project": project->{
    title,
    "slug": slug.current
  }
}`;
// Feature Work query
export const FEATURED_WORK_QUERY = groq`*[_type == "work" && isFeatured == true] | order(_createdAt desc)
{
   "image": image.asset->url,
    title,
    excerpt,
    "slug": slug.current,
    "category": category->title,
    client,
    timeline,
    results,
    projectType,
    industry
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
  "posts": *[_type == "post" && 
    ($category == "" || category->title == $category)
  ] | order(_createdAt desc) [$start...$end] {
    title,
    description,
    "slug": slug.current,
    "author": {
      "name": author->name,
      "image": author->image.asset->url
    },
    "image": image.asset->url,
    "publishedDate": publishedDate,
    "category": category->title
  },
  "total": count(*[_type == "post" && 
    ($category == "" || category->title == $category)
  ]),
  "categories": *[_type == "category"]{
    title,
    description
  }
}
`;
// Prepare Navigation Links
export const NAVIGATION_LINKS = groq`
  mainLinks[]{
    ...,
    link{
      ...,
      "internal": internal->{
        ...,
        pathname
      }
    }
  },
  ctaButtons[]{
    ...,
    link{
      ...,
      "internal": internal->{
        ...,
        pathname
      }
    }
  }`;

// Prepare Footer Links
export const FOOTER_LINKS = groq`
  quickLinks[]{
    ...,
    link{
      ...,
      "internal": internal->{
        ...,
        pathname
      }
    }
  },
  serviceLinks[]{
    ...,
    link{
      ...,
      "internal": internal->{
        ...,
        pathname
      }
    }
  },
  legalLinks[]{
    ...,
    link{
      ...,
      "internal": internal->{
        ...,
        pathname
      }
    }
  }`;

// Get Site info with singleton navigation and footer.
export const SITE_QUERY = groq`*[_type == "site"][0] {
    title,
    description,
    url,
    companyName,
    tagline,
    email,
    phone,
    address,
    socialMedia,
    "ogimage": ogimage.asset->url,
    navigation {
      brandName,
      "logo": logo.asset->url,
      showBrandName,
      stickyNavigation,
      transparentOnTop,
      ${NAVIGATION_LINKS}
    },
    footer {
      companyDescription,
      showContactInfo,
      showSocialMedia,
      copyrightText,
      footerColumns,
      ${FOOTER_LINKS}
    }
}`;
// Gets Page based on current slug.
export const PAGE_QUERY = groq`*[_type == "page" && pathname.current == $pathname][0]{
  ...,
  "globals":${SITE_QUERY},
  sectionsBody[]{
    ...,
    ctas[]{
      ...,
      link{
        ...,
        "internal": internal->{
        ...,
          pathname
        }
      }
    }
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
