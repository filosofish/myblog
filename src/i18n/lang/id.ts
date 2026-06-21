import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Beranda",
    posts: "Tulisan",
    tags: "Tag",
    about: "Tentang",
    archives: "Arsip",
    search: "Cari",
  },
  post: {
    publishedAt: "Diterbitkan pada",
    updatedAt: "Diperbarui",
    sharePostIntro: "Bagikan tulisan ini:",
    sharePostOn: "Bagikan tulisan ini di {{platform}}",
    sharePostViaEmail: "Bagikan tulisan ini via email",
    tagLabel: "Tag",
    backToTop: "Kembali ke atas",
    goBack: "Kembali",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Tautan Sosial",
    featured: "Unggulan",
    recentPosts: "Tulisan Terbaru",
    allPosts: "Semua Tulisan",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
