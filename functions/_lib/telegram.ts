// Telegram alerts (rulebook R14.2: "⚠️ <role>: <what broke>. <what I did>. Reply with: <options>"). The bot
// token and chat id come from env and are never logged; without them the message goes to the console log.
import { log, type Env } from './env.ts';

async function send(env: Env, text: string): Promise<void> {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) { log('telegram.unconfigured', { text }); return; }
  try {
    const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) log('telegram.error', { status: res.status });
  } catch { log('telegram.error', { status: 'network' }); }
}

export const alert = (env: Env, what: string, did: string, options: string) => send(env, `⚠️ configurator: ${what}. ${did}. Reply with: ${options}`);
export const notify = (env: Env, text: string) => (env.TELEGRAM_NOTIFY_SUCCESS === 'false' ? Promise.resolve() : send(env, `🧵 configurator: ${text}`));
