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

const IMAGE_SYSTEM_PREFIX =
  "中国古籍质感海报背景，留白充足，中央偏上视觉焦点，柔和纸张纹理，电影级光影，高清，clean composition，no text";

const IMAGE_NEGATIVE_PROMPT =
  "text, words, letters, watermark, logo, signature, deformed face, low quality, blurry, noisy, jpeg artifacts";

const LLM_JSON_SYSTEM_PROMPT = [
  "你是“合乎周礼”的文案引擎。",
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
  `identityTag 长度 <= ${CARD_SCHEMA_LIMITS.identityTag}。`,
  `true.title 长度 <= ${CARD_SCHEMA_LIMITS.trueTitle}。`,
  `true.desc 长度 <= ${CARD_SCHEMA_LIMITS.trueDesc}。`,
  `true.source 长度 <= ${CARD_SCHEMA_LIMITS.trueSource}。`,
  `mix.title 长度 <= ${CARD_SCHEMA_LIMITS.mixTitle}。`,
  `mix.desc 长度 <= ${CARD_SCHEMA_LIMITS.mixDesc}。`,
  `parody.title 长度 <= ${CARD_SCHEMA_LIMITS.parodyTitle}。`,
  `parody.desc 长度 <= ${CARD_SCHEMA_LIMITS.parodyDesc}。`,
  `markdown 长度 <= ${CARD_SCHEMA_LIMITS.markdown}，并与字段内容一致。`,
  "禁止缺字段，禁止把 true.empty 写成字符串。",
  "风格：适合小红书封面传播，简短有力，口语化，边界清晰。",
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
  renderPresetButtons();
  bindEvents();
  updateCharCount();
  exposeRuntimeApiHelpers();
  const hasApiKey = Boolean(resolveApiKey());
  setStatus(hasApiKey ? "等待输入（已检测到 API Key）" : "等待输入（未检测到 API Key，将使用 Mock）");
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
    const markdown = await requestOneLinkMarkdown(input, apiKey, activeModel);
    const bundle = parseBundleFromMarkdown(markdown, input);
    return {
      bundle,
      statusText: `真实模型生成完成（${activeModel}）。`,
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

async function requestOneLinkMarkdown(input, apiKey, model) {
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
        messages: buildLlmMessages(input),
        stream: false,
        temperature: 0.7,
        max_tokens: 1200,
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

function buildLlmMessages(input) {
  return [
    {
      role: "system",
      content: LLM_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: `请判这句现代处境：${input}`,
    },
  ];
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
}

function parseBundleFromMarkdown(markdown, input) {
  const normalizedText = String(markdown || "").replace(/\r\n/g, "\n").trim();
  const themes = detectThemes(input);
  const identityTag = extractIdentityTag(normalizedText) || buildIdentityTag(themes, input);

  const trueSection = extractSectionByHeading(normalizedText, "真引");
  const mixSection = extractSectionByHeading(normalizedText, "意译");
  const parodySection = extractSectionByHeading(normalizedText, "戏仿");

  const parsed = {
    identityTag,
    true: parseModeSection(trueSection, { strictTrue: true }),
    mix: parseModeSection(mixSection),
    parody: parseModeSection(parodySection),
    rawMarkdown: normalizedText,
  };

  return normalizeBundle(parsed, input);
}

function extractIdentityTag(markdown) {
  const match = markdown.match(/(?:^|\n)#\s*身份标签\s*\n([\s\S]*?)(?=\n#{1,6}\s|$)/i);
  if (!match) {
    return "";
  }

  const lines = match[1]
    .split("\n")
    .map((line) => stripMarkdownPrefix(line))
    .filter(Boolean);

  return lines[0] || "";
}

function extractSectionByHeading(markdown, heading) {
  const pattern = new RegExp(
    `(?:^|\\n)##\\s*${escapeRegExp(heading)}\\s*\\n([\\s\\S]*?)(?=\\n##\\s*|$)`,
    "i",
  );
  const match = markdown.match(pattern);
  return match ? match[1].trim() : "";
}

function parseModeSection(sectionText, options = {}) {
  const { strictTrue = false } = options;
  const lines = String(sectionText || "")
    .split("\n")
    .map((line) => stripMarkdownPrefix(line))
    .filter(Boolean);

  let title = "";
  let source = "";
  const descParts = [];
  const freeLines = [];

  lines.forEach((line) => {
    const titleMatch = line.match(/^(判词|标题|quote|句子)\s*[：:]\s*(.+)$/i);
    if (titleMatch) {
      title = titleMatch[2].trim();
      return;
    }

    const descMatch = line.match(/^(解释|说明|解读|comment)\s*[：:]\s*(.+)$/i);
    if (descMatch) {
      descParts.push(descMatch[2].trim());
      return;
    }

    const sourceMatch = line.match(/^(出处|source)\s*[：:]\s*(.+)$/i);
    if (sourceMatch) {
      source = sourceMatch[2].trim();
      return;
    }

    freeLines.push(line);
  });

  if (!title && freeLines.length > 0) {
    title = freeLines.shift();
  }
  if (descParts.length === 0 && freeLines.length > 0) {
    descParts.push(freeLines.join(" "));
  }

  const desc = descParts.join(" ").replace(/\s+/g, " ").trim();
  const textForCheck = `${title} ${desc} ${source}`;
  const missingTrueQuote = /暂缺|留空|未检索|无可信|（无）/i.test(textForCheck);

  return {
    title,
    desc,
    source,
    empty: strictTrue ? missingTrueQuote || !title : false,
  };
}

function normalizeBundle(parsed, input) {
  const fallback = buildMockBundle(input);

  const normalizedTrue = normalizeModeResult(parsed.true, fallback.true, true);
  const normalizedMix = normalizeModeResult(parsed.mix, fallback.mix, false);
  const normalizedParody = normalizeModeResult(parsed.parody, fallback.parody, false);

  const normalized = {
    identityTag: safeText(parsed.identityTag) || fallback.identityTag,
    true: normalizedTrue,
    mix: normalizedMix,
    parody: normalizedParody,
    generatedAt: formatTime(new Date()),
    rawMarkdown: parsed.rawMarkdown || "",
  };
  normalized.markdown = normalized.rawMarkdown || buildAssistantMarkdown(normalized);
  return normalized;
}

function normalizeModeResult(modeResult, fallbackMode, strictTrue) {
  if (strictTrue && modeResult?.empty) {
    return {
      title: safeText(modeResult.title) || "暂未检索到可信古籍原句",
      desc: safeText(modeResult.desc) || "真引模式留空，避免伪造出处。你可以换一种表达再试。",
      source: "",
      empty: true,
    };
  }

  const title = safeText(modeResult?.title) || fallbackMode.title;
  const desc = safeText(modeResult?.desc) || fallbackMode.desc;
  const source = safeText(modeResult?.source) || fallbackMode.source;

  return {
    title,
    desc,
    source,
    empty: strictTrue ? false : false,
  };
}

function stripMarkdownPrefix(line) {
  return String(line || "")
    .replace(/^\s*[-*+]\s+/, "")
    .replace(/^\s*\d+\.\s+/, "")
    .replace(/^\s*>\s?/, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .trim();
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

function escapeRegExp(input) {
  return String(input).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

function exportCardAsPng() {
  const bundle = state.lastBundle;
  if (!bundle) {
    return;
  }

  const mode = state.selectedMode;
  const modeLabel = MODE_META[mode].label;
  const result = bundle[mode];

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    setStatus("导出失败：Canvas 不可用。", true);
    return;
  }

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
  gradient.addColorStop(0, "#1f3f3a");
  gradient.addColorStop(1, "#2b5a52");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1350);

  drawGlowCircle(ctx, 920, 160, 260, "rgba(255,245,230,0.18)");
  drawGlowCircle(ctx, 140, 1120, 230, "rgba(181,72,47,0.2)");

  ctx.strokeStyle = "rgba(248,228,206,0.3)";
  ctx.lineWidth = 2;
  ctx.strokeRect(62, 62, 956, 1226);

  ctx.fillStyle = "#ffe5c6";
  ctx.font = '74px "Noto Sans SC", sans-serif';
  ctx.fillText("合乎周礼", 96, 160);

  ctx.fillStyle = "#f9dfc4";
  ctx.font = '35px "Noto Sans SC", sans-serif';
  ctx.fillText("这合乎周礼吗？", 96, 215);

  ctx.font = '28px "Noto Sans SC", sans-serif';
  const tagWidth = ctx.measureText(bundle.identityTag).width + 52;
  roundRect(ctx, 96, 248, tagWidth, 54, 27, "rgba(255,229,198,0.16)", "rgba(255,229,198,0.45)");
  ctx.fillStyle = "#ffe8cd";
  ctx.fillText(bundle.identityTag, 120, 283);

  const mainY = drawWrappedText(
    ctx,
    result.title,
    96,
    380,
    888,
    64,
    7,
    '700 52px "Noto Sans SC", sans-serif',
    "#fff4e8",
  );

  let desc = result.desc;
  if (result.source) {
    desc += `\n${result.source}`;
  }

  drawWrappedText(
    ctx,
    desc,
    96,
    mainY + 26,
    888,
    46,
    8,
    '500 34px "Noto Sans SC", sans-serif',
    "#f4e1cc",
  );

  ctx.beginPath();
  ctx.moveTo(96, 1210);
  ctx.lineTo(984, 1210);
  ctx.strokeStyle = "rgba(255,225,190,0.35)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#f9ddbe";
  ctx.font = '500 30px "Noto Sans SC", sans-serif';
  ctx.fillText(`模式：${modeLabel}`, 96, 1270);
  ctx.fillText(bundle.generatedAt, 470, 1270);
  ctx.fillText("HZL · v1", 850, 1270);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `hehu-zhouli-${Date.now()}.png`;
  link.click();

  showToast("图卡已导出");
}

function drawGlowCircle(ctx, x, y, radius, color) {
  const radial = ctx.createRadialGradient(x, y, 0, x, y, radius);
  radial.addColorStop(0, color);
  radial.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = radial;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;

  const lines = [];
  const paragraphs = text.split("\n");

  paragraphs.forEach((paragraph, paragraphIndex) => {
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
    if (paragraphIndex !== paragraphs.length - 1) {
      lines.push("");
    }
  });

  const safeLines = lines.slice(0, maxLines);
  safeLines.forEach((line, index) => {
    const output = index === maxLines - 1 && lines.length > maxLines ? `${line.slice(0, Math.max(0, line.length - 2))}…` : line;
    ctx.fillText(output, x, y + index * lineHeight);
  });

  return y + safeLines.length * lineHeight;
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
