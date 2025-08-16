document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const auth = params.get("auth");
  const admin = params.get("admin");

  // All redirect rules in one object
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

  // Check and redirect
  if (auth && redirectMap.auth[auth]) {
    window.location.href = redirectMap.auth[auth];
  } else if (admin && redirectMap.admin[admin]) {
    window.location.href = redirectMap.admin[admin];
  }
});
