import { useState, useEffect, CSSProperties } from "react";
import svgPaths from "@/imports/Frame26/svg-8hfnbqq4mi";

// ══════════════════════════════════════════════════════════════════════════════
// BRAND LOGO COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

function LogoAmazon() {
  return (
    <svg viewBox="20 5 120 138" fill="none" className="w-full h-full">
      <path d={svgPaths.p36056600} fill="white" />
    </svg>
  );
}

function LogoIE() {
  return (
    <svg viewBox="0 0 106 100" fill="none" className="w-full h-full">
      <path d={svgPaths.pf194300} fill="#69D5F7" stroke="#1B62A2" strokeWidth="4.913" />
    </svg>
  );
}

function LogoRockstar() {
  return (
    <svg viewBox="0 0 152 154" fill="none" className="w-full h-full">
      <path d={svgPaths.p4336700} fill="black" />
      <path d={svgPaths.p1f96780} fill="white" stroke="black" />
    </svg>
  );
}

function LogoTesla() {
  return (
    <svg viewBox="0 0 102 93" fill="none" className="w-full h-full">
      <path d={svgPaths.p1cb30f00} fill="white" stroke="white" />
      <path d={svgPaths.pc241f00} fill="white" stroke="white" />
    </svg>
  );
}

function LogoYouTube() {
  return (
    <svg viewBox="0 0 68 48" fill="none" className="w-full h-full">
      <path d={svgPaths.p2faa89f0} fill="#FF0000" />
      <path d={svgPaths.p6007300} fill="#FF0000" />
      <path d={svgPaths.p1473fd80} fill="#FF0000" />
    </svg>
  );
}

function LogoUnreal() {
  return (
    <svg viewBox="0 0 103 103" fill="none" className="w-full h-full">
      <path d={svgPaths.p1ea26d00} fill="black" />
    </svg>
  );
}

function LogoIncredibles() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span
        className="font-black text-2xl italic leading-none"
        style={{ fontFamily: "Impact, 'Arial Black', sans-serif", color: "#f3e802", textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
      >
        i
      </span>
    </div>
  );
}

function LogoGreenBrand() {
  return (
    <svg viewBox="0 0 115 117" fill="none" className="w-full h-full">
      <path d={svgPaths.p32f6dc00} fill="white" />
    </svg>
  );
}

function LogoPlayStation() {
  return (
    <svg viewBox="0 0 113 97" fill="none" className="w-full h-full">
      <path d={svgPaths.p2aa50f00} fill="#326DB3" />
      <path d={svgPaths.p68eb980} fill="#326DB3" />
      <path d={svgPaths.p1023580} fill="#00AA9E" />
      <path d={svgPaths.p1c9f6b00} fill="#00AA9E" />
      <path d={svgPaths.p2ee200} fill="#00AA9E" />
      <path d={svgPaths.p1237f100} fill="#00AA9E" />
      <path d={svgPaths.p3a71d840} fill="#F3C202" />
      <path d={svgPaths.p3f545a80} fill="#326DB3" />
      <path d={svgPaths.p3dd74e00} fill="#00AA9E" />
      <path d={svgPaths.p16276080} fill="#F3C202" />
      <path d={svgPaths.p2f3770c0} fill="#F3C202" />
      <path d={svgPaths.p4b7a100} fill="#DE0029" />
      <path d={svgPaths.p384ae00} fill="#DE0029" />
      <path d={svgPaths.p18dd8b80} fill="#DE0029" />
      <path d={svgPaths.p36b2ab00} fill="#DE0029" />
      <path d={svgPaths.p3b540280} fill="#DE0029" />
    </svg>
  );
}

function LogoQuiznos() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-black text-2xl leading-none" style={{ fontFamily: "'Arial Black', Impact, sans-serif", color: "#d30027" }}>
        Q
      </span>
    </div>
  );
}

function LogoSuperman() {
  return (
    <svg viewBox="10 10 112 92" fill="none" className="w-full h-full">
      <path d={svgPaths.p2534c70} fill="#CC2229" clipRule="evenodd" fillRule="evenodd" stroke="black" strokeWidth="2.31307" />
      <path d={svgPaths.p3cbfca00} fill="#FFF22D" clipRule="evenodd" fillRule="evenodd" stroke="black" strokeWidth="2.31307" />
    </svg>
  );
}

