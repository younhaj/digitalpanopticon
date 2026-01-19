(async function () {
  const mount = document.getElementById("appHeader");
  if (!mount) return;

  const res = await fetch("./partials/header.html");
  mount.innerHTML = await res.text();

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("drawer");
  const drawerDim = document.getElementById("drawerDim");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  function openDrawer(){
    drawer.classList.add("open");
    drawerDim.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer(){
    drawer.classList.remove("open");
    drawerDim.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburgerBtn.onclick = openDrawer;
  drawerCloseBtn.onclick = closeDrawer;
  drawerDim.onclick = closeDrawer;
})();
