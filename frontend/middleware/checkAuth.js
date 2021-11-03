export default function (context) {
  console.log("[CHECKAUTH MIDDLEWARE] is running");

  context.store.dispatch("initAuth", context.req);
}