function LogoDominos() {
  return (
    <div className="w-full h-full flex items-center justify-center text-center px-0.5">
      <span className="leading-tight font-bold" style={{ fontFamily: "'Libertinus Serif', Georgia, serif", fontSize: "clamp(6px, 1.5vw, 9px)", color: "#3a00f7", letterSpacing: "-0.5px" }}>
        Domino&apos;s<br />Pizza
      </span>
    </div>
  );
}

function LogoKodak() {
  return (
    <svg viewBox="16 53 120 47" fill="none" className="w-full h-full">
      <path d={svgPaths.p1ddc4100} fill="#080400" />
      <path d={svgPaths.p24af0f00} fill="#080400" />
    </svg>
  );
}

function LogoLEGO() {
  return (
    <svg viewBox="0 0 127 127" fill="none" className="w-full h-full">
      <path d={svgPaths.p22f3fb80} fill="white" />
      <path d={svgPaths.p22373f00} fill="#FFFF00" />
      <path d={svgPaths.p19c82c00} fill="#FF0000" />
      <path d={svgPaths.p3e816e80} fill="black" />
    </svg>
  );
}

function LogoMMs() {
  return (
    <svg viewBox="0 0 103 122" fill="none" className="w-full h-full">
      <path d={svgPaths.p1c304780} fill="#FF2323" />
      <path d={svgPaths.p39603980} fill="#FFB701" />
      <path d={svgPaths.pe3ff400} fill="#FFB701" />
      <path d={svgPaths.p1b059980} fill="#FFB701" />
      <path d={svgPaths.p81fab40} fill="#FFB701" />
      <path d={svgPaths.p18076100} fill="#FF2323" />
    </svg>
  );
}

function LogoWB() {
  return (
    <svg viewBox="9 9 133 133" fill="none" className="w-full h-full">
      <path d={svgPaths.p2355a600} fill="#FF0000" stroke="black" strokeWidth="9" />
      <path d={svgPaths.p304a4600} fill="black" stroke="black" />
      <path d={svgPaths.p30ab7ec0} fill="black" stroke="black" />
    </svg>
  );
}

function LogoCN() {
  return (
    <svg viewBox="0 0 134 98" fill="none" className="w-full h-full">
      <path d={svgPaths.p324f5b80} fill="white" />
      <rect x="0" y="0" width="66.5" height="81.146" fill="black" />
      <path d={svgPaths.p19321400} fill="white" />
      <path d={svgPaths.p1b2d2f00} fill="black" />
    </svg>
  );
}

