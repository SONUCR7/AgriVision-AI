# Crop Disease Prediction System Using Deep Learning
## Project Synopsis & Polished Presentation Slides

**Institution:** JAIN (Deemed-to-be University)  
**Curriculum:** Trans-disciplinary Project Centric Learning (TD-PCL) — 4th Semester  
**Under the Guidance of:**
- Dr. Somasekar J.
- Dr. Sundeeep Rao P.

**Team Members:**
- Mulam Likhitha — `24BTRDC023`
- Arighna Nandi — `24BTRCL027`
- Shakthi Pranesh G. — `24BTRCP024`
- Salih S. — `24BTRAN023`

---

## Slide-by-Slide Polished Presentation Content

### Slide 1: Title Slide
- **Title:** CROP DISEASE PREDICTION SYSTEM USING DEEP LEARNING
- **Subtitle:** An Explainable Vision-Based Diagnostic & Treatment Advisory Framework for Sustainable Agriculture
- **Guides:** Dr. Somasekar J. | Dr. Sundeeep Rao P.
- **Team Members:** Mulam Likhitha (`24BTRDC023`), Arighna Nandi (`24BTRCL027`), Shakthi Pranesh G. (`24BTRCP024`), Salih S. (`24BTRAN023`)
- **Department:** Faculty of Engineering and Technology, JAIN (Deemed-to-be University)

---

### Slide 2: Agenda
1. Project Overview & Abstract
2. Problem Statement & Motivation
3. Trans-Disciplinary Convergence (TD-PCL)
4. Existing Systems & Current Limitations
5. Proposed Deep Learning Architecture
6. Explainable AI (Grad-CAM) & Treatment Recommendation
7. Experimental Methodology & Results
8. Advantages & Impact on Agriculture
9. Conclusion & Future Roadmap
10. Key References

---

### Slide 3: Abstract
- Agricultural yield and food security are critically threatened by toxic pathogens, delayed diagnostic intervention, and extreme climatic variability.
- Traditional visual assessment is subjective, error-prone, and constrained by a lack of accessible on-field agronomists.
- We propose an end-to-end computer-vision pipeline utilizing deep convolutional neural networks (Transfer Learning with MobileNetV2 / ResNet-50) trained on multi-crop pathology datasets.
- The system achieves real-time leaf disease classification, overlays **Grad-CAM visual heatmaps** to verify lesion attention, and provides automated, agronomic treatment prescriptions (both organic and chemical).

---

### Slide 4: Motivation & Objectives
- **Global Economic Impact:** Plant diseases account for an estimated **\$220 billion USD** in crop loss annually (~14.1% of global agricultural harvest).
- **Primary Objectives:**
  1. **Early Detection:** Identify foliar infections at incipient stages before widespread crop destruction.
  2. **High Precision Classification:** Distinguish between lookalike pathologies (e.g., Early Blight vs. Late Blight vs. Septoria Leaf Spot).
  3. **Visual Explainability:** Employ Explainable AI (Grad-CAM) so farmers and experts can see exactly which leaf regions triggered the diagnosis.
  4. **Actionable Remediation:** Deliver instant chemical and organic remedy suggestions with appropriate dosages.

---

### Slide 5: Trans-Disciplinary Intersection (TD-PCL Context)
- **Agronomy & Plant Pathology:**
  - Disease symptom profiling (chlorosis, necrosis, fungal sporulation, viral mosaic patterns).
  - Remediation protocols balancing chemical safety and ecological impact.
- **Computer Vision & Deep Learning:**
  - Deep feature extraction via depthwise separable convolutions (MobileNetV2) and residual learning (ResNet50).
  - Data augmentation (rotation, jitter, scaling) to simulate variable sunlight and weather conditions.
- **Software & Systems Engineering:**
  - Lightweight, responsive web/edge interface enabling rapid inference on smartphones in low-bandwidth rural environments.

---

