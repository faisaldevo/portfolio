export type Project = {
  slug: string; title: string; category: string; filters: string[]; summary: string;
  challenge: string; solution: string; results: string; technologies: string[]; pipeline: string[];
  accent: 'cyan' | 'violet' | 'blue'; metrics?: { label: string; value: string }[]
}

export const socials = {
  linkedin: 'https://www.linkedin.com/in/faisal445',
  upwork: 'YOUR_UPWORK_URL', fiverr: 'YOUR_FIVERR_URL',
  email: 'mailto:faisalshakeel445@gmail.com'
}

export const navItems = ['Home','About','Skills','Experience','Projects','Services','Tech Stack','Contact']
export const rotatingTitles = ['Machine Learning Developer','Data Analyst','Computer Vision Specialist','Object Detection & Segmentation Engineer','Intelligent Video Analytics Developer','AI Automation Developer']

export const highlights = [
  { value: 20000, suffix: '+', label: 'Training images used in CV projects' },
  { value: 95, suffix: '%+', label: 'Selected model detection performance' },
  { value: 10, suffix: '+', label: 'Computer vision & AI projects' },
  { value: 14, suffix: '+', label: 'Transportation asset categories' },
]

export const skillGroups = [
  { title:'Computer Vision', items:['Object Detection','Image Segmentation','Object Tracking','Facial Recognition','License Plate Recognition','OCR','Video Analytics','Feature Extraction','Re-Identification'] },
  { title:'ML / Deep Learning', items:['PyTorch','TensorFlow','Keras','Scikit-learn','Ultralytics','YOLOv5 / v8 / v11','CNNs','U-Net','SAM','PaddleOCR'] },
  { title:'Tracking Systems', items:['ByteTrack','BoT-SORT','SORT','Kalman Filtering','Hungarian Assignment','ReID','OSNet'] },
  { title:'Programming & Data', items:['Python','Pandas','NumPy','OpenCV','Matplotlib','Seaborn','Shapely','CSV / JSON / XML','Data Transformation'] },
  { title:'GIS & Geospatial', items:['ArcGIS Pro','Google Earth Pro','OSMnx','GeoPy','Shapely','KML','GDB Creation','Spatial Reporting'] },
  { title:'Annotation & QA', items:['CVAT','LabelImg','LabelMe','Roboflow','Bounding Boxes','Polygon Annotation','Dataset QA','Label Validation'] },
  { title:'Backend & Integration', items:['FastAPI','Flask','REST APIs','AWS / Boto3','Callback APIs','Model Inference APIs'] },
]

export const experiences = [
  { company:'Airloop', role:'Data Analyst — PCI & Asset Condition Index', period:'Oct 2024 — Present', description:'Building automated road asset management pipelines, ACI/PCI analytics, GIS reporting, and YOLO-based detection, segmentation, and tracking workflows.', bullets:['Reduced project turnaround time by up to 40% with basic AI-assisted road asset detection','Delivered KSA Project 001 end to end across structured data, condition indices, and GIS dashboards','Led annotation quality control and dataset preparation for robust model training'] },
  { company:'Transconomy', role:'Data Extraction Operator — PCI & ACI', period:'Oct 2023 — Sep 2024', description:'Supported roadway asset detection, pavement distress assessment aligned with ASTM D6433, and high-quality detection and segmentation datasets.', bullets:['Worked across traffic signs, pavement markings, lane markings, traffic signals, and linear assets','Recognized as Best Employee of the Quarter for annotation quality and project contribution'] },
]

