import "../src/styles.scss";
import * as BlockEditor from "../src/index";
import list from "./list";
import listItem from "./list-item";

const { hooks } = BlockEditor.wordpress;
const { domReady } = BlockEditor.wordpress;

hooks.addFilter(
  "blocks.registerBlockType",
  "block-editor",
  (settings, blockName) => {
    return settings;
  }
);

document.addEventListener("block-editor/init", (e) => {
  console.log(e);
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit", e);
});

const element = document.getElementById("content");
element.addEventListener("change", (e) => {
  console.log(e.target.value);
});

const settings = {
  __experimentalFeatures: {
    appearanceTools: false,
    blocks: {
      "core/button": {
        border: {
          radius: true,
        },
      },
      "core/pullquote": {
        border: {
          color: true,
          radius: true,
          style: true,
          width: true,
        },
      },
      "core/image": {
        behaviors: {
          lightbox: true,
        },
        border: {
          radius: true,
        },
      },
      "core/group": {
        border: {
          color: true,
          width: false,
          radius: true,
        },
        color: {
          background: true,
        },
      },
      "core/heading": {
        color: {
          text: true,
        },
      },
      "core/paragraph": {
        color: {
          text: true,
          link: true,
        },
      },
      "core/post-template": {
        border: {
          color: false,
          width: false,
          radius: true,
        },
      },
    },
    border: {
      color: false,
      radius: false,
      style: false,
      width: false,
    },
    color: {
      background: false,
      button: true,
      caption: true,
      customDuotone: false,
      defaultDuotone: false,
      defaultGradients: false,
      defaultPalette: false,
      duotone: {
        theme: [
          {
            name: "Dark grayscale",
            colors: ["#000000", "#7f7f7f"],
            slug: "dark-grayscale",
          },
          {
            name: "Grayscale",
            colors: ["#000000", "#ffffff"],
            slug: "grayscale",
          },
          {
            name: "Purple and yellow",
            colors: ["#8c00b7", "#fcff41"],
            slug: "purple-yellow",
          },
          {
            name: "Blue and red",
            colors: ["#000097", "#ff4747"],
            slug: "blue-red",
          },
          {
            name: "Midnight",
            colors: ["#000000", "#00a5ff"],
            slug: "midnight",
          },
          {
            name: "Magenta and yellow",
            colors: ["#c7005a", "#fff278"],
            slug: "magenta-yellow",
          },
          {
            name: "Purple and green",
            colors: ["#a60072", "#67ff66"],
            slug: "purple-green",
          },
          {
            name: "Blue and orange",
            colors: ["#1900d8", "#ffa96b"],
            slug: "blue-orange",
          },
        ],
        default: [],
      },
      gradients: {
        theme: [
          {
            name: "Vivid cyan blue to vivid purple",
            gradient:
              "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
            slug: "vivid-cyan-blue-to-vivid-purple",
          },
          {
            name: "Light green cyan to vivid green cyan",
            gradient:
              "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
            slug: "light-green-cyan-to-vivid-green-cyan",
          },
          {
            name: "Luminous vivid amber to luminous vivid orange",
            gradient:
              "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
            slug: "luminous-vivid-amber-to-luminous-vivid-orange",
          },
          {
            name: "Luminous vivid orange to vivid red",
            gradient:
              "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
            slug: "luminous-vivid-orange-to-vivid-red",
          },
          {
            name: "Very light gray to cyan bluish gray",
            gradient:
              "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
            slug: "very-light-gray-to-cyan-bluish-gray",
          },
          {
            name: "Cool to warm spectrum",
            gradient:
              "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
            slug: "cool-to-warm-spectrum",
          },
          {
            name: "Blush light purple",
            gradient:
              "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
            slug: "blush-light-purple",
          },
          {
            name: "Blush bordeaux",
            gradient:
              "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
            slug: "blush-bordeaux",
          },
          {
            name: "Luminous dusk",
            gradient:
              "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
            slug: "luminous-dusk",
          },
          {
            name: "Pale ocean",
            gradient:
              "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
            slug: "pale-ocean",
          },
          {
            name: "Electric grass",
            gradient:
              "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
            slug: "electric-grass",
          },
          {
            name: "Midnight",
            gradient:
              "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
            slug: "midnight",
          },
        ],
        default: [],
      },
      heading: true,
      link: false,
      palette: {
        theme: [
          {
            name: "Black",
            slug: "black",
            color: "#000000",
          },
          {
            name: "Cyan bluish gray",
            slug: "cyan-bluish-gray",
            color: "#abb8c3",
          },
          {
            name: "White",
            slug: "white",
            color: "#ffffff",
          },
          {
            name: "Pale pink",
            slug: "pale-pink",
            color: "#f78da7",
          },
          {
            name: "Vivid red",
            slug: "vivid-red",
            color: "#cf2e2e",
          },
          {
            name: "Luminous vivid orange",
            slug: "luminous-vivid-orange",
            color: "#ff6900",
          },
          {
            name: "Luminous vivid amber",
            slug: "luminous-vivid-amber",
            color: "#fcb900",
          },
          {
            name: "Light green cyan",
            slug: "light-green-cyan",
            color: "#7bdcb5",
          },
          {
            name: "Vivid green cyan",
            slug: "vivid-green-cyan",
            color: "#00d084",
          },
          {
            name: "Pale cyan blue",
            slug: "pale-cyan-blue",
            color: "#8ed1fc",
          },
          {
            name: "Vivid cyan blue",
            slug: "vivid-cyan-blue",
            color: "#0693e3",
          },
          {
            name: "Vivid purple",
            slug: "vivid-purple",
            color: "#9b51e0",
          },
        ],
        default: [],
      },
      text: false,
    },
    custom: {
      color: {
        primary: "hsla(355, 82%, 49%, 1)",
        secondary: "hsla(202, 100%, 32%, 1)",
        "secondary-dark": "hsla(217, 59%, 33%, 1)",
        error: "var(--wp--custom--color--primary)",
        success: "var(--wp--custom--color--secondary)",
        focus: "hsl(52, 100%, 50%, 1)",
        base: "hsl(0, 0%, 100%, 1)",
        contrast: "var(--wp--custom--color--neutral--700)",
        neutral: {
          100: "hsla(0, 0%, 99%, 1)",
          200: "hsla(204, 20%, 94%, 1)",
          300: "hsla(0, 0%, 86%, 1)",
          400: "hsla(0, 0%, 75%, 1)",
          500: "hsla(0, 0%, 56%, 1)",
          600: "hsla(0, 0%, 43%, 1)",
          700: "hsla(0, 0%, 28%, 1)",
          800: "hsla(0, 0%, 11%, 1)",
        },
      },
      "gradient-offset": "150px",
      layout: {
        content: "1536px",
        padding: "var(--wp--preset--spacing--xl)",
        gap: "var(--wp--preset--spacing--2-xl)",
      },
      lineHeight: {
        none: "1",
        tight: "1.1",
        snug: "1.25",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      transitionDuration: {
        quick: "100ms",
        base: "250ms",
        slow: "600ms",
      },
    },
    layout: {
      contentSize: "var(--wp--custom--layout--content)",
    },
    shadow: {
      defaultPresets: false,
      presets: {
        default: [
          {
            name: "Natural",
            slug: "natural",
            shadow: "6px 6px 9px rgba(0, 0, 0, 0.2)",
          },
          {
            name: "Deep",
            slug: "deep",
            shadow: "12px 12px 50px rgba(0, 0, 0, 0.4)",
          },
          {
            name: "Sharp",
            slug: "sharp",
            shadow: "6px 6px 0px rgba(0, 0, 0, 0.2)",
          },
          {
            name: "Outlined",
            slug: "outlined",
            shadow:
              "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)",
          },
          {
            name: "Crisp",
            slug: "crisp",
            shadow: "6px 6px 0px rgba(0, 0, 0, 1)",
          },
        ],
      },
    },
    spacing: {
      blockGap: true,
      margin: true,
      spacingScale: {
        operator: "*",
        increment: 1.5,
        steps: 7,
        mediumStep: 1.5,
        unit: "rem",
      },
      spacingSizes: {
        theme: [
          {
            name: "1",
            slug: "20",
            size: "0.44rem",
          },
          {
            name: "2",
            slug: "30",
            size: "0.67rem",
          },
          {
            name: "3",
            slug: "40",
            size: "1rem",
          },
          {
            name: "4",
            slug: "50",
            size: "1.5rem",
          },
          {
            name: "5",
            slug: "60",
            size: "2.25rem",
          },
          {
            name: "6",
            slug: "70",
            size: "3.38rem",
          },
          {
            name: "7",
            slug: "80",
            size: "5.06rem",
          },
        ],
      },
    },
    typography: {
      dropCap: false,
      fontSizes: {
        theme: [
          {
            name: "XS",
            slug: "xs",
            size: "14px",
            fluid: false,
          },
          {
            name: "Small",
            slug: "sm",
            size: "16px",
            fluid: false,
          },
          {
            name: "Base",
            slug: "base",
            size: "18px",
            fluid: {
              min: "16px",
              max: "18px",
            },
          },
          {
            name: "Medium",
            slug: "md",
            size: "20px",
            fluid: {
              min: "18px",
              max: "20px",
            },
          },
          {
            name: "Large",
            slug: "lg",
            size: "24px",
            fluid: {
              min: "20px",
              max: "24px",
            },
          },
          {
            name: "XL",
            slug: "xl",
            size: "34px",
            fluid: {
              min: "28px",
              max: "34px",
            },
          },
          {
            name: "2XL",
            slug: "2-xl",
            size: "48px",
            fluid: {
              min: "34px",
              max: "48px",
            },
          },
          {
            name: "3XL",
            slug: "3-xl",
            size: "60px",
            fluid: {
              min: "42px",
              max: "60px",
            },
          },
          {
            name: "4XL",
            slug: "4-xl",
            size: "96px",
            fluid: {
              min: "60px",
              max: "96px",
            },
          },
        ],
      },
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      textColumns: false,
      textDecoration: true,
      textTransform: true,
      writingMode: false,
      fluid: true,
      fontFamilies: {
        theme: [
          {
            name: "Sans",
            slug: "sans",
            fontFamily: '"Figtree", sans-serif',
            fontFace: [
              {
                fontFamily: "Figtree",
                fontDisplay: "swap",
                fontWeight: "400",
                src: ["file:./assets/fonts/figtree-v4-latin-regular.woff2"],
              },
              {
                fontFamily: "Figtree",
                fontDisplay: "swap",
                fontWeight: "400",
                fontStyle: "italic",
                src: ["file:./assets/fonts/figtree-v4-latin-italic.woff2"],
              },
              {
                fontFamily: "Figtree",
                fontDisplay: "swap",
                fontWeight: "700",
                fontStyle: "regular",
                src: ["file:./assets/fonts/figtree-v4-latin-700.woff2"],
              },
              {
                fontFamily: "Figtree",
                fontDisplay: "swap",
                fontWeight: "700",
                fontStyle: "italic",
                src: ["file:./assets/fonts/figtree-v4-latin-700italic.woff2"],
              },
            ],
          },
        ],
      },
    },

    useRootPaddingAwareAlignments: true,
  },
  __unstableGalleryWithImageBlocks: true,
  __unstableIsBlockBasedTheme: true,
  alignWide: false,
  allowedBlockTypes: true,
  allowedBlocks: ["core/list", "core/list-item"],
  bodyPlaceholder: "Type / to choose a block",
  disableCustomColors: true,
  disableCustomFontSizes: true,
  disableCustomGradients: true,
  disableCustomSpacingSizes: false,
  disableLayoutStyles: false,
  disablePostFormats: true,
  enableCustomLineHeight: false,
  enableCustomSpacing: true,
  enableCustomUnits: ["%", "px", "rem", "vh", "vw"],
  fontSizes: [
    {
      name: "XS",
      slug: "xs",
      size: "14px",
      fluid: false,
    },
    {
      name: "Small",
      slug: "sm",
      size: "16px",
      fluid: false,
    },
    {
      name: "Base",
      slug: "base",
      size: "18px",
      fluid: {
        min: "16px",
        max: "18px",
      },
    },
    {
      name: "Medium",
      slug: "md",
      size: "20px",
      fluid: {
        min: "18px",
        max: "20px",
      },
    },
    {
      name: "Large",
      slug: "lg",
      size: "24px",
      fluid: {
        min: "20px",
        max: "24px",
      },
    },
    {
      name: "XL",
      slug: "xl",
      size: "34px",
      fluid: {
        min: "28px",
        max: "34px",
      },
    },
    {
      name: "2XL",
      slug: "2-xl",
      size: "48px",
      fluid: {
        min: "34px",
        max: "48px",
      },
    },
    {
      name: "3XL",
      slug: "3-xl",
      size: "60px",
      fluid: {
        min: "42px",
        max: "60px",
      },
    },
    {
      name: "4XL",
      slug: "4-xl",
      size: "96px",
      fluid: {
        min: "60px",
        max: "96px",
      },
    },
  ],
  gradients: [
    {
      name: "Neutral to Base: Half",
      slug: "neutral-to-base-half",
      gradient:
        "linear-gradient(to bottom, var(--wp--custom--color--neutral--200) 50%, var(--wp--custom--color--base) 50%)",
    },
    {
      name: "Base to Neutral: Half",
      slug: "base-to-neutral-half",
      gradient:
        "linear-gradient(to top, var(--wp--custom--color--neutral--200) 50%, var(--wp--custom--color--base) 50%)",
    },
    {
      name: "Base to Neutral: Thirds",
      slug: "base-to-neutral-thirds",
      gradient:
        "linear-gradient(180deg, var(--wp--custom--color--base) 66.6%, var(--wp--custom--color--neutral--200) 66.6%)",
    },
    {
      name: "Neutral to Base: Offset",
      slug: "neutral-to-base-offset",
      gradient:
        "linear-gradient(to bottom, var(--wp--custom--color--neutral--200) calc(100% - var(--wp--custom--gradient-offset)), var(--wp--custom--color--base) calc(100% - var(--wp--custom--gradient-offset)))",
    },
    {
      name: "Base to Neutral: Offset",
      slug: "base-to-neutral-offset",
      gradient:
        "linear-gradient(to top, var(--wp--custom--color--neutral--200) calc(100% - var(--wp--custom--gradient-offset)), var(--wp--custom--color--base) calc(100% - var(--wp--custom--gradient-offset)))",
    },
  ],
  imageDefaultSize: "large",
  imageDimensions: {
    thumbnail: {
      width: 150,
      height: 150,
      crop: true,
    },
    medium: {
      width: 300,
      height: 300,
      crop: false,
    },
    large: {
      width: 1024,
      height: 1024,
      crop: false,
    },
    "extra-wide": {
      width: 794,
      height: 376,
      crop: true,
    },
    square: {
      width: 600,
      height: 600,
      crop: true,
    },
  },
  imageSizes: [
    {
      slug: "thumbnail",
      name: "Thumbnail",
    },
    {
      slug: "medium",
      name: "Medium",
    },
    {
      slug: "large",
      name: "Large",
    },
    {
      slug: "full",
      name: "Full Size",
    },
    {
      slug: "extra-wide",
      name: "Extra Wide",
    },
    {
      slug: "square",
      name: "Square",
    },
  ],
  richEditingEnabled: true,
  spacingSizes: [
    {
      name: "XS",
      size: "4px",
      slug: "xs",
    },
    {
      name: "Small",
      size: "8px",
      slug: "sm",
    },
    {
      name: "Medium",
      size: "12px",
      slug: "md",
    },
    {
      name: "Large",
      size: "16px",
      slug: "lg",
    },
    {
      name: "XL",
      size: "24px",
      slug: "xl",
    },
    {
      name: "2XL",
      size: "clamp(24px, 4.166vw, 32px)",
      slug: "2-xl",
    },
    {
      name: "3XL",
      size: "clamp(32px, 6.25vw, 48px)",
      slug: "3-xl",
    },
    {
      name: "4XL",
      size: "clamp(48px, 8.333vw, 72px)",
      slug: "4-xl",
    },
    {
      name: "5XL",
      size: "clamp(72px, 12.5vw, 112px)",
      slug: "5-xl",
    },
    {
      name: "6XL",
      size: "clamp(112px, 12.5vw, 120px)",
      slug: "6-xl",
    },
    {
      name: "7XL",
      size: "clamp(120px, 12.5vw, 160px)",
      slug: "7-xl",
    },
  ],
  supportsLayout: true,
  supportsTemplateMode: true,

  mediaUpload: ({ filesList, onFileChange }) => {
    const files = Array.from(filesList).map(window.URL.createObjectURL);

    onFileChange(files);

    setTimeout(() => {
      const uploadedFiles = Array.from(filesList).map((file) => {
        return {
          id: file.name,
          name: file.name,
          url: `https://dummyimage.com/600x400/000/fff&text=${file.name}`,
        };
      });
      onFileChange(uploadedFiles);
    }, 1000);
  },
};

BlockEditor.initializeEditor(element, settings);

list();
listItem();
