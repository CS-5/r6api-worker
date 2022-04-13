import { Router } from "itty-router";

// now let's create a router (note the lack of "new")
const router = Router();

// GET
router.get("/hello", () => new Response("Hello World!"));

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

// attach the router "handle" to the event handler
addEventListener("fetch", (event) =>
  event.respondWith(router.handle(event.request))
);
