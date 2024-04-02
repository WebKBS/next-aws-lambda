export async function GET(request: Request) {
  const responseData = { message: 'Hello, Next.js!' };

  return new Response(JSON.stringify(responseData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
