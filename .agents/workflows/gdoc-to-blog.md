---
description: 將指定 Google Doc 轉換為部落格 Markdown 觀察文章
---

您可以使用此指令讓我執行轉換，我會遵守我們的「內容主權」默契：

「請幫我讀取這個 Google Doc：[連結]，並轉換為 Markdown 「觀察」文章。
1. **內容忠實度**：嚴禁擅自變動原文內容、字句或引入任何非原文預期的字元。
2. **存儲路徑**：儲存於 `src/data/blog/`，設定 `note: false`。
3. **圖片處理**：將文件中的圖片下載並儲存於 `public/images/` 資料夾中，並在 Markdown 內引用相對路徑。
4. **Frontmatter**：
   - `author`: 馬可博士
   - `pubDatetime`: 轉換時的系統時間 (ISO 8601)
   - `title`: 忠於原文標題
   - `description`: 您可以根據內容自撰摘要
   - `tags`: 視內容自動生成相關標籤
5. **檔案名稱**：使用英文小寫與連字號。」
