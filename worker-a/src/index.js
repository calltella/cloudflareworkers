export default {
  async fetch(request, env) {
    // RPC 呼び出しで add を呼ぶ
    const result = await env.WORKER_B.add(3, 5);
    return new Response(`Result from WorkerB.add: ${result}`);
  },
};
