const projects = [
    {
        title: "Obstacle Avoiding Car",
        description: "A car that uses sensors to avoid obstacles autonomously.",
        image: "images/obstacle_car.jpg",
        video: "videos/obstacle_car_demo.mp4"
    }
    
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <a href="${project.video}" target="_blank">Watch Video</a>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
