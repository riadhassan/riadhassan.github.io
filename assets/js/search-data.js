// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
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
          section: "News",},{id: "news-collaborative-research-with-charles-sturt-university-published-in-ieee-access-check-out-our-work-on-eye-tracking-and-saliency-modeling-eyes-q1-if-3-476",
          title: 'Collaborative research with Charles Sturt University published in IEEE Access! Check out our...',
          description: "",
          section: "News",},{id: "news-our-paper-on-a-sign-language-recognition-system-for-helping-disabled-people-has-been-accepted-at-sti-2023-raised-hands",
          title: 'Our paper on “A Sign Language Recognition System for Helping Disabled People” has...',
          description: "",
          section: "News",},{id: "news-thrilled-to-announce-my-appointment-as-program-coordinator-of-cse-department-at-green-university-of-bangladesh-mortar-board",
          title: 'Thrilled to announce my appointment as Program Coordinator of CSE Department at Green...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-work-uncertainty-driven-bottleneck-attention-u-net-for-organ-at-risk-segmentation-was-presented-at-ieee-isbi-2024-by-professor-clinton-fookes-telescope-source-code",
          title: 'Excited to share that our work “Uncertainty Driven Bottleneck Attention U-net for Organ...',
          description: "",
          section: "News",},{id: "news-our-paper-udbrnet-a-novel-uncertainty-driven-boundary-refined-network-for-organ-at-risk-segmentation-has-been-published-in-plos-one-microscope-source-code",
          title: 'Our paper “UDBRNet: A novel uncertainty driven boundary refined network for organ at...',
          description: "",
          section: "News",},{id: "news-new-paper-on-prostate-cancer-grade-classification-accepted-at-dicta-2024-hospital",
          title: 'New paper on prostate cancer grade classification accepted at DICTA 2024! :hospital:',
          description: "",
          section: "News",},{id: "news-successfully-completed-msc-from-buet-thesis-uncertainty-driven-boundary-refined-cnn-for-medical-image-segmentation-graduation-cap",
          title: 'Successfully completed MSc from BUET! Thesis: Uncertainty driven boundary refined CNN for medical...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%61%64_%68%61%73%73%61%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
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
