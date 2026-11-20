# An Explainable Deep Transfer Learning Architecture with Grad-CAM for Incipient Crop Foliar Pathology Detection and Agronomic Advisory

**Mulam Likhitha$^1$, Arighna Nandi$^2$, Shakthi Pranesh G.$^3$, Salih S.$^4$**  
Department of Computer Science and Engineering, Faculty of Engineering and Technology  
JAIN (Deemed-to-be University), Bangalore, India  
Email: `{24BTRDC023, 24BTRCL027, 24BTRCP024, 24BTRAN023}@jainuniversity.ac.in`  

**Dr. Somasekar J.$^5$, Dr. Sundeeep Rao P.$^6$**  
Faculty of Engineering and Technology, JAIN (Deemed-to-be University), Bangalore, India  
*(Faculty Mentors & Supervisors)*  

---

### Abstract
Agricultural productivity faces perpetual risk from plant foliar pathologies, causing estimated annual economic damages exceeding \$220 billion USD worldwide. Conventional diagnosis relies on visual inspection by domain specialists, which is labor-constrained, subjective, and practically inaccessible to smallholder agrarian communities. Although classical Convolutional Neural Networks (CNNs) have achieved notable classification performance on benchmark datasets, two fundamental limitations persist: (1) heavy monolithic architectures that are infeasible for resource-constrained edge/mobile deployment, and (2) the uninterpretable "black-box" nature of deep representations, which impedes user trust among agronomists and farmers. To surmount these challenges, this study presents a lightweight, trans-disciplinary deep transfer learning framework utilizing MobileNetV2 with depthwise separable convolutions, coupled with Gradient-weighted Class Activation Mapping (Grad-CAM) for visual explainability. The proposed architecture was evaluated across multi-crop benchmark datasets encompassing tomato, potato, rice, and maize pathologies. Experimental findings demonstrate that the optimized MobileNetV2 model attains an overall validation accuracy of 97.4% with a model footprint of merely 14.1 MB and sub-15ms inference latency per frame on commodity hardware. Crucially, Grad-CAM activation maps verified that feature representations faithfully align with biologically relevant necrotic and chlorotic lesion boundaries rather than spurious background soil or lighting artifacts. Furthermore, the model is integrated into a decision-support advisory module delivering precise, dosage-specific chemical and eco-friendly biological remediation guidelines.

**Keywords:** Deep Learning, Convolutional Neural Networks, Crop Pathology Diagnosis, Transfer Learning, MobileNetV2, Explainable Artificial Intelligence (XAI), Grad-CAM, Precision Agriculture.

---

### I. INTRODUCTION
Agriculture constitutes the socioeconomic backbone of developing economies, employing over a billion individuals globally. However, crop yield potential is continuously eroded by biotic stresses, including fungal, bacterial, viral, and oomycete pathogens. According to the Food and Agriculture Organization (FAO), global crop losses attributable to diseases average 14.1% annually, corresponding to severe food insecurity and substantial economic depletion.

In traditional agricultural ecosystems, disease diagnosis is conducted via manual scouting. This methodology suffers from notable bottlenecks:
1. Symptoms of different pathologies frequently exhibit overlapping morphological traits (e.g., Early Blight vs. Late Blight vs. Septoria Leaf Spot), leading to diagnostic ambiguity.
2. Agricultural extension officers are geographically scarce in rural areas, resulting in delayed interventions.
3. Injudicious, preemptive application of broad-spectrum synthetic chemical pesticides degrades soil microbiomes, contaminates groundwater, and induces pesticide resistance.

With recent breakthroughs in computer vision and deep learning, automated image-based pathology identification has emerged as a promising avenue. Nevertheless, most existing systems remain academic exercises confined to high-compute laboratory servers, failing to address two operational requirements: real-time edge inspectability and visual interpretability. 

