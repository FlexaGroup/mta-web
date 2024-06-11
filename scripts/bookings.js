document.addEventListener('DOMContentLoaded', function () {
    const bookGrid = document.querySelector('.bookgrid');
    const bookNowButton = document.getElementById('bookNowButton');
    const startDate = new Date('2024-07-26');
    const endDate = new Date('2024-08-02');
    let selectedDate = null;

    const daysInJuly = new Date(2024, 6, 0).getDate(); // July is month 6 (zero-based index)
    const daysInAugust = new Date(2024, 7, 0).getDate(); // August is month 7

    function createGrid() {
        // Create July dates
        for (let i = 1; i <= daysInJuly; i++) {
            const currentDate = new Date(`2024-07-${i < 10 ? '0' + i : i}`);
            if (currentDate >= startDate) {
                createDayElement('2024-07', i);
            } else {
                createDisabledDayElement('2024-07', i);
            }
        }
        // Add a line break for August if July ends on the 31st
        if (daysInJuly === 31) {
            bookGrid.appendChild(document.createElement('br'));
        }
        // Create August dates
        for (let i = 1; i <= daysInAugust; i++) {
            const currentDate = new Date(`2024-08-${i < 10 ? '0' + i : i}`);
            if (currentDate <= endDate) {
                createDayElement('2024-08', i);
            } else {
                createDisabledDayElement('2024-08', i);
            }
        }
    }

    function createDisabledDayElement(yearMonth, day) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date', 'unavailable');
        dateDiv.textContent = day;
        bookGrid.appendChild(dateDiv);
    }
    function createDayElement(yearMonth, day) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = day;
        dateDiv.addEventListener('click', () => selectDate(`${yearMonth}-${day < 10 ? '0' + day : day}`, dateDiv, day));
        bookGrid.appendChild(dateDiv);
    }

    function selectDate(date, dateDiv, day) {
        if (selectedDate) {
            selectedDate.classList.remove('selected');
            selectedDate = null;
            bookNowButton.disabled = true;
            bookNowButton.removeEventListener('click', handleBookNow);
        }

        if (!dateDiv.classList.contains('selected')) {
            dateDiv.classList.add('selected');
            selectedDate = dateDiv;
            bookNowButton.disabled = false;
            bookNowButton.addEventListener('click', () => handleBookNow(date));
        } else {
            dateDiv.classList.remove('selected');
            selectedDate = null;
            bookNowButton.disabled = true;
            bookNowButton.removeEventListener('click', handleBookNow);
        }
    }

    function handleBookNow(date) {
        const [year, month, day] = date.split('-');
        const page = `mamma-mia/book${day}${month}.html`;
        window.location.href = page;
    }

    createGrid();
});
