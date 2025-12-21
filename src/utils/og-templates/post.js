// @ts-nocheck
import satori from "satori";
import { SITE } from "@/config";

export default async post => {
  // 🟢 1. 改用 Google Fonts GitHub 官方倉庫的 "Static" (靜態完整版)
  // 這裡的 /static/ 目錄下存放的是未經切割的完整 TTF 檔案，保證有標點符號
  const fontRegularURL = "https://raw.githubusercontent.com/google/fonts/main/ofl/notosanstc/static/NotoSansTC-Regular.ttf";
  const fontBoldURL =    "https://raw.githubusercontent.com/google/fonts/main/ofl/notosanstc/static/NotoSansTC-Bold.ttf";

  // 🟢 2. 下載字體
  const fontRegular = await fetch(fontRegularURL).then((res) => res.arrayBuffer());
  const fontBold = await fetch(fontBoldURL).then((res) => res.arrayBuffer());

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
          // 🟢 3. 明確指定字體系列
          fontFamily: '"Noto Sans TC"',
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
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
};