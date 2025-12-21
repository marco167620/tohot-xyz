import satori from "satori";
import { SITE } from "@/config";

// 🔴 移除原本的 Google Fonts 載入器，我們改用直連
// import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  // 🟢 1. 定義中文字體網址 (思源黑體)
  const notoSansTC =
    "https://github.com/google/fonts/raw/main/ofl/notosanstc/NotoSansTC-Regular.ttf";

  // 🟢 2. 下載字體 (Regular 和 Bold 都用同一個檔案以節省頻寬)
  const fontRegular = await fetch(notoSansTC).then((res) => res.arrayBuffer());
  const fontBold = await fetch(notoSansTC).then((res) => res.arrayBuffer());

  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                border: "4px solid #000",
                background: "#ecebeb",
                opacity: "0.9",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                border: "4px solid #000",
                background: "#fefbfb",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
                width: "88%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 72,
                          fontWeight: "bold",
                          maxHeight: "84%",
                          overflow: "hidden",
                        },
                        children: post.data.title,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 28,
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              children: [
                                "by ",
                                {
                                  type: "span",
                                  props: {
                                    style: { color: "transparent" },
                                    children: '"',
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    style: {
                                      overflow: "hidden",
                                      fontWeight: "bold",
                                    },
                                    children: post.data.author,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: { overflow: "hidden", fontWeight: "bold" },
                              children: SITE.title,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      // 🟢 3. 這裡修改了字體設定，不再呼叫 loadGoogleFonts
      fonts: [
        {
          name: "Noto Sans TC",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Noto Sans TC",
          data: fontBold,
          weight: 700, // 雖然檔案一樣，但我們標記它為粗體
          style: "normal",
        },
      ],
    }
  );
};