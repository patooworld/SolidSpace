console.log("Hello via Bun!");
Bun.serve({
    async fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") { 
        return new Response(Bun.file("./index.html"))
      };
      if (url.pathname === "/upload") {
        
      } 
      return new Response("404!");
    },
  });