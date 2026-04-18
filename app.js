const PRESET_SCENES = [
  "室友凌晨一点外放打游戏",
  "小组作业里只回收到的人还想拿一样分",
  "早八前五分钟起床还赶上点名",
  "朋友鸽我两次还问我在不在",
  "DDL 前夜才发现文档一字未动",
];

const THEME_KEYWORDS = {
  roommate: ["室友", "宿舍", "合租", "外放", "打呼", "夜聊", "半夜", "凌晨"],
  teamwork: ["小组", "作业", "队友", "分工", "汇报", "回收", "协作"],
  fairness: ["同分", "公平", "公道", "不配", "评分", "功劳", "分配", "均"],
  promise: ["鸽", "放鸽子", "失约", "爽约", "在不在", "答应", "迟到"],
  deadline: ["ddl", "deadline", "赶工", "通宵", "熬夜", "交稿", "截稿", "截止"],
  morning: ["早八", "点名", "起床", "迟到", "晨课", "闹钟"],
  workplace: ["老板", "上班", "同事", "会议", "加班", "工位", "绩效"],
  study: ["学习", "考试", "背书", "复习", "题", "课堂"],
  social: ["朋友", "对象", "聊天", "消息", "群", "回复", "站队"],
};

const CLASSIC_QUOTES = [
  {
    id: "lunyu-he",
    text: "礼之用，和为贵。",
    source: "《论语·学而》",
    themes: ["roommate", "social", "workplace", "teamwork"],
    keywords: ["冲突", "沟通", "礼", "和"],
  },
  {
    id: "lunyu-wushi",
    text: "己所不欲，勿施于人。",
    source: "《论语·颜渊》",
    themes: ["roommate", "social", "fairness", "teamwork"],
    keywords: ["边界", "尊重", "体谅"],
  },
  {
    id: "lunyu-xin",
    text: "人而无信，不知其可也。",
    source: "《论语·为政》",
    themes: ["promise", "social", "teamwork", "workplace"],
    keywords: ["守信", "答应", "约定"],
  },
  {
    id: "lunyu-yanxin",
    text: "言必信，行必果。",
    source: "《论语·子路》",
    themes: ["promise", "teamwork", "workplace"],
    keywords: ["执行", "兑现", "承诺"],
  },
  {
    id: "lunyu-butong",
    text: "君子和而不同，小人同而不和。",
    source: "《论语·子路》",
    themes: ["social", "teamwork", "workplace", "fairness"],
    keywords: ["站队", "分歧", "共处"],
  },
  {
    id: "lunyu-qiuzhu",
    text: "君子求诸己，小人求诸人。",
    source: "《论语·卫灵公》",
    themes: ["teamwork", "study", "deadline", "workplace"],
    keywords: ["甩锅", "反思", "责任"],
  },
  {
    id: "lunyu-guo",
    text: "过而不改，是谓过矣。",
    source: "《论语·卫灵公》",
    themes: ["teamwork", "workplace", "social", "promise"],
    keywords: ["改正", "重复", "问题"],
  },
  {
    id: "lunyu-jishi",
    text: "不患寡而患不均，不患贫而患不安。",
    source: "《论语·季氏》",
    themes: ["fairness", "teamwork", "workplace"],
    keywords: ["分配", "同分", "公正"],
  },
  {
    id: "mengzi-he",
    text: "天时不如地利，地利不如人和。",
    source: "《孟子·公孙丑下》",
    themes: ["teamwork", "social", "workplace"],
    keywords: ["合作", "关系", "默契"],
  },
  {
    id: "mengzi-youhuan",
    text: "生于忧患，死于安乐。",
    source: "《孟子·告子下》",
    themes: ["deadline", "study", "workplace", "morning"],
    keywords: ["危机", "压力", "松懈"],
  },
  {
    id: "mengzi-guiju",
    text: "不以规矩，不能成方圆。",
    source: "《孟子·离娄上》",
    themes: ["teamwork", "fairness", "workplace", "study"],
    keywords: ["规则", "流程", "边界"],
  },
  {
    id: "xunzi-qi",
    text: "锲而不舍，金石可镂。",
    source: "《荀子·劝学》",
    themes: ["deadline", "study", "morning", "workplace"],
    keywords: ["坚持", "努力", "硬扛"],
  },
  {
    id: "xunzi-lan",
    text: "青，取之于蓝，而青于蓝。",
    source: "《荀子·劝学》",
    themes: ["study", "workplace"],
    keywords: ["成长", "提升", "进步"],
  },
  {
    id: "laozi-qianli",
    text: "千里之行，始于足下。",
    source: "《老子·第六十四章》",
    themes: ["deadline", "study", "morning", "workplace"],
    keywords: ["开始", "行动", "落地"],
  },
  {
    id: "liji-yuze",
    text: "凡事预则立，不预则废。",
    source: "《礼记·中庸》",
    themes: ["deadline", "morning", "study", "teamwork"],
    keywords: ["计划", "准备", "拖延"],
  },
  {
    id: "liji-yubu",
    text: "玉不琢，不成器；人不学，不知道。",
    source: "《礼记·学记》",
    themes: ["study", "morning", "workplace"],
    keywords: ["学习", "训练", "成长"],
  },
];

const MODE_META = {
  true: { label: "真引", className: "true" },
  mix: { label: "意译", className: "mix" },
  parody: { label: "戏仿", className: "parody" },
};

const SAGE_NAMES = ["孔子", "墨子", "孟子", "庄子", "荀子", "韩非子"];
const USE_MOCK_REPLY = "auto";

const ONELINK_CONFIG = {
  baseUrl: "https://api.onelinkai.cloud/v1",
  fallbackModel: "claude-opus-4-6",
  imageModel: "gpt-image-1-2026-02-01",
  imageEndpoint: "/images/generations",
  imageSize: "1024x1280",
  imageSteps: 32,
  imageCfg: 7,
  requestTimeoutMs: 35000,
  keyWindowNames: ["__ONELINK_API_KEY__", "ONELINK_API_KEY", "__ONELINKAI_API_KEY__", "ONELINKAI_API_KEY"],
  keyStorageNames: ["onelink_api_key", "onelinkApiKey", "ONELINK_API_KEY", "OPENAI_API_KEY"],
  modelWindowNames: ["__ONELINK_MODEL__", "ONELINK_MODEL", "__ONELINKAI_MODEL__", "ONELINKAI_MODEL"],
  modelStorageNames: ["onelink_model", "onelinkModel", "ONELINK_MODEL"],
  styleStorageName: "card_style_preset",
  imageEnabledStorageName: "card_image_enabled",
};

