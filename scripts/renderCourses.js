document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('courses-container');

    if (!container) return;

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
        });
    });

    // Function to render courses
    function renderCourses(filter = 'All') {
        container.innerHTML = '';

        const filtered = courses.filter(course => {
            return filter === 'All' || course.subject === filter;
        });

        filtered.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';

            card.innerHTML = `
                <h3>${course.subject} ${course.number}: ${course.title}</h3>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Certificate:</strong> ${course.certificate}</p>
                <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
                <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
            `;

            container.appendChild(card);
        });
    }

    // Initial render (All courses)
    renderCourses();
});