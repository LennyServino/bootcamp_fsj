const Navbar = () => {
    const Header = document.getElementById('header');

    Header.innerHTML = `
        <section class="nav">
            <p>Blog DeCafe</p>
            <nav>
                <ul>
                    <li><a href="../index.html">Nosotros</a></li>
                    <li><a href="../pages/couses.html">Cursos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </section>
        <section class="banner">
            <h1>Blog de cafe de consejos y cursos</h1>
            <p>Aprende de los expertos con las mejores recetas y consejos</p>
        </section>
    `;
}

Navbar();