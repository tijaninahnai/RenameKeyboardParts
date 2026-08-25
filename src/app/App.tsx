import { useState, useEffect } from "react";
import svgPaths from "@/imports/Frame26/svg-8hfnbqq4mi";

/* ═══════════════════════════════════════════════════════
   BRAND LOGO COMPONENTS
   Each uses SVG paths extracted from the Figma design
═══════════════════════════════════════════════════════ */

/** A: Amazon — black bg, red border #ff0004 */
function LogoAmazon() {
  return (
    <svg viewBox="20 5 120 138" fill="none" className="w-full h-full">
      <path d={svgPaths.p36056600} fill="white" />
    </svg>
  );
}

/** E: Internet Explorer — white bg, #0f8ce1 border */
function LogoIE() {
  return (
    <svg viewBox="0 0 106 100" fill="none" className="w-full h-full">
      <path
        d={svgPaths.pf194300}
        fill="#69D5F7"
        stroke="#1B62A2"
        strokeWidth="4.913"
      />
    </svg>
  );
}

/** R: Rockstar Games — gold bg #FCAF17, black border */
function LogoRockstar() {
  return (
    <svg viewBox="0 0 152 154" fill="none" className="w-full h-full">
      <path d={svgPaths.p4336700} fill="black" />
      <path d={svgPaths.p1f96780} fill="white" stroke="black" />
    </svg>
  );
}

/** T: Tesla — red bg, white border */
function LogoTesla() {
  return (
    <svg viewBox="0 0 102 93" fill="none" className="w-full h-full">
      <path d={svgPaths.p1cb30f00} fill="white" stroke="white" />
      <path d={svgPaths.pc241f00} fill="white" stroke="white" />
    </svg>
  );
}

/** Y: YouTube — white bg, red border */
function LogoYouTube() {
  return (
    <svg viewBox="0 0 68 48" fill="none" className="w-full h-full">
      <path d={svgPaths.p2faa89f0} fill="#FF0000" />
      <path d={svgPaths.p6007300} fill="#FF0000" />
      <path d={svgPaths.p1473fd80} fill="#FF0000" />
    </svg>
  );
}

/** U: Unreal Engine — white bg, dark border */
function LogoUnreal() {
  return (
    <svg viewBox="0 0 103 103" fill="none" className="w-full h-full">
      <path d={svgPaths.p1ea26d00} fill="black" />
    </svg>
  );
}

/** I: Incredibles — dark red bg #861310, yellow border #f3e802 */
function LogoIncredibles() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span
        className="font-black text-2xl italic leading-none"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          color: "#f3e802",
          textShadow: "0 2px 6px rgba(0,0,0,0.8)",
        }}
      >
        i
      </span>
    </div>
  );
}

/** O: OpenAI / green brand — #0fa37f bg, white border */
function LogoGreenBrand() {
  return (
    <svg viewBox="0 0 115 117" fill="none" className="w-full h-full">
      <path d={svgPaths.p32f6dc00} fill="white" />
    </svg>
  );
}

/** P: PlayStation — black bg, white border */
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

/** Q: Quiznos / Q-brand — white bg, red border #d30027 */
function LogoQuiznos() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span
        className="font-black text-2xl leading-none"
        style={{
          fontFamily: "'Arial Black', Impact, sans-serif",
          color: "#d30027",
        }}
      >
        Q
      </span>
    </div>
  );
}

/** S: Superman — blue bg #3a00f7, red border #cc2229 */
function LogoSuperman() {
  return (
    <svg
      viewBox="10 10 112 92"
      fill="none"
      className="w-full h-full"
    >
      <path
        d={svgPaths.p2534c70}
        fill="#CC2229"
        clipRule="evenodd"
        fillRule="evenodd"
        stroke="black"
        strokeWidth="2.31307"
      />
      <path
        d={svgPaths.p3cbfca00}
        fill="#FFF22D"
        clipRule="evenodd"
        fillRule="evenodd"
        stroke="black"
        strokeWidth="2.31307"
      />
    </svg>
  );
}

/** D: Domino's Pizza — white bg, dark border */
function LogoDominos() {
  return (
    <div className="w-full h-full flex items-center justify-center text-center px-0.5">
      <span
        className="leading-tight font-bold"
        style={{
          fontFamily: "'Libertinus Serif', Georgia, serif",
          fontSize: "clamp(6px, 1.5vw, 9px)",
          color: "#3a00f7",
          letterSpacing: "-0.5px",
        }}
      >
        Domino&apos;s
        <br />
        Pizza
      </span>
    </div>
  );
}

