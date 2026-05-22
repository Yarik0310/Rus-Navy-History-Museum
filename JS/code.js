
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const header = document.querySelector('.main-header');
    const burgerButton = document.querySelector('.main-header__burger');
    const headerLinks = document.querySelectorAll('.main-header__link');

    if (header && burgerButton) {
        burgerButton.addEventListener('click', function() {
            const isOpen = header.classList.toggle('main-header--open');
            burgerButton.setAttribute('aria-expanded', String(isOpen));
        });

        headerLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                header.classList.remove('main-header--open');
                burgerButton.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                header.classList.remove('main-header--open');
                burgerButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Эффект наведения на текстовый блок (опционально)
    const textBox = document.querySelector('.hero-block__text-box');
    
    if (textBox) {
        textBox.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(40, 55, 71, 0.95)';
            this.style.transition = 'background-color 0.3s ease';
        });

        textBox.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(56, 74, 94, 0.85)';
        });
    }
    
    console.log('Страница загружена. Для замены изображений найдите комментарии в HTML коде.');
    
    const ticketRows = document.querySelectorAll('.about-section__tickets-row');
    
    ticketRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            // Не подсвечиваем заголовок
            if (!this.classList.contains('about-section__tickets-row--header')) {
                this.style.backgroundColor = '#f4f9ff';
                this.style.transition = 'background-color 0.2s ease';
            }
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('about-section__tickets-row--header')) {
                this.style.backgroundColor = 'transparent';
            }
        });
    });
    const exhibitCards = document.querySelectorAll('.exhibit-card');

    exhibitCards.forEach(card => {
    card.addEventListener('click', function() {
        // Логика клика по карточке (можно добавить открытие модального окна)
        const title = this.querySelector('.exhibit-card__title').textContent;
        console.log('Выбран экспонат: ' + title);
        
        // Визуальная обратная связь
        this.style.opacity = '0.8';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 200);
    });
    });
    const toTopBtn = document.querySelector('.main-footer__btn:first-child');

    if (toTopBtn) {
        toTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Кнопка "Задать вопрос"
    const questionBtn = document.querySelector('.main-footer__btn:last-child');

    if (questionBtn) {
        questionBtn.addEventListener('click', function() {
            alert('Форма обратной связи откроется в ближайшее время.');
        });
    }

    // 3. Кнопки зума карты (имитация)
    const zoomBtns = document.querySelectorAll('.contacts-section__map-btn');

    zoomBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Изменение масштаба карты: ' + this.textContent);
            // Здесь можно добавить логику изменения зума карты через API Яндекс.Карт
        });
    });
});