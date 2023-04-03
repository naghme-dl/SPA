import dashboard from "../client/pages/dashboard.js";
import posts from "../client/pages/posts.js";
import products from "../client/pages/products.js";
// import notfound from "../client/pages/notfound.js";/
const sidebarToggler = document.querySelector(".sidebar-toggler");
const navbar = document.querySelector(".nav");

function router() {
  const routes = [
    { path: "/client/", veiw: dashboard },
    { path: "/client/products", veiw: posts },
    { path: "/client/posts", veiw: products },
  ];

  //1.decide witch content should be showen based on route

  const potentioalRoutes = routes.map((item) => {
    return { route: item, ismatch: location.pathname === item.path };
  });
  console.log(potentioalRoutes);
  let match = potentioalRoutes.find((element) => element.ismatch);
  document.querySelector("#app").innerHTML = match.route.veiw();
  // if (!match) {
  //   match = {
  //     route: { path: "/", veiw: notfound },
  //     ismatch: true,
  //   };
  // }
}
//2. push user to new url
function navigation(url) {
  history.pushState(null, null, url);
  router();
}
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigation(e.target.href);
    }
  });
  router();
});
const root = document.documentElement;
sidebarToggler.addEventListener("click", () => {
  navbar.classList.toggle("mini-sidebar");
  if (navbar.classList.contains("mini-sidebar")) {
    root.style.setProperty("--nav-width", 70 + "px");
  } else {
    root.style.setProperty("--nav-width", 250 + "px");
  }

  console.log("hi");
});
