(function attachStylePresets(global) {
  const STYLE_PRESETS = {
    xhs_zhouli_v1: {
      id: "xhs_zhouli_v1",
      label: "小红书古籍封面",
      palette: {
        bgTop: "#1f3f3a",
        bgBottom: "#2b5a52",
        textPrimary: "#fff4e8",
        textSecondary: "#f4e1cc",
        accent: "#ffe5c6",
        accentSoft: "rgba(255,229,198,0.18)",
        border: "rgba(248,228,206,0.3)",
        warn: "#e56a45",
      },
      modeColor: {
        true: "#ffd9ab",
        mix: "#ffecc8",
        parody: "#ffcc95",
      },
      fonts: {
        brand: '"Noto Sans SC", sans-serif',
        title: '"Noto Sans SC", sans-serif',
        body: '"Noto Sans SC", sans-serif',
        tag: '"Noto Sans SC", sans-serif',
      },
      paddings: {
        x: 96,
        top: 160,
        contentTop: 380,
        bottom: 120,
      },
      textureStrength: 0.14,
      avatarStyle: {
        shape: "circle",
        stroke: "rgba(255,235,208,0.45)",
        strokeWidth: 2,
      },
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
    },
  };

  global.STYLE_PRESETS = STYLE_PRESETS;
})(window);
