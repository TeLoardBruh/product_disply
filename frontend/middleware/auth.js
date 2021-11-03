export default function (context) {
  if (!context.store.getters.isAuthenticated) {
    console.log("[LOG MIDDLEWARE] is running");
    context.redirect("/auth");
  }
}