This research, formulated within the Trans-Disciplinary Project Centric Learning (TD-PCL) paradigm at JAIN (Deemed-to-be University), bridges **Computer Science** (deep learning, model compression, explainable AI) and **Agronomy** (etiology, biological control agents, phytopathology). The primary contributions of this paper are threefold:
1. **Lightweight Edge-Ready Feature Extractor:** Implementation and fine-tuning of an inverted residual MobileNetV2 model achieving superior classification accuracy with minimal memory consumption.
2. **Visual Verification through Grad-CAM:** Extraction of coarse saliency heatmaps to visually validate whether network activations correspond to true pathological lesions.
3. **End-to-End Agronomic Remediation Engine:** Direct translation of diagnostic inferences into concrete chemical (with pre-harvest intervals) and bio-organic (Neem, *Trichoderma viride*) remediation protocols.

---

### II. RELATED WORK & LITERATURE SURVEY
The progression of automated plant disease diagnosis spans classical hand-crafted computer vision to modern deep convolutional networks.

#### A. Classical Machine Learning Approaches
Early investigations relied on manual feature engineering. Researchers utilized Gray-Level Co-occurrence Matrices (GLCM) for texture extraction, Scale-Invariant Feature Transform (SIFT), and color moments, feeding derived vectors into Support Vector Machines (SVM) or Random Forests. While computationally frugal, these methods showed extreme sensitivity to illumination variations, leaf orientation, and cluttered backgrounds, achieving sub-80% generalization when deployed outside controlled lighting booths.

#### B. Deep Convolutional Neural Networks (CNNs)
Mohanty et al. [1] pioneered large-scale deep learning in agriculture by training AlexNet and GoogLeNet on the PlantVillage dataset (54,306 images across 14 crop species and 26 diseases), reporting a peak classification accuracy of 99.35%. However, the authors noted that model performance degraded precipitously when evaluated on independent field-captured photographs. Ferentinos [2] evaluated multiple deep CNN architectures (VGG-16, VGG-19, AlexNet), achieving 99.53% accuracy with VGG; yet, the parameter count (~138 million weights, >500 MB footprint) renders VGG impractical for mobile deployment in connectivity-constrained rural environments.

Too et al. [3] benchmarked DenseNet-121, Inception-v4, and ResNet-50, finding that DenseNet attained 99.75% accuracy, albeit with significant computational overhead during training. Singh et al. [4] introduced the *PlantDoc* dataset to assess model degradation in the wild, revealing that complex natural backgrounds (soil, weeds, shadows) diminished standard object detector mAP to 70.53%, proving that background suppression and robust feature attention are paramount.

#### C. Explainable Artificial Intelligence (XAI) in Agronomy
A fundamental limitation across existing agricultural AI literature is the "black-box" dilemma. A model may achieve 99% accuracy on a benchmark dataset simply by learning incidental correlation with background dirt or camera vignetting rather than leaf lesions. Hassan et al. [5] demonstrated that integrating Explainable AI (Grad-CAM and LIME) is indispensable for validating that deep representations localize actual fungal sporulation and bacterial chlorosis. Our work systematically builds upon these insights by unifying a lightweight inverted-residual backbone, Grad-CAM interpretability, and post-diagnostic treatment recommendations.

---

### III. PROPOSED TRANS-DISCIPLINARY METHODOLOGY

```
 [ Raw Crop Leaf Image ] 
            │
            ▼
 [ Preprocessing: Bilinear Resizing (224x224), Normalization & Augmentation ]
            │
            ▼
 [ Transfer Learning Backbone: MobileNetV2 Feature Extractor ]
   ├─ Inverted Residual Blocks (Expansion -> 3x3 Depthwise Conv -> 1x1 Pointwise Linear)
   └─ Residual Skip Connections
            │
            ▼
 [ Custom Fully Connected Classification Head (Dropout + Linear Layer) ]
            │
      ┌─────┴───────────────────────┐
      ▼                             ▼
 [ Disease Class & Probability ]  [ Grad-CAM Backpropagation Saliency Map ]
      └─────┬───────────────────────┘
            │
            ▼
 [ Agronomic Advisory Engine: Chemical Dosages & Organic Remedies ]
```

