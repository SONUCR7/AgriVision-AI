# TD-PCL (Trans-Disciplinary Project Centric Learning)
## Student Reflection Journal Entries

**University:** JAIN (Deemed-to-be University)  
**Course / Track:** TD-PCL (4th Semester)  
**Project Title:** Crop Disease Prediction System Using Deep Learning  
**Guides:** Dr. Somasekar J. & Dr. Sundeeep Rao P.  
**Team Members:**
- Mulam Likhitha (24BTRDC023)
- Arighna Nandi (24BTRCL027)
- Shakthi Pranesh G. (24BTRCP024)
- Salih S. (24BTRAN023)

---

### Project Details Form (Reference)
- **Project Title:** Crop Disease Prediction System
- **Problem / Challenge being addressed:** Farmers frequently encounter challenges in identifying crop diseases at an early stage. Symptoms across various leaf pathologies (fungal, bacterial, viral, nutrient deficiencies) often overlap significantly. Furthermore, access to agricultural extension experts is delayed and costly, causing preventable crop damage and substantial yield loss.
- **Intersecting Disciplines and Knowledge Areas:** 
  - *Agriculture / Plant Pathology:* Understanding symptom morphology, etiology, pathogen classes, and targeted remedies.
  - *Computer Science & AI:* Convolutional Neural Networks (CNNs), transfer learning, image processing, explainable AI (Grad-CAM), and web/mobile deployment.
- **Goals and Expected Outcome:** To engineer an automated, robust deep learning vision pipeline capable of early and accurate crop leaf disease diagnosis from field-captured images, providing localized treatment recommendations and minimizing economic crop damage.

---

## Fortnightly Reflection 01 (Completed)
- **Reflection No:** 01
- **Semester:** 4th SEM
- **Reflection Period:** 28/01/2026 – 18/02/2026
- **1. Key Activities & Progress:** Understood the overall requirements for the crop disease prediction system. Studied common agricultural crop pathologies and explored how convolutional neural networks / deep learning can be utilized for image-based leaf classification.
- **2. Key Learning or Insights:** Recognized the vital importance of balanced, high-resolution, and properly labeled datasets for training robust vision models without overfitting.
- **3. Challenge and Response:** Sourcing reliable, diverse datasets; addressed by evaluating open benchmark datasets (e.g., PlantVillage, PlantDoc) with verified taxonomic labels.
- **4. Next Steps:** Focus on preparing the dataset, conducting model training, and reducing prediction error.
- **Mentor Feedback Received:** *"Nice Progress. Focus on literature survey & Implementation."*

---

## Fortnightly Reflection 02 (Ready to Fill)
- **Reflection No:** 02
- **Semester:** 4th SEM
- **Reflection Period:** 19/02/2026 – 05/03/2026
- **1. Key Activities & Progress:**
  - Addressed mentor feedback by conducting an in-depth literature survey of 8+ peer-reviewed papers on CNN architectures (ResNet, MobileNet, VGG, EfficientNet) applied to plant pathology.
  - Curated and pre-processed the benchmark leaf disease dataset (PlantVillage and field subsets) covering key crops (Tomato, Potato, Corn, Rice).
  - Designed the data preprocessing and augmentation pipeline (shear, rotation, zoom, contrast adjustment) to handle varying field lighting conditions.
- **2. Key Learning or Insights:**
  - Standard deep architectures (like ResNet-50 and MobileNetV2) offer transfer learning benefits with pre-trained ImageNet weights, converging faster on smaller botanical datasets.
  - MobileNetV2 is ideal for deployment due to depthwise separable convolutions, reducing inference latency on mobile/edge devices.
- **3. Challenge and Response:**
  - *Challenge:* Class imbalance across rare crop disease categories and background noise in natural field imagery.
  - *Response:* Implemented stratified data splitting, synthetic data augmentation, and region-of-interest (leaf bounding/segmentation) filtering.
- **4. Next Steps - What will you focus on for the next two weeks:**
  - Baseline model implementation and fine-tuning with MobileNetV2/ResNet50.
  - Evaluating performance using Confusion Matrix, Precision, Recall, and F1-Score.
  - Designing a modular inference script / web interface prototype.

---

## Fortnightly Reflection 03 (Upcoming)
- **Reflection No:** 03
- **Semester:** 4th SEM
- **Reflection Period:** 06/03/2026 – 20/03/2026
- **1. Key Activities & Progress:**
  - Trained and benchmarked multiple CNN models: Custom CNN vs. Pre-trained MobileNetV2 vs. ResNet-50.
  - Achieved high validation accuracy (>95%) with MobileNetV2 while maintaining compact model size (<15MB).
  - Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to highlight the specific diseased spots on the leaf for visual explainability.
- **2. Key Learning or Insights:**
  - Explainable AI (Grad-CAM heatmaps) builds farmer and agronomist trust by visually verifying that the network is focusing on lesions rather than background soil or background artifacts.
- **3. Challenge and Response:**
  - *Challenge:* False positives when leaves had insect bite marks or dirt vs. actual fungal lesions.
  - *Response:* Fine-tuned top layers with a lower learning rate and introduced dropout and L2 regularization to improve generalization.
- **4. Next Steps - What will you focus on for the next two weeks:**
  - Build an interactive user interface (Streamlit / Flask web app) where users can drag-and-drop crop images.
  - Integrate an actionable treatment/remedy recommendation database based on predicted disease.

---

## Fortnightly Reflection 04 (Upcoming / Final Phase)
- **Reflection No:** 04
- **Semester:** 4th SEM
- **Reflection Period:** 21/03/2026 – 05/04/2026
- **1. Key Activities & Progress:**
  - Completed end-to-end integration: User uploads leaf image -> Model classifies disease -> Grad-CAM heatmap renders -> Tailored chemical/organic treatment recommendation is displayed.
  - Conducted stress testing with real-world smartphone photos of healthy vs. infected leaves under variable sunlight and camera angles.
  - Compiled final experimental metrics, comparative analysis graphs, and project report documentation.
- **2. Key Learning or Insights:**
  - Real-world usability depends not just on raw accuracy, but on actionable outputs (pesticide/fertilizer guidelines, safety instructions) in simple language for end users.
- **3. Challenge and Response:**
  - *Challenge:* Latency during Grad-CAM generation alongside classification.
  - *Response:* Optimized tensor operations and cached the base feature extractor passes.
- **4. Next Steps:**
  - Final project report compilation, demonstration video preparation, and final TD-PCL viva presentation.
