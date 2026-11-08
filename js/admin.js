document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("open-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  function openSidebar() {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
    backdrop.classList.remove("hidden");
  }
  function closeSidebar() {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
  }
  openBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);
});
