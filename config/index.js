const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "http://localhost:3000";
  // не деплоїться на сервер, тому що не знає, що таке localhost

  // export const server = dev
  // ? "http://localhost:3000"
  // : "https://your-website.com";
