---
title: SCP
---

## What is SCP?

SCP in MediaTek is the **System Companion Processor**, a dedicated co-processor integrated into many MediaTek SoCs (primarily Cortex-M4F, later also RISC-V variants). It runs independently from the Application Processor (AP – the main Cortex-A cores) and is managed from Linux through the remoteproc framework (`mtk_scp` / `mtk_scp_ipi`).

Its main role is to offload low-power, always-on or real-time tasks from the AP. The most common implementation found in production firmwares (such as the `scp.img` image) is a full **sensor hub / Context Hub** based on FreeRTOS + Google’s CHRE (Context Hub Runtime Environment).

### Key characteristics

| Aspect                    | Detail                                         |
|---------------------------|----------------------------------------------- |
| Architecture              | ARM Cortex-M4F (with FPU) or RISC-V            |
| OS                        | FreeRTOS (GCC/ARM_CM4F port + heap_4)          |
| Runtime / Framework       | TinySYS + CHRE                                 |
| Communication with AP     | IPI + shared memory + rpmsg/CHRE channels      |
| Firmware identifier       | `tinysys-scp-CM4_A` / `tinysys-scp-CM4_A_dram` |
| Typical size              | ~600–700 KB                                    |
| Bootloader interaction    | Loaded by LK (Little Kernel)                   |

## Main responsibilities

- Sensor hub
  Continuous low-power reading and processing of:
  - Accelerometer + Gyroscope (e.g. ICM4N607 / ICM42607)
  - Magnetometer (e.g. MMC5603)
  - ALS + Proximity (e.g. MN78xxx series)
- Advanced on-device calibration (online gyro calibration, over-temperature compensation, stillness detection, etc.)
- Gesture recognition (FLIP TWIST, CHOP CHOP, etc.)
- Power management of the sensor subsystem
- Communication of processed sensor data and events to the Application Processor

In some platforms (especially Chromebooks) the same SCP hardware is also used for Multimedia Data Path (MDP) tasks, video-related offloading, and ChromeOS EC communication. The exact feature set depends on the firmware loaded.

## Firmware structure (`scp.img`)

1. TinySYS Loader (`tinysys-loader-CM4_A`)
2. MediaTek certificates / signatures
3. Main SCP image (`tinysys-scp-CM4_A`)
4. Optional DRAM section (`tinysys-scp-CM4_A_dram`)
5. FreeRTOS kernel + CHRE runtime
6. Sensor drivers + calibration algorithms + gesture library

## Driver source code

- [Linux kernel driver source code](https://github.com/fuckyoumotorola/android_kernel_motorola_mt6768/blob/main/drivers/remoteproc/mtk_scp.c)