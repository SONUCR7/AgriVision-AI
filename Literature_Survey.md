# Literature Survey: Crop Leaf Disease Prediction Using Deep Learning

**Project:** Crop Disease Prediction System  
**Team Members:** Mulam Likhitha, Arighna Nandi, Shakthi Pranesh G., Salih S.  
**Supervisors:** Dr. Somasekar J. & Dr. Sundeeep Rao P.  
**Institution:** JAIN (Deemed-to-be University) — TD-PCL 4th Semester  

---

## 1. Executive Summary & Research Gap
Early detection and accurate diagnosis of plant diseases are fundamental to preventing severe agricultural yield losses (estimated globally at over \$220 billion annually). Traditional manual inspection by agronomists is labor-intensive, slow, and inaccessible to smallholder farmers. 

While classical machine learning techniques (SVM, Random Forest with hand-crafted SIFT/GLCM texture features) established the groundwork, they struggle with high intraclass variance, natural lighting fluctuations, and overlapping lesion geometries. Deep Convolutional Neural Networks (CNNs) have emerged as the state-of-the-art solution. 

However, existing literature reveals clear limitations:
1. **Lab vs. Field Discrepancy:** High accuracy on clean, lab-captured datasets (e.g., PlantVillage with uniform grey/black backgrounds) drops by 15–30% when tested on field images with complex backgrounds (soil, weeds, shadows).
2. **Lack of Explainability (Black-box Nature):** Most models output a label without demonstrating whether the classification was derived from pathology lesions or background artifacts.
3. **Absence of Actionable Intervention:** Most systems stop at classification without recommending immediate, localized, dosage-specific agronomic treatments.

Our proposed system bridges this gap by combining transfer learning (MobileNetV2 / ResNet50), Grad-CAM visual lesion explainability, and an integrated treatment advisory engine.

---

## 2. Comprehensive Literature Review Matrix

| Ref No. | Authors & Year | Paper Title / Publication | Methodology / Model | Dataset Used | Reported Accuracy | Limitations / Research Gaps |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **[1]** | Mohanty, Hughes, & Salathé (2016) | *Using Deep Learning for Image-Based Plant Disease Detection* (Frontiers in Plant Science) | AlexNet, GoogLeNet (Inception v1) | PlantVillage (54,306 images, 14 crops, 26 diseases) | 99.35% (GoogLeNet) | Severe performance drop when evaluated on images taken under real field conditions; lacks lesion localization. |
| **[2]** | Ferentinos, C. A. (2018) | *Deep learning models for plant disease detection and diagnosis* (Computers and Electronics in Agriculture) | VGG-16, VGG-19, AlexNet, GoogLeNet | 87,848 images (58 distinct classes) | 99.53% (VGG) | VGG models are excessively heavy (~500 MB) for deployment on edge devices or mobile phones; susceptible to overfitting on background cues. |
| **[3]** | Too, E. C. et al. (2019) | *A comparative study of fine-tuning deep learning models for plant disease identification* (Computers and Electronics in Agriculture) | VGG-16, Inception V4, ResNet-50, DenseNet-121 | PlantVillage dataset | 99.75% (DenseNet) | High training computational overhead; no explainability mechanism (Grad-CAM) to verify disease region focus. |
| **[4]** | Singh, A. K. et al. (2020) | *PlantDoc: A Dataset for Visual Plant Disease Detection in the Wild* (ACM IKDD CoDS-COMAD) | Faster R-CNN, MobileNet SSD | PlantDoc (2,598 images across 13 plant species, 17 diseases) | 70.53% mAP | Demonstrates realistic field degradation; highlights the need for robust feature extraction under background clutter. |
| **[5]** | Selvaraj, M. G. et al. (2019) | *AI-powered smartphone application for diagnosis of banana diseases and pests* (Plant Methods) | MobileNetV2 with SSD detector | Field-collected banana dataset (3,600+ images) | 90.0% field accuracy | Limited to a single crop (banana); required significant manual annotation of bounding boxes. |
| **[6]** | Chen, J. et al. (2020) | *Using deep transfer learning for image-based plant disease identification* (Computers and Electronics in Agriculture) | Transfer learning with pre-trained VGGNet and MobileNet | Public agricultural datasets | 96.2% | Lacked real-time interactive user interface and integrated agronomic remediation advice. |
| **[7]** | Atila, Ü. et al. (2021) | *Plant leaf disease detection using EfficientNet deep learning model* (Ecological Informatics) | EfficientNet (B0 to B7) | PlantVillage dataset | 99.91% (EfficientNet-B5) | Computationally intensive parameter tuning; did not evaluate latency on consumer-grade mobile devices. |
| **[8]** | Hassan, S. M. et al. (2021) | *Identification of plant leaf diseases using deep CNN models and explainable AI (XAI)* (IEEE Access) | ResNet-50 + Grad-CAM, LIME | PlantVillage and Rice Leaf Dataset | 98.4% | Highlighted the necessity of XAI to ensure neural attention aligns with biological disease lesions rather than background soil. |

---

## 3. Comparison of Common Deep Learning Architectures for Plant Pathology

| Architecture | Parameters | Model Size | Inference Speed (CPU) | Suitability for Farm Deployment | Strengths & Weaknesses |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VGG-16** | ~138 Million | ~528 MB | Slow (~120 ms) | Poor (Too heavy) | Excellent feature maps, but massive size causes memory bottlenecks on edge/mobile devices. |
| **ResNet-50** | ~25.6 Million | ~98 MB | Medium (~45 ms) | Moderate | Residual skip connections prevent vanishing gradient problem, high accuracy, moderate resource demand. |
| **MobileNetV2** | **~3.5 Million** | **~14 MB** | **Fast (<15 ms)** | **Optimal (Recommended)** | Uses inverted residual blocks and depthwise separable convolutions; minimal memory footprint with high accuracy. |
| **EfficientNet-B0** | ~5.3 Million | ~21 MB | Fast (~20 ms) | High | Balances depth, width, and resolution scaling; requires careful hyperparameter tuning. |

---

## 4. Key Takeaways Informing Our Proposed Implementation

1. **Model Selection:** **MobileNetV2** is selected as the primary backbone due to its low parameter count (3.5M) and sub-15ms inference latency, making it ideal for rural deployment on web/mobile apps. **ResNet-50** is maintained as a high-precision benchmark.
2. **Explainability Integration:** Implementing **Grad-CAM (Gradient-Weighted Class Activation Mapping)** is essential to display activation heatmaps over the leaf, validating model decision-making against expert agronomic criteria.
3. **Post-Classification Actionability:** Classification is coupled with an actionable knowledge base providing:
   - Pathogen etiology (Fungal / Bacterial / Viral / Pest).
   - Recommended chemical control (active ingredient, dosage/liter).
   - Eco-friendly organic remedies (Neem oil, trichoderma, cultural practices).
   - Preventative management guidelines.
