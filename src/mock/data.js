import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio - Nikhil Utane', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Portfolio - ',
  name: 'Nikhil Utane',
  subtitle: 'I\'m a seasoned Technology Leader with expertise in Data Analytics, Cloud, DevOps & Machine Learning, coupled with a strong systems background',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne: "I bring 22+ years of diverse product development experience in building distributed, high-performance, carrier-grade products.\n" +
  "I possess a solid foundation in core system areas while being proficient in new-age technologies such as Big Data Analytics, Data Engineering, Cloud & Cloud-Native architecture, DevOps, Machine Learning etc.\n" +  
  "I have a track record of successfully building and leading top-performing teams from the ground up, leveraging my extensive technical expertise.\n" +  
  "I have a thorough understanding of software development processes and best practices, including Agile methodologies.\n" +
  "",
  paragraphTwo: "I am a technophile at heart - adept at driving technological innovations with exceptional problem-solving skills.",
  paragraphThree: "I am currently leading the Software Services group at CommScope \n" +
  "spearheading the development of innovative products and solutions in Analytics, DevOps, Cloud, and Automation areas for OneCell 5G product.",
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
    info2: 'Despite limited resources, I envisioned and developed a cloud-native analytics solution called Chronos, designed to provide comprehensive Operational Measurements (OM) and Key Performance Indicators (KPI) data for OneCell deployments. Chronos uses InfluxDB as a time-series database and is entirely hosted on AWS, offering interactive dashboards, reporting, real-time alerting, and advanced features like AI/ML-based troubleshooting and anomaly detection. Since its implementation, Chronos has effectively reduced the day-to-day monitoring cost and effort while delivering significant direct cost-savings of approximately $500K annually, in addition to boosting productivity, improving customer satisfaction, and unlocking new revenue opportunities. It is currently running in production, supporting both 4G and 5G deployments.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'atlas.png',
    title: 'OneCell Analytics - Atlas (2022)',
    info: 'OneCell devices generate a huge amount of text-based logs. A single device can generate few GBs worth of logs in a day. \n' +
    'Earlier, there was no system available to store and query these logs efficiently.',
    info2: 'Atlas is a centralized log analytics solution that is powered by Elasticsearch. With pre-built dashboards and queries, Atlas has significantly increased developer productivity by streamlining the process of searching logs. The solution utilizes a robust data pipeline that leverages Kafka and Logstash, running on AWS EKS. Additionally, it also includes a homegrown framework that automates complex stateful analysis. Together, these features enable efficient log data processing and analysis, reducing the burden of manual analysis and allowing for faster issue resolution.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'themis-gnb.png',
    title: 'OneCell Analytics - Themis (2022)',
    info: 'The OneCell system is designed for high performance and low latency. However, deploying and managing the system can be complex due to its use of Kubernetes, which requires a certain level of expertise to manage effectively.',
    info2: 'To simplify real-time monitoring of OneCell deployments, I created Themis, a single pane of glass observability solution. Themis is built using open-source components, such as, Thanos, Prometheus, and Grafana, offering multi-cluster monitoring and real-time alerting capabilities. With Themis, users can access a wide range of application, system, and Kubernetes metrics, and the solution also integrates with Chronos and Atlas to provide a one-stop-shop for monitoring and recovery needs. ',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'themis-lab.png',
    title: 'Themis-Lab (2022)',
    info: 'Themis-Lab is a stand-alone version of Themis, which effectively manages and tracks the complete lab inventory while offering real-time utilization visibility.',
    info2: 'It is a highly customizable solution that can be tailored to meet the specific needs. It combines the static server data with the real-time information to get accurate view of server utilization. \n' +
    'This product has saved over $300K (and continues to do so) by identifying under-utilized or unused servers.',
    url: 'TBD',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cicd.png',
    title: 'DevOps Activities for OneCell 5G & DAS (2022)',
    info: 'I led the DevOps effort to build a comprehensive & robust CI/CD pipeline for OneCell 5G & DAS product lines. \n' +
    'I also led multiple other DevOps initiatives & built new tools to reduce inefficiencies and improve productivity, \n' + 
    '(for e.g. reducing the build time by 80%, using Tilt for developer environments & Rancher for Kubernetes cluster management).\n',
    info2: 'In addition, I also brought in higher levels of automation using tools such as Ansible, Terraform, Robot framework to automate various manual & error-prone activities; \n' +
    'These included setup bring up, install/upgrade, device configuration, release engineering practices, test automation etc',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cloud.jpg',
    title: 'Cloud & Open-Source Technology Adoption (2022)',
    info: 'I have played a key role in driving & supporting the adoption of public cloud (AWS + Azure) along with other open-source, cloud-native technologies for the OneCell 5G program. \n' +
    'This has allowed us to reduce hardware dependencies, deliver high-quality software, increase agility & productivity, while saving on both cost and effort.',
    info2: 'I am also leading the Cloud-gNB project to run our 5G gNB solution in Azure cloud VM. \n' + 
    'This off-loads all functional testing to low-cost cloud VMs reducing the need for expensive physical servers.',
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
    info2: 'The model was trained on Google Colab and deployed on AWS.',
    url: 'https://towardsdatascience.com/complete-guide-to-build-and-deploy-a-tweet-generator-app-into-production-5006729e583c',
    repo: 'https://github.com/nikhilno1/bot-baby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ml-2.png',
    title: 'ML Project 2 - BERT vs ULMFiT Sentiment Classifier (2019)',
    info: 'This is a sentiment analysis app that compares the two popular architectures of that time, BERT and ULMFiT.',
    info2: 'The app is deployed on Google App Engine with flask as back-end.',
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
  cta: 'Although I am enjoying my current work, I am on the lookout for opportunities where I can make a greater impact. \n' +
  'Particularly, I am seeking leadership roles that demand a combination of technical and management skills to solve innovative and challenging problems at scale. \n' +
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
