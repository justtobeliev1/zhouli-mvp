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
  visionFallbackModel: "gemini-2.5-flash",
  imageModel: "gpt-image-1-2026-02-01",
  memeImageModel: "flux-schnell",
  imageEndpoint: "/images/generations",
  imageSize: "1024x1280",
  imageSteps: 32,
  imageCfg: 7,
  requestTimeoutMs: 35000,
  uploadMaxBytes: 8 * 1024 * 1024,
  uploadMaxEdge: 1568,
  uploadJpegQuality: 0.88,
  keyWindowNames: ["__ONELINK_API_KEY__", "ONELINK_API_KEY", "__ONELINKAI_API_KEY__", "ONELINKAI_API_KEY"],
  keyStorageNames: ["onelink_api_key", "onelinkApiKey", "ONELINK_API_KEY", "OPENAI_API_KEY"],
  modelWindowNames: ["__ONELINK_MODEL__", "ONELINK_MODEL", "__ONELINKAI_MODEL__", "ONELINKAI_MODEL"],
  modelStorageNames: ["onelink_model", "onelinkModel", "ONELINK_MODEL"],
  visionModelWindowNames: ["__ONELINK_VISION_MODEL__", "ONELINK_VISION_MODEL", "__ONELINKAI_VISION_MODEL__", "ONELINKAI_VISION_MODEL"],
  visionModelStorageNames: ["onelink_vision_model", "onelinkVisionModel", "ONELINK_VISION_MODEL"],
  styleStorageName: "card_style_preset",
  imageEnabledStorageName: "card_image_enabled",
};

