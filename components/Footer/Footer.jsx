import React from 'react';
import footer from '@/styles/Footer.module.css'

function Footer () {
    return (
        <footer className={footer.footerHis}>
            <picture>
                <source srcSet='https://imgur.com' type="imge/avif" />
                <source srcSet='https://imgur.com' type="imge/web" />
                <img className={footer.imgHis_footer}
                    src="https://i.imgur.com/EJfjLi5.png"
                    alt="Imágen del logo"
                />
            </picture>
            <section className={footer.footerInformation__his}>
                <div className={footer.footerContact}>Contacto</div>
            </section>
            <section className={footer.rightHis}>
                Derechos reservados &copy;
            </section>
        </footer>
    )
}

export { Footer };