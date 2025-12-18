// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "The courses I teach as lecturer",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-box-plot-vs-violin-plot-which-one-is-more-powerful-for-research-articles",
        
          title: "Box Plot vs Violin Plot: Which One is More Powerful for Research Articles?...",
        
        description: "A comparison of box plots and violin plots for data visualization in research articles with practical examples",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Box-VS-Violin-Plot/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-honored-to-receive-the-excellence-award-from-pabna-university-of-science-and-technology-trophy",
          title: 'Honored to receive the Excellence Award from Pabna University of Science and Technology!...',
          description: "",
          section: "News",},{id: "news-collaborative-research-with-charles-sturt-university-published-in-ieee-access-check-out-our-work-on-eye-tracking-and-saliency-modeling-q1-if-3-476",
          title: 'Collaborative research with Charles Sturt University published in IEEE Access! Check out our...',
          description: "",
          section: "News",},{id: "news-our-paper-on-sign-language-recognition-system-for-helping-disabled-people-has-been-presented-at-sti-2023",
          title: 'Our paper on Sign Language Recognition System for Helping Disabled People has been...',
          description: "",
          section: "News",},{id: "news-thrilled-to-announce-my-appointment-as-program-coordinator-of-cse-department-at-green-university-of-bangladesh",
          title: 'Thrilled to announce my appointment as Program Coordinator of CSE Department at Green...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-work-uncertainty-driven-bottleneck-attention-u-net-for-organ-at-risk-segmentation-has-been-presented-at-ieee-isbi-2024-source-code",
          title: 'Excited to share that our work Uncertainty Driven Bottleneck Attention U-net for Organ...',
          description: "",
          section: "News",},{id: "news-our-paper-udbrnet-a-novel-uncertainty-driven-boundary-refined-network-for-organ-at-risk-segmentation-has-been-published-in-plos-one-source-code",
          title: 'Our paper UDBRNet: A novel uncertainty driven boundary refined network for organ at...',
          description: "",
          section: "News",},{id: "news-new-paper-on-prostate-cancer-grade-classification-has-been-presented-at-dicta-2024",
          title: 'New paper on prostate cancer grade classification has been presented at DICTA 2024....',
          description: "",
          section: "News",},{id: "news-successfully-completed-msc-from-buet-thesis-uncertainty-driven-boundary-refined-cnn-for-medical-image-segmentation",
          title: 'Successfully completed MSc from BUET! Thesis: Uncertainty driven boundary refined CNN for medical...',
          description: "",
          section: "News",},{id: "news-our-paper-on-object-detection-in-adverse-weather-has-been-presented-at-sti-2024",
          title: 'Our paper on Object Detection in adverse weather has been presented at STI...',
          description: "",
          section: "News",},{id: "news-our-paper-mobdensenet-brain-tumor-classification-from-mri-has-been-published-in-array-q1-if-4-5",
          title: 'Our paper MobDenseNet: Brain tumor classification from MRI has been published in Array...',
          description: "",
          section: "News",},{id: "news-our-paper-edldnet-an-efficient-dual-line-decoder-with-multi-scale-convolutional-attention-for-multi-organ-segmentation-has-been-published-in-biomedical-signal-processing-and-control-q1-if-4-9",
          title: 'Our paper EDLDNet: An efficient dual-line decoder with multi-scale convolutional attention for multi-organ...',
          description: "",
          section: "News",},{id: "news-guiding-undergraduate-researchers-a-seminar-at-pabna-university-of-science-and-technology",
          title: 'Guiding Undergraduate Researchers – A Seminar at Pabna University of Science and Technology...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Research_seminar_talk_PUST_22_10_25/";
            },},{id: "projects-efficient-multi-organ-segmentation",
          title: 'Efficient Multi-Organ Segmentation',
          description: "Funded by ICT Division",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Efficient_Organ_Segmentation/";
            },},{id: "teaching-data-mining",
          title: 'Data Mining',
          description: "Theory &amp; Lab",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data_Mining_Fall_2025/";
            },},{id: "teaching-machine-learning",
          title: 'Machine Learning',
          description: "Theory &amp; Lab",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Machine_Learning/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/riadhassan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/riadhassan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=heXZzcQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