const CARD_SCHEMA_LIMITS = {
  identityTag: 12,
  trueTitle: 40,
  trueDesc: 120,
  trueSource: 32,
  mixTitle: 48,
  mixDesc: 120,
  parodyTitle: 48,
  parodyDesc: 120,
  actionText: 26,
  actionDesc: 60,
  actionQuote: 32,
  actionSource: 32,
  markdown: 1800,
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

const ACTION_SECTION_REQUIRED_FIELDS = ["action", "desc", "quote", "source"];
const ACTION_MIN_COUNT = 3;

const EXPORT_SIZE = {
  width: 1080,
  height: 1350,
};

const IMAGE_SYSTEM_PREFIX =
  "中国古籍质感海报背景，留白充足，中央偏上视觉焦点，柔和纸张纹理，电影级光影，高清，clean composition，no text";

const IMAGE_NEGATIVE_PROMPT =
  "text, words, letters, watermark, logo, signature, deformed face, low quality, blurry, noisy, jpeg artifacts";

const LLM_JSON_SYSTEM_PROMPT = [
  "你是“合乎周礼”的古人判词官，面向用户产出严谨典雅的评判文案。",
  "前提条件：只要存在可核验的真实古文原句，就优先使用原句并给出真实出处。",
  "知识边界：优先基于周礼相关古代文献进行判断、引用与改写。",
  "表达风格：文风必须严谨典雅，引经据典，论理清晰，拒绝使用网络烂梗或过度口语化的词汇。",
  "输出严格 JSON，不要输出 Markdown，不要输出代码块，不要输出额外解释。",
  "JSON 结构必须是：",
  "{",
  '  "identityTag": "string",',
  '  "true": {"title":"string","desc":"string","source":"string","empty":false},',
  '  "mix": {"title":"string","desc":"string"},',
  '  "parody": {"title":"string","desc":"string"},',
  '  "dos": [{"action":"string","desc":"string","quote":"string","source":"string"}],',
  '  "donts": [{"action":"string","desc":"string","quote":"string","source":"string"}],',
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
  `dos.action / donts.action 长度 <= ${CARD_SCHEMA_LIMITS.actionText}。`,
  `dos.desc / donts.desc 长度 <= ${CARD_SCHEMA_LIMITS.actionDesc}。`,
  `dos.quote / donts.quote 长度 <= ${CARD_SCHEMA_LIMITS.actionQuote}。`,
  `dos.source / donts.source 长度 <= ${CARD_SCHEMA_LIMITS.actionSource}。`,
  `markdown 长度 <= ${CARD_SCHEMA_LIMITS.markdown}，并与字段内容一致。`,
  "真引模式必须引用真实古籍原句与出处；若无法确认真实出处，必须写 true.empty=true，true.title=“暂缺可信原句”，true.source=“”。",
  "意译模式强调古今混搭，句子短，适合当评论区回复。",
  "戏仿模式允许夸张和整活，但不做人身攻击，不写脏话。",
  `dos 与 donts 至少各 ${ACTION_MIN_COUNT} 条，每条都必须给出真实古文原句与真实出处，不得编造。`,
  "若用户输入较复杂，如游戏、协作、群聊、职场冲突等，必须拆到具体行为层面，例如时机、话术、操作、越界动作、补救动作，而不能只停留在总类词。",
  "若用户附带图片，先识别图中场景、动作、物件、界面信息，再与文字结合判断；看不清就明确说看不清，不得编造图片细节。",
  "中文表达必须使用规范标点，绝不能用空格代替逗号、顿号、句号。",
  "禁止缺字段，禁止把 true.empty 写成字符串。",
  "整体风格：严谨、古典、庄重、切中要害。",
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
  imageInput: document.getElementById("imageInput"),
  userInput: document.getElementById("userInput"),
  sendBtn: document.getElementById("sendBtn"),
  presetButtons: document.getElementById("presetButtons"),
  charCount: document.getElementById("charCount"),
  statusText: document.getElementById("statusText"),
  attachImageBtn: document.getElementById("attachImageBtn"),
  generateMemeCheckbox: document.getElementById("generateMemeCheckbox"),
  attachmentPreview: document.getElementById("attachmentPreview"),
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
  pendingAiMessage: null,
  selectedAttachment: null,
  backgroundCache: new Map(),
  stylePresetId: "",
};

init();

function init() {
  state.stylePresetId = resolveStylePreset().id;
  renderPresetButtons();
  bindEvents();
  updateCharCount();
  renderAttachmentPreview();
  exposeRuntimeApiHelpers();
  const hasApiKey = Boolean(resolveApiKey());
  setStatus(hasApiKey ? "等待输入（真实管线已启用）" : "等待输入（缺少 API Key，将使用 Mock）");
}

function bindEvents() {
  elements.userInput.addEventListener("input", updateCharCount);
  elements.imageInput?.addEventListener("change", handleImageSelection);
  elements.attachImageBtn?.addEventListener("click", () => {
    elements.imageInput?.click();
  });

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
  const attachment = cloneAttachment(state.selectedAttachment);
  const generateMeme = elements.generateMemeCheckbox?.checked || false;
  if (!input && !attachment) {
    setStatus("先输入一句处境，或上传一张图片。", true);
    return;
  }

  ensureConversationStarted();
  addUserMessage({ text: input, attachment });
  elements.userInput.value = "";
  updateCharCount();
  clearAttachment();

  setComposerBusy(true);
  addAiLoadingMessage();
  setStatus("正在生成判词…", false);

  try {
    const result = await generateBundleWithAutoFallback({ text: input, attachment });
    const bundle = result.bundle;
    state.lastInput = input || attachment?.name || "";
    state.lastBundle = bundle;
    state.selectedMode = bundle.true.empty ? "mix" : "true";
    const aiMessageEl = addAiMessage(bundle);
    setStatus(result.statusText, result.isWarn);

    if (generateMeme) {
      await generateAndAppendMeme(input || attachment?.name || "", aiMessageEl);
    }
  } catch (error) {
    removeAiLoadingMessage();
    throw error;
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
  message.innerHTML = buildUserMessageHtml(text);
  elements.messageList.appendChild(message);
  scrollToBottom();
}

/**
 * 生成用户消息气泡，支持文字与图片混排。
 */
function buildUserMessageHtml(payload) {
  const normalized = typeof payload === "string" ? { text: payload, attachment: null } : payload || {};
  const text = safeText(normalized.text);
  const attachment = normalized.attachment;
  const imageHtml = attachment
    ? `<img class="bubble-image" src="${escapeAttr(attachment.dataUrl)}" alt="${escapeAttr(attachment.name || "用户上传图片")}" />`
    : "";
  const textHtml = text ? `<div class="bubble-text">${escapeHtml(text)}</div>` : "";
  return `<div class="bubble user-bubble-content">${imageHtml}${textHtml}</div>`;
}

/**
 * 处理用户选择图片后的预处理与预览。
 */
async function handleImageSelection(event) {
  const file = event?.target?.files?.[0];
  if (!file) {
    return;
  }

  try {
    state.selectedAttachment = await prepareImageAttachment(file);
    renderAttachmentPreview();
    setStatus("图片已加入本次提问。", false);
  } catch (error) {
    clearAttachment();
    setStatus(`图片处理失败：${simplifyErrorMessage(error)}`, true);
  } finally {
    if (elements.imageInput) {
      elements.imageInput.value = "";
    }
  }
}

/**
 * 将图片文件压缩并转为可直接发送给模型的 data URL。
 */
async function prepareImageAttachment(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("仅支持图片文件");
  }
  if (file.size > ONELINK_CONFIG.uploadMaxBytes) {
    throw new Error("图片过大，请控制在 8MB 以内");
  }

  const optimized = await optimizeImageFile(file);
  return {
    name: file.name || "image",
    mimeType: optimized.mimeType,
    dataUrl: optimized.dataUrl,
  };
}

/**
 * 在浏览器端压缩图片，减少图文请求体积并提升稳定性。
 */
async function optimizeImageFile(file) {
  const dataUrl = await fileToDataUrl(file);
  const image = await loadImageFromDataUrl(dataUrl);
  const longestEdge = Math.max(image.width, image.height);

  if (longestEdge <= ONELINK_CONFIG.uploadMaxEdge && file.type === "image/jpeg") {
    return { dataUrl, mimeType: file.type || "image/jpeg" };
  }

  const scale = Math.min(1, ONELINK_CONFIG.uploadMaxEdge / longestEdge);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("浏览器不支持图片压缩");
  }

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return {
    dataUrl: canvas.toDataURL("image/jpeg", ONELINK_CONFIG.uploadJpegQuality),
    mimeType: "image/jpeg",
  };
}

