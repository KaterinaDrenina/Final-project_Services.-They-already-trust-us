const scrollLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href: string = this.getAttribute('href')!;
        const targetElement = document.querySelector(href) as HTMLElement;
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const scrollToTopBtn: HTMLElement | null = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const openModalBtn: HTMLElement | null = document.getElementById('openModalBtn');
const modal : HTMLElement | null = document.getElementById('modal');
const closeModalBtn : HTMLElement | null = document.getElementById('closeModalBtn');

if (openModalBtn && modal && closeModalBtn) {

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e: Event) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function reveal(): void {
    const reveals: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);

const burgerBtn = document.getElementById('burgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
  
if (burgerBtn && closeMenuBtn && mobileMenu) {
    console.log('Elements found!'); // Для отладки
  
      // Открытие меню при клике на бургер-кнопку
    burgerBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'block'; // Делаем меню видимым
        console.log('Menu opened'); // Для отладки
    });
  
      // Закрытие меню при клике на кнопку закрытия
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none'; // Скрываем меню
        console.log('Menu closed'); // Для отладки
    });
} else {
    console.error('Не удалось найти необходимые элементы!');
}
    

  
