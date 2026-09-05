---
title: MtkClient
---

## Download MtkClient

1. Install the mtkclient from [here](https://github.com/bkerler/mtkclient)
2. Follow the [setup instructions](https://github.com/bkerler/mtkclient?tab=readme-ov-file#install)

## Security mechanisms info
````text
SBC enabled: True
SLA enabled: False
DAA enabled: True
````
- **SBC (Secure Boot Check)** - During device booting, the SBC checks the digital signatures of software components such as the bootloader, operating system kernel, and others. If the signature is invalid or missing, the device boot is aborted.
- **SLA (Serial Link Authentication)** - An authentication mechanism that verifies the authenticity of a connection between a device and a computer (or other device) during firmware, debugging, or other operations that require a connection.
- **DAA (Download Agent Authentication)** - Checking the DA Agent for authenticity used to flash the device.

## DA Agents

[Download all DA agents](https://github.com/fuckyoumotorola/device_motorola_fogorow-da-agents)

## Force BROM
Unfortunately, it looks like the firmware contains a patched Preloader, and in the event of a crash, the phone just hangs in Preloader without going to BROM.<br/>
Furthermore, BROM mode itself is disabled by efuse, so it cannot be triggered with testpoint, too.

````shell
$ mtk crash
Preloader - Status: Waiting for PreLoader VCOM, please reconnect mobile/iot device to brom mode
Port - Device detected :)
Preloader - Detected regular mode !
Preloader -     CPU:                    MT6768/MT6769(Helio P65/G85 k68v1)
Preloader -     HW version:             0x0
Preloader -     WDT:                    0x10007000
Preloader -     Uart:                   0x11002000
Preloader -     Brom payload addr:      0x100a00
Preloader -     DA payload addr:        0x201000
Preloader -     CQ_DMA addr:            0x10212000
Preloader -     Var1:                   0x25
Preloader - Disabling Watchdog...
Preloader - HW code:                    0x707
Preloader - Target config:              0x1
Preloader -     SBC enabled:            True
Preloader -     SLA enabled:            False
Preloader -     DAA enabled:            False
Preloader -     SWJTAG enabled:         False
Preloader -     EPP_PARAM at 0x600 after EMMC_BOOT/SDMMC_BOOT:  False
Preloader -     Root cert required:     False
Preloader -     Mem read auth:          False
Preloader -     Mem write auth:         False
Preloader -     Cmd 0xC8 blocked:       False
Preloader - Get Target info
Preloader -     HW subcode:             0x8a00
Preloader -     HW Ver:                 0xca00
Preloader -     SW Ver:                 0x0
Preloader - ME_ID:                      C6AE9DBA86CD560BE7391A7118DD43A4
Preloader - SOC_ID:                     5A9C873D2E9F07876B3408B9617D92CA2EDB602C0081A22CCAAF0385CB5A72E1
Mtk - We're not in bootrom, trying to crash da...
Exploitation - Crashing da...
Preloader
Preloader - [LIB]: upload_data failed with error: Unknown: 0x1d18
Preloader
Preloader - [LIB]: Error on uploading da data
Preloader - Status: Waiting for PreLoader VCOM, please reconnect mobile/iot device to brom mode

Port - Hint:

Power off the phone before connecting.
For brom mode, press and hold vol up, vol dwn, or all hw buttons and connect usb.
For preloader mode, don't press any hw button and connect usb.
If it is already connected and on, hold power for 10 seconds to reset.

Port - Device detected :)
Preloader - Detected regular mode !
Preloader -     CPU:                    MT6768/MT6769(Helio P65/G85 k68v1)
Preloader -     HW version:             0x0
Preloader -     WDT:                   0x10007000
Preloader -     Uart:                   0x11002000
Preloader -     Brom payload addr:      0x100a00
Preloader -     DA payload addr:        0x201000
Preloader -     CQ_DMA addr:            0x10212000
Preloader -     Var1:                   0x25
Preloader - Disabling Watchdog...
Preloader - HW code:                    0x707
Preloader - Target config:              0x1
Preloader -     SBC enabled:            True
Preloader -     SLA enabled:            False
Preloader -     DAA enabled:            False
Preloader -     SWJTAG enabled:         False
Preloader -     EPP_PARAM at 0x600 after EMMC_BOOT/SDMMC_BOOT:  False
Preloader -     Root cert required:     False
Preloader -     Mem read auth:          False
Preloader -     Mem write auth:         False
Preloader -     Cmd 0xC8 blocked:       False
Preloader - Get Target info
Preloader -     HW subcode:             0x8a00
Preloader -     HW Ver:                 0xca00
Preloader -     SW Ver:                 0x0
Preloader - ME_ID:                      C6AE9DBA86CD560BE7391A7118DD43A4
Preloader - SOC_ID:                     5A9C873D2E9F07876B3408B9617D92CA2EDB602C0081A22CCAAF0385CB5A72E1

$ mtk printgpt
MTK Flash/Exploit Client Public V2.0.1 (c) B.Kerler 2018-2024

DaHandler - Please disconnect, start mtkclient and reconnect.
````