/**
 * 将文件读取为 data URL，供本地预览与接口发送复用。
 */
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

/**
 * 刷新附件预览区，展示当前待发送图片。
 */
function renderAttachmentPreview() {
  if (!elements.attachmentPreview) {
    return;
  }

  const attachment = state.selectedAttachment;
  if (!attachment) {
    elements.attachmentPreview.hidden = true;
    elements.attachmentPreview.innerHTML = "";
    return;
  }

  elements.attachmentPreview.hidden = false;
  elements.attachmentPreview.innerHTML = `
    <div class="attachment-card">
      <img class="attachment-thumb" src="${escapeAttr(attachment.dataUrl)}" alt="${escapeAttr(attachment.name)}" />
      <div class="attachment-meta">
        <span class="attachment-name">${escapeHtml(attachment.name)}</span>
        <span class="attachment-tip">将与文字一起发送给孔子</span>
      </div>
      <button class="attachment-remove-btn" type="button" data-action="remove-attachment">移除</button>
    </div>
  `;

  elements.attachmentPreview
    .querySelector('[data-action="remove-attachment"]')
    ?.addEventListener("click", clearAttachment);
}

/**
 * 清空当前已选择的附件，并同步刷新输入区状态。
 */
function clearAttachment() {
  state.selectedAttachment = null;
  renderAttachmentPreview();
}

/**
 * 复制附件对象，避免后续界面清空时影响正在发送的请求数据。
 */
function cloneAttachment(attachment) {
  if (!attachment) {
    return null;
  }
  return {
    name: attachment.name,
    mimeType: attachment.mimeType,
    dataUrl: attachment.dataUrl,
  };
}

/**
 * 固定返回孔子，保持聊天对象形象一致。
 */
function nextSageName() {
  return "孔子";
}

