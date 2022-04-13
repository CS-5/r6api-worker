import { Router } from "itty-router";
import R6API from "r6api.js";

const router = Router({ base: "/api" });
const r6api = new R6API({ email: UBI_EMAIL, password: UBI_PASSWORD });

// GET
router.get("/hello", () => new Response("Hello World!"));

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

// attach the router "handle" to the event handler
addEventListener("fetch", (event) =>
  event.respondWith(router.handle(event.request))
);