/** K: Kodak — yellow bg #FFCF22, white border */
function LogoKodak() {
  return (
    <svg viewBox="16 53 120 47" fill="none" className="w-full h-full">
      <path d={svgPaths.p1ddc4100} fill="#080400" />
      <path d={svgPaths.p24af0f00} fill="#080400" />
    </svg>
  );
}

/** L: LEGO — red bg, black border */
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

/** M: M&M's — yellow bg #FFCF22, white border */
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

/** W: Warner Bros — white bg, red border */
function LogoWB() {
  return (
    <svg viewBox="9 9 133 133" fill="none" className="w-full h-full">
      <path
        d={svgPaths.p2355a600}
        fill="#FF0000"
        stroke="black"
        strokeWidth="9"
      />
      <path d={svgPaths.p304a4600} fill="black" stroke="black" />
      <path d={svgPaths.p30ab7ec0} fill="black" stroke="black" />
    </svg>
  );
}

/** X: Cartoon Network — black bg, white border */
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

/** SPACE: SpaceX — black bg, white border */
function LogoSpaceX() {
  return (
    <svg viewBox="240 5 520 90" fill="none" className="w-full h-full">
      <path d={svgPaths.p141cc500} fill="white" />
      <path d={svgPaths.p3ceb5600} fill="#005288" stroke="#FEFEFE" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   AZERTY KEY LAYOUT DATA
   HP Pavilion Gaming 15-dk1 — French/Belgian AZERTY
   Key widths are in units (1u = 48px)
═══════════════════════════════════════════════════════ */

type BrandConfig = {
  bg: string;
  border: string;
  Logo: () => React.JSX.Element;
};

type KeyConfig = {
  /** Unique logical identifier matching AZERTY position */
  id: string;
  /** Primary label shown on the key face */
  label: string;
  /** Secondary/shift-layer label */
  sub?: string;
  /** event.key value used to detect this keypress */
  eventKey: string;
  /** event.code fallback (for modifier + arrow keys) */
  eventCode?: string;
  /** Key width in units. 1u = 48px */
  w: number;
  /** Brand config — renders a logo and custom colors */
  brand?: BrandConfig;
};

// Each row is a flat array of KeyConfig objects
// Row widths all resolve to ~790px at KEY_UNIT=48, KEY_GAP=5

const ROW_FN: KeyConfig[] = [
  { id: "key-esc", label: "Esc", eventKey: "Escape", eventCode: "Escape", w: 1.5 },
  { id: "key-f1", label: "F1", eventKey: "F1", w: 1 },
  { id: "key-f2", label: "F2", eventKey: "F2", w: 1 },
  { id: "key-f3", label: "F3", eventKey: "F3", w: 1 },
  { id: "key-f4", label: "F4", eventKey: "F4", w: 1 },
  { id: "key-f5", label: "F5", eventKey: "F5", w: 1 },
  { id: "key-f6", label: "F6", eventKey: "F6", w: 1 },
  { id: "key-f7", label: "F7", eventKey: "F7", w: 1 },
  { id: "key-f8", label: "F8", eventKey: "F8", w: 1 },
  { id: "key-f9", label: "F9", eventKey: "F9", w: 1 },
  { id: "key-f10", label: "F10", eventKey: "F10", w: 1 },
  { id: "key-f11", label: "F11", eventKey: "F11", w: 1 },
  { id: "key-f12", label: "F12", eventKey: "F12", w: 1 },
  { id: "key-del", label: "Del", eventKey: "Delete", eventCode: "Delete", w: 1.5 },
];

const ROW_NUMBER: KeyConfig[] = [
  { id: "key-superscript2", label: "²", sub: "~", eventKey: "²", eventCode: "Backquote", w: 1 },
  { id: "key-ampersand", label: "&", sub: "1", eventKey: "&", w: 1 },
  { id: "key-eacute", label: "é", sub: "2", eventKey: "é", w: 1 },
  { id: "key-doublequote", label: '"', sub: "3", eventKey: '"', w: 1 },
  { id: "key-apostrophe", label: "'", sub: "4", eventKey: "'", w: 1 },
  { id: "key-lparen", label: "(", sub: "5", eventKey: "(", w: 1 },
  { id: "key-dash", label: "-", sub: "6", eventKey: "-", w: 1 },
  { id: "key-egrave", label: "è", sub: "7", eventKey: "è", w: 1 },
  { id: "key-underscore", label: "_", sub: "8", eventKey: "_", w: 1 },
  { id: "key-ccedilla", label: "ç", sub: "9", eventKey: "ç", w: 1 },
  { id: "key-agrave", label: "à", sub: "0", eventKey: "à", w: 1 },
  { id: "key-rparen", label: ")", sub: "°", eventKey: ")", w: 1 },
  { id: "key-equals", label: "=", sub: "+", eventKey: "=", w: 1 },
  { id: "key-backspace", label: "⌫", eventKey: "Backspace", eventCode: "Backspace", w: 2 },
];

const ROW_AZERTY: KeyConfig[] = [
  { id: "key-tab", label: "Tab", eventKey: "Tab", eventCode: "Tab", w: 1.5 },
  {
    id: "key-a",
    label: "a",
    eventKey: "a",
    w: 1,
    brand: { bg: "#010101", border: "#ff0004", Logo: LogoAmazon },
  },
  { id: "key-z", label: "z", eventKey: "z", w: 1 },
  {
    id: "key-e",
    label: "e",
    eventKey: "e",
    w: 1,
    brand: { bg: "white", border: "#0f8ce1", Logo: LogoIE },
  },
  {
    id: "key-r",
    label: "r",
    eventKey: "r",
    w: 1,
    brand: { bg: "#FCAF17", border: "black", Logo: LogoRockstar },
  },
  {
    id: "key-t",
    label: "t",
    eventKey: "t",
    w: 1,
    brand: { bg: "#CC0000", border: "white", Logo: LogoTesla },
  },
  {
    id: "key-y",
    label: "y",
    eventKey: "y",
    w: 1,
    brand: { bg: "white", border: "red", Logo: LogoYouTube },
  },
  {
    id: "key-u",
    label: "u",
    eventKey: "u",
    w: 1,
    brand: { bg: "white", border: "#000401", Logo: LogoUnreal },
  },
  {
    id: "key-i",
    label: "i",
    eventKey: "i",
    w: 1,
    brand: { bg: "#861310", border: "#f3e802", Logo: LogoIncredibles },
  },
  {
    id: "key-o",
    label: "o",
    eventKey: "o",
    w: 1,
    brand: { bg: "#0fa37f", border: "white", Logo: LogoGreenBrand },
  },
  {
    id: "key-p",
    label: "p",
    eventKey: "p",
    w: 1,
    brand: { bg: "#010101", border: "white", Logo: LogoPlayStation },
  },
  { id: "key-caret", label: "^", sub: "¨", eventKey: "^", w: 1 },
  { id: "key-dollar", label: "$", sub: "£", eventKey: "$", w: 1 },
  { id: "key-enter", label: "↵", eventKey: "Enter", eventCode: "Enter", w: 1.5 },
];

const ROW_CAPS: KeyConfig[] = [
  { id: "key-capslock", label: "Caps", eventKey: "CapsLock", eventCode: "CapsLock", w: 1.75 },
  {
    id: "key-q",
    label: "q",
    eventKey: "q",
    w: 1,
    brand: { bg: "white", border: "#d30027", Logo: LogoQuiznos },
  },
  {
    id: "key-s",
    label: "s",
    eventKey: "s",
    w: 1,
    brand: { bg: "#3a00f7", border: "#cc2229", Logo: LogoSuperman },
  },
  {
    id: "key-d",
    label: "d",
    eventKey: "d",
    w: 1,
    brand: { bg: "white", border: "#050000", Logo: LogoDominos },
  },
  { id: "key-f", label: "f", eventKey: "f", w: 1 },
  { id: "key-g", label: "g", eventKey: "g", w: 1 },
  { id: "key-h", label: "h", eventKey: "h", w: 1 },
  { id: "key-j", label: "j", eventKey: "j", w: 1 },
  {
    id: "key-k",
    label: "k",
    eventKey: "k",
    w: 1,
    brand: { bg: "#FFCF22", border: "white", Logo: LogoKodak },
  },
  {
    id: "key-l",
    label: "l",
    eventKey: "l",
    w: 1,
    brand: { bg: "red", border: "black", Logo: LogoLEGO },
  },
  {
    id: "key-m",
    label: "m",
    eventKey: "m",
    w: 1,
    brand: { bg: "#FFCF22", border: "white", Logo: LogoMMs },
  },
  { id: "key-ugrave", label: "ù", sub: "%", eventKey: "ù", w: 1 },
  { id: "key-asterisk", label: "*", sub: "µ", eventKey: "*", w: 1 },
  { id: "key-enter-bottom", label: "Enter", eventKey: "Enter", eventCode: "Enter", w: 1.25 },
];

const ROW_SHIFT: KeyConfig[] = [
  { id: "key-shift-left", label: "Shift", eventKey: "Shift", eventCode: "ShiftLeft", w: 2.25 },
  { id: "key-lt", label: "<", sub: ">", eventKey: "<", w: 1 },
  {
    id: "key-w",
    label: "w",
    eventKey: "w",
    w: 1,
    brand: { bg: "white", border: "#d30027", Logo: LogoWB },
  },
  {
    id: "key-x",
    label: "x",
    eventKey: "x",
    w: 1,
    brand: { bg: "#010101", border: "white", Logo: LogoCN },
  },
  { id: "key-c", label: "c", eventKey: "c", w: 1 },
  { id: "key-v", label: "v", eventKey: "v", w: 1 },
  { id: "key-b", label: "b", eventKey: "b", w: 1 },
  { id: "key-n", label: "n", eventKey: "n", w: 1 },
  { id: "key-comma", label: ",", sub: ";", eventKey: ",", w: 1 },
  { id: "key-period", label: ".", sub: ":", eventKey: ".", w: 1 },
  { id: "key-slash", label: "/", sub: "!", eventKey: "/", w: 1 },
  { id: "key-shift-right", label: "Shift", eventKey: "Shift", eventCode: "ShiftRight", w: 2.75 },
];

const ROW_BOTTOM: KeyConfig[] = [
  { id: "key-ctrl-left", label: "Ctrl", eventKey: "Control", eventCode: "ControlLeft", w: 1.5 },
  { id: "key-fn", label: "Fn", eventKey: "Fn", eventCode: "Fn", w: 1 },
  { id: "key-win", label: "⊞", eventKey: "Meta", eventCode: "MetaLeft", w: 1 },
  { id: "key-alt", label: "Alt", eventKey: "Alt", eventCode: "AltLeft", w: 1.25 },
  {
    id: "key-space",
    label: "",
    eventKey: " ",
    eventCode: "Space",
    w: 5,
    brand: { bg: "#010101", border: "white", Logo: LogoSpaceX },
  },
  { id: "key-altgr", label: "AltGr", eventKey: "AltGraph", eventCode: "AltRight", w: 1.25 },
  { id: "key-ctrl-right", label: "Ctrl", eventKey: "Control", eventCode: "ControlRight", w: 1 },
  { id: "key-arrow-left", label: "←", eventKey: "ArrowLeft", eventCode: "ArrowLeft", w: 0.75 },
  { id: "key-arrow-up", label: "↑", eventKey: "ArrowUp", eventCode: "ArrowUp", w: 0.75 },
  { id: "key-arrow-down", label: "↓", eventKey: "ArrowDown", eventCode: "ArrowDown", w: 0.75 },
  { id: "key-arrow-right", label: "→", eventKey: "ArrowRight", eventCode: "ArrowRight", w: 0.75 },
];

const KEYBOARD_ROWS: { id: string; keys: KeyConfig[] }[] = [
  { id: "row-fn", keys: ROW_FN },
  { id: "row-number", keys: ROW_NUMBER },
  { id: "row-azerty", keys: ROW_AZERTY },
  { id: "row-caps", keys: ROW_CAPS },
  { id: "row-shift", keys: ROW_SHIFT },
  { id: "row-bottom", keys: ROW_BOTTOM },
];

/* ═══════════════════════════════════════════════════════
   LAYOUT CONSTANTS
═══════════════════════════════════════════════════════ */
const KEY_UNIT = 48; // px per 1u width
const KEY_HEIGHT = 46; // px tall
const KEY_GAP = 5; // px gap between keys

function keyPx(w: number): number {
  // Width in pixels for a key of w units (includes proportional internal gaps)
  return w * KEY_UNIT + (w - 1) * KEY_GAP;
}

/* ═══════════════════════════════════════════════════════
   KEY COMPONENT
   Renders one physical key with optional brand logo
   and press animation driven by isPressed prop
═══════════════════════════════════════════════════════ */

type KeyProps = {
  config: KeyConfig;
  isPressed: boolean;
};

function Key({ config, isPressed }: KeyProps) {
  const hasBrand = !!config.brand;
  const { bg, border, Logo } = config.brand ?? {
    bg: "#010101",
    border: "rgba(255,255,255,0.85)",
    Logo: null,
  };

  const labelSize =
    config.label.length > 4
      ? "text-[8px]"
      : config.label.length > 2
        ? "text-[9px]"
        : config.label.length === 2
          ? "text-[10px]"
          : "text-[13px]";

  return (
    <div
      id={config.id}
      aria-label={config.label}
      role="img"
      className="flex-shrink-0 select-none"
      style={{ width: keyPx(config.w) }}
    >
      {/* Key cap — the visible press surface */}
      <div
        className="relative overflow-hidden"
        style={{
          height: KEY_HEIGHT,
          backgroundColor: bg,
          border: `3px solid ${border}`,
          borderRadius: 8,
          boxShadow: isPressed
            ? "2px 3px 1px rgba(200,200,200,0.25)"
            : "5px 8px 2.5px rgba(204,204,204,0.7)",
          transform: isPressed ? "translateY(3px)" : "translateY(0)",
          transition: isPressed
            ? "transform 0.07s cubic-bezier(0.1,0.9,0.5,1), box-shadow 0.07s ease"
            : "transform 0.14s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.14s ease",
        }}
      >
        {/* Brand logo fills the cap */}
        {hasBrand && Logo && (
          <div
            id={`${config.id}-logo`}
            className="absolute inset-0 flex items-center justify-center p-1.5"
          >
            <Logo />
          </div>
        )}

        {/* Character label — always present, hidden behind logo for brand keys */}
        <div
          id={`${config.id}-label`}
          className={`absolute bottom-0.5 left-1.5 flex flex-col items-start ${hasBrand ? "opacity-0" : "opacity-100"}`}
        >
          {config.sub && (
            <span className="text-white text-[7px] leading-none opacity-60 mb-px">
              {config.sub}
            </span>
          )}
          <span className={`text-white leading-none font-medium ${labelSize}`}>
            {config.label}
          </span>
        </div>

        {/* Pressed highlight rim */}
        {isPressed && (
          <div className="absolute inset-0 rounded-[5px] ring-1 ring-inset ring-white/20" />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   KEYBOARD ROW COMPONENT
═══════════════════════════════════════════════════════ */

type KeyboardRowProps = {
  id: string;
  keys: KeyConfig[];
  pressedKeys: Set<string>;
};

function KeyboardRow({ id, keys, pressedKeys }: KeyboardRowProps) {
  return (
    <div id={id} className="flex" style={{ gap: KEY_GAP }}>
      {keys.map((config) => {
        const isPressed =
          pressedKeys.has(config.eventKey) ||
          (config.eventCode ? pressedKeys.has(config.eventCode) : false);
        return <Key key={config.id} config={config} isPressed={isPressed} />;
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   AZERTY KEYBOARD COMPONENT
   HP Pavilion Gaming 15-dk1 layout
═══════════════════════════════════════════════════════ */

type AzertyKeyboardProps = {
  pressedKeys: Set<string>;
};

function AzertyKeyboard({ pressedKeys }: AzertyKeyboardProps) {
  return (
    <div
      id="keyboard-body"
      className="inline-block"
      style={{
        background: "#010101",
        border: "9px solid rgba(255,255,255,0.9)",
        borderRadius: 40,
        padding: "20px 24px",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div
        id="keyboard-rows"
        className="flex flex-col"
        style={{ gap: KEY_GAP + 3 }}
      >
        {KEYBOARD_ROWS.map(({ id, keys }) => (
          <KeyboardRow
            key={id}
            id={id}
            keys={keys}
            pressedKeys={pressedKeys}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   APP ROOT
   Wires keyboard events to the visual keyboard
═══════════════════════════════════════════════════════ */

export default function App() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Prevent browser shortcuts from interfering with the demo
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

    // Clear all on window blur (prevents stuck keys)
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
      {/* Header */}
      <div id="keyboard-header" className="text-center">
        <p
          className="text-white text-xs tracking-[0.3em] uppercase"
          style={{ opacity: 0.35 }}
        >
          HP Pavilion Gaming 15-dk1 · AZERTY
        </p>
      </div>

      {/* Scrollable wrapper for smaller screens */}
      <div
        id="keyboard-viewport"
        className="overflow-x-auto w-full flex justify-center"
      >
        <AzertyKeyboard pressedKeys={pressedKeys} />
      </div>

      {/* Footer hint */}
      <p
        className="text-white text-xs tracking-widest"
        style={{ opacity: 0.2 }}
      >
        Press any key
      </p>
    </div>
  );
}
