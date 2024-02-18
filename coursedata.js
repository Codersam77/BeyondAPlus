const courseData = {
    'umass': {
      'computer_science': [
        { value: 'cmpsci100', text: 'CMPSCI 100 - Intensive Introduction to Computer Science' },
      { value: 'cmpsci101', text: 'CMPSCI 101 - Computing for Everyone' },
      { value: 'cmpsci102', text: 'CMPSCI 102 - Intensive Introduction to Computing for Non-Majors' },
      { value: 'cmpsci103', text: 'CMPSCI 103 - Introduction to Computers and Their Applications' },
      { value: 'cmpsci105', text: 'CMPSCI 105 - Introduction to Computer Science' },
      { value: 'cmpsci106', text: 'CMPSCI 106 - Introduction to Computing Using MATLAB' },
      { value: 'cmpsci119', text: 'CMPSCI 119 - Introduction to Programming' },
      { value: 'cmpsci121', text: 'CMPSCI 121 - Introduction to Problem Solving with Computers' },
      { value: 'cmpsci121H', text: 'CMPSCI 121H - Honors Introduction to Problem Solving with Computers' },
      { value: 'cmpsci145', text: 'CMPSCI 145 - Representing, Storing, and Retrieving Information' },
      { value: 'cmpsci186', text: 'CMPSCI 186 - Introduction to Computer Programming' },
      { value: 'cmpsci187', text: 'CMPSCI 187 - Programming with Data' },
      { value: 'cmpsci197B', text: 'CMPSCI 197B - Explorations in Bioinformatics' },
      { value: 'cmpsci197C', text: 'CMPSCI 197C - Explorations in Computer Science & Informatics: Algorithms, Data, & Programming' },
      { value: 'cmpsci197CC', text: 'CMPSCI 197CC - Explorations in Creative Computing' },
      { value: 'cmpsci197D', text: 'CMPSCI 197D - Explorations in Computer Science & Informatics: Data Science' },
      { value: 'cmpsci197DS', text: 'CMPSCI 197DS - Explorations in Data Science' },
      { value: 'cmpsci197I', text: 'CMPSCI 197I - Explorations in Computing for Interactive Digital Media' },
      { value: 'cmpsci197N', text: 'CMPSCI 197N - Explorations in Computing for Natural Sciences' },
      { value: 'cmpsci197R', text: 'CMPSCI 197R - Practicum - R for Data Science' },
      { value: 'cmpsci197Y', text: 'CMPSCI 197Y - Special Topics in Computer Science & Informatics: Data Science for All' },
      { value: 'cmpsci198C', text: 'CMPSCI 198C - Practicum - Introduction to the C Programming Language' },
      // 200-Level Courses
      { value: 'cmpsci201', text: 'CMPSCI 201 - Architecture and Assembly Language' },
      { value: 'cmpsci202', text: 'CMPSCI 202 - Programming for Engineers' },
      { value: 'cmpsci220', text: 'CMPSCI 220 - Programming Methodology' },
      { value: 'cmpsci230', text: 'CMPSCI 230 - Computer Systems Principles' },
      { value: 'cmpsci240', text: 'CMPSCI 240 - Reasoning Under Uncertainty' },
      { value: 'cmpsci250', text: 'CMPSCI 250 - Introduction to Computation' },
      { value: 'cics256', text: 'CICS 256 - Make: A Hands-on Introduction to Physical Computing' },
      { value: 'cmpsci287', text: 'CMPSCI 287 - Programming Languages' },
      { value: 'cmpsci290A', text: 'CMPSCI 290A - Seminar - Computer Science and Informatics Colloquium' },
      // 300-Level Courses
      { value: 'cmpsci305', text: 'CMPSCI 305 - Social Issues in Computing' },
      { value: 'cmpsci311', text: 'CMPSCI 311 - Introduction to Algorithms' },
      { value: 'cmpsci320', text: 'CMPSCI 320 - Software Engineering' },
      { value: 'cmpsci326', text: 'CMPSCI 326 - Web Programming' },
      { value: 'cmpsci345', text: 'CMPSCI 345 - Operating Systems' },
      { value: 'cmpsci377', text: 'CMPSCI 377 - Operating Systems and System Programming' },
      { value: 'cmpsci383', text: 'CMPSCI 383 - Artificial Intelligence' },
      { value: 'cmpsci390D', text: 'CMPSCI 390D - Special Topics - Data Science' },
      { value: 'cmpsci390M', text: 'CMPSCI 390M - Special Topics - Computer Science & Informatics: Machine Learning for Health' },
      { value: 'cmpsci390S', text: 'CMPSCI 390S - Special Topics - Computer Science & Informatics: Scalable Distributed Systems' },
      { value: 'cmpsci391L', text: 'CMPSCI 391L - Special Topics - Machine Learning' },
      { value: 'cmpsci392F', text: 'CMPSCI 392F - Special Topics - Artificial Intelligence' },
      { value: 'cmpsci393A', text: 'CMPSCI 393A - Special Topics - Computer Science & Informatics: Software Engineering in Practice' },
      { value: 'cmpsci397A', text: 'CMPSCI 397A - Practicum - Advanced Data Science' },
      { value: 'cmpsci397B', text: 'CMPSCI 397B - Practicum - Advanced Data Science: Machine Learning' },
      { value: 'cmpsci397C', text: 'CMPSCI 397C - Practicum - Advanced Data Science: Deep Learning' },
      { value: 'cmpsci397D', text: 'CMPSCI 397D - Practicum - Data Science' },
      { value: 'cmpsci397E', text: 'CMPSCI 397E - Practicum - Exploratory Data Analysis' },
      { value: 'cmpsci397F', text: 'CMPSCI 397F - Practicum - Introduction to Data Science' },
      { value: 'cmpsci397G', text: 'CMPSCI 397G - Practicum - Data Mining' },
      { value: 'cmpsci397H', text: 'CMPSCI 397H - Practicum - Advanced Data Science: Statistical Learning' },
      { value: 'cmpsci397J', text: 'CMPSCI 397J - Practicum - Advanced Data Science: Bayesian Methods' },
      { value: 'cmpsci397K', text: 'CMPSCI 397K - Practicum - Advanced Data Science: Computational Data Science' },
      { value: 'cmpsci397L', text: 'CMPSCI 397L - Practicum - Advanced Data Science: Advanced Analytics' },
      { value: 'cmpsci397M', text: 'CMPSCI 397M - Practicum - Advanced Data Science: Data Visualization' },
      { value: 'cmpsci397N', text: 'CMPSCI 397N - Practicum - Advanced Data Science: Big Data' },
      { value: 'cmpsci397O', text: 'CMPSCI 397O - Practicum - Advanced Data Science: Time Series Analysis' },
      { value: 'cmpsci397P', text: 'CMPSCI 397P - Practicum - Advanced Data Science: Advanced Machine Learning' },
      { value: 'cmpsci397Q', text: 'CMPSCI 397Q - Practicum - Advanced Data Science: Natural Language Processing' },
      { value: 'cmpsci397R', text: 'CMPSCI 397R - Practicum - Advanced Data Science: Advanced Topics in Statistical Learning' },
      { value: 'cmpsci397S', text: 'CMPSCI 397S - Practicum - Advanced Data Science: Text Mining' },
      { value: 'cmpsci397T', text: 'CMPSCI 397T - Practicum - Advanced Data Science: Reinforcement Learning' },
      // 400-Level Courses
      { value: 'cmpsci403', text: 'CMPSCI 403 - Introduction to Robotics: Perception, Mechanics, Dynamics, and Control' },
      { value: 'cmpsci410', text: 'CMPSCI 410 - Compiler Techniques' },
      { value: 'cmpsci420', text: 'CMPSCI 420 - Software Entrepreneurship' },
      { value: 'cmpsci426', text: 'CMPSCI 426 - Scalable Web Systems' },
      { value: 'cmpsci429', text: 'CMPSCI 429 - Software Engineering Project Management' },
      { value: 'cmpsci445', text: 'CMPSCI 445 - Information Systems' },
      { value: 'cmpsci446', text: 'CMPSCI 446 - Search Engines' },
      { value: 'cmpsci453', text: 'CMPSCI 453 - Computer Networks' },
      { value: 'cmpsci461', text: 'CMPSCI 461 - Secure Distributed Systems' },
      ],
      'accounting': [
      ],
        'african_american_studies': [
            { value: 'afam101', text: 'AFAM 101 - Introduction to African-American Studies' },
            { value: 'afam201', text: 'AFAM 201 - African-American History' },
          ],
          'agricultural_economics': [
            { value: 'agrecon101', text: 'AGRECON 101 - Introduction to Agricultural Economics' },
            { value: 'agrecon102', text: 'AGRECON 102 - Agricultural Markets and Prices' },
          ],
    'agricultural_engineering': [],
    'agricultural_education': [],
    'agricultural_mechanization': [],
    'agricultural_production': [],
    'agricultural_science': [],
    'agricultural_technology': [],
    'agribusiness': [],
    'agronomy': [],
    'american_history': [],
    'american_literature': [],
    'american_politics': [],
    'american_studies': [],
    'animal_science': [],
    'anthropology': [],
    'applied_mathematics': [],
    'aquaculture': [],
    'arabic': [],
    'architecture': [],
    'art': [],
    'art_education': [],
    'art_history': [],
    'artificial_intelligence': [],
    'asian_american_studies': [],
    'astronomy': [],
    'athletic_training': [],
    'atmospheric_science': [],
    'auditory_processing': [],
    'autism_spectrum_disorders': [],
    'automation': [],
    'aviation': [],
    'behavioral_sciences': [],
    'biochemistry': [
        { value: 'biochem101', text: 'BIOCHEM 101 - Introduction to Biochemistry' },
        { value: 'biochem102', text: 'BIOCHEM 102 - Advanced Biochemistry' },
      ],
    'biodiversity': [],
    'bioengineering': [],
    'bioethics': [],
    'bioinformatics': [],
    'biological_anthropology': [],
    'biological_engineering': [],
    'biological_sciences': [],
    'biomaterials': [],
    'biomechanics': [],
    'biomedical_engineering': [],
    'biomedical_ethics': [],
    'biomedical_sciences': [],
    'biophysics': [],
    'biostatistics': [],
    'biotechnology': [],
    'botany': [],
    'business_administration': [],
    'business_communication': [],
    'business_economics': [],
    'business_ethics': [],
    'business_law': [],
    'business_management': [],
    'business_marketing': [],
    'business_mathematics': [],
    'business_psychology': [],
    'business_statistics': [],
    'cell_biology': [],
    'ceramics': [],
    'chemical_engineering': [],
    'chemical_physics': [],
    'chemistry': [],
    'child_development': [],
    'child_psychology': [],
    'chinese_language': [],
    'civil_engineering': [],
    'classical_archaeology': [],
    'classical_art': [],
    'classical_studies': [],
    'cognitive_psychology': [],
    'cognitive_science': [],
    'communication_disorders': [],
    'communication_studies': [],
    'comparative_literature': [],
    'computational_biology': [],
    'computational_mathematics': [],
    'computer_engineering': [],
    'computer_graphics': [],
    'computer_information_systems': [],
    'computer_networking': [],
    'computer_programming': [],
    'computer_science': [],
    'computer_security': [],
    'computer_systems': [],
    'computer_vision': [],
    'construction_management': [],
    'creative_writing': [],
    'criminal_justice': [],
    'culinary_arts': [],
    'cultural_anthropology': [],
    'dance': [],
    'data_analytics': [],
    'data_science': [],
    'design': [],
    'developmental_psychology': [],
    'digital_art': [],
    'digital_communication': [],
    'digital_design': [],
    'digital_media': [],
    'disability_studies': [],
    'early_childhood_education': [],
    'earth_science': [],
    'east_asian_studies': [],
    'economics': [],
    'education': [],
    'educational_administration': [],
    'educational_psychology': [],
    'educational_technology': [],
    'electrical_engineering': [],
    'electronic_engineering': [],
    'elementary_education': [],
    'emergency_management': [],
    'english': [],
    'environmental_biology': [],
    'environmental_engineering': [],
    'environmental_health': [],
    'environmental_policy': [],
    'environmental_science': [],
    'epidemiology': [],
    'ethics': [],
    'ethnic_studies': [],
    'european_history': [],
    'experimental_psychology': [],
    'fashion_design': [],
    'film_production': [],
        'finance': [],
    'fine_arts': [],
    'fisheries': [],
    'food_science': [],
    'forensic_science': [],
    'forest_management': [],
    'french_language': [],
    'game_design': [],
    'gender_studies': [],
    'general_engineering': [],
    'genetics': [],
    'geography': [],
    'geology': [],
    'german_language': [],
    'graphic_design': [],
    'greek': [],
    'health_administration': [],
    'health_communication': [],
    'health_education': [],
    'health_policy': [],
    'health_science': [],
    'higher_education': [],
    'history': [],
    'holistic_health': [],
    'horticulture': [],
    'hospitality_management': [],
    'human_biology': [],
    'human_development': [],
    'human_resource_management': [],
    'human_services': [],
    'humanities': [],
    'industrial_design': [],
    'industrial_engineering': [],
    'information_management': [],
    'information_systems': [],
    'information_technology': [],
    'instructional_design': [],
    'insurance': [],
    'interdisciplinary_studies': [],
    'interior_design': [],
    'international_business': [],
    'international_relations': [],
    'internet_technologies': [],
    'italian_language': [],
    'japanese_language': [],
    'journalism': [],
    'kinesiology': [],
    'landscape_architecture': [],
    'latin': [],
    'law': [],
    'leadership_studies': [],
    'library_science': [],
    'linguistics': [],
    'literature': [],
    'management': [],
    'manufacturing_engineering': [],
    'marine_biology': [],
    'marketing': [],
    'materials_science': [],
    'mathematics': [],
    'mechanical_engineering': [],
    'media_studies': [],
    'medical_assisting': [],
    'medical_imaging': [],
    'medical_technology': [],
    'medicine': [],
    'medieval_studies': [],
    'mental_health': [],
    'meteorology': [],
    'microbiology': [],
    'military_science': [],
    'mineralogy': [],
    'modern_languages': [],
    'music': [],
    'music_education': [],
    'music_performance': [],
    'music_theory': [],
    'music_therapy': [],
    'nanotechnology': [],
    'natural_resource_management': [],
    'neuroscience': [],
    'nuclear_engineering': [],
    'nursing': [],
    'nutrition': [],
    'occupational_therapy': [],
    'oceanography': [],
    'optometry': [],
    'organizational_leadership': [],
    'paleontology': [],
    'paralegal_studies': [],
    'peace_studies': [],
    'pediatric_nursing': [],
    'performing_arts': [],
    'personal_training': [],
    'petroleum_engineering': [],
    'pharmaceutical_sciences': [],
    'pharmacology': [],
    'pharmacy': [],
    'philosophy': [],
    'photography': [],
    'physical_education': [],
    'physical_therapy': [],
    'physics': [],
    'physiology': [],
    'plant_biology': [],
    'political_science': [],
    'pre-law': [],
    'pre-medicine': [],
    'pre-nursing': [],
    'pre-veterinary_medicine': [],
    'psychiatry': [],
    'psychology': [],
    'public_administration': [],
    'public_health': [],
    'public_policy': [],
    'radiation_therapy': [],
    'radiography': [],
    'radiology': [],
    'real_estate': [],
    'religious_studies': [],
    'respiratory_therapy': [],
    'rhetoric': [],
    'robotics': [],
    'sociology': [],
    'spanish_language': [],
    'special_education': [],
    'speech_language_pathology': [],
    'sports_management': [],
    'sports_medicine': [],
    'statistics': [],
    'strategic_management': [],
    'sustainability': [],
    'sustainable_development': [],
    'teaching': [],
    'technical_writing': [],
    'telecommunications': [],
    'theater': [],
    'theology': [],
    'toxicology': [],
    'urban_planning': [],
    'veterinary_medicine': [],
    'virology': [],
    'visual_arts': [],
    'web_development': [],
    'wildlife_biology': [],
    'zoology': [],

          'psychology': [
            { value: 'psy101', text: 'PSY 101 - Introduction to Psychology' },
            { value: 'psy201', text: 'PSY 201 - Developmental Psychology' },
          ],

        },
        'alabama_a&m_university': {
        },
      };
      

     
function populateClasses(university, department) {
    const classSelect = document.getElementById('class');
    classSelect.innerHTML = '';
  
    const courses = courseData[university][department];
  
    const levels = ['100-Level Courses', '200-Level Courses', '300-Level Courses', '400-Level Courses', '500-Level Courses', '600-Level Courses'];
    const optgroups = {};
  
    levels.forEach(level => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = level;
      optgroups[level] = optgroup;
      classSelect.appendChild(optgroup);
    });
  
    courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.value;
      option.textContent = course.text;
  
      const level = course.text.match(/\d+/)[0].charAt(0) + '00-Level Courses'; 
      optgroups[level].appendChild(option);
    });
  }
  
  document.getElementById('university').addEventListener('change', function() {
    const selectedUniversity = this.value;
    const selectedDepartment = document.getElementById('department').value;
    populateClasses(selectedUniversity, selectedDepartment);
  });
  
  document.getElementById('department').addEventListener('change', function() {
    const selectedUniversity = document.getElementById('university').value;
    const selectedDepartment = this.value;
    populateClasses(selectedUniversity, selectedDepartment);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const defaultUniversity = 'umass';
    const defaultDepartment = 'computer_science';
    populateClasses(defaultUniversity, defaultDepartment);
  });
  
  