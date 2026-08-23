import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "About",
      id: "about",
    },
    {
      type: "category",
      label: "Info",
      items: ["info/device-info", "info/fix-softbricks", "info/disassembling", "info/exploits", "info/things-to-avoid", "info/paks"],
    },
    {
      type: "category",
      label: "Modes",
      items: ["modes/recovery", "modes/fastboot", "modes/metamode", "modes/brom", "modes/preloader", "modes/pcs"],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "dev/bootloader",
        "dev/testpoints",
        "dev/partitions",
        "dev/tools",
      ],
    },
    {
      type: "category",
      label: "Modding",
      items: [
        "modding/custom-bootloader",
        "modding/custom-recovery",
        "modding/root",
        "modding/custom-logo",
        "modding/gsi",
        "modding/custom-roms",
        "modding/gcam",
      ],
    },
    {
      type: "category",
      label: "GSI Roms and Custom Roms",
      items: ["gsi_roms/info", "gsi_roms/rating"],
    }
  ],
};

export default sidebars;
