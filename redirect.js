document.addEventListener("DOMContentLoaded", function() {

    // ====== Overlay Creation ======
    function createOverlay(message="Redirecting...") {
        const overlay = document.createElement('div');
        overlay.id = 'redirectNotice';
        overlay.style.cssText = `
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
            text-align: center;
        `;
        overlay.innerHTML = `
            <span id="overlayText">${message}</span>
            <div id="loader" style="
                margin-top: 20px;
                border: 5px solid #0ff;
                border-top: 5px solid #ff00ff;
                border-radius: 50%;
                width: 50px;
                height: 50px;
            "></div>
        `;
        document.body.appendChild(overlay);

        // Add CSS animations
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            #loader { animation: spin 1s linear infinite; }
        `;
        document.head.appendChild(style);
    }

    // ====== Redirect Map ======
    const redirectMap = {
        auth: {
            "TopFont": "https://pixlefy.blogspot.com/2025/08/6716996008.html",
            "Top10Font": "https://pixlefy.blogspot.com/2025/08/blog-post_14.html",
            "Courses": "https://pixlefy.blogspot.com/search/Label/Courses"
        },
        admin: {
            "Anika": "https://pixlefy.blogspot.com/p/anika.html"
        },
        other: {
            "team": "https://pixlefy.blogspot.com/p/our-team.html"
        }
    };

    // ====== URL Params ======
    const params = new URLSearchParams(window.location.search);
    const auth = params.get("auth");
    const admin = params.get("admin");
    const team = params.has("team");

    // ====== Determine Target URL ======
    let targetURL = null;
    if (auth && redirectMap.auth[auth]) targetURL = redirectMap.auth[auth];
    else if (admin && redirectMap.admin[admin]) targetURL = redirectMap.admin[admin];
    else if (team) targetURL = redirectMap.other.team;

    // ====== Perform Redirect ======
    if (targetURL) {
        createOverlay();
        let countdown = 2; // seconds
        const overlayText = document.getElementById("overlayText");
        overlayText.innerText = `Redirecting in ${countdown}...`;

        const interval = setInterval(() => {
            countdown--;
            if (overlayText) overlayText.innerText = `Redirecting in ${countdown}...`;
            if (countdown <= 0) clearInterval(interval);
        }, 1000);

        setTimeout(() => { window.location.href = targetURL; }, 2000);
    } else {
        createOverlay("⚠ No redirect found! Redirecting to homepage...");
        setTimeout(() => { window.location.href = "https://pixlefy.blogspot.com"; }, 2000);
    }

});