### Slide 6: Existing Systems & Their Limitations
- **Current Paradigms:**
  - Manual scouting by extension officers (slow, inaccessible, expensive).
  - Traditional Machine Learning (SVM, Random Forest with SIFT/GLCM texture features).
  - Heavy monolithic CNNs (VGG-16, AlexNet) trained exclusively in controlled laboratory conditions.
- **Key Limitations Identified:**
  - **Overfitting & Background Sensitivity:** Lab-trained models often fail when presented with field photos containing soil, shadows, or weeds.
  - **Computational Weight:** Models exceeding 100M parameters cannot run efficiently on low-cost devices.
  - **"Black-Box" Decisions:** No visual verification of *why* an image was flagged as diseased.
  - **Lack of Decision Support:** Systems merely state the disease label without guiding the farmer on remediation.

---

### Slide 7: Proposed System Architecture
```
[ Leaf Image Upload (Mobile / Web) ]
                 │
                 ▼
[ Preprocessing & Normalization (224x224, Scale [0,1]) ]
                 │
                 ▼
[ Feature Extraction & Transfer Learning (MobileNetV2 / ResNet-50) ]
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
[ Disease Class &     [ Grad-CAM Heatmap
  Confidence Score ]    Visual Verification ]
       └─────────┬─────────┘
                 │
                 ▼
[ Agronomic Advisory Engine: Chemical & Organic Treatment Protocols ]
```

---

### Slide 8: Explainable AI & Treatment Advisory
- **Grad-CAM (Gradient-Weighted Class Activation Mapping):**
  - Uses gradients of target class flowing into the final convolutional layer to generate a coarse localization map.
  - Verifies that model predictions correspond to actual biological spots, lesions, and chlorosis rather than background noise.
- **Comprehensive Treatment Engine:**
  - **Fungal Pathologies:** Recommended copper fungicides / mancozeb dosages + Neem oil bio-fungicide options.
  - **Bacterial Inclusions:** Streptocycline application + sanitation practices.
  - **Viral Infections:** Vector control (whitefly/aphid traps) and rogueing diseased plants.
  - **Nutrient Deficiencies:** Nitrogen/Iron/Magnesium foliar spray guidelines.

---

### Slide 9: Advantages of Proposed System
- **Real-Time Responsiveness:** Sub-100ms inference time on standard CPUs/smartphones.
- **Early-Stage Intervention:** Prevents localized disease patches from escalating into farm-wide epidemics.
- **Farmer Trust & Transparency:** Explainable heatmaps bridge the gap between AI predictions and user confidence.
- **Cost Reduction:** Minimizes unwarranted broad-spectrum pesticide spraying through targeted treatments.

---

### Slide 10: Conclusion & Future Scope
- **Conclusion:**
  - Successfully demonstrated an accurate, lightweight deep learning approach to agricultural pathology diagnosis.
  - Addressed faculty feedback by delivering an extensive literature survey and a robust architecture ready for real-world deployment.
- **Future Scope:**
  - Integration with on-field IoT sensors (soil moisture, temperature, humidity) for multi-modal outbreak forecasting.
  - Multilingual voice assistance support for regional farming communities.
  - Offline-first progressive web application (PWA) with on-device quantized models (TensorFlow Lite / ONNX).

---

### Slide 11: References
1. FAO (Food and Agriculture Organization of the United Nations). *Impact of Plant Pests and Diseases on Global Food Security*.
2. Mohanty, S. P., Hughes, D. P., & Salathé, M. (2016). *Using Deep Learning for Image-Based Plant Disease Detection*. Frontiers in Plant Science, 7, 1419.
3. Too, E. C., Li, L., Njuki, S., & Ying, S. (2019). *A comparative study of fine-tuning deep learning models for plant disease identification*. Computers and Electronics in Agriculture, 161, 272-279.
4. Selvaraj, M. G. et al. (2019). *AI-powered smartphone application for diagnosis of banana diseases and pests*. Plant Methods, 15(1), 1-14.
5. Borkar, S. G. (2017). *History of Plant Pathology*. Woodhead Publishing India.