/**
 * 在等待模型响应时插入占位消息，避免界面空白。
 */
function addAiLoadingMessage() {
  removeAiLoadingMessage();

  const sageName = nextSageName();
  const message = document.createElement("article");
  message.className = "message ai loading";
  message.setAttribute("aria-live", "polite");
  message.innerHTML = `
    <div class="ai-topline">
      <img class="ai-avatar" src="./confucius.jpg" alt="${escapeHtml(sageName)}头像" />
      <span class="ai-name">${escapeHtml(sageName)}</span>
      <span class="ai-role">古人锐评</span>
    </div>
    <div class="bubble ai-loading-bubble" aria-label="正在生成回复">
      <span class="loading-spinner" aria-hidden="true"></span>
      <span class="loading-text">孔子正在斟酌判词…</span>
    </div>
  `;

  state.pendingAiMessage = message;
  elements.messageList.appendChild(message);
  scrollToBottom();
}

/**
 * 在真实回复完成或出错后移除加载中的占位消息。
 */
function removeAiLoadingMessage() {
  if (!state.pendingAiMessage) {
    return;
  }

  state.pendingAiMessage.remove();
  state.pendingAiMessage = null;
}

function addAiMessage(bundle) {
  removeAiLoadingMessage();
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
  return message;
}

function buildMockBundle(input) {
  const summary = summarizeInput(input || "图片所示处境");
  const actionLists = buildMockActionLists();
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
    dos: actionLists.dos,
    donts: actionLists.donts,
    generatedAt: formatTime(new Date()),
  };
  bundle.markdown = buildAssistantMarkdown(bundle);
  return bundle;
}

/**
 * 为兜底场景提供带真实引文的行动清单，避免结构化输出缺项。
 */
function buildMockActionLists() {
  return {
    dos: [
      {
        action: "先讲边界",
        desc: "先把自己不能接受的点说清楚，再谈后续安排。",
        quote: "己所不欲，勿施于人。",
        source: "《论语·颜渊》",
      },
      {
        action: "先定规矩",
        desc: "把时段、分工、节奏定下来，减少反复扯皮。",
        quote: "不以规矩，不能成方圆。",
        source: "《孟子·离娄上》",
      },
      {
        action: "先做准备",
        desc: "提前留出缓冲和备选方案，别等事到临头才救火。",
        quote: "凡事预则立，不预则废。",
        source: "《礼记·中庸》",
      },
    ],
    donts: [
      {
        action: "不要失约甩锅",
        desc: "答应了就兑现，做不到也要尽快说明，不可装没看见。",
        quote: "人而无信，不知其可也。",
        source: "《论语·为政》",
      },
      {
        action: "不要只怪别人",
        desc: "先看自己是否有表达不清、准备不足、响应过慢的问题。",
        quote: "君子求诸己，小人求诸人。",
        source: "《论语·卫灵公》",
      },
      {
        action: "不要错了不改",
        desc: "发现问题就及时修正，别一错再错，把小事拖成大事。",
        quote: "过而不改，是谓过矣。",
        source: "《论语·卫灵公》",
      },
    ],
  };
}

/**
 * 根据输入类型选择文本或视觉模型，并在失败时回退到本地兜底结果。
 */
async function generateBundleWithAutoFallback(payload) {
  const text = extractUserText(payload);
  const hasImage = Boolean(payload?.attachment?.dataUrl);
  if (USE_MOCK_REPLY === true) {
    return {
      bundle: buildMockBundle(text),
      statusText: "当前为 Mock 固定模式。",
      isWarn: true,
    };
  }

  const apiKey = resolveApiKey();
  if (!apiKey) {
    return {
      bundle: buildMockBundle(text),
      statusText: "未检测到 API Key，已使用 Mock 结果。",
      isWarn: true,
    };
  }

  try {
    const activeModel = resolveModel({ hasImage });
    const llmResult = await requestCardSchemaWithRepair(payload, apiKey, activeModel);
    const bundle = enforceCardSchema(llmResult.bundle, text);
    bundle.__meta = {
      copySource: llmResult.repaired ? "llm_repaired" : "llm",
      model: activeModel,
      hasImage,
    };
    return {
      bundle,
      statusText: llmResult.repaired
        ? `真实模型生成完成（${activeModel}，已自动修复格式）。`
        : `真实模型生成完成（${activeModel}${hasImage ? "，含图片分析" : ""}）。`,
      isWarn: false,
    };
  } catch (error) {
    console.error("[onelink] request failed", error);
    return {
      bundle: buildMockBundle(text),
      statusText: `真实接口失败，已回退 Mock（${simplifyErrorMessage(error)}）`,
      isWarn: true,
    };
  }
}

