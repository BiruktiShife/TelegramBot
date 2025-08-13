import { NextRequest, NextResponse } from "next/server";
import { products } from "./products";

// Helper to send a message via Telegram Bot API
type TelegramMessage = {
  chat_id: number;
  text: string;
};

async function sendTelegramMessage(token: string, message: TelegramMessage) {
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
}

export async function POST(req: NextRequest) {
  // TODO: Replace with your bot token
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
  if (!TELEGRAM_BOT_TOKEN) {
    return NextResponse.json({ error: "Bot token not set." }, { status: 500 });
  }

  const body = await req.json();
  const message = body.message;
  if (!message || !message.chat || !message.text) {
    return NextResponse.json({ status: "ignored" });
  }

  const chatId = message.chat.id;
  const text = message.text.trim().toLowerCase();

  let reply = "";
  if (text === "/start") {
    reply = "Welcome! Use /products to see available electronics.";
  } else if (text === "/products") {
    reply = products.map((p) => `${p.id}. ${p.name} - $${p.price}`).join("\n");
    reply =
      "Available products:\n" + reply + "\n\nSend the product number to order.";
  } else if (/^\d+$/.test(text)) {
    const prod = products.find((p) => p.id === Number(text));
    if (prod) {
      reply = `You selected: ${prod.name}\nPrice: $${prod.price}\nDescription: ${prod.description}\n\nReply with your address to place an order.`;
    } else {
      reply = "Invalid product number.";
    }
  } else if (text.length > 10) {
    reply =
      "Thank you! Your order has been received. We will contact you soon.";
  } else {
    reply = "Unknown command. Use /products to see available items.";
  }

  await sendTelegramMessage(TELEGRAM_BOT_TOKEN, {
    chat_id: chatId,
    text: reply,
  });
  return NextResponse.json({ status: "ok" });
}
