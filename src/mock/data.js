import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio - Nikhil Utane', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nikhil Utane',
  subtitle: 'I\'m a Technology Leader experienced in Data Analytics, Cloud, DevOps and Machine Learning with a strong systems background',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: "I have 22 years of diverse experience in building high-performance, carrier-grade products in Networking and Telecom domains.\n" +
  "I have a strong technology background with the ability to lead and manage large teams.\n" +
  "I have built teams from scratch and executed complete programs.\n" +
  "I have in-depth knowledge of software development processes & best practices, incl. Agile.\n" +
  "I possess a solid foundation in core system areas while being proficient in Big Data Analytics, Cloud & Cloud-Native architecture, DevOps, Machine Learning etc.\n" +  
  "",
  paragraphTwo: "I am a technophile at heart - adept at driving technological innovations with great problem-solving skills",
  paragraphThree: "I am currently leading the Software Services group at CommScope \n" +
  "developing innovative products & solutions in Analytics, DevOps, Cloud & Automation areas for the OneCell 5G product.",
  resume: 'https://drive.google.com/file/d/1H0a2bZUeV9DLl8iTVirjMt_St74EXTVo/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chronos.png',
    title: 'OneCell Analytics - Chronos (2022)',
    info: 'Operational Measurements (OM) and Key Performance Indicators (KPI) data is important for monitoring OneCell deployments in the field. \n' +
    'Historically, this was done by a legacy tool that had significant limitations and was expensive to maintain. ',
    info2: 'I envisioned and built a feature-rich, cloud-native OM/KPI analytics solution named Chronos with minimal resources. \n' +
    'The solution uses InfluxDB as a time-series database and the entire pipeline runs in AWS. \n' + 
    'It is highly scalable & supports features such as interactive dashboards, \n' +
    'reporting & alerting with more advanced features such as Anomaly Detection and AI/ML based troubleshooting in the pipeline, \n' +
    'Chronos is running in production supporting both 4G and 5G deployments and has significantly reduced the day-to-day monitoring cost and effort.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'atlas.png',
    title: 'OneCell Analytics - Atlas (2022)',
    info: 'OneCell devices generate a huge amount of text-based logs. A single device can generate few GBs worth of logs in a day. \n' +
    'Earlier, there was no system available to store and query these logs efficiently.',
    info2: 'I developed a highly-available, centralized log analytics solution named Atlas, powered by Elasticsearch. \n' +
    'With its pre-created dashboards and queries, Atlas has tremendously simplified looking up logs thereby greatly boosting developer productivity.\n' +
    'The solution includes a robust data pipeline using Kafka & Logstash running in AWS EKS along with a homegrown framework to automate any complex stateful analysis',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'themis-gnb.jpg',
    title: 'OneCell Analytics - Themis (2022)',
    info: 'OneCell system is a high-performance and low-latency system. Additionally, the deployment happens using Kubernetes which is fairly complex to manage.',
    info2: 'I developed a centralized observability solution named Themis to ease the real-time monitoring of all OneCell deployments.\n' +
    'The solution uses Thanos, Prometheus & Grafana to provide multi-cluster monitoring along with alerting capabilities.\n' +
    'Themis supports various types of system & kubernetes metrics and also integrates with Chronos and Atlas above to provide single pane of glass observability.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'themis-lab.jpg',
    title: 'Themis-Lab (2022)',
    info: 'Themis-Lab is a standalone version of Themis that is being used to manage all the lab inventory.',
    info2: 'It combines the static server data with the real-time information to get accurate view on server utilization. \n' +
    'This product has saved hundreds of thousands dollars by finding unused and under-utilized servers.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cicd.png',
    title: 'DevOps Activities for OneCell 5G & DAS (2022)',
    info: 'I led the DevOps effort to build a comprehensive & robust CI/CD pipeline for OneCell 5G & DAS product lines.',
    info2: 'I also led multiple other DevOps initiatives & built new tools to reduce inefficiencies and improve productivity, \n' + 
    '(for e.g. reducing the build time by 80%, using Tilt for developer environments & Rancher for Kubernetes cluster management).\n' +
    'In addition, I also brought in higher levels of automation using tools such as Ansible and Terraform to automate various manual & error-prone activities; \n' +
    'from setup bring up, to install/upgrade, to device configuration, to release engineering practices.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cloud.jpg',
    title: 'Cloud & Open-Source Technology Adoption (2022)',
    info: 'I have played a key role in driving & supporting the adoption of public cloud (AWS + Azure) along with other open-source, cloud-native technologies for the OneCell 5G program. \n' +
    'This has allowed us to reduce hardware dependencies, increase agility & productivity, while saving on both cost and effort.',
    info2: 'I am also leading the Cloud-gNB project to run our 5G gNB solution in Azure cloud VM. \n' + 
    'This off-loads all functional testing to low-cost cloud VMs reducing the need for expensive physical servers',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ha.png',
    title: 'High-Availability for OneCell 4G Controllers (2015)',
    info: 'I designed & executed a high-availability feature for the OneCell 4G controllers with 50% less time and cost.',
    info2: 'The original estimate for the project was 110 man-months and by cleverly designing using open-source components I achieved it in half the time with far superior quality.\n' +
    'The project also required me to battle stiff opposition from some quarters due to the radical approach.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },  
  {
    id: nanoid(),
    img: 'ws.png',
    title: 'Throughput Issues for 3G Femtocell (2010)',
    info: 'This one needs a special mention because of my unique ability to sift through gigabytes worth of packet captures \n' +
    'in various forms (TCP, UDP, encapsulated, encrypyted, fragmented, on-the-wire, over-the-air), day in and day out, to identify root-cause \n' +
    'for the multitude of critical customer-impacting throughput related issues.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ml-1.png',
    title: 'ML Project 1 - Tweet Generator App (2020)',
    info: 'This was an attempt to highlight the growing polarization on twitter between left-leaning and right-leaning handles. \n' +
    'I scraped twitter data from well-known LW & RW handles and trained a GPT-2 model to generate random tweets from a prompt. The results were remarkable.',
    info2: 'The model was trained on Google Colab and deployed on AWS',
    url: 'https://towardsdatascience.com/complete-guide-to-build-and-deploy-a-tweet-generator-app-into-production-5006729e583c',
    repo: 'https://github.com/nikhilno1/bot-baby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ml-2.png',
    title: 'ML Project 2 - BERT vs ULMFiT Sentiment Classifier (2019)',
    info: 'This is a sentiment analysis app that compares the two popular architectures of that time, BERT and ULMFiT.',
    info2: 'The app is deployed on Google App Engine with flask as back-end',
    url: 'https://towardsdatascience.com/battle-of-the-heavyweights-bert-vs-ulmfit-faceoff-91a582a7c42b',
    repo: 'https://github.com/nikhilno1/nlp_projects/tree/master/deployment/imdb-google-app-engine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ml-3.png',
    title: 'ML Project 3 - Healthy Food Detector (2018)',
    info: 'This is an image recognition app that identifies from the image whether the food is healthy or junk.',
    info2: 'The model uses CNN, resnet50 to be precise and is deployed on Heroku.',
    url: ' https://healthy-or-not.herokuapp.com/',
    repo: 'https://github.com/nikhilno1/healthy-or-not', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'While I am enjoying my current work, I am on the lookout for a role where the organization’s & my own interests are better aligned. \n' +
  'Particularly, I am seeking leadership roles that require a mix of both technical and management skills, \n' +
  'to solve innovative and challenging problems at scale. \n' +
  'Have something for me?',
  btn: '',
  email: 'nikhil.utane@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/NikhilUtane',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@nikhil.utane',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikhilutane/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nikhilno1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