#### A. Data Preprocessing & Augmentation Pipeline
To mitigate overfitting and foster field invariance, raw images are resized to $224 \times 224$ pixels and normalized against ImageNet channel statistics ($\mu = [0.485, 0.456, 0.406]$, $\sigma = [0.229, 0.224, 0.225]$). Synthetic domain expansion is conducted using stochastic data augmentations:
* Random horizontal and vertical flips ($p = 0.5$)
* Random rotations ($\theta \in [-20^\circ, +20^\circ]$)
* Color jitter (brightness factor $\pm 0.2$, contrast factor $\pm 0.2$)

#### B. MobileNetV2 Architecture & Transfer Learning
MobileNetV2 is selected due to its lightweight architectural design predicated on **Inverted Residuals and Linear Bottlenecks**:
1. *Expansion Layer:* Expands low-dimensional input channels by an expansion factor $t=6$ using $1 \times 1$ convolutions.
2. *Depthwise Convolution:* Applies a single $3 \times 3$ convolutional filter per input channel, radically reducing computational multiply-accumulate (MAC) operations compared to standard convolution.
3. *Pointwise Linear Bottleneck:* Projects features back to a lower-dimensional space using $1 \times 1$ convolution without non-linear activation, preserving manifold topology.

The mathematical formulation for depthwise separable convolution cost relative to standard convolution is expressed as:
$$\text{Cost Ratio} = \frac{D_K \cdot D_K \cdot M \cdot D_F \cdot D_F + M \cdot N \cdot D_F \cdot D_F}{D_K \cdot D_K \cdot M \cdot N \cdot D_F \cdot D_F} = \frac{1}{N} + \frac{1}{D_K^2}$$
where $D_K$ is the kernel size ($3$), $M$ is input channel depth, $N$ is output channel depth, and $D_F$ is feature map spatial dimension. For $3 \times 3$ kernels, this yields an 8- to 9-fold reduction in computational complexity.

#### C. Explainable AI: Grad-CAM Mathematical Formulation
To compute class-discriminative localization maps, Gradient-weighted Class Activation Mapping (Grad-CAM) calculates the gradient of the predicted score for class $c$ ($y^c$) with respect to feature activation map $A^k$ of the final convolutional layer:

$$\alpha_k^c = \frac{1}{Z} \sum_{i} \sum_{j} \frac{\partial y^c}{\partial A_{i,j}^k}$$

where $Z = U \times V$ represents spatial dimensions of the feature map. The neuron importance weights $\alpha_k^c$ undergo a weighted linear combination followed by a Rectified Linear Unit (ReLU) to isolate positive contributions:

$$L_{\text{Grad-CAM}}^c = \text{ReLU}\left(\sum_{k} \alpha_k^c A^k\right)$$

The resulting 2D heatmap is interpolated to input image dimensions and blended with a false-color palette (red representing peak activation).

---

### IV. EXPERIMENTAL RESULTS & COMPARATIVE EVALUATION

The framework was trained across balanced multi-class foliar pathologies (Tomato Early Blight, Tomato Late Blight, Potato Late Blight, Rice Bacterial Blight, Corn Common Rust, and Healthy Controls) using the Adam optimizer ($\text{lr} = 5 \times 10^{-4}$, weight decay $= 1 \times 10^{-4}$) and categorical cross-entropy loss over 20 epochs.

#### TABLE I: Quantitative Model Performance Comparison
| Model Architecture | Parameters | Storage Footprint | Inference Latency (CPU) | Validation Accuracy | F1-Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VGG-16** | 138.3 M | 528 MB | 118 ms | 96.1% | 0.958 |
| **ResNet-50** | 25.6 M | 98 MB | 44 ms | 97.9% | 0.978 |
| **MobileNetV2 (Proposed)** | **3.5 M** | **14.1 MB** | **12.4 ms** | **97.4%** | **0.973** |
| **EfficientNet-B0** | 5.3 M | 21.0 MB | 21.2 ms | 97.1% | 0.970 |

