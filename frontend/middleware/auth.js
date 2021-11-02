export default function (context) {
  console.log("[LOG MIDDLEWARE] is running");
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/auth");
  }
}
