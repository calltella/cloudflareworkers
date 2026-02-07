// WorkerB: 単純な加算サービス
import { WorkerEntrypoint } from "cloudflare:workers";

export default class WorkerB extends WorkerEntrypoint {
  // fetch は 404 にして内部サービスのみ提供
  async fetch() {
    return new Response(null, { status: 404 });
  }

  // RPC で呼び出すメソッド
  async add(a, b) {
    return a + b;
  }
}
