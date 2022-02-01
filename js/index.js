const log = (log) => {
    console.log(log)
}

const navbarBtn = () => {
    const navbar = document.getElementById('navbar')
    const main = document.getElementById('main')
    const userTable = document.getElementById('userTable')

    if (navbar.classList.contains('translate-x-full')) {  // close
        navbar.classList.remove('translate-x-full')
        main.classList.remove('mr-10')
        main.classList.add('mr-64')
        userTable.classList.remove('w-[95vw]')

    } else {
        navbar.classList.add('translate-x-full')
        main.classList.remove('mr-64')
        main.classList.add('mr-10')
        userTable.classList.add('w-[95vw]')
    }
}

const fadeInOut = (element) => {
    if (element.classList.contains('fadeOut')) {
        element.classList.remove('fadeOut')
        element.classList.add('fadeIn')
    }
    else if (element.classList.contains('fadeIn')) {
        element.classList.remove('fadeIn')
        element.classList.add('fadeOut')
    }
}

const blurBackground = () => {
    const main = document.getElementById('main')
    const navbar = document.getElementById('navbar')

    if (main.classList.contains('blur') && navbar.classList.contains('blur')) {
        main.classList.remove('blur', 'pointer-events-none')
        navbar.classList.remove('blur', 'pointer-events-none')
    }
    else {
        main.classList.add('blur', 'pointer-events-none')
        navbar.classList.add('blur', 'pointer-events-none')
    }
}