const CARD_SCHEMA_LIMITS = {
  identityTag: 12,
  trueTitle: 40,
  trueDesc: 96,
  trueSource: 32,
  mixTitle: 42,
  mixDesc: 96,
  parodyTitle: 42,
  parodyDesc: 96,
  markdown: 900,
};

const CARD_REQUIRED_FIELDS = [
  "identityTag",
  "true.title",
  "true.desc",
  "true.source",
  "true.empty",
  "mix.title",
  "mix.desc",
  "parody.title",
  "parody.desc",
  "markdown",
];

const EXPORT_SIZE = {
  width: 1080,
  height: 1350,
};

const IMAGE_SYSTEM_PREFIX =
  "中国古籍质感海报背景，留白充足，中央偏上视觉焦点，柔和纸张纹理，电影级光影，高清，clean composition，no text";

const IMAGE_NEGATIVE_PROMPT =
  "text, words, letters, watermark, logo, signature, deformed face, low quality, blurry, noisy, jpeg artifacts";

const LLM_JSON_SYSTEM_PROMPT = [
  "你是“合乎周礼”的古人判词官，面向社交平台用户产出可传播文案。",
  "前提条件：只要存在可核验的真实古文原句，就优先使用原句并给出真实出处。",
  "知识边界：优先基于周礼相关古代文献进行判断、引用与改写。",
  "表达风格：一本正经地引经据典，带轻度戏谑和机锋，读起来像古人开麦点评现代破事。",
  "输出严格 JSON，不要输出 Markdown，不要输出代码块，不要输出额外解释。",
  "JSON 结构必须是：",
  "{",
  '  "identityTag": "string",',
  '  "true": {"title":"string","desc":"string","source":"string","empty":false},',
  '  "mix": {"title":"string","desc":"string"},',
  '  "parody": {"title":"string","desc":"string"},',
  '  "markdown": "string"',
  "}",
  "要求：",
  "identityTag 要短、怪、能自称，像社交标签。",
  `identityTag 长度 <= ${CARD_SCHEMA_LIMITS.identityTag}。`,
  `true.title 长度 <= ${CARD_SCHEMA_LIMITS.trueTitle}。`,
  `true.desc 长度 <= ${CARD_SCHEMA_LIMITS.trueDesc}。`,
  `true.source 长度 <= ${CARD_SCHEMA_LIMITS.trueSource}。`,
  `mix.title 长度 <= ${CARD_SCHEMA_LIMITS.mixTitle}。`,
  `mix.desc 长度 <= ${CARD_SCHEMA_LIMITS.mixDesc}。`,
  `parody.title 长度 <= ${CARD_SCHEMA_LIMITS.parodyTitle}。`,
  `parody.desc 长度 <= ${CARD_SCHEMA_LIMITS.parodyDesc}。`,
  `markdown 长度 <= ${CARD_SCHEMA_LIMITS.markdown}，并与字段内容一致。`,
  "真引模式必须引用真实古籍原句与出处；若无法确认真实出处，必须写 true.empty=true，true.title=“暂缺可信原句”，true.source=“”。",
  "意译模式强调古今混搭，句子短，适合当评论区回复。",
  "戏仿模式允许夸张和整活，但不做人身攻击，不写脏话。",
  "禁止缺字段，禁止把 true.empty 写成字符串。",
  "整体风格：适合小红书/B站传播，短促、有梗、可截图。",
].join("\n");

const LLM_JSON_REPAIR_PROMPT = [
  "你是 JSON 修复器。",
  "将输入修复为严格 JSON，结构与字段名保持固定。",
  "不要输出解释，只输出 JSON。",
].join("\n");

const TAG_BY_THEME = {
  roommate: ["室友受难", "夜半清修", "同屋守礼"],
  teamwork: ["小组孤忠", "协作稽核", "回收督办"],
  fairness: ["分工执衡", "公道鸣鼓", "评分稽正"],
  promise: ["失约见证", "守信执笔", "赴约巡礼"],
  deadline: ["DDL 燃灯", "赶稿行军", "截稿伏案"],
  morning: ["早八奔命", "点名前线", "晨课追命"],
  workplace: ["工位修罗", "会议缝隙", "绩效持灯"],
  study: ["背书护法", "试卷行者", "复习渡人"],
  social: ["社交候判", "消息守夜", "回信稽礼"],
  general: ["人间问礼", "世情审议", "当代礼簿"],
};

const TAG_SUFFIX = ["者", "客", "臣", "民", "司", "侯", "令"];
const SKILL_REPO_URL = "https://github.com/justtobeliev1/zhouli-mvp.git";

const elements = {
  chatViewport: document.getElementById("chatViewport"),
  emptyState: document.getElementById("emptyState"),
  messageList: document.getElementById("messageList"),
  userInput: document.getElementById("userInput"),
  sendBtn: document.getElementById("sendBtn"),
  presetButtons: document.getElementById("presetButtons"),
  charCount: document.getElementById("charCount"),
  statusText: document.getElementById("statusText"),
  downloadCardBtn: document.getElementById("downloadCardBtn"),
  copySkillPromptBtn: document.getElementById("copySkillPromptBtn"),
};

const state = {
  lastBundle: null,
  lastInput: "",
  selectedMode: "mix",
  hasStarted: false,
  sageCursor: 0,
  isPending: false,
  backgroundCache: new Map(),
  stylePresetId: "",
};

init();

function init() {
  state.stylePresetId = resolveStylePreset().id;
  renderPresetButtons();
  bindEvents();
  updateCharCount();
  exposeRuntimeApiHelpers();
  const hasApiKey = Boolean(resolveApiKey());
  setStatus(hasApiKey ? "等待输入（真实管线已启用）" : "等待输入（缺少 API Key，将使用 Mock）");
}

function bindEvents() {
  elements.userInput.addEventListener("input", updateCharCount);

  elements.userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  });

  elements.sendBtn.addEventListener("click", handleSend);

  elements.downloadCardBtn.addEventListener("click", () => {
    if (!state.lastBundle) {
      setStatus("先生成一条判词，再导出图卡。", true);
      return;
    }

    exportCardAsPng();
  });

  elements.copySkillPromptBtn?.addEventListener("click", async () => {
    const prompt = buildSkillInstallPrompt();
    await copyToClipboard(prompt);
  });
}

function renderPresetButtons() {
  elements.presetButtons.innerHTML = "";
  PRESET_SCENES.forEach((text) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.addEventListener("click", () => {
      elements.userInput.value = text;
      updateCharCount();
      elements.userInput.focus();
      setStatus("已填入场景，按回车或点击发送。");
    });
    elements.presetButtons.appendChild(button);
  });
}