async function generateAndAppendMeme(input, aiMessageEl) {
  const apiKey = resolveApiKey();
  if (!apiKey) {
    return;
  }

  const container = aiMessageEl.querySelector(".bubble.ai-markdown");
  if (!container) return;

  const loadingEl = document.createElement("div");
  loadingEl.className = "ai-meme-loading";
  loadingEl.innerHTML = `<span class="loading-spinner" aria-hidden="true"></span><span>孔子正在画图…</span>`;
  container.appendChild(loadingEl);
  scrollToBottom();

  try {
    const prompt = `A highly exaggerated, hilarious comic illustration of Confucius (ancient Chinese philosopher) reacting to or dealing with this situation: "${input}". Funny meme style, expressive face, dramatic poses, clean background, high quality, no text.`;
    
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), ONELINK_CONFIG.requestTimeoutMs);

    const response = await fetch(`${ONELINK_CONFIG.baseUrl}${ONELINK_CONFIG.imageEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: ONELINK_CONFIG.memeImageModel || "flux-schnell",
        prompt,
        size: "1024x1024",
      }),
      signal: controller.signal,
    });

    window.clearTimeout(timer);

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

    const dataUrl = payload.data?.[0]?.url || payload.data?.[0]?.b64_json;
    if (!dataUrl) {
      throw new Error("返回的图片数据为空");
    }

    const imgUrl = dataUrl.startsWith("http") ? dataUrl : `data:image/jpeg;base64,${dataUrl}`;
    
    loadingEl.remove();
    
    const imgEl = document.createElement("img");
    imgEl.className = "ai-meme-image";
    imgEl.src = imgUrl;
    imgEl.alt = "孔子梗图";
    imgEl.onload = () => scrollToBottom();
    
    container.appendChild(imgEl);
    setStatus("梗图生成完成。", false);

  } catch (error) {
    loadingEl.innerHTML = `<span>梗图生成失败：${simplifyErrorMessage(error)}</span>`;
    setStatus(`梗图失败：${simplifyErrorMessage(error)}`, true);
  }
}

/**
 * 请求结构化判词，并在模型输出不合规时自动触发 JSON 修复。
 */
async function requestCardSchemaWithRepair(payload, apiKey, model) {
  const firstText = await requestOneLinkCompletion(buildCardJsonMessages(payload), apiKey, model, {
    temperature: 0.55,
    maxTokens: 2200,
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
    { temperature: 0.2, maxTokens: 2200 },
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

/**
 * 构建发送给模型的消息体，支持纯文本和图文混合输入。
 */
function buildCardJsonMessages(payload) {
  const text = extractUserText(payload);
  const attachment = payload?.attachment || null;
  const promptText = buildSituationPrompt({ text, attachment });

  if (!attachment?.dataUrl) {
    return [
      {
        role: "system",
        content: LLM_JSON_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: promptText,
      },
    ];
  }

  return [
    {
      role: "system",
      content: LLM_JSON_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: [
        { type: "text", text: promptText },
        { type: "image_url", image_url: { url: attachment.dataUrl } },
      ],
    },
  ];
}

/**
 * 抽取用户输入文字，兼容旧调用与空输入场景。
 */
function extractUserText(payload) {
  if (typeof payload === "string") {
    return payload.trim();
  }
  return safeText(payload?.text);
}

/**
 * 为模型拼接分析指令，要求它结合图片和文字拆解到具体行为层面。
 */
function buildSituationPrompt({ text, attachment }) {
  const lines = [
    "请按固定 schema 输出 JSON，真引、意译、戏仿、可为、不可为都要给出。",
    "先判断是否存在复杂行为链；若存在，必须拆到具体操作、时机、边界、补救动作与失礼动作。",
  ];

  if (attachment?.dataUrl) {
    lines.push("用户附带了一张图片。请先识别图片中的场景、行为、物件、界面信息，再与文字一起判断。");
    lines.push(`图片文件名：${attachment.name || "未命名图片"}`);
  }

  lines.push("用户处境：");
  lines.push(text || "用户仅上传了图片，请仅根据图片可见内容判断。");
  return lines.join("\n");
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
    dos: [{ action: "string", desc: "string", quote: "string", source: "string" }],
    donts: [{ action: "string", desc: "string", quote: "string", source: "string" }],
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

  validateActionSection(payload?.dos, "dos", errors);
  validateActionSection(payload?.donts, "donts", errors);

  return { ok: errors.length === 0, errors };
}

/**
 * 校验可为与不可为清单，确保条数、字段和文案格式都符合要求。
 */
function validateActionSection(list, fieldName, errors) {
  if (!Array.isArray(list)) {
    errors.push(`${fieldName} 必须是数组`);
    return;
  }
  if (list.length < ACTION_MIN_COUNT) {
    errors.push(`${fieldName} 至少需要 ${ACTION_MIN_COUNT} 条`);
  }

  list.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      errors.push(`${fieldName}[${index}] 必须是对象`);
      return;
    }

    ACTION_SECTION_REQUIRED_FIELDS.forEach((key) => {
      const value = item[key];
      if (typeof value !== "string" || !value.trim()) {
        errors.push(`${fieldName}[${index}].${key} 必须是非空字符串`);
        return;
      }
      if (containsSuspiciousChineseSpacing(value)) {
        errors.push(`${fieldName}[${index}].${key} 标点疑似不规范`);
      }
    });
  });
}

function enforceCardSchema(rawPayload, input) {
  const fallback = buildMockBundle(input);
  const raw = rawPayload && typeof rawPayload === "object" ? rawPayload : {};

  const trueRaw = raw.true && typeof raw.true === "object" ? raw.true : {};
  const mixRaw = raw.mix && typeof raw.mix === "object" ? raw.mix : {};
  const parodyRaw = raw.parody && typeof raw.parody === "object" ? raw.parody : {};

  const bundle = {
    identityTag: clipTextWithEllipsis(normalizeGeneratedText(raw.identityTag) || fallback.identityTag, CARD_SCHEMA_LIMITS.identityTag),
    true: {
      title: clipTextWithEllipsis(normalizeGeneratedText(trueRaw.title) || fallback.true.title, CARD_SCHEMA_LIMITS.trueTitle),
      desc: clipTextWithEllipsis(normalizeGeneratedText(trueRaw.desc) || fallback.true.desc, CARD_SCHEMA_LIMITS.trueDesc),
      source: clipTextWithEllipsis(normalizeGeneratedText(trueRaw.source) || fallback.true.source, CARD_SCHEMA_LIMITS.trueSource),
      empty: Boolean(trueRaw.empty),
    },
    mix: {
      title: clipTextWithEllipsis(normalizeGeneratedText(mixRaw.title) || fallback.mix.title, CARD_SCHEMA_LIMITS.mixTitle),
      desc: clipTextWithEllipsis(normalizeGeneratedText(mixRaw.desc) || fallback.mix.desc, CARD_SCHEMA_LIMITS.mixDesc),
    },
    parody: {
      title: clipTextWithEllipsis(normalizeGeneratedText(parodyRaw.title) || fallback.parody.title, CARD_SCHEMA_LIMITS.parodyTitle),
      desc: clipTextWithEllipsis(normalizeGeneratedText(parodyRaw.desc) || fallback.parody.desc, CARD_SCHEMA_LIMITS.parodyDesc),
    },
    dos: normalizeActionItems(raw.dos, fallback.dos),
    donts: normalizeActionItems(raw.donts, fallback.donts),
    generatedAt: formatTime(new Date()),
  };

  if (bundle.true.empty) {
    bundle.true.source = "";
  }

  bundle.markdown = clipTextWithEllipsis(buildAssistantMarkdown(bundle), CARD_SCHEMA_LIMITS.markdown);

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
  const baseValid = CARD_REQUIRED_FIELDS.every((path) => {
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

  return baseValid && hasActionItems(bundle.dos) && hasActionItems(bundle.donts);
}

/**
 * 归一化模型返回的行动清单，统一裁剪长度与标点格式。
 */
function normalizeActionItems(rawList, fallbackList) {
  const sourceList = Array.isArray(rawList) && rawList.length ? rawList : fallbackList;
  const normalized = sourceList
    .map((item, index) => {
      const fallbackItem = fallbackList[index % fallbackList.length];
      return {
        action: clipTextWithEllipsis(normalizeGeneratedText(item?.action) || fallbackItem.action, CARD_SCHEMA_LIMITS.actionText),
        desc: clipTextWithEllipsis(normalizeGeneratedText(item?.desc) || fallbackItem.desc, CARD_SCHEMA_LIMITS.actionDesc),
        quote: clipTextWithEllipsis(normalizeGeneratedText(item?.quote) || fallbackItem.quote, CARD_SCHEMA_LIMITS.actionQuote),
        source: clipTextWithEllipsis(normalizeGeneratedText(item?.source) || fallbackItem.source, CARD_SCHEMA_LIMITS.actionSource),
      };
    })
    .filter((item) => item.action && item.desc && item.quote && item.source);

  while (normalized.length < ACTION_MIN_COUNT) {
    const fallbackItem = fallbackList[normalized.length % fallbackList.length];
    normalized.push({ ...fallbackItem });
  }
  return normalized.slice(0, Math.max(ACTION_MIN_COUNT, normalized.length));
}

/**
 * 检查行动清单是否满足最小条数与字段完整性。
 */
function hasActionItems(list) {
  return (
    Array.isArray(list) &&
    list.length >= ACTION_MIN_COUNT &&
    list.every(
      (item) =>
        item &&
        typeof item === "object" &&
        ACTION_SECTION_REQUIRED_FIELDS.every((key) => typeof item[key] === "string" && item[key].trim()),
    )
  );
}

/**
 * 规范模型输出的中文标点，尽量消除空格替代逗号与句号的问题。
 */
function normalizeGeneratedText(value) {
  const text = safeText(value);
  if (!text) {
    return "";
  }

  return text
    .replace(/\u00A0/g, " ")
    .replace(/([。！？；：，、）】》」』])\1+/g, "$1") // 清理重复标点如。。
    .replace(/\s+([，。！？；：、）】》」』])/g, "$1")
    .replace(/([（【《「『])\s+/g, "$1")
    .replace(/(?<=[\u4e00-\u9fff])\s*,\s*(?=[\u4e00-\u9fff])/gu, "，")
    .replace(/(?<=[\u4e00-\u9fff])\s*\.\s*(?=[\u4e00-\u9fff])/gu, "。")
    .replace(/(?<=[\u4e00-\u9fff])\s*;\s*(?=[\u4e00-\u9fff])/gu, "；")
    .replace(/(?<=[\u4e00-\u9fff])\s*:\s*(?=[\u4e00-\u9fff])/gu, "：")
    .replace(/(?<=[\u4e00-\u9fff」』】）》])\s+(?=[\u4e00-\u9fff「『（【《])/gu, "，")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

/**
 * 检测中文语句中是否存在疑似用空格替代标点的异常格式。
 */
function containsSuspiciousChineseSpacing(value) {
  return /[\u4e00-\u9fff」』】）》]\s+[\u4e00-\u9fff「『（【《]/u.test(String(value || ""));
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

/**
 * 根据当前请求类型选择文本模型或视觉模型。
 */
function resolveModel(options = {}) {
  if (options.hasImage) {
    return resolveVisionModel();
  }
  return (
    pickWindowValue(ONELINK_CONFIG.modelWindowNames) ||
    pickStorageValue(ONELINK_CONFIG.modelStorageNames) ||
    ONELINK_CONFIG.fallbackModel
  );
}

/**
 * 解析图文请求所使用的视觉模型，优先读取用户配置。
 */
function resolveVisionModel() {
  return (
    pickWindowValue(ONELINK_CONFIG.visionModelWindowNames) ||
    pickStorageValue(ONELINK_CONFIG.visionModelStorageNames) ||
    ONELINK_CONFIG.visionFallbackModel
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

/**
 * 根据结构化字段重建展示文案，确保标点、段落与清单格式稳定。
 */
function buildAssistantMarkdown(bundle) {
  const trueLine = bundle.true.empty
    ? `- **真引**：暂时没检索到可靠原句，怕乱引，先空着。`
    : `- **真引**：${bundle.true.title}${bundle.true.source ? `（${bundle.true.source}）` : ""}。${bundle.true.desc}`;
  const dos = hasActionItems(bundle.dos) ? bundle.dos : buildMockActionLists().dos;
  const donts = hasActionItems(bundle.donts) ? bundle.donts : buildMockActionLists().donts;

  return [
    `### 今日判词：${bundle.identityTag}`,
    `> 把破事说出来，礼法才有用武之地。`,
    "",
    trueLine,
    `- **意译**：${bundle.mix.title}。${bundle.mix.desc}`,
    `- **戏仿**：${bundle.parody.title}。${bundle.parody.desc}`,
    "",
    "### 可为",
    ...formatActionListMarkdown(dos),
    "",
    "### 不可为",
    ...formatActionListMarkdown(donts),
    "",
    "`#这合乎周礼吗 #可复制 #可截图`",
  ].join("\n");
}

