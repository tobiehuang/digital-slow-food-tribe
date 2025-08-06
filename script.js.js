// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Subscription handling
function handleSubscription(plan) {
    const planNames = {
        'monthly': '月付方案 (NT$399/月)',
        'yearly': '年付方案 (NT$3,600/年，省下NT$1,188！)'
    };
    
    alert(`感謝您選擇${planNames[plan]}！\n\n由於我們正在準備最溫暖的體驗，請透過以下方式聯繫我們完成訂閱：\n\nEmail: contact@tobiehuang.com\n\n我們會在24小時內回覆您，並安排專屬的加入流程。\n\n期待您成為我們慢食部落的一份子！`);
}

// Tribal Leader inquiry
function handleTribalLeader() {
    alert(`感謝您對部落長計畫的興趣！\n\n部落長是我們在各城市的溫暖大使，負責：\n• 組織當地慢食聚會\n• 在地化社群服務\n• 推廣慢生活文化\n\n如果您有興趣成為部落長，請聯繫：\nEmail: contact@tobiehuang.com\n\n我們會詳細介紹部落長計畫的完整內容！`);
}

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add floating animation to decorative elements
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 2}s`;
});