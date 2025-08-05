const CompanyMore = document.querySelector('.company__more');
const allTexts = document.querySelectorAll('.company__text');
let isExpanded = false;

allTexts.forEach((text, index) => {
    if (index > 0) {
        text.classList.add('company__text_hidden');
    }
});

CompanyMore.addEventListener('click', () => {
    if (!isExpanded) {
        allTexts.forEach(text => {
            text.classList.remove('company__text_hidden');
        });
        CompanyMore.textContent = 'Показать меньше';
        isExpanded = true;

    } else {
        allTexts.forEach((text, index) => {
            if (index > 0) {
                text.classList.add('company__text_hidden');
            }
        });
        CompanyMore.textContent = 'Показать больше';
        isExpanded = false;
    }

    CompanyMore.style.transform = 'scale(0.98)';
    setTimeout(() => {
        CompanyMore.style.transform = 'scale(1)';
    }, 300);
});