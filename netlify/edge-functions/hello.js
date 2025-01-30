export default async (request, context) => {

    context.log("calling hello.js Edge function")
    
    return new Response('Hello World from the edge!', {
        headers: {
            "content-type": "text/html",
        },
    });
};