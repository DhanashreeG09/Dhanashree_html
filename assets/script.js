// Add event listeners for sidebar links to handle the active state
document.addEventListener('DOMContentLoaded', function () {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove active class from all links
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add active class to the clicked link
      this.classList.add('active');
    });
  });
});