export const projects: Project[] = [
  { slug:'football-ai-analytics', title:'Football AI Analytics & Player Tracking', category:'Computer Vision / Sports Analytics', filters:['Computer Vision','Sports Analytics','Tracking'], summary:'A video intelligence pipeline for detection, tracking, team classification, possession, events, trajectories, and player statistics.', challenge:'Convert dynamic broadcast footage into reliable, structured match intelligence despite occlusion, camera motion, and small-object football detection.', solution:'Combined YOLOv11 detection with ByteTrack / BoT-SORT, ReID experiments, motion features, and event logic in an API-ready pipeline.', results:'Produced player and ball trajectories, possession analysis, heatmaps, event recognition, speed estimates, and structured analytics output.', technologies:['Python','OpenCV','YOLOv11','ByteTrack','BoT-SORT','ReID','OSNet','REST APIs'], pipeline:['Video','Detection','Tracking','Team ID','Events','Analytics API'], metrics:[{label:'Precision',value:'93.3%'},{label:'Recall',value:'94.0%'},{label:'mAP50',value:'97.7%'}], accent:'cyan' },
  { slug:'transportation-asset-ai', title:'Transportation Asset Condition Assessment AI', category:'Computer Vision / Infrastructure AI', filters:['Computer Vision','Transportation AI','Segmentation','Data Processing'], summary:'Automated roadway inspection workflows that turn survey imagery into asset inventories, condition scores, GIS layers, and decision-ready reports.', challenge:'Process large-scale roadway surveys consistently across diverse assets, conditions, lighting, and geographies.', solution:'Built detection, segmentation, geolocation, ACI calculation, and reporting workflows tied to GIS deliverables.', results:'Accelerated asset extraction and enabled structured condition analysis across 14+ infrastructure categories.', technologies:['Python','YOLO','OpenCV','Pandas','NumPy','ArcGIS Pro','Shapely'], pipeline:['Survey Data','Detection','Asset Extraction','Condition','Geolocation','ACI','GIS / Reports'], accent:'violet' },
  { slug:'facial-recognition-tracking', title:'Facial Recognition & Unknown Person Tracking', category:'Computer Vision / Intelligent Surveillance', filters:['Computer Vision','Tracking'], summary:'A persistent identity pipeline that recognizes known people and re-associates recurring unknown individuals across video feeds.', challenge:'Maintain useful identities for unknown people across disappearances and re-entry without treating every encounter as new.', solution:'Combined detection, embeddings, track IDs, representative capture, and comparison against known and unknown identity stores.', results:'Enabled persistent Unknown_N identities, automated capture, GPU inference, and multi-person tracking.', technologies:['Python','OpenCV','InsightFace','Face Embeddings','GPU Inference'], pipeline:['Detect','Track ID','Face Capture','Embed','Compare','Re-associate'], accent:'blue' },
  { slug:'automatic-license-plate-recognition', title:'Automatic License Plate Recognition', category:'Computer Vision / OCR', filters:['Computer Vision','OCR'], summary:'An end-to-end ALPR system combining plate localization, crop enhancement, and OCR over video streams.', challenge:'Extract readable plate text from moving vehicles under inconsistent scale and image quality.', solution:'Applied YOLO detection, targeted image enhancement, PaddleOCR, and GPU inference in a staged video pipeline.', results:'Delivered structured plate text outputs with visual traceability from frame to recognized result.', technologies:['Python','YOLO','OpenCV','PaddleOCR','GPU Inference'], pipeline:['Video','Plate Detection','Crop','Enhance','OCR','Result'], accent:'cyan' },
  { slug:'pavement-crack-segmentation', title:'Pavement Crack Segmentation', category:'Computer Vision / Infrastructure', filters:['Computer Vision','Transportation AI','Segmentation'], summary:'Segmentation workflows for alligator, longitudinal, transverse, block cracking, raveling, weathering, and patches.', challenge:'Separate irregular, thin, and visually ambiguous pavement distress regions from variable road texture.', solution:'Trained U-Net and YOLO segmentation workflows with targeted preprocessing and mask visualization.', results:'Generated class-aware masks suitable for pavement condition assessment and downstream PCI workflows.', technologies:['PyTorch','U-Net','YOLO Segmentation','OpenCV'], pipeline:['Road Image','Preprocess','Segment','Classify Distress','PCI Input'], accent:'violet' },
  { slug:'pothole-severity', title:'Pothole Detection & Severity Visualization', category:'Computer Vision / Road Inspection', filters:['Computer Vision','Transportation AI','Segmentation'], summary:'A segmentation and visualization system for damaged pavement regions with severity-aware professional overlays.', challenge:'Make defect regions and condition severity interpretable in both images and moving video.', solution:'Combined mask inference, transparent overlays, severity scoring, and dashboard-ready visual output.', results:'Presented low, moderate, high, and critical damage with clear spatial context.', technologies:['Python','YOLO Segmentation','OpenCV','NumPy'], pipeline:['Frame','Mask','Measure','Severity','Overlay','Dashboard'], accent:'blue' },
  { slug:'flood-urban-segmentation', title:'Flood & Urban Semantic Segmentation', category:'Deep Learning / Remote Sensing', filters:['Deep Learning','Segmentation'], summary:'Multi-class semantic segmentation for flooded roads and buildings, water, vegetation, vehicles, and urban surfaces.', challenge:'Resolve fine-grained urban classes in complex UAV imagery with overlapping spectral and spatial characteristics.', solution:'Created PyTorch-based semantic segmentation workflows with class-aware evaluation and visual validation.', results:'Produced dense scene understanding outputs for flood and urban impact analysis.', technologies:['PyTorch','YOLO Segmentation','OpenCV','UAV Imagery'], pipeline:['UAV Image','Tile','Infer','Class Mask','Validate','Map'], accent:'cyan' },
  { slug:'dataset-annotation-pipeline', title:'Computer Vision Dataset & Annotation Pipeline', category:'AI Data Preparation', filters:['Data Processing','Computer Vision','Segmentation'], summary:'A quality-controlled pipeline for bounding boxes, polygons, dataset cleaning, conversion, validation, and train/validation splitting.', challenge:'Create consistent training data across annotation tools, task types, formats, and contributors.', solution:'Standardized annotation rules, QA checks, conversion tooling, and repeatable dataset packaging.', results:'Delivered model-ready YOLO TXT, Pascal VOC XML, JSON, and CSV datasets.', technologies:['CVAT','LabelImg','LabelMe','Roboflow','Python'], pipeline:['Collect','Annotate','QA','Clean','Convert','Split','Release'], accent:'violet' },
]

