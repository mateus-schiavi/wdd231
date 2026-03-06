document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('courses-container');
    const totalCreditsDiv = document.createElement('div');
    totalCreditsDiv.id = 'total-credits';
    totalCreditsDiv.className = 'total-credits';

    if (!container) return;

    // Insert totalCreditsDiv after container
    container.parentNode.appendChild(totalCreditsDiv);

    // Create filter buttons container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'course-filters';
    container.parentNode.insertBefore(filterContainer, container);

    // Get unique subjects for buttons
    const subjects = ['All', ...new Set(courses.map(c => c.subject))];

    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.textContent = subject;
        button.className = 'filter-btn';
        filterContainer.appendChild(button);

        button.addEventListener('click', () => {
            renderCourses(subject);
            setActiveButton(subject);
        });
    });

    // Highlight active filter button
    function setActiveButton(activeSubject) {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.textContent === activeSubject);
        });
    }

    // Function to render courses
    function renderCourses(filter = 'All') {
        container.innerHTML = '';
        totalCreditsDiv.innerHTML = '';

        const filtered = courses.filter(course => {
            return filter === 'All' || course.subject === filter;
        });

        let totalCredits = 0;

        filtered.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';

            // Only show course name and credits
            card.innerHTML = `
                <h3>${course.title}</h3>
                
            `;

            container.appendChild(card);
            totalCredits += course.credits;
        });

        // Display total credits
        totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
    }

    // Initial render (All courses)
    renderCourses();
    setActiveButton('All');
});