function updateCharCount() {
  elements.charCount.textContent = `${elements.userInput.value.length} / 120`;
}

async function handleSend() {
  if (state.isPending) {
    setStatus("上一条正在生成，请稍候。", true);
    return;
  }

  const input = elements.userInput.value.trim();
  if (!input) {
    setStatus("先输入一句处境。", true);
    return;
  }

  ensureConversationStarted();
  addUserMessage(input);
  elements.userInput.value = "";
  updateCharCount();

  setComposerBusy(true);
  setStatus("正在生成判词…", false);

  try {
    const result = await generateBundleWithAutoFallback(input);
    const bundle = result.bundle;
    state.lastInput = input;
    state.lastBundle = bundle;
    state.selectedMode = bundle.true.empty ? "mix" : "true";
    addAiMessage(bundle);
    setStatus(result.statusText, result.isWarn);
  } finally {
    setComposerBusy(false);
  }
}

function setComposerBusy(isBusy) {
  state.isPending = isBusy;
  elements.sendBtn.disabled = isBusy;
  elements.userInput.disabled = isBusy;
}

function ensureConversationStarted() {
  if (state.hasStarted) {
    return;
  }

  state.hasStarted = true;
  document.body.classList.add("has-messages");
  if (elements.emptyState) {
    elements.emptyState.setAttribute("aria-hidden", "true");
  }
}

function addUserMessage(text) {
  const message = document.createElement("article");
  message.className = "message user";
  message.innerHTML = `<div class="bubble">${escapeHtml(text)}</div>`;
  elements.messageList.appendChild(message);
  scrollToBottom();
}

function nextSageName() {
  const name = SAGE_NAMES[state.sageCursor % SAGE_NAMES.length];
  state.sageCursor += 1;
  return name;
}

function addAiMessage(bundle) {
  const sageName = nextSageName();
  const message = document.createElement("article");
  message.className = "message ai";
  const markdown = bundle.markdown || buildAssistantMarkdown(bundle);

  message.innerHTML = `
    <div class="ai-topline">
      <img class="ai-avatar" src="./confucius.jpg" alt="${escapeHtml(sageName)}头像" />
      <span class="ai-name">${escapeHtml(sageName)}</span>
      <span class="ai-role">古人锐评</span>
    </div>
    <div class="bubble ai-markdown">
      ${renderMarkdown(markdown)}
    </div>
  `;

  elements.messageList.appendChild(message);
  scrollToBottom();
}

function buildMockBundle(input) {
  const summary = summarizeInput(input);
  const bundle = {
    identityTag: "当代问礼客",
    true: {
      title: "己所不欲，勿施于人。",
      desc: `你若不想被半夜吵醒，别人也该收声。就“${summary}”这个案子，先把边界讲明白。`,
      source: "《论语·颜渊》",
      empty: false,
    },
    mix: {
      title: `今有“${summary}”一事，礼法轻震。`,
      desc: "先礼貌提醒，再给具体方案。你不是来吵架，你是来定规矩。",
      source: "",
      empty: false,
    },
    parody: {
      title: `据《当代杂礼》：${summary}，判为“轻度失仪，建议速改”。`,
      desc: "先给台阶，再补一刀，幽默发射完毕。",
      source: "",
      empty: false,
    },
    generatedAt: formatTime(new Date()),
  };
  bundle.markdown = buildAssistantMarkdown(bundle);
  return bundle;
}

async function generateBundleWithAutoFallback(input) {
  if (USE_MOCK_REPLY === true) {
    return {
      bundle: buildMockBundle(input),
      statusText: "当前为 Mock 固定模式。",
      isWarn: true,
    };
  }

  const apiKey = resolveApiKey();
  if (!apiKey) {
    return {
      bundle: buildMockBundle(input),
      statusText: "未检测到 API Key，已使用 Mock 结果。",
      isWarn: true,
    };
  }

  try {
    const activeModel = resolveModel();
    const llmResult = await requestCardSchemaWithRepair(input, apiKey, activeModel);
    const bundle = enforceCardSchema(llmResult.bundle, input);
    bundle.__meta = {
      copySource: llmResult.repaired ? "llm_repaired" : "llm",
      model: activeModel,
    };
    return {
      bundle,
      statusText: llmResult.repaired
        ? `真实模型生成完成（${activeModel}，已自动修复格式）。`
        : `真实模型生成完成（${activeModel}）。`,
      isWarn: false,
    };
  } catch (error) {
    console.error("[onelink] request failed", error);
    return {
      bundle: buildMockBundle(input),
      statusText: `真实接口失败，已回退 Mock（${simplifyErrorMessage(error)}）`,
      isWarn: true,
    };
  }
}

async function requestCardSchemaWithRepair(input, apiKey, model) {
  const firstText = await requestOneLinkCompletion(buildCardJsonMessages(input), apiKey, model, {
    temperature: 0.55,
    maxTokens: 1400,
  });

  const firstJson = parseJsonFromLlmText(firstText);
  const firstValidation = validateCardPayload(firstJson);
  if (firstValidation.ok) {
    return { bundle: firstJson, repaired: false };
  }

  const repairedText = await requestOneLinkCompletion(
    buildRepairMessages(firstText, firstValidation.errors),
    apiKey,
    model,
    { temperature: 0.2, maxTokens: 1400 },
  );

  const repairedJson = parseJsonFromLlmText(repairedText);
  const repairedValidation = validateCardPayload(repairedJson);
  if (repairedValidation.ok) {
    return { bundle: repairedJson, repaired: true };
  }

  throw new Error(`结构化文案不合规：${repairedValidation.errors.join("；") || "未知问题"}`);
}

