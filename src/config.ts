export const SITE = {
  website: "https://tohot.xyz", // replace this with your deployed domain
  author: "Marco Lee",
  profile: "https://tohot.xyz/about",
  desc: "探索 Web3、AI 與 ESG 的永續新共識",
  title: "馬可博土的數位治理實驗室",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: false, // show back button in post detail
  editPost: {
    enabled: false,
    text: "勘誤/編輯此頁", // 中文化
    url: "https://github.com/marco167620/tohot-xyz/edit/main/",
    appendFilePath: true, // [重要] 確保連結能精準指向檔案
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-TW", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