function LogoSpaceX() {
  return (
    <svg viewBox="240 5 520 90" fill="none" className="w-full h-full">
      <path d={svgPaths.p141cc500} fill="white" />
      <path d={svgPaths.p3ceb5600} fill="#005288" stroke="#FEFEFE" />
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCALE SYSTEM
// Original SVG: 3765×1330px, standard key = 152px wide × 154px tall, gap = 36px
// Display scale: 44/152 ≈ 0.289x
// ══════════════════════════════════════════════════════════════════════════════

const s = (n: number) => Math.round((n * 44) / 152);

const KEY_H   = s(154);  // 44px
const KEY_GAP = s(36);   // 10px
const FN_W    = s(158);  // 46px (oval fn key width)
const FN_H    = s(85);   // 25px (oval fn key height)
const FN_GAP  = s(30);   // 9px  (fn row gap — tighter than regular)

// All key widths derived from original SVG coordinates
const W_UNIT   = s(152);  // 44px
const W_NARROW = s(76);   // 22px (² key — half-width in original)
const W_TAB    = s(273);  // 79px
const W_BSP    = s(431);  // 125px (Backspace)
const W_ETOP   = s(235);  // 68px  (ISO Enter top — tab row)
const W_CAPS   = s(367);  // 106px (CapsLock)
const W_EBOT   = s(329);  // 95px  (ISO Enter bottom — caps row)
const W_SHFL   = s(443);  // 128px (Left Shift)
const W_SHFR   = s(443);  // 128px (Right Shift)
const W_SPACE  = s(1107); // 320px (SpaceBar — original is very wide)
const W_NP0    = s(340);  // 98px  (Numpad 0 — spans 2 cols)
// Numpad tall keys (rotated 90° in SVG: 156px wide, 364px tall after rotation)
const W_NPTALL = s(156);  // 45px wide — same column as regular but different shape
const H_NPTALL = 2 * KEY_H + KEY_GAP; // 98px — spans 2 row heights + gap

// ══════════════════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════════════════

type Brand = { bg: string; border: string; Logo: () => React.JSX.Element };

type KeyDef = {
  id: string;
  label: string;
  sub?: string;
  eventKey: string;
  eventCode?: string;
  wpx: number;
  brand?: Brand;
};

// ══════════════════════════════════════════════════════════════════════════════
// KEY LAYOUT DATA — HP Pavilion Gaming 15-dk1, AZERTY (French/Belgian)
// Key widths match original SVG proportions exactly
// ══════════════════════════════════════════════════════════════════════════════

// Fn row — left section (15 oval pill keys)
// SVG: x=92…2724, all 158px wide, 85px tall, 30px gap
const ROW_FN_MAIN: KeyDef[] = [
  { id: "key-esc",    label: "Esc",   eventKey: "Escape",      eventCode: "Escape",      wpx: FN_W },
  { id: "key-f1",    label: "F1",    eventKey: "F1",                                    wpx: FN_W },
  { id: "key-f2",    label: "F2",    eventKey: "F2",                                    wpx: FN_W },
  { id: "key-f3",    label: "F3",    eventKey: "F3",                                    wpx: FN_W },
  { id: "key-f4",    label: "F4",    eventKey: "F4",                                    wpx: FN_W },
  { id: "key-f5",    label: "F5",    eventKey: "F5",                                    wpx: FN_W },
  { id: "key-f6",    label: "F6",    eventKey: "F6",                                    wpx: FN_W },
  { id: "key-f7",    label: "F7",    eventKey: "F7",                                    wpx: FN_W },
  { id: "key-f8",    label: "F8",    eventKey: "F8",                                    wpx: FN_W },
  { id: "key-f9",    label: "F9",    eventKey: "F9",                                    wpx: FN_W },
  { id: "key-f10",   label: "F10",   eventKey: "F10",                                   wpx: FN_W },
  { id: "key-f11",   label: "F11",   eventKey: "F11",                                   wpx: FN_W },
  { id: "key-f12",   label: "F12",   eventKey: "F12",                                   wpx: FN_W },
  { id: "key-prtsc", label: "PrtSc", eventKey: "PrintScreen", eventCode: "PrintScreen", wpx: FN_W },
  { id: "key-del",   label: "Del",   eventKey: "Delete",      eventCode: "Delete",      wpx: FN_W },
];

// Fn row — right section / numpad top (4 oval keys)
// SVG: x=2964,3152,3340,3528 — all 158px wide, 85px tall
const ROW_FN_NP: KeyDef[] = [
  { id: "key-ins",  label: "Ins",  eventKey: "Insert",   eventCode: "Insert",   wpx: FN_W },
  { id: "key-home", label: "Home", eventKey: "Home",     eventCode: "Home",     wpx: FN_W },
  { id: "key-pgup", label: "PgUp", eventKey: "PageUp",   eventCode: "PageUp",   wpx: FN_W },
  { id: "key-pgdn", label: "PgDn", eventKey: "PageDown", eventCode: "PageDown", wpx: FN_W },
];

// Number row (14 keys)
// SVG y=242: x=89(76), x=201-2269(12×152), x=2457(431)
const ROW_NUMBER: KeyDef[] = [
  { id: "key-superscript2", label: "²", sub: "~",  eventKey: "²",          eventCode: "Backquote",  wpx: W_NARROW },
  { id: "key-ampersand",    label: "&", sub: "1",  eventKey: "&",                                   wpx: W_UNIT },
  { id: "key-eacute",       label: "é", sub: "2",  eventKey: "é",                                   wpx: W_UNIT },
  { id: "key-doublequote",  label: '"', sub: "3",  eventKey: '"',                                   wpx: W_UNIT },
  { id: "key-apostrophe",   label: "'", sub: "4",  eventKey: "'",                                   wpx: W_UNIT },
  { id: "key-lparen",       label: "(", sub: "5",  eventKey: "(",                                   wpx: W_UNIT },
  { id: "key-dash",         label: "-", sub: "6",  eventKey: "-",           eventCode: "Minus",     wpx: W_UNIT },
  { id: "key-egrave",       label: "è", sub: "7",  eventKey: "è",                                   wpx: W_UNIT },
  { id: "key-underscore",   label: "_", sub: "8",  eventKey: "_",                                   wpx: W_UNIT },
  { id: "key-ccedilla",     label: "ç", sub: "9",  eventKey: "ç",                                   wpx: W_UNIT },
  { id: "key-agrave",       label: "à", sub: "0",  eventKey: "à",                                   wpx: W_UNIT },
  { id: "key-rparen",       label: ")", sub: "°",  eventKey: ")",                                   wpx: W_UNIT },
  { id: "key-equals",       label: "=", sub: "+",  eventKey: "=",           eventCode: "Equal",     wpx: W_UNIT },
  { id: "key-backspace",    label: "⌫",            eventKey: "Backspace",   eventCode: "Backspace", wpx: W_BSP },
];

// Numpad — top row (NumLk, /, *, -)
// SVG y=242: x=2961,3149,3337,3525 — last key (−) aligns with the tall + column below
const ROW_NP_TOP: KeyDef[] = [
  { id: "key-numlock",  label: "NumLk", eventKey: "NumLock",         eventCode: "NumLock",         wpx: W_UNIT },
  { id: "key-np-slash", label: "/",     eventKey: "/",               eventCode: "NumpadDivide",    wpx: W_UNIT },
  { id: "key-np-star",  label: "*",     eventKey: "*",               eventCode: "NumpadMultiply",  wpx: W_UNIT },
  { id: "key-np-minus", label: "−",     eventKey: "-",               eventCode: "NumpadSubtract",  wpx: W_NPTALL },
];

// Tab row — main keyboard (14 keys including ISO Enter top)
// SVG y=452: x=89(273), x=398-2466(12×152), x=2654(235)
const ROW_TAB: KeyDef[] = [
  { id: "key-tab", label: "Tab", eventKey: "Tab", eventCode: "Tab", wpx: W_TAB },
  { id: "key-a", label: "a", eventKey: "a", wpx: W_UNIT,
    brand: { bg: "#010101", border: "#ff0004", Logo: LogoAmazon } },
  { id: "key-z", label: "z", eventKey: "z", wpx: W_UNIT },
  { id: "key-e", label: "e", eventKey: "e", wpx: W_UNIT,
    brand: { bg: "white", border: "#0f8ce1", Logo: LogoIE } },
  { id: "key-r", label: "r", eventKey: "r", wpx: W_UNIT,
    brand: { bg: "#FCAF17", border: "black", Logo: LogoRockstar } },
  { id: "key-t", label: "t", eventKey: "t", wpx: W_UNIT,
    brand: { bg: "#CC0000", border: "white", Logo: LogoTesla } },
  { id: "key-y", label: "y", eventKey: "y", wpx: W_UNIT,
    brand: { bg: "white", border: "red", Logo: LogoYouTube } },
  { id: "key-u", label: "u", eventKey: "u", wpx: W_UNIT,
    brand: { bg: "white", border: "#000401", Logo: LogoUnreal } },
  { id: "key-i", label: "i", eventKey: "i", wpx: W_UNIT,
    brand: { bg: "#861310", border: "#f3e802", Logo: LogoIncredibles } },
  { id: "key-o", label: "o", eventKey: "o", wpx: W_UNIT,
    brand: { bg: "#0fa37f", border: "white", Logo: LogoGreenBrand } },
  { id: "key-p", label: "p", eventKey: "p", wpx: W_UNIT,
    brand: { bg: "#010101", border: "white", Logo: LogoPlayStation } },
  { id: "key-caret",  label: "^", sub: "¨", eventKey: "^",  wpx: W_UNIT },
  { id: "key-dollar", label: "$", sub: "£", eventKey: "$",  wpx: W_UNIT },
  // ISO Enter — upper part (tab row). Both halves respond to the Enter key.
  { id: "key-enter-top", label: "↵", eventKey: "Enter", eventCode: "Enter", wpx: W_ETOP },
];

// Caps row — main keyboard (13 keys including ISO Enter bottom)
// SVG y=662: x=89(367), x=492-2372(11×152), x=2560(329)
const ROW_CAPS: KeyDef[] = [
  { id: "key-capslock", label: "Caps", eventKey: "CapsLock", eventCode: "CapsLock", wpx: W_CAPS },
  { id: "key-q", label: "q", eventKey: "q", wpx: W_UNIT,
    brand: { bg: "white", border: "#d30027", Logo: LogoQuiznos } },
  { id: "key-s", label: "s", eventKey: "s", wpx: W_UNIT,
    brand: { bg: "#3a00f7", border: "#cc2229", Logo: LogoSuperman } },
  { id: "key-d", label: "d", eventKey: "d", wpx: W_UNIT,
    brand: { bg: "white", border: "#050000", Logo: LogoDominos } },
  { id: "key-f", label: "f", eventKey: "f", wpx: W_UNIT },
  { id: "key-g", label: "g", eventKey: "g", wpx: W_UNIT },
  { id: "key-h", label: "h", eventKey: "h", wpx: W_UNIT },
  { id: "key-j", label: "j", eventKey: "j", wpx: W_UNIT },
  { id: "key-k", label: "k", eventKey: "k", wpx: W_UNIT,
    brand: { bg: "#FFCF22", border: "white", Logo: LogoKodak } },
  { id: "key-l", label: "l", eventKey: "l", wpx: W_UNIT,
    brand: { bg: "red", border: "black", Logo: LogoLEGO } },
  { id: "key-m", label: "m", eventKey: "m", wpx: W_UNIT,
    brand: { bg: "#FFCF22", border: "white", Logo: LogoMMs } },
  { id: "key-ugrave", label: "ù", sub: "%", eventKey: "ù", wpx: W_UNIT },
  // ISO Enter — lower part (caps row)
  { id: "key-enter-bot", label: "Enter", eventKey: "Enter", eventCode: "Enter", wpx: W_EBOT },
];

// Shift row (12 keys)
// SVG y=872: x=89(443), x=568-2260(10×152), x=2448(443)
// AZERTY bottom letters: < w x c v b n , ; :
const ROW_SHIFT: KeyDef[] = [
  { id: "key-shift-left",  label: "Shift", eventKey: "Shift", eventCode: "ShiftLeft",  wpx: W_SHFL },
  { id: "key-lt",          label: "<", sub: ">",  eventKey: "<",  wpx: W_UNIT },
  { id: "key-w", label: "w", eventKey: "w", wpx: W_UNIT,
    brand: { bg: "white", border: "#d30027", Logo: LogoWB } },
  { id: "key-x", label: "x", eventKey: "x", wpx: W_UNIT,
    brand: { bg: "#010101", border: "white", Logo: LogoCN } },
  { id: "key-c", label: "c", eventKey: "c", wpx: W_UNIT },
  { id: "key-v", label: "v", eventKey: "v", wpx: W_UNIT },
  { id: "key-b", label: "b", eventKey: "b", wpx: W_UNIT },
  { id: "key-n", label: "n", eventKey: "n", wpx: W_UNIT },
  { id: "key-comma",     label: ",", sub: "?", eventKey: ",", wpx: W_UNIT },
  { id: "key-semicolon", label: ";", sub: ".", eventKey: ";", wpx: W_UNIT },
  { id: "key-colon",     label: ":", sub: "/", eventKey: ":", wpx: W_UNIT },
  { id: "key-shift-right", label: "Shift", eventKey: "Shift", eventCode: "ShiftRight", wpx: W_SHFR },
];

// Bottom row — main keys
// SVG y=1082: x=95-659(4×152), x=847(1107 spacebar), x=1990-2178(2×152)
// Arrow keys are placed in the right portion of this row (before numpad)
const ROW_BOTTOM_MAIN: KeyDef[] = [
  { id: "key-ctrl-left",  label: "Ctrl",  eventKey: "Control",  eventCode: "ControlLeft",  wpx: W_UNIT },
  { id: "key-fn",         label: "Fn",    eventKey: "Fn",       eventCode: "Fn",            wpx: W_UNIT },
  { id: "key-win",        label: "⊞",    eventKey: "Meta",     eventCode: "MetaLeft",      wpx: W_UNIT },
  { id: "key-alt",        label: "Alt",   eventKey: "Alt",      eventCode: "AltLeft",       wpx: W_UNIT },
  {
    id: "key-space", label: "", eventKey: " ", eventCode: "Space", wpx: W_SPACE,
    brand: { bg: "#010101", border: "white", Logo: LogoSpaceX },
  },
  { id: "key-altgr",      label: "AltGr", eventKey: "AltGraph", eventCode: "AltRight",     wpx: W_UNIT },
  { id: "key-ctrl-right", label: "Ctrl",  eventKey: "Control",  eventCode: "ControlRight", wpx: W_UNIT },
];

// Arrow keys (three columns in bottom row: ← | ↑/↓ stacked | →)
const ARROW_LEFT:  KeyDef = { id: "key-arrow-left",  label: "←", eventKey: "ArrowLeft",  eventCode: "ArrowLeft",  wpx: W_UNIT };
const ARROW_UP:    KeyDef = { id: "key-arrow-up",    label: "↑", eventKey: "ArrowUp",    eventCode: "ArrowUp",    wpx: W_UNIT };
const ARROW_DOWN:  KeyDef = { id: "key-arrow-down",  label: "↓", eventKey: "ArrowDown",  eventCode: "ArrowDown",  wpx: W_UNIT };
const ARROW_RIGHT: KeyDef = { id: "key-arrow-right", label: "→", eventKey: "ArrowRight", eventCode: "ArrowRight", wpx: W_UNIT };

// Numpad bottom (0 wide + decimal; the tall Enter above is in the grid)
// SVG y=1082: x=2961(340), x=3337(152)
const NP_ZERO:    KeyDef = { id: "key-np-0",   label: "0", eventKey: "0", eventCode: "Numpad0",       wpx: W_NP0 };
const NP_DECIMAL: KeyDef = { id: "key-np-dot", label: ".", eventKey: ".", eventCode: "NumpadDecimal", wpx: W_UNIT };

// ══════════════════════════════════════════════════════════════════════════════
// KEY COMPONENT — renders one physical key cap with press animation
// ══════════════════════════════════════════════════════════════════════════════

function isKeyPressed(def: KeyDef, pressedKeys: Set<string>): boolean {
  return pressedKeys.has(def.eventKey) || (def.eventCode ? pressedKeys.has(def.eventCode) : false);
}

type KeyProps = {
  def: KeyDef;
  pressed: boolean;
  height?: number;
  style?: CSSProperties;
  isFn?: boolean;
};

function Key({ def, pressed, height = KEY_H, style, isFn = false }: KeyProps) {
  const brand = def.brand;
  const bg     = brand?.bg     ?? "#010101";
  const border = brand?.border ?? "rgba(255,255,255,0.85)";

  const labelLen = def.label.length;
  const labelSize = labelLen > 4 ? "text-[7px]" : labelLen > 2 ? "text-[8px]" : labelLen === 2 ? "text-[9px]" : "text-[11px]";

  return (
    <div
      id={def.id}
      aria-label={def.label}
      role="img"
      className="flex-shrink-0 select-none"
      style={{ width: def.wpx, ...style }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          height,
          backgroundColor: bg,
          border: isFn ? `2px solid ${border}` : `3px solid ${border}`,
          borderRadius: isFn ? height / 2 : 8,
          boxShadow: pressed
            ? "1px 2px 1px rgba(180,180,180,0.2)"
            : "4px 7px 2px rgba(204,204,204,0.65)",
          transform: pressed ? "translateY(3px)" : "translateY(0)",
          transition: pressed
            ? "transform 0.07s cubic-bezier(0.1,0.9,0.5,1), box-shadow 0.07s ease"
            : "transform 0.14s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.14s ease",
        }}
      >
        {brand?.Logo && (
          <div id={`${def.id}-logo`} className="absolute inset-0 flex items-center justify-center p-1">
            <brand.Logo />
          </div>
        )}

        {!brand && (
          <div id={`${def.id}-label`} className="absolute bottom-0.5 left-1.5 flex flex-col items-start">
            {def.sub && (
              <span className="text-white leading-none opacity-50 mb-px" style={{ fontSize: 6 }}>
                {def.sub}
              </span>
            )}
            <span className={`text-white leading-none font-medium ${labelSize}`}>
              {def.label}
            </span>
          </div>
        )}

        {pressed && (
          <div className="absolute inset-0 rounded-[5px] ring-1 ring-inset ring-white/20" />
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROW COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

function KeyRow({ id, keys, pressedKeys, gap = KEY_GAP, isFn = false, height }: {
  id: string;
  keys: KeyDef[];
  pressedKeys: Set<string>;
  gap?: number;
  isFn?: boolean;
  height?: number;
}) {
  return (
    <div id={id} className="flex" style={{ gap }}>
      {keys.map((def) => (
        <Key
          key={def.id}
          def={def}
          pressed={isKeyPressed(def, pressedKeys)}
          isFn={isFn}
          height={height}
        />
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// NUMPAD GRID COMPONENT
// Uses CSS grid so tall keys (+, Enter) span 2 rows and 0 spans 2 columns.
// ══════════════════════════════════════════════════════════════════════════════

function NumpadGrid({ pressedKeys }: { pressedKeys: Set<string> }) {
  const np7:   KeyDef = { id: "key-np-7", label: "7", sub: "Home", eventKey: "7", eventCode: "Numpad7", wpx: W_UNIT };
  const np8:   KeyDef = { id: "key-np-8", label: "8", sub: "↑",   eventKey: "8", eventCode: "Numpad8", wpx: W_UNIT };
  const np9:   KeyDef = { id: "key-np-9", label: "9", sub: "PgUp", eventKey: "9", eventCode: "Numpad9", wpx: W_UNIT };
  const npPls: KeyDef = { id: "key-np-plus",  label: "+", eventKey: "+", eventCode: "NumpadAdd",      wpx: W_NPTALL };
  const np4:   KeyDef = { id: "key-np-4", label: "4", sub: "←",   eventKey: "4", eventCode: "Numpad4", wpx: W_UNIT };
  const np5:   KeyDef = { id: "key-np-5", label: "5", sub: "—",   eventKey: "5", eventCode: "Numpad5", wpx: W_UNIT };
  const np6:   KeyDef = { id: "key-np-6", label: "6", sub: "→",   eventKey: "6", eventCode: "Numpad6", wpx: W_UNIT };
  const np1:   KeyDef = { id: "key-np-1", label: "1", sub: "End",  eventKey: "1", eventCode: "Numpad1", wpx: W_UNIT };
  const np2:   KeyDef = { id: "key-np-2", label: "2", sub: "↓",   eventKey: "2", eventCode: "Numpad2", wpx: W_UNIT };
  const np3:   KeyDef = { id: "key-np-3", label: "3", sub: "PgDn", eventKey: "3", eventCode: "Numpad3", wpx: W_UNIT };
  const npEnt: KeyDef = { id: "key-np-enter", label: "Enter", eventKey: "Enter", eventCode: "NumpadEnter", wpx: W_NPTALL };

  const pressed = (def: KeyDef) => isKeyPressed(def, pressedKeys);

  return (
    <div
      id="numpad-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `${W_UNIT}px ${W_UNIT}px ${W_UNIT}px ${W_NPTALL}px`,
        gridTemplateRows: `${KEY_H}px ${KEY_H}px ${KEY_H}px ${KEY_H}px`,
        gap: KEY_GAP,
      }}
    >
      {/* Row 1: 7 8 9 [+] */}
      <Key def={np7}   pressed={pressed(np7)}   style={{ gridColumn: 1, gridRow: 1 }} />
      <Key def={np8}   pressed={pressed(np8)}   style={{ gridColumn: 2, gridRow: 1 }} />
      <Key def={np9}   pressed={pressed(np9)}   style={{ gridColumn: 3, gridRow: 1 }} />
      <Key def={npPls} pressed={pressed(npPls)} style={{ gridColumn: 4, gridRow: "1 / 3" }} height={H_NPTALL} />

      {/* Row 2: 4 5 6 (+ continues) */}
      <Key def={np4}   pressed={pressed(np4)}   style={{ gridColumn: 1, gridRow: 2 }} />
      <Key def={np5}   pressed={pressed(np5)}   style={{ gridColumn: 2, gridRow: 2 }} />
      <Key def={np6}   pressed={pressed(np6)}   style={{ gridColumn: 3, gridRow: 2 }} />

      {/* Row 3: 1 2 3 [Enter] */}
      <Key def={np1}   pressed={pressed(np1)}   style={{ gridColumn: 1, gridRow: 3 }} />
      <Key def={np2}   pressed={pressed(np2)}   style={{ gridColumn: 2, gridRow: 3 }} />
      <Key def={np3}   pressed={pressed(np3)}   style={{ gridColumn: 3, gridRow: 3 }} />
      <Key def={npEnt} pressed={pressed(npEnt)} style={{ gridColumn: 4, gridRow: "3 / 5" }} height={H_NPTALL} />

      {/* Row 4: [0 wide] [.] (Enter continues) */}
      <Key def={NP_ZERO}    pressed={pressed(NP_ZERO)}    style={{ gridColumn: "1 / 3", gridRow: 4 }} />
      <Key def={NP_DECIMAL} pressed={pressed(NP_DECIMAL)} style={{ gridColumn: 3,       gridRow: 4 }} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ARROW KEY CLUSTER (↑↓ half-height stacked, flanked by ← →)
// ══════════════════════════════════════════════════════════════════════════════

const HALF_KEY_H = Math.floor((KEY_H - KEY_GAP) / 2); // ~17px

function ArrowCluster({ pressedKeys }: { pressedKeys: Set<string> }) {
  return (
    <div id="arrow-cluster" className="flex" style={{ gap: KEY_GAP, alignItems: "flex-end" }}>
      <Key def={ARROW_LEFT}  pressed={isKeyPressed(ARROW_LEFT, pressedKeys)} />

      <div className="flex flex-col" style={{ gap: KEY_GAP }}>
        <Key def={ARROW_UP}   pressed={isKeyPressed(ARROW_UP, pressedKeys)}   height={HALF_KEY_H} />
        <Key def={ARROW_DOWN} pressed={isKeyPressed(ARROW_DOWN, pressedKeys)} height={HALF_KEY_H} />
      </div>

      <Key def={ARROW_RIGHT} pressed={isKeyPressed(ARROW_RIGHT, pressedKeys)} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// KEYBOARD ASSEMBLY
// ══════════════════════════════════════════════════════════════════════════════

function AzertyKeyboard({ pressedKeys }: { pressedKeys: Set<string> }) {
  // Gap between fn row main section and numpad fn section (original: 82px → s(82)=24px)
  const fnSectionGap = s(82);
  // Gap between main keyboard block and numpad block (original: 72px → s(72)=21px)
  const sectionGap   = s(72);

  return (
    <div
      id="keyboard-body"
      className="inline-block"
      style={{
        background: "#010101",
        border: "9px solid rgba(255,255,255,0.9)",
        borderRadius: 40,
        padding: "18px 22px",
        boxShadow: "0 30px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* ── Fn row: spans both main keyboard and numpad ── */}
      <div id="row-fn" className="flex" style={{ gap: fnSectionGap, marginBottom: KEY_GAP + 4 }}>
        <KeyRow id="row-fn-main" keys={ROW_FN_MAIN} pressedKeys={pressedKeys} gap={FN_GAP} isFn height={FN_H} />
        <KeyRow id="row-fn-numpad" keys={ROW_FN_NP} pressedKeys={pressedKeys} gap={FN_GAP} isFn height={FN_H} />
      </div>

      {/* ── Main keyboard + numpad side by side ── */}
      <div id="keyboard-sections" className="flex" style={{ gap: sectionGap }}>

        {/* ── Main keyboard body ── */}
        <div id="keyboard-main" className="flex flex-col" style={{ gap: KEY_GAP }}>

          {/* Number row */}
          <KeyRow id="row-number" keys={ROW_NUMBER} pressedKeys={pressedKeys} />

          {/* Tab row (with ISO Enter top) */}
          <KeyRow id="row-tab" keys={ROW_TAB} pressedKeys={pressedKeys} />

          {/* Caps row (with ISO Enter bottom) */}
          <KeyRow id="row-caps" keys={ROW_CAPS} pressedKeys={pressedKeys} />

          {/* Shift row */}
          <KeyRow id="row-shift" keys={ROW_SHIFT} pressedKeys={pressedKeys} />

          {/* Bottom row with arrow cluster at right */}
          <div id="row-bottom" className="flex" style={{ gap: KEY_GAP, alignItems: "flex-end" }}>
            <KeyRow id="row-bottom-main" keys={ROW_BOTTOM_MAIN} pressedKeys={pressedKeys} />
            <ArrowCluster pressedKeys={pressedKeys} />
          </div>
        </div>

        {/* ── Numpad ── */}
        <div id="keyboard-numpad" className="flex flex-col" style={{ gap: KEY_GAP }}>
          {/* NumLk / * - row */}
          <KeyRow id="row-numpad-top" keys={ROW_NP_TOP} pressedKeys={pressedKeys} />

          {/* 7–9 / 4–6 / 1–3 / 0 grid with tall + and Enter */}
          <NumpadGrid pressedKeys={pressedKeys} />
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// APP ROOT
// ══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["F5", "F11", "F12"].includes(e.key)) return;
      e.preventDefault();
      setPressedKeys((prev) => {
        const next = new Set(prev);
        next.add(e.key);
        if (e.code) next.add(e.code);
        return next;
      });
    };

    const onKeyUp = (e: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const next = new Set(prev);
        next.delete(e.key);
        if (e.code) next.delete(e.code);
        return next;
      });
    };

    const onBlur = () => setPressedKeys(new Set());

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 gap-8"
      style={{ background: "#000000" }}
    >
      <div id="keyboard-header" className="text-center">
        <p className="text-white text-xs tracking-[0.3em] uppercase" style={{ opacity: 0.35 }}>
          HP Pavilion Gaming 15-dk1 · AZERTY
        </p>
      </div>

      <div id="keyboard-viewport" className="overflow-x-auto w-full flex justify-center">
        <AzertyKeyboard pressedKeys={pressedKeys} />
      </div>

      <p className="text-white text-xs tracking-widest" style={{ opacity: 0.2 }}>
        Press any key
      </p>
    </div>
  );
}
