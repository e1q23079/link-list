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


// コンテンツコンテナ
export const LinkContainer = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

// リンクアイコンコンテナ
export const LinkListContainer = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    justifyContent: "center",
});

// リンクアイコンアイテム
export const linkListItem = style({
    padding: "10px",
    textAlign: "center",
    backgroundColor: "white",
    ":hover": {
        backgroundColor: "#D3F9B1",
    },
});
