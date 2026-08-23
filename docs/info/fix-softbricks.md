---
title: Fix softbricks
---

## What is a softbrick

A softbrick is when a phone doesn't want to bootup making it unable to boot into system or fastboot. Generally with fogorow, the phone just throws a dm-verity error, but it may happen sometimes that it might stop booting at all.

## Difference between red state and softbrick

Red state is a specific term of [verified boot state](https://source.android.com/docs/security/features/verifiedboot/boot-flow#dm-verity-corruption), and it happens when the device cannot verify the signature of the image installed. To fix it, you have to reflash stock firmware. 

Softbrick, on the other hand, happens when the device cannot continue booting up the system.

## What to do?

Before doing anything else, determine how far the device is able to boot. A softbrick does **not** necessarily mean that the bootloader itself is damaged.

1. Force the device to reboot
   * Connect it to a PC and try holding **Volume Down + Power** until the bootloader/fastboot screen appears.

2. Reflash the **complete stock firmware** matching the exact device variant and firmware branch.
   * Use a firmware package for **FOGOROW** and preferably the same or a newer build than the one previously installed to prevent ANTI-ROLLBACK feature.