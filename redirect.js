// redirect.js
document.addEventListener("DOMContentLoaded", function() {

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'redirectNotice';
    overlay.style = `
        position: fixed;
        top:0; left:0; right:0; bottom:0;
        background: rgba(0,0,0,0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Courier New', monospace;
        font-size: 28px;
        color: #0ff;
        text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
        z-index: 9999;
        animation: flicker 1.5s infinite alternate;
    `;
    overlay.innerHTML = `
        ⬤ Redirecting...
        <div style="
            margin-top: 20px;
            border: 4px solid #0ff;
            border-top: 4px solid #ff00ff;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 20px #0ff, 0 0 30px #ff00ff;
        "></div>
    `;
    document.body.appendChild(overlay);

    // Add animations
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes flicker { 0% { opacity: 1; } 50% { opacity: 0.8; } 100% { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // URL params
    const params = new URLSearchParams(window.location.search);
    const auth = params.get("auth");
    const admin = params.get("admin");

    const redirectMap = {
        auth: {
            "TopFont": "https://pixlefy.blogspot.com/2025/08/6716996008.html",
            "Top10Font": "https://pixlefy.blogspot.com/2025/08/blog-post_14.html",
            "Courses": "https://pixlefy.blogspot.com/search/Label/Courses"
        },
        admin: {
            "Anika": "https://pixlefy.blogspot.com/p/anika.html"
        }
    };

    let targetURL = null;
    if (auth && redirectMap.auth[auth]) targetURL = redirectMap.auth[auth];
    else if (admin && redirectMap.admin[admin]) targetURL = redirectMap.admin[admin];

    if (targetURL) {
        setTimeout(() => { window.location.href = targetURL; }, 1500);
    } else {
        overlay.innerText = "⚠ No redirect found!";
    }
});
