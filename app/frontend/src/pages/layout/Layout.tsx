import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Layout.module.css";
import omegaLogo from "../../assets/omega-logo.png";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <div className={styles.brand}>
                            <img src={omegaLogo} alt="Omega Research Foundation" className={styles.brandLogo} />
                            <div className={styles.brandText}>
                                <span className={styles.brandName}>OMEGA</span>
                                <span className={styles.brandSubtitle}>Research Archive</span>
                            </div>
                        </div>
                    </Link>
                    <div className={styles.loginMenuContainer}>{useLogin && <LoginButton />}</div>
                </div>
            </header>

            <main className={styles.main} id="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
