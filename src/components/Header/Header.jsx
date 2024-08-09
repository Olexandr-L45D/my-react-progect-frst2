// import './Header.css'
import css from './Header.module.css'
export default function Header() {
    return <header className={css.header} >
        <h1 className={css.headerTitle}>HEADER</h1>
        HEADER - Super cool APP in header
    </header>
    //  приклад цсс без модуля (ванільний старий)
    // <header className="header" >
    //     <h1 className="headerTitle">HEADER</h1>
    //     HEADER - Super cool APP in header
    // </header>
}