// building bun server
import { serve } from 'bun';

serve({
    // bun gives me this
    // fetch function is used to handle incoming requests to the server.
    fetch(request){
        // getting the URl for generating the response
        const url = new URL(request.url)
        // conditional for sending the response
        if ( url.pathname === '/' ) {
            return new Response('Hello, Bun', { status: 200 });
        }
        else if ( url.pathname === '/light' ) {
            return new Response('Hello, Light from Bun!', { status: 200 });
        }
        else if ( url.pathname === '/dark' ) {
            return new Response('Hello, Dark from Bun!', { status: 404 });
        }
        else {
            return new Response('404, Invalid URL');
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})