/**
 * 将行动清单格式化为单层 Markdown 列表，便于当前渲染器稳定显示。
 */
function formatActionListMarkdown(list) {
  return list.map(
    (item) =>
      `- ${item.action}：${item.desc}。引「${item.quote}」${item.source ? `（${item.source}）` : ""}`,
  );
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

  // Preload confucius background
  let confuciusImg = null;
  try {
    confuciusImg = await loadImageFromDataUrl("./confucius.jpg");
  } catch {}

  let renderResult = renderCardComposition(ctx, {
    bundle,
    mode,
    modeLabel,
    preset,
    backgroundImage: null,
    confuciusImg,
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
      confuciusImg,
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
      confuciusImg,
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

function drawConfuciusBackground(ctx) {
  // We expect confucius image to be preloaded or we can use a small inline data URL if needed.
  // Instead of waiting async, I'll draw it synchronously if it's in the DOM, or we can await it in exportCardAsPng.
}

function renderCardComposition(
  ctx,
  {
    bundle,
    mode,
    modeLabel,
    preset,
    backgroundImage,
    confuciusImg,
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
    if (confuciusImg) {
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.globalCompositeOperation = "luminosity";
      const scale = Math.max(width / confuciusImg.width, height / confuciusImg.height);
      const dw = confuciusImg.width * scale * 1.5;
      const dh = confuciusImg.height * scale * 1.5;
      ctx.drawImage(confuciusImg, width - dw * 0.6, height - dh * 0.7, dw, dh);
      ctx.restore();
    }
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
  const avoidStartChars = new Set(["，", "。", "、", "；", "：", "？", "！", "”", "’", "】", "》", "）"]);

  paragraphs.forEach((paragraph, index) => {
    let line = "";
    for (let i = 0; i < paragraph.length; i++) {
      const char = paragraph[i];
      let next = line + char;
      
      // Lookahead for punctuation avoidance
      if (i + 1 < paragraph.length) {
        const nextChar = paragraph[i + 1];
        if (avoidStartChars.has(nextChar)) {
          next += nextChar;
          i++; // Consume the punctuation early
        }
      }

      if (ctx.measureText(next).width > maxWidth && line) {
        lines.push(line);
        line = next.slice(line.length); // Keep the overflowing part for next line
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
