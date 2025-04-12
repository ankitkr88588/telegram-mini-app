// File: src/index.ts
import express from 'express';
import { Telegraf } from 'telegraf';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;
const BOT_TOKEN = '8197075181:AAEOZOZ9TXEY3xnowj8w6h5PLUWiOum3P1c';
const DOMAIN = 'dockers.nub-coder.tech';

const bot = new Telegraf(BOT_TOKEN);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start command handler
bot.command('start', (ctx) => {
  const webAppUrl = `https://${DOMAIN}`;
  ctx.reply('Click the button below to open the mini app:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Mini App', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

// Launch bot and express server
bot.launch().then(() => {
  console.log('Bot started successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
