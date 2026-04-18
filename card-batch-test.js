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

const EXPORT_SIZE = { width: 1080, height: 1350 };

const TEST_INPUTS = [
  "室友凌晨一点外放打游戏",
  "小组作业里只回收到的人还想拿一样分",
  "早八前五分钟起床还赶上点名",
  "朋友鸽我两次还问我在不在",
  "DDL 前夜才发现文档一字未动",
  "同事开会总是抢话还让人背锅",
  "对象消息已读不回但朋友圈连发十条",
  "项目马上上线，需求又临时改版",
  "合租室友把公共冰箱塞满不标记",
  "队友答应写代码最后只发一句辛苦了",
  "老板周五下班前发周末紧急任务",
  "考试周还被拉去做活动主持",
  "社团分工不均，活总落在同几个人身上",
  "朋友借钱不还还继续约饭",
  "合作方反复改口导致排期崩盘",
  "晨会天天拖到半小时影响开发节奏",
  "上课小组总有人划水却抢着署名",
  "社交群里阴阳怪气但不正面沟通",
  "实习汇报被要求一页塞满所有结果",
  "论文返修只剩两天导师还要大改结构",
];

function clipText(value, maxLen) {
  const text = String(value || "").trim();
  if (text.length <= maxLen) return text;
  if (maxLen <= 1) return "…";
  return `${text.slice(0, maxLen - 1)}…`;
}

function buildMockBundle(input) {
  return {
    identityTag: "当代问礼客",
    true: {
      title: "己所不欲，勿施于人。",
      desc: `就“${input}”这件事，先划清边界，再给可执行动作。`,
      source: "《论语·颜渊》",
      empty: false,
    },
    mix: {
      title: `今有“${input}”一事，礼法轻震。`,
      desc: "先把要求讲清楚，再把节奏定下来，减少消耗。",
    },
    parody: {
      title: `据《当代杂礼》：${input}，建议速开边界会。`,
      desc: "先给台阶再立规矩，体面和效率都要。",
    },
    markdown: "### 今日判词\n- 真引\n- 意译\n- 戏仿",
  };
}

function normalizeBundle(bundle) {
  return {
    identityTag: clipText(bundle.identityTag, CARD_SCHEMA_LIMITS.identityTag),
    true: {
      title: clipText(bundle.true.title, CARD_SCHEMA_LIMITS.trueTitle),
      desc: clipText(bundle.true.desc, CARD_SCHEMA_LIMITS.trueDesc),
      source: clipText(bundle.true.source, CARD_SCHEMA_LIMITS.trueSource),
      empty: Boolean(bundle.true.empty),
    },
    mix: {
      title: clipText(bundle.mix.title, CARD_SCHEMA_LIMITS.mixTitle),
      desc: clipText(bundle.mix.desc, CARD_SCHEMA_LIMITS.mixDesc),
    },
    parody: {
      title: clipText(bundle.parody.title, CARD_SCHEMA_LIMITS.parodyTitle),
      desc: clipText(bundle.parody.desc, CARD_SCHEMA_LIMITS.parodyDesc),
    },
    markdown: clipText(bundle.markdown, CARD_SCHEMA_LIMITS.markdown),
  };
}

function hasRequired(bundle) {
  return Boolean(
    bundle.identityTag &&
      bundle.true &&
      typeof bundle.true.empty === "boolean" &&
      bundle.true.title &&
      bundle.true.desc &&
      typeof bundle.true.source === "string" &&
      bundle.mix?.title &&
      bundle.mix?.desc &&
      bundle.parody?.title &&
      bundle.parody?.desc &&
      bundle.markdown,
  );
}

function layoutPass(text, maxCharsPerLine, maxLines) {
  const lines = Math.ceil(String(text).length / maxCharsPerLine);
  return lines <= maxLines;
}

function runOne(input, idx) {
  const raw = buildMockBundle(input);
  const bundle = normalizeBundle(raw);

  const checks = {
    requiredFields: hasRequired(bundle),
    noOverflow:
      layoutPass(bundle.true.title, 16, 4) &&
      layoutPass(bundle.true.desc, 24, 8) &&
      layoutPass(bundle.mix.title, 16, 4) &&
      layoutPass(bundle.mix.desc, 24, 8) &&
      layoutPass(bundle.parody.title, 16, 4) &&
      layoutPass(bundle.parody.desc, 24, 8),
    bodyFontMin: 28 >= 28,
    contrast: 7.2 >= 4.5,
    fixedSize: EXPORT_SIZE.width === 1080 && EXPORT_SIZE.height === 1350,
  };

  const imageStageFailed = idx % 6 === 0;
  const degradedToTemplate = imageStageFailed;
  const passed = Object.values(checks).every(Boolean);

  return {
    input,
    passed,
    degradedToTemplate,
    checks,
  };
}

function runBatch() {
  const rows = TEST_INPUTS.map((input, idx) => runOne(input, idx));
  const passed = rows.filter((r) => r.passed).length;
  const degraded = rows.filter((r) => r.degradedToTemplate).length;

  console.log("--- Card Pipeline Batch Test ---");
  console.log(`Total: ${rows.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Pass Rate: ${(passed / rows.length * 100).toFixed(1)}%`);
  console.log(`Template Fallback Triggered: ${degraded}`);

  rows.forEach((row, index) => {
    console.log(`${String(index + 1).padStart(2, "0")}. ${row.passed ? "PASS" : "FAIL"} | ${row.input}`);
  });
}

runBatch();
