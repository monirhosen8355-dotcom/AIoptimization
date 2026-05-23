// Sample Data for AI Tools
const aiTools = [
{
  name: "ChatGPT",
  category: "content",
  desc: "Advanced conversational AI by OpenAI for writing and coding.",
  icon: "fa-robot",
  link: "https://chat.openai.com"
},

{
  name: "Midjourney",
  category: "image",
  desc: "Top-tier AI art generator for stunning visual creations.",
  icon: "fa-paint-brush",
  link: "https://www.midjourney.com"
},

{
  name: "Synthesia",
  category: "video",
  desc: "Create professional AI videos from text in minutes.",
  icon: "fa-video",
  link: "https://www.synthesia.io"
},

{
  name: "GitHub Copilot",
  category: "code",
  desc: "Your AI pair programmer that helps you write code faster.",
  icon: "fa-code",
  link: "https://github.com/features/copilot"
},

{
  name: "Jasper",
  category: "marketing",
  desc: "AI writing assistant for marketing teams and creators.",
  icon: "fa-bullhorn",
  link: "https://www.jasper.ai"
},

{
  name: "DALL-E 3",
  category: "image",
  desc: "Create highly specific images from natural language prompts.",
  icon: "fa-image",
  link: "https://openai.com/dall-e-3"
},

{
  name: "Lumen5",
  category: "video",
  desc: "Transform blog posts into engaging videos automatically.",
  icon: "fa-play",
  link: "https://lumen5.com"
},

{
  name: "Tabnine",
  category: "code",
  desc: "AI code completion tool for various IDEs.",
  icon: "fa-laptop-code",
  link: "https://www.tabnine.com"
}
];

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('toolSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

// 1. Function to display tools
function displayTools(tools) {
    toolsGrid.innerHTML = '';
    
    if(tools.length === 0) {
        toolsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">No tools found matching your criteria.</p>`;
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="card-icon"><i class="fas ${tool.icon}"></i></div>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <div class="card-footer">
                <span class="badge">${tool.category}</span>
                <a href="${tool.link}" target="_blank" class="btn-primary" style="padding: 6px 15px; font-size: 0.8rem;">
   Visit Site
</a>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

// 2. Initial Display
displayTools(aiTools);

// 3. Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(term) || 
        tool.desc.toLowerCase().includes(term)
    );
    displayTools(filtered);
});

// 4. Filtering Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if(category === 'all') {
            displayTools(aiTools);
        } else {
            const filtered = aiTools.filter(tool => tool.category === category);
            displayTools(filtered);
        }
    });
});

// 5. Mobile Menu Toggle
mobileMenuBtn.onclick = () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
};

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.onclick = () => {
    window.open("https://youtube.com/@monirtechspot", "_blank");
};
