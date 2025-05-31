export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');

    if (!target) {
      return new Response('Missing URL', { status: 400 });
    }

    const res = await fetch(target, {
      headers: {
        'Referer': 'https://chenxdayat.biz.id',
        'Origin': 'https://chenxdayat.biz.id'
      }
    });

    return new Response(res.body, {
      status: res.status,
      headers: {
        'Content-Type': res.headers.get('Content-Type'),
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
