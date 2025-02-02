import { LLMChain, LLMChainInput } from "./llm_chain.js";
import { PromptTemplate } from "../prompts/prompt.js";
import { BufferMemory } from "../memory/buffer_memory.js";

const defaultTemplate = `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

Current conversation:
{history}
Human: {input}
AI:`;

export class ConversationChain extends LLMChain {
  constructor({ prompt, outputKey, memory, ...rest }: LLMChainInput) {
    super({
      prompt:
        prompt ??
        new PromptTemplate({
          template: defaultTemplate,
          inputVariables: ["history", "input"],
        }),
      outputKey: outputKey ?? "response",
      memory: memory ?? new BufferMemory(),
      ...rest,
    });
  }
}
