import { PagePayload } from "@/types";
import { loadQuery } from "./loadQuery";
import {
  PAGE_QUERY,
  SITE_QUERY,
  POST_QUERY,
  POSTS_QUERY,
  ALL_WORKS_QUERY,
  WORK_QUERY,
} from "./queries";

// Site Global Settings, such as Header and Footer.
export async function loadSite() {
  return loadQuery<PagePayload | null>({
    query: SITE_QUERY,
  });
}

export async function loadPage(pathname: string) {
  return loadQuery<PagePayload | null>({
    query: PAGE_QUERY,
    params: { pathname },
  });
}

export async function loadPost(slug: string) {
  return loadQuery<PagePayload | null>({
    query: POST_QUERY,
    params: { slug },
  });
}
export async function loadPosts(page: number, postsPerPage: number) {
  // Handles the math for pagination.
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  return loadQuery<PagePayload | null>({
    query: POSTS_QUERY,
    params: { start, end },
  });
}

export async function loadWorks(
  page: number,
  postsPerPage: number,
  category: string
) {
  // Handles the math for pagination.
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  return loadQuery<PagePayload | null>({
    query: ALL_WORKS_QUERY,
    params: { start, end, category },
  });
}

// Load a single work based on the slug.
export async function loadWork(slug: string) {
  return loadQuery<PagePayload | null>({
    query: WORK_QUERY,
    params: { slug },
  });
}
