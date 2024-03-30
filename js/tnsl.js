$(function () {
    let spanish = true;
    $("#cambiarIdioma").click(function () {
        if (spanish) {
            $("#iniLink").text("Home");
            $("#proyLink").text("Projects");
            $("#habLink").text("Skills");
            $("#sobLink").text("About me");
            $("#conLink").text("Contact me");
            $("#ds1").text("Software developer");
            $("#ds2").text("Web Development and Applications for Windows");
            $("#inicio p").html("Software Development Student <span class='marked'>focused on learning </span> and applying my knowledge effectively to advance in my professional career.<span class='marked'>Committed to the success of projects</span> and constant acquisition of new knowledge.");            
            $("#proyectos h2").text("My projects");
            $("#proyectos h4").html("Turning <span class='marked'>ideas</span> into <span class='marked'>digital</span> reality");
            $("#proy1").text("This page I created for my friends is designed to manage a record of the football matches we play.");
            $("#proy2").text("This is a website developed in my Web Development 1 course.");
            $("#habilidades h2").text("Skills");
            $("#des").text("Download CV");
            $("#sobremi h2").text("About me");
            $("#sobremi p").html("I'm <span class='marked'> Daniel</span>!! Software Development Student at <span class='marked'> ISIL</span>, I have experience in web development projects, including assignments and projects from my institute. I am committed to the success of the projects in which I participate and constantly seek opportunities for innovation in highly competitive environments.")
            $("#piepagina h3").html("Developed by <span class='marked'>DanielC</span>");
            $("#gmailI").attr("placeholder", "mygmail@gmail.com");
            $("#asuntoI").attr("placeholder", "Website");
            $("#asuntoL").text("Mail Subject");
            $("#nombreL").text("Name");
            $("#mnsjL").text("Message");
            $("#nombreI").attr("placeholder", "Your Name");
            $("#btnSend").text("Send");
            $("#downloadLink").attr("href", "cv/Daniel Carbone CV - English.docx");
            $("#contacto h2").text("Contact me!");
            $("#capcha").text("The reCAPTCHA is necessary");
            localStorage.setItem('inglesActivado', 'true');
            spanish = false;
        } else {
            $("#iniLink").text("Inicio");
            $("#proyLink").text("Proyectos");
            $("#habLink").text("Habilidades");
            $("#sobLink").text("Sobre mí");
            $("#conLink").text("Contáctame");
            $("#ds1").text("Desarrollador de Software");
            $("#ds2").text("Desarrollo Web y Aplicaciones para Windows");
            $("#inicio p").html("Estudiante de Desarrollo de Software <span class='marked'>enfocado en aprender </span> y aplicar mis conocimientosde manera efectiva para avanzar en mi carrera profesional. <span class='marked'>Comprometido con el éxito de los proyectos</span> y la adquisición constante de nuevos conocimientos.");            
            $("#proyectos h2").text("Mis proyectos");
            $("#proyectos h4").html("Transformando <span class='marked'>ideas</span> en realidad <span class='marked'>digital</span>");
            $("#proy1").text("Esta página la creé para mis amigos, está diseñada para manejar un registro de los partidos de fútbol que jugamos.");
            $("#proy2").text("Esta es una página web desarrollada en mi curso de Desarrollo Web 1.");
            $("#habilidades h2").text("Habilidades");
            $("#des").text("Descargar CV");
            $("#sobremi h2").text("Sobre mí");
            $("#sobremi p").html("Soy <span class='marked'> Daniel</span>!! Estudiande de Desarrollo de Software en <span class='marked'> ISIL</span>, cuento con experiencia en proyectos de desarrollo web, como trabajos y proyectos de mi instituto. Soy una persona comprometida con el éxito de los proyectos en los que participo y busco constantemente oportunidades de innovación en entornos altamente competitivos.")
            $("#piepagina h3").html("Desarrollado por <span class='marked'>DanielC</span>");
            $("#gmailI").attr("placeholder", "micorreo@gmail.com");
            $("#asuntoI").attr("placeholder", "Página web");
            $("#asuntoL").text("Asunto");
            $("#nombreL").text("Nombre");
            $("#mnsjL").text("Mensaje");
            $("#nombreI").attr("placeholder", "Tu nombre");
            $("#btnSend").text("Enviar");
            $("#downloadLink").attr("href", "cv/Daniel Carbone Campoverde - CV.docx");
            $("#contacto h2").text("Contáctame");
            $("#capcha").text("El reCAPTCHA es necesario");
            localStorage.removeItem('inglesActivado');
            spanish = true;
        }
    });

    $(document).ready(function () {
        let inglesGuardado = localStorage.getItem('inglesActivado');
        if (inglesGuardado === 'true') {
            $("#iniLink").text("Home");
            $("#proyLink").text("Projects");
            $("#habLink").text("Skills");
            $("#sobLink").text("About me");
            $("#conLink").text("Contact me");
            $("#ds1").text("Software developer");
            $("#ds2").text("Web Development and Applications for Windows");
            $("#inicio p").html("Software Development Student <span class='marked'>focused on learning </span> and applying my knowledge effectively to advance in my professional career.<span class='marked'>Committed to the success of projects</span> and constant acquisition of new knowledge.");            
            $("#proyectos h2").text("My projects");
            $("#proyectos h4").html("Turning <span class='marked'>ideas</span> into <span class='marked'>digital</span> reality");
            $("#proy1").text("This page I created for my friends is designed to manage a record of the football matches we play.");
            $("#proy2").text("This is a website developed in my Web Development 1 course.");
            $("#habilidades h2").text("Skills");
            $("#des").text("Download CV");
            $("#sobremi h2").text("About me");
            $("#sobremi p").html("I'm <span class='marked'> Daniel</span>!! Software Development Student at <span class='marked'> ISIL</span>, I have experience in web development projects, including assignments and projects from my institute. I am committed to the success of the projects in which I participate and constantly seek opportunities for innovation in highly competitive environments.")
            $("#piepagina h3").html("Developed by <span class='marked'>DanielC</span>");
            $("#gmailI").attr("placeholder", "mygmail@gmail.com");
            $("#asuntoI").attr("placeholder", "Website");
            $("#asuntoL").text("Mail Subject");
            $("#nombreL").text("Name");
            $("#mnsjL").text("Message");
            $("#nombreI").attr("placeholder", "Your Name");
            $("#btnSend").text("Send");
            $("#downloadLink").attr("href", "cv/Daniel Carbone CV - English.docx");
            $("#contacto h2").text("Contact me!");
            $("#capcha").text("The reCAPTCHA is necessary");
            localStorage.setItem('inglesActivado', 'true');
            spanish = false;
        }
    });
});