async function requestOneLinkCompletion(messages, apiKey, model, options = {}) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), ONELINK_CONFIG.requestTimeoutMs);

  try {
    const response = await fetch(`${ONELINK_CONFIG.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
        temperature: options.temperature ?? 0.6,
        max_tokens: options.maxTokens ?? 1200,
      }),
      signal: controller.signal,
    });

    const rawText = await response.text();
    let payload = {};
    if (rawText) {
      try {
        payload = JSON.parse(rawText);
      } catch {
        payload = {};
      }
    }

    if (!response.ok) {
      throw new Error(extractApiErrorMessage(response.status, payload, rawText));
    }

    const content = extractAssistantContent(payload);
    if (!content.trim()) {
      throw new Error("返回内容为空");
    }

    return content;
  } catch (error) {
    if (error && typeof error === "object" && error.name === "AbortError") {
      throw new Error("请求超时");
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("请求失败");
  } finally {
    window.clearTimeout(timer);
  }
}

function buildCardJsonMessages(input) {
  return [
    {
      role: "system",
      content: LLM_JSON_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: [
        "请按固定 schema 输出 JSON，三种模式都要给出。",
        "语气要像古人判词，兼顾传播感和梗感。",
        "用户处境：",
        input,
      ].join("\n"),
    },
  ];
}

function buildRepairMessages(rawText, errors) {
  const errorText = errors.length ? errors.join("；") : "字段缺失或类型错误";
  return [
    { role: "system", content: LLM_JSON_REPAIR_PROMPT },
    {
      role: "user",
      content: [
        "请修复这段输出，使其成为严格 JSON。",
        `问题：${errorText}`,
        "目标结构：",
        JSON.stringify(buildCardSchemaTemplate(), null, 2),
        "待修复内容：",
        rawText,
      ].join("\n"),
    },
  ];
}

function buildCardSchemaTemplate() {
  return {
    identityTag: "string",
    true: { title: "string", desc: "string", source: "string", empty: false },
    mix: { title: "string", desc: "string" },
    parody: { title: "string", desc: "string" },
    markdown: "string",
  };
}

function extractAssistantContent(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") {
          return part;
        }
        return part?.text || "";
      })
      .join("\n");
  }
  return "";
}

function extractApiErrorMessage(status, payload, rawText) {
  const candidate =
    payload?.error?.message ||
    payload?.message ||
    payload?.msg ||
    payload?.detail ||
    (typeof rawText === "string" ? rawText : "");

  const compact = String(candidate || "").replace(/\s+/g, " ").trim();
  if (!compact) {
    return `HTTP ${status}`;
  }
  return `HTTP ${status}: ${compact.slice(0, 90)}`;
}

function parseJsonFromLlmText(rawText) {
  const text = String(rawText || "").trim();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {}

  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch && fenceMatch[1]) {
    try {
      return JSON.parse(fenceMatch[1].trim());
    } catch {}
  }

  const objectText = extractFirstJsonObject(text);
  if (!objectText) {
    return null;
  }

  try {
    return JSON.parse(objectText);
  } catch {
    return null;
  }
}

function extractFirstJsonObject(text) {
  let depth = 0;
  let start = -1;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === "{") {
      if (depth === 0) {
        start = i;
      }
      depth += 1;
      continue;
    }
    if (char === "}") {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        return text.slice(start, i + 1);
      }
    }
  }
  return "";
}

function validateCardPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { ok: false, errors: ["根节点不是对象"] };
  }

  const errors = [];
  CARD_REQUIRED_FIELDS.forEach((path) => {
    const value = readByPath(payload, path);
    if (value === undefined || value === null) {
      errors.push(`缺少字段 ${path}`);
      return;
    }

    if (path === "true.empty") {
      if (typeof value !== "boolean") {
        errors.push("true.empty 必须是布尔值");
      }
      return;
    }

    if (typeof value !== "string") {
      errors.push(`${path} 必须是字符串`);
    }
  });

  return { ok: errors.length === 0, errors };
}

function enforceCardSchema(rawPayload, input) {
  const fallback = buildMockBundle(input);
  const raw = rawPayload && typeof rawPayload === "object" ? rawPayload : {};

  const trueRaw = raw.true && typeof raw.true === "object" ? raw.true : {};
  const mixRaw = raw.mix && typeof raw.mix === "object" ? raw.mix : {};
  const parodyRaw = raw.parody && typeof raw.parody === "object" ? raw.parody : {};

  const bundle = {
    identityTag: clipTextWithEllipsis(safeText(raw.identityTag) || fallback.identityTag, CARD_SCHEMA_LIMITS.identityTag),
    true: {
      title: clipTextWithEllipsis(safeText(trueRaw.title) || fallback.true.title, CARD_SCHEMA_LIMITS.trueTitle),
      desc: clipTextWithEllipsis(safeText(trueRaw.desc) || fallback.true.desc, CARD_SCHEMA_LIMITS.trueDesc),
      source: clipTextWithEllipsis(safeText(trueRaw.source) || fallback.true.source, CARD_SCHEMA_LIMITS.trueSource),
      empty: Boolean(trueRaw.empty),
    },
    mix: {
      title: clipTextWithEllipsis(safeText(mixRaw.title) || fallback.mix.title, CARD_SCHEMA_LIMITS.mixTitle),
      desc: clipTextWithEllipsis(safeText(mixRaw.desc) || fallback.mix.desc, CARD_SCHEMA_LIMITS.mixDesc),
    },
    parody: {
      title: clipTextWithEllipsis(safeText(parodyRaw.title) || fallback.parody.title, CARD_SCHEMA_LIMITS.parodyTitle),
      desc: clipTextWithEllipsis(safeText(parodyRaw.desc) || fallback.parody.desc, CARD_SCHEMA_LIMITS.parodyDesc),
    },
    generatedAt: formatTime(new Date()),
  };

  if (bundle.true.empty) {
    bundle.true.source = "";
  }

  const markdownInput = safeText(raw.markdown);
  bundle.markdown = clipTextWithEllipsis(markdownInput || buildAssistantMarkdown(bundle), CARD_SCHEMA_LIMITS.markdown);

  if (!hasRequiredCardFields(bundle)) {
    const mock = buildMockBundle(input);
    mock.__meta = { copySource: "mock_schema_guard" };
    return mock;
  }

  return bundle;
}

function clipTextWithEllipsis(text, maxLen) {
  const value = safeText(text);
  if (!value || value.length <= maxLen) {
    return value;
  }
  if (maxLen <= 1) {
    return "…";
  }
  return `${value.slice(0, maxLen - 1)}…`;
}

function hasRequiredCardFields(bundle) {
  if (!bundle || typeof bundle !== "object") {
    return false;
  }

  const allowEmptyStringPaths = new Set(["true.source"]);
  return CARD_REQUIRED_FIELDS.every((path) => {
    const value = readByPath(bundle, path);
    if (value === undefined || value === null) {
      return false;
    }
    if (path === "true.empty") {
      return typeof value === "boolean";
    }
    if (typeof value !== "string") {
      return false;
    }
    if (allowEmptyStringPaths.has(path)) {
      return true;
    }
    return value.trim().length > 0;
  });
}

function readByPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (!acc || typeof acc !== "object") {
      return undefined;
    }
    return acc[key];
  }, obj);
}

async function prefetchBackgroundAsset(input, mode) {
  const apiKey = resolveApiKey();
  if (!apiKey || !resolveImageEnabled()) {
    return;
  }
  try {
    await getBackgroundAsset(input, mode, apiKey);
  } catch {}
}

async function getBackgroundAsset(input, mode, apiKey) {
  const preset = resolveStylePreset();
  const normalized = normalizeInputForSeed(input);
  const seed = hashStringToSeed(`${preset.id}|${mode}|${normalized}`);
  const cacheKey = `${preset.id}|${mode}|${seed}`;

  if (state.backgroundCache.has(cacheKey)) {
    return state.backgroundCache.get(cacheKey);
  }

  const pending = requestBackgroundImageDataUrl({
    apiKey,
    mode,
    input,
    preset,
    seed,
  }).catch((error) => {
    state.backgroundCache.delete(cacheKey);
    throw error;
  });

  state.backgroundCache.set(cacheKey, pending);
  return pending;
}

async function requestBackgroundImageDataUrl({ apiKey, mode, input, preset, seed }) {
  const prompt = buildBackgroundPrompt(mode, input, preset);
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), ONELINK_CONFIG.requestTimeoutMs);

  try {
    const response = await fetch(`${ONELINK_CONFIG.baseUrl}${ONELINK_CONFIG.imageEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: ONELINK_CONFIG.imageModel,
        prompt,
        size: ONELINK_CONFIG.imageSize,
        steps: ONELINK_CONFIG.imageSteps,
        cfg: ONELINK_CONFIG.imageCfg,
        seed,
        negative_prompt: IMAGE_NEGATIVE_PROMPT,
      }),
      signal: controller.signal,
    });

    const rawText = await response.text();
    let payload = {};
    if (rawText) {
      try {
        payload = JSON.parse(rawText);
      } catch {
        payload = {};
      }
    }

    if (!response.ok) {
      throw new Error(extractApiErrorMessage(response.status, payload, rawText));
    }

    const imageData = payload?.data?.[0] || {};
    if (typeof imageData.b64_json === "string" && imageData.b64_json.trim()) {
      return {
        dataUrl: `data:image/png;base64,${imageData.b64_json}`,
        source: "llm_image_b64",
      };
    }

    if (typeof imageData.url === "string" && imageData.url.trim()) {
      const blobResponse = await fetch(imageData.url.trim());
      if (!blobResponse.ok) {
        throw new Error("背景图 URL 不可读取");
      }
      const blob = await blobResponse.blob();
      const dataUrl = await blobToDataUrl(blob);
      return { dataUrl, source: "llm_image_url" };
    }

    throw new Error("图像模型未返回可用图片");
  } catch (error) {
    if (error && typeof error === "object" && error.name === "AbortError") {
      throw new Error("背景图请求超时");
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("背景图请求失败");
  } finally {
    window.clearTimeout(timer);
  }
}

