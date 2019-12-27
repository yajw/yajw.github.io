---
title: ArchLinux 安装引导记录
comments: true
date: 2019-12-20 00:00:00
tags: [linux, grub, 笔记]
categories: 实用
---

参考：https://www.jianshu.com/p/7c78dc4c53e5

以下mvne0n1p5为boot分区。

/boot格式化：`mkfs.fat -F32 /dev/nvme0n1p5`

挂载根目录/mnt后，需要挂载/boot/efi：
```bash
mkdir -p /mnt/boot/efi
mount /dev/nvme0n1p5 /mnt/boot/efi
```

切换到arch后，
```bash
pacman -S intel-ucode os-prober grub efibootmgr
grub-install --target=i386-pc /dev/nvme0n1
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ArchLinux
grub-mkconfig -o /boot/grub/grub.cfg
```
