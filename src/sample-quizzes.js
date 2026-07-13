/* Built-in sample quizzes, seeded into storage the first time a teacher
   opens the dashboard (only ids not already present are added). */
window.SAMPLE_QUIZZES = [
  {
    id: 'quiz-spelling-bee',
    title: 'Spelling Bee: Tricky Words',
    questions: [
      { text: 'Which spelling is correct?', options: ['bergaya', 'bergayai'], correct: 0 },
      { text: 'Which spelling is correct?', options: ['analysis', 'analisis'], correct: 0 },
      { text: 'Which spelling is correct?', options: ['definitly', 'definitely'], correct: 1 },
      { text: 'Which spelling is correct?', options: ['seperate', 'separate'], correct: 1 },
      { text: 'Which spelling is correct?', options: ['neccessary', 'necessary'], correct: 1 },
      { text: 'Which spelling is correct?', options: ['recieve', 'receive'], correct: 1 },
      { text: 'Which spelling is correct?', options: ['beautifull', 'beautiful'], correct: 1 },
      { text: 'Which spelling is correct?', options: ['restaurant', 'restaraunt'], correct: 0 }
    ]
  },
  {
    id: 'quiz-animal-facts',
    title: 'Fun Animal Facts',
    questions: [
      { text: 'Which animal can sleep for up to 3 years?', options: ['Snail', 'Cat', 'Frog', 'Owl'], correct: 0 },
      { text: 'What is a baby kangaroo called?', options: ['Cub', 'Joey', 'Kit', 'Calf'], correct: 1 },
      { text: 'Which of these is the fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Ostrich'], correct: 1 },
      { text: 'How many hearts does an octopus have?', options: ['1', '2', '3', '4'], correct: 2 },
      { text: 'Which bird cannot fly?', options: ['Sparrow', 'Penguin', 'Eagle', 'Parrot'], correct: 1 },
      { text: 'What do you call a group of lions?', options: ['Pack', 'Herd', 'Pride', 'Flock'], correct: 2 },
      { text: 'Which animal is known for its black and white stripes?', options: ['Zebra', 'Tiger', 'Panda', 'Skunk'], correct: 0 },
      { text: 'Which sea creature has 5 arms and can regrow them?', options: ['Crab', 'Starfish', 'Jellyfish', 'Octopus'], correct: 1 }
    ]
  },
  {
    id: 'quiz-quick-math',
    title: 'Quick Math Facts',
    questions: [
      { text: 'What is 7 + 8?', options: ['13', '14', '15', '16'], correct: 2 },
      { text: 'What is 9 x 3?', options: ['27', '24', '21', '30'], correct: 0 },
      { text: 'What is 45 divided by 5?', options: ['8', '9', '10', '7'], correct: 1 },
      { text: 'What is 12 - 5?', options: ['6', '7', '8', '5'], correct: 1 },
      { text: 'What is 6 x 6?', options: ['30', '42', '36', '38'], correct: 2 },
      { text: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], correct: 1 },
      { text: 'What is half of 50?', options: ['20', '25', '30', '15'], correct: 1 },
      { text: 'What is 100 - 37?', options: ['63', '73', '53', '67'], correct: 0 }
    ]
  },
  {
    id: 'quiz-bm-vocab',
    title: 'Bahasa Melayu Vocabulary',
    questions: [
      { text: 'What does "kucing" mean?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correct: 1 },
      { text: 'What does "sekolah" mean?', options: ['Hospital', 'Market', 'School', 'House'], correct: 2 },
      { text: 'What does "gembira" mean?', options: ['Sad', 'Angry', 'Happy', 'Tired'], correct: 2 },
      { text: 'What does "air" mean?', options: ['Fire', 'Water', 'Wind', 'Earth'], correct: 1 },
      { text: 'What does "buku" mean?', options: ['Pen', 'Book', 'Bag', 'Table'], correct: 1 },
      { text: 'What does "besar" mean?', options: ['Small', 'Big', 'Fast', 'Slow'], correct: 1 },
      { text: 'What does "makan" mean?', options: ['Sleep', 'Run', 'Eat', 'Sing'], correct: 2 },
      { text: 'What does "rumah" mean?', options: ['House', 'Car', 'Tree', 'Road'], correct: 0 }
    ]
  },
  {
    id: 'quiz-malaysia-gk',
    title: 'Malaysia General Knowledge',
    questions: [
      { text: 'What is the capital city of Malaysia?', options: ['Penang', 'Kuala Lumpur', 'Johor Bahru', 'Ipoh'], correct: 1 },
      { text: 'Which island is known as the "Jewel of Kedah"?', options: ['Langkawi', 'Penang', 'Redang', 'Tioman'], correct: 0 },
      { text: "What is Malaysia's national flower?", options: ['Rose', 'Sunflower', 'Hibiscus', 'Lotus'], correct: 2 },
      { text: 'Which famous towers are located in Kuala Lumpur?', options: ['Eiffel Towers', 'Petronas Towers', 'Sky Towers', 'Merdeka Towers'], correct: 1 },
      { text: 'What is a popular Malaysian dish made with rice and coconut milk?', options: ['Nasi Lemak', 'Sushi', 'Pasta', 'Tacos'], correct: 0 },
      { text: 'Which state is Alor Setar the capital of?', options: ['Penang', 'Perak', 'Kedah', 'Selangor'], correct: 2 },
      { text: 'What currency is used in Malaysia?', options: ['Baht', 'Ringgit', 'Peso', 'Dollar'], correct: 1 },
      { text: 'Which sea separates Peninsular Malaysia from Borneo?', options: ['Red Sea', 'South China Sea', 'Arabian Sea', 'Baltic Sea'], correct: 1 }
    ]
  },
  {
    id: 'quiz-science-basics',
    title: 'Science Basics',
    questions: [
      { text: 'What gas do humans breathe in to survive?', options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Helium'], correct: 1 },
      { text: 'Which planet is closest to the sun?', options: ['Venus', 'Earth', 'Mercury', 'Mars'], correct: 2 },
      { text: 'What do plants need most to make their own food?', options: ['Sunlight', 'Moonlight', 'Sand', 'Ice'], correct: 0 },
      { text: 'Water is made up of hydrogen and what other gas?', options: ['Carbon', 'Oxygen', 'Nitrogen', 'Helium'], correct: 1 },
      { text: 'Which body part pumps blood around your body?', options: ['Lungs', 'Brain', 'Heart', 'Stomach'], correct: 2 },
      { text: 'What do we call animals that only eat plants?', options: ['Carnivores', 'Herbivores', 'Omnivores', 'Predators'], correct: 1 },
      { text: 'What is the largest organ in the human body?', options: ['Heart', 'Liver', 'Skin', 'Brain'], correct: 2 },
      { text: 'How many legs does an insect have?', options: ['4', '6', '8', '10'], correct: 1 }
    ]
  },
  {
    id: 'quiz-money-time',
    title: 'Money and Time',
    questions: [
      { text: 'How many sen make up RM1?', options: ['10', '50', '100', '1000'], correct: 2 },
      { text: 'If you have RM5 and spend RM2, how much is left?', options: ['RM1', 'RM2', 'RM3', 'RM4'], correct: 2 },
      { text: 'How many minutes are in one hour?', options: ['30', '45', '60', '100'], correct: 2 },
      { text: 'If it is 3:00 now, what time will it be in 30 minutes?', options: ['3:15', '3:30', '4:00', '3:45'], correct: 1 },
      { text: 'How many hours are in one day?', options: ['12', '20', '24', '30'], correct: 2 },
      { text: 'What do we call the coins and notes used in Malaysia?', options: ['Dollar', 'Ringgit', 'Peso', 'Rupee'], correct: 1 },
      { text: 'A toy costs RM8 and you pay with RM10, how much change do you get?', options: ['RM1', 'RM2', 'RM3', 'RM4'], correct: 1 },
      { text: 'How many days are in one week?', options: ['5', '6', '7', '8'], correct: 2 }
    ]
  }
];
