import { runAgentTUI } from "@ai-sdk/tui";
import { ToolLoopAgent } from "ai";

import { groqProvider } from "@/config/ai/groq";

const agent = new ToolLoopAgent({
  model: groqProvider("qwen/qwen3.8-27b"),
});

await runAgentTUI({
  title: "Protostar",
  agent,
  reasoning: "full",
});
