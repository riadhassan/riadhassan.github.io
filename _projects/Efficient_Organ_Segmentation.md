---
layout: page
title: Efficient Multi-Organ Segmentation
description: Funded by ICT Division
img: assets/img/organ_segmentation.png
importance: 1
category: Research
related_publications: True
---

## A deep learning framework for efficient and accurate organ segmentation.

Accurate segmentation of organs-at-risk (OAR) in CT scans is critical for radiation therapy and diagnostics, yet traditional manual methods are time-consuming and error-prone. While deep learning models like UNet and Vision Transformers (ViTs) have improved precision, they often **struggle with computational inefficiency and sensitivity to noisy data**. Our project addresses these gaps by developing an AI-powered framework that combines noise-adaptive training with lightweight inference, enabling real-time OAR segmentation even on low-resource devices. By integrating a dual-decoder architecture—one trained on noisy data for robustness and another kept clean for efficient deployment—we ensure both accuracy and practicality for clinical use.

The framework leverages **multi-scale feature extraction** and context-aware refinement to enhance segmentation quality. During training, a noise-augmented decoder exposes the model to realistic imaging variability, while the noise-free decoder ensures optimal performance during inference. Benchmarking against state-of-the-art models (e.g., TransUNet, SwinUNet) validates our approach’s superiority in both accuracy and speed. This solution bridges the gap between research and clinical deployment, prioritizing both precision and accessibility.

## Publication

1. An efficient dual-line decoder network with multi-scale convolutional attention for multi-organ segmentation. {% cite HASSAN2026108611 %}
