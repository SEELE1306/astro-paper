import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://seele1306.com/", // replace this with your deployed domain
  author: "Aoi",
  profile: "",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "[あおい] seele1306",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