As detailed in Table I, while ResNet-50 marginally outperforms MobileNetV2 in raw accuracy by 0.5%, MobileNetV2 requires **86% fewer parameters** and demonstrates a **3.5x speedup** in inference latency (12.4 ms vs 44 ms), establishing it as the superior choice for real-time edge agricultural deployment.

---

### V. INTEGRATED AGRONOMIC ADVISORY ENGINE
Unlike conventional classifiers that terminate at diagnostic labeling, our framework interfaces with an agronomic advisory knowledge base, delivering dual-action remediation:

1. **Synthetic Chemical Protocols:** Specifies trade names, active ingredient percentages, application dilution rates (e.g., Mancozeb 75% WP @ 2.5 g/L, Streptocycline @ 0.1 g/L), and mandatory Pre-Harvest Intervals (PHI) to guarantee food safety.
2. **Biological / Organic Alternatives:** Recommends environmentally benign controls, including cold-pressed Neem Seed Kernel Extract (NSKE 5%), *Trichoderma viride* bio-fungicide formulations, and fermented organic sprays (Panchagavya).
3. **Cultural Preventive Measures:** Guides farmers regarding canopy aeration, drip versus overhead irrigation, crop rotation cycles, and rogueing of early inoculum sources.

---

### VI. CONCLUSION & FUTURE SCOPE
This paper proposed an explainable, edge-deployable deep learning framework for incipient crop disease diagnosis and automated treatment advisory. By employing MobileNetV2 transfer learning, the system achieves 97.4% validation accuracy with sub-15ms latency and an ultra-compact 14.1 MB model size. The integration of Grad-CAM provides transparent visual accountability, ensuring feature alignment with true biological lesions.

**Future directions** will focus on:
1. Multi-modal fusion integrating IoT microclimate data (soil moisture, temperature, relative humidity) to forecast spore germination risks prior to symptom manifestation.
2. Quantization to TensorFlow Lite (INT8) and ONNX formats for native, offline Android deployment in remote farmland devoid of cellular internet connectivity.
3. Multilingual voice synthesis to enhance accessibility for diverse regional farming communities.

---

### REFERENCES
1. S. P. Mohanty, D. P. Hughes, and M. Salathé, "Using deep learning for image-based plant disease detection," *Frontiers in Plant Science*, vol. 7, p. 1419, Sep. 2016.
2. C. A. Ferentinos, "Deep learning models for plant disease detection and diagnosis," *Computers and Electronics in Agriculture*, vol. 145, pp. 311–318, Feb. 2018.
3. E. C. Too, L. Li, S. Njuki, and S. Ying, "A comparative study of fine-tuning deep learning models for plant disease identification," *Computers and Electronics in Agriculture*, vol. 161, pp. 272–279, Jun. 2019.
4. A. K. Singh et al., "PlantDoc: A dataset for visual plant disease detection in the wild," in *Proc. 7th ACM IKDD CoDS and 25th COMAD*, 2020, pp. 249–253.
5. S. M. Hassan, A. K. Maji, M. Jasiński, Z. Leonowicz, and E. Jasińska, "Identification of plant leaf diseases using deep CNN models and explainable AI (XAI)," *IEEE Access*, vol. 9, pp. 147205–147222, 2021.
6. M. G. Selvaraj et al., "AI-powered smartphone application for diagnosis of banana diseases and pests," *Plant Methods*, vol. 15, no. 1, pp. 1–14, 2019.
7. Ü. Atila, M. Uçar, K. Akyol, and E. Uçar, "Plant leaf disease detection using EfficientNet deep learning model," *Ecological Informatics*, vol. 61, p. 101183, 2021.
8. S. G. Borkar, *History of Plant Pathology*, New Delhi: Woodhead Publishing India, 2017.
