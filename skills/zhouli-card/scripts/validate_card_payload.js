#!/usr/bin/env node

const fs = require("fs");

const LIMITS = {
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

function readInput() {
  const file = process.argv[2];
  if (file) {
    return fs.readFileSync(file, "utf8");
  }
  return fs.readFileSync(0, "utf8");
}

function str(v) {
  return typeof v === "string";
}

function lenOk(v, max) {
  return str(v) && v.length <= max;
}

function validate(payload) {
  const errors = [];
  if (!payload || typeof payload !== "object") {
    return ["root must be object"];
  }

  if (!lenOk(payload.identityTag, LIMITS.identityTag)) errors.push("identityTag invalid");

  const t = payload.true || {};
  if (!lenOk(t.title, LIMITS.trueTitle)) errors.push("true.title invalid");
  if (!lenOk(t.desc, LIMITS.trueDesc)) errors.push("true.desc invalid");
  if (!lenOk(t.source, LIMITS.trueSource)) errors.push("true.source invalid");
  if (typeof t.empty !== "boolean") errors.push("true.empty must be boolean");

  const m = payload.mix || {};
  if (!lenOk(m.title, LIMITS.mixTitle)) errors.push("mix.title invalid");
  if (!lenOk(m.desc, LIMITS.mixDesc)) errors.push("mix.desc invalid");

  const p = payload.parody || {};
  if (!lenOk(p.title, LIMITS.parodyTitle)) errors.push("parody.title invalid");
  if (!lenOk(p.desc, LIMITS.parodyDesc)) errors.push("parody.desc invalid");

  if (!lenOk(payload.markdown, LIMITS.markdown)) errors.push("markdown invalid");

  if (t.empty === true) {
    if (t.title !== "暂缺可信原句") errors.push('when true.empty=true, true.title must be "暂缺可信原句"');
    if (t.source !== "") errors.push("when true.empty=true, true.source must be empty string");
  }

  return errors;
}

function main() {
  let parsed;
  try {
    parsed = JSON.parse(readInput());
  } catch (err) {
    console.error("invalid json");
    process.exit(2);
  }

  const errors = validate(parsed);
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }

  console.log("ok");
}

main();
