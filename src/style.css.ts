import { style } from "@vanilla-extract/css";
// タイトル
export const title = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#0E2841",
    padding: "10px",
});

// ユーザーネーム
export const userName = style({
    fontSize: "x-large",
    fontWeight: "bold"
});

// 説明文
export const discription = style({
    fontSize: "medium",
});

// リンクリストコンテナ
export const container = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ED973",
});

// リンクアイテム
export const linkItem = style({
    margin: "10px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "solid #8ED973",
    color: "#0E2841",
});

// リンクタイトル
export const linkTitle = style({
    fontSize: "large",
    fontWeight: "bold",
    paddingBottom: "5px",
    padding: "5px",
    borderBottom: "solid #0E2841",
});

// リンク説明文
export const linkDiscription = style({
    padding: "5px"
});

// リンクURL
export const linkUrl = style({
    display: "flex",
    padding: "5px",
    width: "fit-content",
    marginLeft: "auto",
    ':hover': {
        backgroundColor: "#D3F9B1",
    }
});


export const container2 = style({
    flexDirection: "column",
    padding: "10px"
});

