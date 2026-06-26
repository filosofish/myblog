import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://filosofish.com",
    title: "Filosofish",
    description: "This is a personal blog about diary, life journey, stories, narratives, and other things that i want to share with the world. I write about my experiences, thoughts, and ideas on various topics.",
    author: "Webillian",
    profile: "https://webillian.id",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Jakarta",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/filosofish/myblog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/filosofish/myblog" },
    { name: "x",        url: "https://x.com/webillian" },
    { name: "linkedin", url: "https://www.linkedin.com/in/webillian/" },
    { name: "mail",     url: "mailto:filosofish.com@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});