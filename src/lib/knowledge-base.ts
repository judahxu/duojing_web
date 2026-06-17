import fs from 'fs'
import path from 'path'

const KNOWLEDGE_DIR = path.join(process.cwd(), 'src/data/knowledge')

let cachedKnowledge: string | null = null

/** 加载语料库 Markdown 文件并合并为单一文本 */
export function loadKnowledgeBase(): string {
  if (cachedKnowledge) return cachedKnowledge

  const files = fs
    .readdirSync(KNOWLEDGE_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()

  cachedKnowledge = files
    .map((filename) => {
      const content = fs.readFileSync(path.join(KNOWLEDGE_DIR, filename), 'utf-8')
      return `# 文档：${filename.replace('.md', '')}\n\n${content}`
    })
    .join('\n\n---\n\n')

  return cachedKnowledge
}

export const FALLBACK_REPLY = '请联系商务'

export function buildSystemPrompt(knowledge: string): string {
  return `你是多鲸智能官网的在线客服助手。请严格根据以下知识库内容回答用户问题。

回答规则：
1. 只能基于知识库中的信息回答，不要编造、推测或引入知识库以外的内容
2. 如果知识库中没有相关信息，或无法从知识库中确定准确答案，必须且只能回复：${FALLBACK_REPLY}
3. 回答简洁、专业、友好，使用中文
4. 涉及联系方式时，直接使用知识库中的电话、邮箱等信息

知识库内容：
${knowledge}`
}