export const metrics = [
  { model:'Football Detection', metric:'mAP50', value:97.7 },
  { model:'Light Pole Detection', metric:'mAP50', value:98.0 },
  { model:'Road Hump Detection', metric:'mAP50', value:99.3 },
  { model:'Footpath Segmentation', metric:'mAP50', value:94.25 },
]

export const services = [
  { title:'Computer Vision Development', text:'Custom visual intelligence systems for real-world image and video applications.', items:['Object detection','Image segmentation','Defect detection','Custom AI pipelines'] },
  { title:'Custom AI Model Training', text:'Purpose-built YOLO detection and segmentation models for your own domain.', items:['Dataset configuration','Hyperparameter tuning','Model evaluation','Inference scripts'] },
  { title:'Annotation & Dataset Preparation', text:'Clean, validated, model-ready data across boxes, polygons, and segmentation masks.', items:['Bounding boxes','Polygon annotation','Dataset QA','Format conversion'] },
  { title:'Intelligent Video Analytics', text:'Turn streams into trajectories, events, speed estimates, heatmaps, and insight.', items:['Object tracking','Sports analytics','Event detection','Trajectory analysis'] },
  { title:'OCR & Recognition Systems', text:'Detection-to-text pipelines for plates, documents, and video frames.', items:['Plate recognition','PaddleOCR integration','Video OCR','Image enhancement'] },
  { title:'Python Automation & Data', text:'Reliable automation around visual data, reports, conversions, and APIs.', items:['CSV automation','Video processing','Data cleaning','API integration'] },
]

export const technologies = ['Python','PyTorch','TensorFlow','Keras','OpenCV','YOLO','Ultralytics','Pandas','NumPy','Scikit-learn','FastAPI','Flask','PaddleOCR','EasyOCR','SAM','CVAT','LabelImg','LabelMe','Roboflow','ArcGIS Pro','Git','GitHub','AWS','REST API','JSON','XML','Jupyter','Conda']
export const workflow = ['Data Collection','Annotation','Dataset Preparation','Model Training','Validation','Inference','Tracking','Analytics','API / Deployment']
