// import './App.css'
import logo from './assets/icon.png'
import { discription, LinkContainer, linkDiscription, LinkListContainer, linkListItem, linkItem, linkTitle, linkUrl, title, userName, copyRight, photoItem } from './style.css.ts'

const App = () => {

  // 日付取得
  const today = new Date();

  const year = today.getFullYear();

  let yearText = year.toString();

  if (year !== 2025) {
    yearText = `2025-${year}`;
  }

  return (
    <>
      <div className={title}>
        <img src={logo} alt="logo" />
        <div className={userName}>e1q23079</div>
        <div className={discription}>日々挑戦し続ける，情報系学生の記録</div>
      </div>

      <div className={LinkListContainer}>
        <a href='https://www.oit.ac.jp/' target='blank' className={linkListItem}># 大阪工業大学</a>
        <a href='https://x.com/hxs_/' target='blank' className={linkListItem}># HxSコンピュータ部</a>
        <a href='https://magiot.web.app/' target='blank' className={linkListItem}># MAGIOT</a>
      </div>

      <div className={LinkContainer}>
        <div className={linkItem}>
          <div className={linkTitle}>| Q23079's portfolio</div>
          <img src='/link-list/files/portfolio.png' alt='Q23079s portfolio' className={photoItem} />
          <div className={linkDiscription}>
            これまでに制作した作品やプロジェクトを紹介しているポートフォリオサイトです．
          </div>
          <a href="https://e1q23079.github.io/portfolio" className={linkUrl}>Q23079's portfolio</a>
        </div>
      </div>

      <div className={LinkContainer}>
        <div className={linkItem}>
          <div className={linkTitle}>| Q23079's blog</div>
          <img src='/link-list/files/blog.png' alt='Q23079s blog' className={photoItem} />
          <div className={linkDiscription}>
            大学での学びや個人開発の経験をもとに，プログラミングやWeb・モバイル開発の知見を発信しています．
          </div>
          <a href="https://e1q23079.vercel.app/" className={linkUrl}>Q23079's blog</a>
        </div>
      </div>

      <div className={LinkContainer}>
        <div className={linkItem}>
          <div className={linkTitle}>| Q23079's GitHub</div>
          <img src='/link-list/files/GitHub.png' alt='GitHub' className={photoItem} />
          <div className={linkDiscription}>
            GitHubでは、個人プロジェクトや学習成果を中心に，Web・モバイル開発やプログラミング実装例を公開しています．
          </div>
          <a href="https://github.com/e1q23079" className={linkUrl}>Q23079's GitHub</a>
        </div>
      </div>

      <footer>
        <hr></hr>
        <div className={copyRight}>© {yearText} Q23079 All Rights Reserved.</div>
      </footer>


    </>
  )
}

export default App