
<script>
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const auth = params.get("auth");   // auth parameter
  const admin = params.get("admin"); // admin parameter

  if (auth === "TopFont") {
    window.location.href = "https://pixlefy.blogspot.com/2025/08/6716996008.html";
  } 
  else if (auth === "Top10Font") {
    window.location.href = "https://pixlefy.blogspot.com/2025/08/blog-post_14.html";
  } 
  else if (admin === "Anika") {
    window.location.href = "https://pixlefy.blogspot.com/p/anika.html";
  } 
  else if (auth === "Courses") {
    window.location.href = "https://pixlefy.blogspot.com/search/Label/Courses";
  }
});
</script>
