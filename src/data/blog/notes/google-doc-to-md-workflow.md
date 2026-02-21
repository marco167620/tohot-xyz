---
author: 馬可博士
pubDatetime: 2026-02-21T09:32:00+08:00
title: 筆記：將 Google Doc 轉換為 Markdown 以減少編輯時間
featured: true
draft: false
note: true
tags:
  - Google Doc
  - Markdown
  - 自動化
  - Workflow
  - Antigravity
ogImage: "/public/marco-lab-og.jpg"
description: "探討如何透過 Antigravity 將 Google Doc 內容快速轉換為部落格 Markdown 格式，提升寫作效率。"
---

> 我想減少編輯 md 檔案的時間，是否可以在 Google Doc 寫好文章，然後由你來轉換為 md，以便發佈在此部落格中呢？

**報告指揮官：這是一個非常棒的想法！透過 Google Docs 寫作可以享受更好的編輯體驗與協作功能，而我完全可以擔任「轉換者」的角色。**

## 我可以如何協助你？

1. **直接轉換連結內容**：如果你將 Google Doc 設定為「知道連結的人均可檢視」，你可以直接把連結給我。我會使用瀏覽器工具讀取內容，並按照你部落格目前的 Markdown 格式（包含 Frontmatter，如標題、日期、標籤等）進行轉換。
2. **處理複製貼上的內容**：你也可以直接將 Google Doc 的內容全選複製並貼給我。我會保留標題層級（H1, H2...）、粗體、清單與連結，轉換成乾淨的 Markdown。
3. **自動化建議**：如果你希望更自動化，我們可以寫一個簡單的腳本，或者建立一個專屬的 Workflow，讓我每次處理時都能遵循相同的格式準則。

## 為了確保轉換完美，我需要確認：

1. **圖片處理**：Google Doc 上的圖片在 Markdown 中需要有存放路徑。你通常是將圖片放在哪裡（例如 `public/images/`）？
2. **屬性設定 (Frontmatter)**：你的 Markdown 檔案頂部通常有哪些欄位？（例如 `title`, `description`, `pubDate`, `tags` 等）。

## 將 Google Doc 轉換為部落格筆記
將 Google Doc 的內容轉換為符合部落格格式的 Markdown 檔案，並儲存至 `src/data/blog/notes` 目錄。

### 擬定變更
**部落格內容 (Blog Content)**

**檔案名稱建議：`google-doc-to-md-workflow.md`**
*   根據 Google Doc 內容生成 Markdown。
*   套用與現有筆記一致的 Frontmatter 格式。

**Frontmatter 設定：**
*   `author`: 馬可博士
*   `pubDatetime`: 2026-02-21T09:32:00+08:00
*   `title`: 筆記：將 Google Doc 轉換為 Markdown 以減少編輯時間
*   `featured`: false
*   `draft`: false
*   `note`: true
*   `tags`: ["Google Doc", "Markdown", "自動化", "Workflow", "Antigravity"]
*   `description`: 探討如何透過 Antigravity 將 Google Doc 內容快速轉換為部落格 Markdown 格式，提升寫作效率。

## 驗證計畫
*   **自動化測試**：無（本變更僅涉及新增內容檔案）。
*   **手動驗證**：
    1.  檢查生成的 Markdown 檔案是否正確包含 Frontmatter。
    2.  檢查標題層級與內容是否與 Google Doc 一致。
    3.  使用 `npm run dev`（如果環境允許）預覽部落格內容。

## 轉換成功：Google Doc 至部落格筆記
我已經完成將指定 Google Doc 轉換為 Markdown 筆記的工作。

### 變更項目
*   **新增檔案**：`google-doc-to-md-workflow.md`
*   **檔案路徑**：`src/data/blog/notes/google-doc-to-md-workflow.md`

### 驗證結果
**內容檢查：**
*   **Frontmatter**: 已成功套用 author, pubDatetime, title, tags, description 等欄位，格式與現有筆記一致。
*   **標題層級**: 保留了原文中的 H3 標籤。
*   **標記**: 正確處理了粗體、數字清單與分隔線。

### 自動化指令 (一鍵生成)
我已經為您建立了一個 Workflow 文件，將來您只需要輸入以下指令，我就會自動幫您完成讀取、轉換與儲存：

**使用方式**
在對話框輸入： /gdoc-to-note [您的 Google Doc 連結]

**自動化流程包含：**
*   自動讀取內容：透過瀏覽器讀取您提供的連結。
*   自動生成 Frontmatter：自動帶入作者、當前日期、相關標籤與描述。
*   自動命名：根據標題生成適合的 Markdown 檔案名稱。
*   自動更新：如果該筆記已存在，會自動更新內容。

您可以在此查看 Workflow 定義：
.agents/workflows/gdoc-to-note.md

## 未來建議
如果您希望進一步自動化圖片上傳功能（例如將 Google Doc 內的圖片自動存入 `public/images/`），我們可以再針對此需求設計相關指令。
