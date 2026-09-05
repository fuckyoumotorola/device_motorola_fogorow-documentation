# BROM

:::warning
Some of the information below is almost theoretical and it hadn't been proven yet
:::

:::warning
BROM mode itself is disabled by efuse, so it cannot be triggered with testpoint, Be extremely careful with what you do.
:::

:::info
Since this phone was released after 2022, BROM is no longer available without an exploit.<br />
[More info](https://github.com/melontini/bootloader-unlock-wall-of-shame/blob/main/brands/motorola/README.md)
:::

BROM (Boot ROM) - embedded bootloader in MediaTek (MTK) chips, which is launched first when the device is turned on. 

It is responsible for initial system initialization and allows firmware upload via COM port.

## Dumping BootROM

Since the BROM is processor-specific, we can use a copy of another device that use the same MT6768/MT6769 and use it to reverse engineer
In addition of this, the processor family MT6768 and MT6769 processor use the same BootROM, making it even easier to make an exploit to boot into this mode

You can download the dumped BROM here below

[BROM dump](https://raw.githubusercontent.com/fuckyoumotorola/device_motorola_fogorow-experiments-brom-mode/refs/heads/main/mt6768.bootrom.bin)

Additional info:

- Version: 0x707 (Can be extracted from [Preloader](preloader.mdx))