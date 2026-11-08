document.addEventListener("DOMContentLoaded", () => {

  const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
  
  if(!isLoggedIn){
    window.location.href = "../login.html"
  }

  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("open-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const cancelModalBtn = document.getElementById("cancel-modal-btn");
  const productModal = document.getElementById("product-modal");
 
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

  if (openModalBtn && productModal) {
    openModalBtn.addEventListener("click", () => {
      productModal.classList.remove("hidden");
      productModal.classList.add("flex");
    });

    const closeModal = () => {
      productModal.classList.add("hidden");
      productModal.classList.remove("flex");
    };

    closeModalBtn.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);

    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        closeModal();
      }
    });
  }

  const logoutBtn = document.getElementById("logout-btn");

  if(logoutBtn){
    logoutBtn.addEventListener('click' , (e) => {
      e.preventDefault();
      sessionStorage.removeItem("isAdminLoggedIn");
      window.location.href = "../login.html"
    })
  }
});
