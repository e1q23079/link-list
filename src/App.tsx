// import './App.css'
import logo from './assets/icon.png'
import { discription, LinkContainer, linkDiscription, LinkIconContainer, linkIconItem, linkItem, linkTitle, linkUrl, title, userName } from './style.css.ts'

function App() {
  return (
    <>
      <div className={title}>
        <img src={logo} alt="logo" />
        <div className={userName}>e1q23079</div>
        <div className={discription}>日々挑戦し続ける，情報系学生の記録</div>
      </div>

      <div className={LinkIconContainer}>
        <a href='https://www.oit.ac.jp/' target='blank' className={linkIconItem}># 大阪工業大学</a>
        <a href='https://www.oit.ac.jp/' target='blank' className={linkIconItem}># HxSコンピュータ部</a>
        <a href='https://www.oit.ac.jp/' target='blank' className={linkIconItem}># MAGIOT</a>
      </div>

      <div className={LinkContainer}>
        <div className={linkItem}>
          <div className={linkTitle}>| e1q23079's portfolio</div>
          <div className={linkDiscription}>
            これまでに制作した作品やプロジェクトを紹介しているポートフォリオサイトです．
          </div>
          <a href="https://e1q23079.github.io/portfolio" className={linkUrl}>e1q23079's portfolio</a>
        </div>
      </div>


    </>
  )
}

export default App