function buildBackgroundPrompt(mode, input, preset) {
  const mood = deriveMoodKeywords(input);
  const modeLabel = MODE_META[mode]?.label || "意译";
  const tone = preset?.palette?.bgTop && preset?.palette?.bgBottom ? "青黛暖金" : "宣纸浅墨";
  return [
    IMAGE_SYSTEM_PREFIX,
    `mode: ${modeLabel}`,
    `色调: ${tone}`,
    `情绪关键词: ${mood.join("、")}`,
  ].join("；");
}

function deriveMoodKeywords(input) {
  const themes = detectThemes(input);
  const map = {
    roommate: ["边界", "克制"],
    teamwork: ["秩序", "协作"],
    fairness: ["公正", "分寸"],
    promise: ["守信", "决断"],
    deadline: ["紧迫", "执行"],
    morning: ["清醒", "行动"],
    workplace: ["专业", "稳健"],
    study: ["专注", "沉浸"],
    social: ["体面", "回应"],
    general: ["冷静", "留白"],
  };

  const mood = [];
  themes.forEach((theme) => {
    const words = map[theme] || [];
    words.forEach((word) => {
      if (!mood.includes(word)) {
        mood.push(word);
      }
    });
  });

  return mood.slice(0, 3).length ? mood.slice(0, 3) : map.general;
}

function normalizeInputForSeed(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[\s\r\n\t]+/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .slice(0, 120);
}

function hashStringToSeed(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  const positive = Math.abs(hash >>> 0);
  return (positive % 2147483646) + 1;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(blob);
  });
}

function resolveApiKey() {
  const byStorage = pickStorageValue(ONELINK_CONFIG.keyStorageNames);
  if (byStorage) {
    return byStorage;
  }
  return pickWindowValue(ONELINK_CONFIG.keyWindowNames);
}

function resolveModel() {
  return (
    pickWindowValue(ONELINK_CONFIG.modelWindowNames) ||
    pickStorageValue(ONELINK_CONFIG.modelStorageNames) ||
    ONELINK_CONFIG.fallbackModel
  );
}

function resolveStylePreset() {
  const presets = window.STYLE_PRESETS || {};
  const all = Object.values(presets);
  const fallback = all[0];
  if (!fallback) {
    return {
      id: "default",
      palette: {
        bgTop: "#1f3f3a",
        bgBottom: "#2b5a52",
        textPrimary: "#fff4e8",
        textSecondary: "#f4e1cc",
        accent: "#ffe5c6",
        accentSoft: "rgba(255,229,198,0.18)",
        border: "rgba(248,228,206,0.3)",
      },
      modeColor: { true: "#ffd9ab", mix: "#ffecc8", parody: "#ffcc95" },
      fonts: {
        brand: '"Noto Sans SC", sans-serif',
        title: '"Noto Sans SC", sans-serif',
        body: '"Noto Sans SC", sans-serif',
        tag: '"Noto Sans SC", sans-serif',
      },
      paddings: { x: 96, top: 160, contentTop: 380, bottom: 120 },
      textureStrength: 0.14,
      avatarStyle: { shape: "circle", stroke: "rgba(255,235,208,0.45)", strokeWidth: 2 },
      layout: {
        canvasWidth: 1080,
        canvasHeight: 1350,
        titleStart: 56,
        titleMin: 40,
        titleLineHeight: 1.22,
        titleMaxLines: 4,
        bodyStart: 36,
        bodyMin: 28,
        bodyLineHeight: 1.35,
        bodyMaxLines: 8,
      },
    };
  }

  const saved = pickStorageValue([ONELINK_CONFIG.styleStorageName]);
  if (saved && presets[saved]) {
    return presets[saved];
  }
  if (state.stylePresetId && presets[state.stylePresetId]) {
    return presets[state.stylePresetId];
  }
  return fallback;
}

function resolveImageEnabled() {
  return false;
}

