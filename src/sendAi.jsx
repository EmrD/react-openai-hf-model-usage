import OpenAI from "openai";

export async function sendToAI(prompt, apiKey) {
    const client = new OpenAI({
        baseURL: "https://router.huggingface.co/v1",
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
    });

    const completion = await client.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
            { role: "user", content: prompt }
        ],
    });

    return completion.choices[0].message.content;
}