function pickWindowValue(nameList) {
  for (const name of nameList) {
    const value = window[name];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}

function pickStorageValue(nameList) {
  try {
    for (const name of nameList) {
      const value = window.localStorage.getItem(name);
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
  } catch {
    return "";
  }
  return "";
}

function exposeRuntimeApiHelpers() {
  window.setOnelinkApiKey = (key) => {
    const clean = String(key || "").trim();
    if (!clean) {
      return false;
    }
    try {
      window.localStorage.setItem(ONELINK_CONFIG.keyStorageNames[0], clean);
      return true;
    } catch {
      return false;
    }
  };

  window.clearOnelinkApiKey = () => {
    try {
      ONELINK_CONFIG.keyStorageNames.forEach((name) => window.localStorage.removeItem(name));
      return true;
    } catch {
      return false;
    }
  };
  window.setCardStylePreset = (presetId) => {
    const presets = window.STYLE_PRESETS || {};
    if (!presets[presetId]) {
      return false;
    }
    state.stylePresetId = presetId;
    try {
      window.localStorage.setItem(ONELINK_CONFIG.styleStorageName, presetId);
      return true;
    } catch {
      return false;
    }
  };

  window.setCardImageEnabled = (enabled) => {
    void enabled;
    return false;
  };
}

function safeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function simplifyErrorMessage(error) {
  const fallback = "未知错误";
  if (!error) {
    return fallback;
  }
  const msg = typeof error === "string" ? error : error.message;
  if (!msg) {
    return fallback;
  }
  return String(msg).replace(/\s+/g, " ").trim().slice(0, 50);
}

function generateBundle(input) {
  const themes = detectThemes(input);
  const candidates = rankCandidates(input, themes);
  const quote = candidates[0] || null;

  const bundle = {
    identityTag: buildIdentityTag(themes, input),
    true: buildTrueResult(input, quote),
    mix: buildMixResult(input),
    parody: buildParodyResult(input),
    generatedAt: formatTime(new Date()),
  };
  bundle.markdown = buildAssistantMarkdown(bundle);
  return bundle;
}

function detectThemes(input) {
  const content = input.toLowerCase();
  const themes = new Set();

  Object.entries(THEME_KEYWORDS).forEach(([theme, words]) => {
    if (words.some((word) => content.includes(word))) {
      themes.add(theme);
    }
  });

  if (!themes.size) {
    themes.add("general");
  }

  return themes;
}

function rankCandidates(input, themes) {
  const lowered = input.toLowerCase();

  const scored = CLASSIC_QUOTES.map((quote) => {
    let score = 0;

    quote.themes.forEach((theme) => {
      if (themes.has(theme)) {
        score += 3;
      }
    });

    quote.keywords.forEach((word) => {
      if (lowered.includes(word)) {
        score += 1;
      }
    });

    return { quote, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.quote);

  return scored;
}

function buildIdentityTag(themes, input) {
  const orderedThemes = [
    "teamwork",
    "fairness",
    "roommate",
    "deadline",
    "morning",
    "promise",
    "workplace",
    "study",
    "social",
    "general",
  ];

  const theme = orderedThemes.find((item) => themes.has(item)) || "general";
  const pool = TAG_BY_THEME[theme] || TAG_BY_THEME.general;
  const first = pool[input.length % pool.length];
  const second = TAG_SUFFIX[input.length % TAG_SUFFIX.length];
  return `${first}${second}`;
}

function buildTrueResult(input, quote) {
  if (!quote) {
    return {
      title: "暂未检索到可信古籍原句",
      desc: "真引模式留空，避免伪造出处。你可以换一种表达再试。",
      source: "",
      empty: true,
    };
  }

  const summary = summarizeInput(input);

  return {
    title: quote.text,
    desc: `就“${summary}”这件事，建议先把边界说清，再给出可执行规则。`,
    source: quote.source,
    empty: false,
  };
}

function buildMixResult(input) {
  const summary = summarizeInput(input);

  return {
    title: `今有“${summary}”一事，礼法轻震。`,
    desc: "古今混搭建议：态度清楚，措辞克制，目标放在解决问题。",
    source: "",
    empty: false,
  };
}

function buildParodyResult(input) {
  const summary = summarizeInput(input);

  return {
    title: `据《当代杂礼》：${summary}，列“轻度失仪”。`,
    desc: "戏仿版：先给台阶，再立规矩，笑点和力度一起落地。",
    source: "",
    empty: false,
  };
}

function buildAssistantMarkdown(bundle) {
  const trueLine = bundle.true.empty
    ? `- **真引**：暂时没检索到可靠原句，怕乱引，先空着。`
    : `- **真引**：${bundle.true.title}${bundle.true.source ? `（${bundle.true.source}）` : ""}\n  ${bundle.true.desc}`;

  return [
    `### 今日判词：${bundle.identityTag}`,
    `> 把破事说出来，礼法才有用武之地。`,
    "",
    trueLine,
    `- **意译**：${bundle.mix.title}\n  ${bundle.mix.desc}`,
    `- **戏仿**：${bundle.parody.title}\n  ${bundle.parody.desc}`,
    "",
    "`#这合乎周礼吗 #可复制 #可截图`",
  ].join("\n");
}

function buildSkillInstallPrompt() {
  const apiKey = resolveApiKey() || "<YOUR_ONELINK_API_KEY>";
  return [
    "请完成以下任务：",
    "1) 克隆项目并安装 skill 到本地 agent。",
    "2) 使用该 skill 生成“合乎周礼”风格判词和可分享卡片。",
    "",
    "执行命令：",
    `git clone ${SKILL_REPO_URL}`,
    "cd zhouli-mvp",
    "mkdir -p ~/.codex/skills/zhouli-card",
    "cp -R skills/zhouli-card/* ~/.codex/skills/zhouli-card/",
    "",
    "运行时配置：",
    `API Key: ${apiKey}`,
    "Model: claude-opus-4-6",
    "",
    "执行要求：",
    "- 文案必须基于周礼相关古代文献优先引用真实原句。",
    "- 若无法确认真实出处，真引字段按降级规则返回，不可编造出处。",
    "- 图卡使用代码渲染模板导出（Canvas），确保稳定可复现。",
    "- 返回一个示例输入与导出图卡路径。",
  ].join("\n");
}

function summarizeInput(input) {
  const plain = input.replace(/[\n\r]+/g, " ").trim();
  if (plain.length <= 18) {
    return plain;
  }
  return `${plain.slice(0, 18)}…`;
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    showToast("已复制");
  } catch {
    setStatus("复制失败，请手动复制。", true);
  }
}

async function exportCardAsPng() {
  const bundle = state.lastBundle;
  if (!bundle) {
    return;
  }

  const preset = resolveStylePreset();
  const mode = MODE_META[state.selectedMode] ? state.selectedMode : "mix";
  const modeLabel = MODE_META[mode].label;

  const canvas = document.createElement("canvas");
  canvas.width = EXPORT_SIZE.width;
  canvas.height = EXPORT_SIZE.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    setStatus("导出失败：Canvas 不可用。", true);
    return;
  }

  let renderResult = renderCardComposition(ctx, {
    bundle,
    mode,
    modeLabel,
    preset,
    backgroundImage: null,
    useTemplateBackground: true,
    backgroundSource: "stable_template",
  });

  let quality = runCardQualityChecks({
    bundle,
    canvas,
    layout: renderResult.layout,
    preset,
  });

  if (!quality.passed) {
    renderResult = renderCardComposition(ctx, {
      bundle,
      mode,
      modeLabel,
      preset,
      backgroundImage: null,
      useTemplateBackground: true,
      backgroundSource: "stable_template",
    });
    quality = runCardQualityChecks({
      bundle,
      canvas,
      layout: renderResult.layout,
      preset,
    });
    setStatus("检测到导出风险，已启用稳定模板。", true);
  }

  let dataUrl = "";
  try {
    dataUrl = canvas.toDataURL("image/png");
  } catch {
    renderResult = renderCardComposition(ctx, {
      bundle,
      mode,
      modeLabel,
      preset,
      backgroundImage: null,
      useTemplateBackground: true,
      backgroundSource: "stable_template",
    });
    dataUrl = canvas.toDataURL("image/png");
    setStatus("跨域背景不可导出，已启用稳定模板。", true);
  }

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `hehu-zhouli-${Date.now()}.png`;
  link.click();

  showToast("图卡已导出");
}

function renderCardComposition(
  ctx,
  {
    bundle,
    mode,
    modeLabel,
    preset,
    backgroundImage,
    useTemplateBackground = false,
    backgroundSource = "template",
  },
) {
  const palette = preset.palette || {};
  const fonts = preset.fonts || {};
  const paddings = preset.paddings || {};
  const layoutPreset = preset.layout || {};

  const width = EXPORT_SIZE.width;
  const height = EXPORT_SIZE.height;
  const x = paddings.x || 96;
  const top = paddings.top || 160;
  const contentTop = paddings.contentTop || 380;
  const contentWidth = width - x * 2;

  if (!useTemplateBackground && backgroundImage) {
    drawImageCover(ctx, backgroundImage, width, height);
    const overlay = ctx.createLinearGradient(0, 0, 0, height);
    overlay.addColorStop(0, "rgba(8,16,14,0.38)");
    overlay.addColorStop(1, "rgba(8,16,14,0.58)");
    ctx.fillStyle = overlay;
    ctx.fillRect(0, 0, width, height);
  } else {
    drawStableTemplateBackground(ctx, preset);
  }

  drawTexture(ctx, width, height, preset.textureStrength || 0.12);

  ctx.strokeStyle = palette.border || "rgba(248,228,206,0.3)";
  ctx.lineWidth = 2;
  ctx.strokeRect(62, 62, 956, 1226);

  ctx.fillStyle = palette.accent || "#ffe5c6";
  ctx.font = `700 74px ${fonts.brand || '"Noto Sans SC", sans-serif'}`;
  ctx.fillText("合乎周礼", x, top);

  ctx.fillStyle = palette.textSecondary || "#f9dfc4";
  ctx.font = `500 35px ${fonts.body || '"Noto Sans SC", sans-serif'}`;
  ctx.fillText("这合乎周礼吗？", x, top + 55);

  ctx.font = `500 28px ${fonts.tag || '"Noto Sans SC", sans-serif'}`;
  const tagText = clipTextWithEllipsis(bundle.identityTag, CARD_SCHEMA_LIMITS.identityTag);
  const tagWidth = ctx.measureText(tagText).width + 52;
  roundRect(
    ctx,
    x,
    top + 88,
    tagWidth,
    54,
    27,
    palette.accentSoft || "rgba(255,229,198,0.16)",
    "rgba(255,229,198,0.45)",
  );
  ctx.fillStyle = palette.accent || "#ffe8cd";
  ctx.fillText(tagText, x + 24, top + 123);

  const cardMode = bundle[mode] || bundle.mix || buildMockBundle("默认").mix;
  const titleFit = fitTextBlock(ctx, cardMode.title, {
    maxWidth: contentWidth,
    maxLines: layoutPreset.titleMaxLines || 4,
    startSize: layoutPreset.titleStart || 56,
    minSize: layoutPreset.titleMin || 40,
    lineHeightRatio: layoutPreset.titleLineHeight || 1.22,
    fontFamily: fonts.title || '"Noto Sans SC", sans-serif',
    fontWeight: 700,
  });

  const titleColorMap = preset.modeColor || palette.modeColor || {};
  ctx.fillStyle = titleColorMap[mode] || palette.textPrimary || "#fff4e8";
  drawLines(ctx, titleFit.lines, x, contentTop, titleFit.lineHeight);

  const descText = cardMode.source ? `${cardMode.desc}\n${cardMode.source}` : cardMode.desc;
  const descFit = fitTextBlock(ctx, descText, {
    maxWidth: contentWidth,
    maxLines: layoutPreset.bodyMaxLines || 8,
    startSize: layoutPreset.bodyStart || 36,
    minSize: layoutPreset.bodyMin || 28,
    lineHeightRatio: layoutPreset.bodyLineHeight || 1.35,
    fontFamily: fonts.body || '"Noto Sans SC", sans-serif',
    fontWeight: 500,
  });

  ctx.fillStyle = palette.textSecondary || "#f4e1cc";
  drawLines(ctx, descFit.lines, x, contentTop + titleFit.height + 28, descFit.lineHeight);

  ctx.beginPath();
  ctx.moveTo(x, 1210);
  ctx.lineTo(width - x, 1210);
  ctx.strokeStyle = "rgba(255,225,190,0.35)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = palette.textSecondary || "#f9ddbe";
  ctx.font = `500 30px ${fonts.tag || '"Noto Sans SC", sans-serif'}`;
  ctx.fillText(`模式：${modeLabel}`, x, 1270);
  ctx.fillText(bundle.generatedAt, 470, 1270);
  ctx.fillText("HZL · v1", 850, 1270);

  return {
    layout: {
      titleFontSize: titleFit.fontSize,
      bodyFontSize: descFit.fontSize,
      hasOverflow: titleFit.overflow || descFit.overflow,
      backgroundSource,
      mode,
    },
  };
}

function fitTextBlock(
  ctx,
  text,
  { maxWidth, maxLines, startSize, minSize, lineHeightRatio, fontFamily, fontWeight },
) {
  const normalized = String(text || "").replace(/\r\n/g, "\n").trim();
  let fontSize = startSize;
  let best = null;

  while (fontSize >= minSize) {
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    const lines = measureWrappedLines(ctx, normalized, maxWidth);
    if (lines.length <= maxLines) {
      best = {
        lines,
        fontSize,
        lineHeight: Math.round(fontSize * lineHeightRatio),
        overflow: false,
      };
      break;
    }
    fontSize -= 2;
  }

  if (!best) {
    fontSize = minSize;
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    const lines = measureWrappedLines(ctx, normalized, maxWidth).slice(0, maxLines);
    if (lines.length) {
      lines[lines.length - 1] = truncateLineWithEllipsis(ctx, lines[lines.length - 1], maxWidth);
    }
    best = {
      lines,
      fontSize,
      lineHeight: Math.round(fontSize * lineHeightRatio),
      overflow: true,
    };
  }

  best.height = best.lines.length * best.lineHeight;
  ctx.font = `${fontWeight} ${best.fontSize}px ${fontFamily}`;
  return best;
}

function measureWrappedLines(ctx, text, maxWidth) {
  const lines = [];
  const paragraphs = String(text || "").split("\n");

  paragraphs.forEach((paragraph, index) => {
    let line = "";
    for (const char of paragraph) {
      const next = line + char;
      if (ctx.measureText(next).width > maxWidth && line) {
        lines.push(line);
        line = char;
      } else {
        line = next;
      }
    }
    if (line) {
      lines.push(line);
    }
    if (index !== paragraphs.length - 1) {
      lines.push("");
    }
  });

  return lines.length ? lines : [""];
}

function truncateLineWithEllipsis(ctx, line, maxWidth) {
  let current = line;
  while (current.length > 1 && ctx.measureText(`${current}…`).width > maxWidth) {
    current = current.slice(0, -1);
  }
  return `${current}…`;
}

function drawLines(ctx, lines, x, startY, lineHeight) {
  lines.forEach((line, index) => {
    ctx.fillText(line, x, startY + index * lineHeight);
  });
}

function drawImageCover(ctx, image, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

function drawStableTemplateBackground(ctx, preset) {
  const palette = preset.palette || {};
  const gradient = ctx.createLinearGradient(0, 0, EXPORT_SIZE.width, EXPORT_SIZE.height);
  gradient.addColorStop(0, palette.bgTop || "#1f3f3a");
  gradient.addColorStop(1, palette.bgBottom || "#2b5a52");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, EXPORT_SIZE.width, EXPORT_SIZE.height);

  drawGlowCircle(ctx, 920, 160, 260, "rgba(255,245,230,0.18)");
  drawGlowCircle(ctx, 140, 1120, 230, "rgba(181,72,47,0.2)");
}

function drawTexture(ctx, width, height, strength) {
  const alpha = Math.max(0, Math.min(0.25, strength * 0.35));
  ctx.save();
  for (let i = 0; i < 180; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 1.2 + 0.2;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function runCardQualityChecks({ bundle, canvas, layout, preset }) {
  const checks = {
    noOverflow: !layout.hasOverflow,
    bodyFontMin: layout.bodyFontSize >= 28,
    contrast: calculateContrastRatio(
      preset.palette?.textPrimary || "#fff4e8",
      preset.palette?.bgTop || "#1f3f3a",
    ) >= 4.5,
    requiredFields: hasRequiredCardFields(bundle),
    fixedSize: canvas.width === EXPORT_SIZE.width && canvas.height === EXPORT_SIZE.height,
  };
  const passed = Object.values(checks).every(Boolean);
  return { passed, checks };
}

function calculateContrastRatio(hexA, hexB) {
  const lumA = getRelativeLuminance(hexA);
  const lumB = getRelativeLuminance(hexB);
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance(color) {
  const { r, g, b } = parseColorToRgb(color);
  const toLinear = (channel) => {
    const c = channel / 255;
    if (c <= 0.03928) {
      return c / 12.92;
    }
    return ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function parseColorToRgb(color) {
  const value = String(color || "").trim();
  const hex = value.startsWith("#") ? value.slice(1) : value;
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
    };
  }
  if (hex.length >= 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  return { r: 255, g: 255, b: 255 };
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("背景图加载失败"));
    image.src = dataUrl;
  });
}

function drawGlowCircle(ctx, x, y, radius, color) {
  const radial = ctx.createRadialGradient(x, y, 0, x, y, radius);
  radial.addColorStop(0, color);
  radial.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = radial;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

function renderMarkdown(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let inUl = false;
  let inOl = false;
  let inCode = false;
  let codeLines = [];

  const closeLists = () => {
    if (inUl) {
      html.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      html.push("</ol>");
      inOl = false;
    }
  };

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    html.push(`<p>${formatInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushCode = () => {
    if (!inCode) {
      return;
    }
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    inCode = false;
    codeLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("```")) {
      closeLists();
      flushParagraph();
      if (inCode) {
        flushCode();
      } else {
        inCode = true;
        codeLines = [];
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      closeLists();
      flushParagraph();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      closeLists();
      flushParagraph();
      const level = Math.min(4, headingMatch[1].length);
      html.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      closeLists();
      flushParagraph();
      html.push(`<blockquote>${formatInline(quoteMatch[1])}</blockquote>`);
      continue;
    }

    const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      flushParagraph();
      if (inOl) {
        html.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        html.push("<ul>");
        inUl = true;
      }
      html.push(`<li>${formatInline(ulMatch[1])}</li>`);
      continue;
    }

    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      flushParagraph();
      if (inUl) {
        html.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        html.push("<ol>");
        inOl = true;
      }
      html.push(`<li>${formatInline(olMatch[1])}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushCode();
  closeLists();
  flushParagraph();

  return html.join("");
}

function formatInline(text) {
  let output = escapeHtml(text);

  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (full, label, href) => {
    if (!/^https?:\/\//.test(href)) {
      return full;
    }
    return `<a href="${escapeAttr(href)}" target="_blank" rel="noreferrer noopener">${label}</a>`;
  });

  return output;
}

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function setStatus(text, isWarn = false) {
  if (!elements.statusText) {
    return;
  }
  elements.statusText.textContent = text;
  elements.statusText.style.color = isWarn ? "var(--warn)" : "var(--muted)";
}

function scrollToBottom() {
  const scroller = elements.chatViewport || elements.messageList;
  scroller.scrollTop = scroller.scrollHeight;
}

function showToast(text) {
  const old = document.querySelector(".toast");
  if (old) {
    old.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 1500);
}

function escapeHtml(input) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(input) {
  return escapeHtml(input).replaceAll("\n", "&#10;");
}
