export const quizData = {
  title: 'General Knowledge Quiz',
  description: 'Test your knowledge with these general knowledge questions!',
  questions: [
    {
      question: "Suppose M= {x:x is positive integers less than 10} and N= {x:x is prime numbers}, what is M ∩ N?",
      options: ["{2}", "{2,4}", "{2,3,5,7}", "{6}"],
      answer: "{2,3,5,7}"
    },
    {
      question: "Let A ={2,3,5,7}, B={3,5,7,9} and C={5,7,9,11}, What is (A ∪ B) ∩ (B ∪ C)?",
      options: ["{3,5,7,9}", "{5,7}", "{5,7,9}", "{3,5,7}"],
      answer: "{3,5,7,9}"
    },
    {
      question: "Suppose Ų ={x:1≤x≤10} and X={2,4,6,8}, Y={3,6,9}; find (X ∩ Y)'.",
      options: ["{6}", "{ø}", "{1,2,3,4,5,6,7,8,9,10}", "{1,2,3,4,5,7,8,9,10}"],
      answer: "{1,2,3,4,5,7,8,9,10}"
    },
    {
      question: "Which of these is equivalent to (X ∩ X')?",
      options: ["{ø}", "ų", "X", "Y"],
      answer: "ų"
    },
    {
      question: "In a group of 100 students, 44 students love maths, 56 students love physics and 49 love GST. Among these students, 18 love math only, 20 love physics only and 25 love GST only. How many love at least two courses?",
      options: ["86", "6", "37", "40"],
      answer: "37"
    },
    {
      question: "Determine the pre-image of f:x-> x²+2x+1 if C = {16,25,49} and f is defined on D.",
      options: ["{-5,-6,-8,3,4,6}", "{-3,-5,-7,2,3,5}", "{-4,-5,-7,3,4,5}", "{-5,-6,-8,2,3,5}"],
      answer: "{-5,-6,-8,3,4,6}"
    },
    {
      question: "What is the range of Z=25x +2?",
      options: ["0,1", "0,infinity", "-infinity,0", "-infinity,infinity"],
      answer: "-infinity,infinity"
    },
    {
      question: "Given that f(x) =(2x+7)/3; solve for x such that f(x)=f⁻¹(x).",
      options: ["7", "7/2", "-7", "-7/2"],
      answer: "7"
    },
    {
      question: "Determine the zero of the function defined by f(x)= (3x+7)/(8x²+16x+8).",
      options: ["0", "-1", "-2⅓", "-1,-8"],
      answer: "-1"
    },
    {
      question: "Given that f(z)=y²z and f(3)=243; find y.",
      options: ["3", "9", "81", "24"],
      answer: "9"
    },
    {
      question: "The type of mapping that assigns a unique matric number to each student of 100 level is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "one-to-one mapping"
    },
    {
      question: "The type of mapping where every 100 level student is assigned to a course such that every course has at least one student enrolled in it is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "Onto mapping"
    },
    {
      question: "Imagine a school where every student wears the same colored uniform. The mapping that assigns every student to the color of the shirt worn is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "constant mapping"
    },
    {
      question: "If f:x=>7x+9 is a mapping defined on the set R of real numbers. Determine the pre-image of {-5,2,9}.",
      options: ["{-26,23,27}", "{26,23,-27}", "{-2,-1,0}", "{2,10}"],
      answer: "{-2,-1,0}"
    },
    {
      question: "Given that the image of Q under the mapping x=7x+9 is 23, what is the value of Q?",
      options: ["2", "-2", "170", "-170"],
      answer: "2"
    },
    {
      question: "The product of a complex number and its conjugate results in a ______.",
      options: ["Real number", "Imaginary number", "Complex number", "Zero"],
      answer: "Real number"
    },
    {
      question: "Evaluate 4/(1+i)⁴.",
      options: ["1", "-1", "4", "-4"],
      answer: "1"
    },
    {
      question: "Simplify 2/(3-4i) + 2/(2+2i).",
      options: ["37/25 - 9i/25", "37/25 + 9i/25", "29/50 + 47i/50", "29/50 - 57i/50"],
      answer: "37/25 - 9i/25"
    },
    {
      question: "Find Z₁•Z₃ where Z₁ = 1+2i and Z₃ = 2+3i.",
      options: ["7i-4", "8+7i", "4+7i", "8-7i"],
      answer: "7i-4"
    },
    {
      question: "Find (Z₁)² where Z₁ = 1+2i.",
      options: ["5i-4", "5i+4", "4-3i", "4i-3"],
      answer: "4i-3"
    },
    {
      question: "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find f ∘ h.",
      options: ["x²+1", "x²+4", "x+3", "x²+2"],
      answer: "x+3"
    },
    {
      question: "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find g ∘ h.",
      options: ["x²+1", "x²+4", "x+1", "x²+2"],
      answer: "x²+1"
    },
    {
      question: "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find g ∘ f.",
      options: ["x²+6x-10", "x²-6x-10", "x²-6x+10", "x²+6x+10"],
      answer: "x²+6x+10"
    },
    {
      question: "Evaluate |x - 3| > 1",
      options: ["x < 2", "x > 4", "x > 2", "A & B"],
      answer: "A & B"
    },
    {
      question: "Evaluate |2x - 5| < 3",
      options: ["x > 4", "1 < x < 4", "x > 1", "A & B"],
      answer: "1 < x < 4"
    },
    {
      question: "Evaluate |2 - 4x| ≥ 6",
      options: ["x ≥ 2", "x ≤ -1", "2 ≤ x > -1", "A & B"],
      answer: "A & B"
    },
    {
      question: "Express cos²θ in terms of multiple angles.",
      options: ["2[cos 2θ - 1]", "2⁻¹[cos 2θ - 1]", "2[cos 2θ + 1]", "2⁻¹[cos 2θ + 1]"],
      answer: "2⁻¹[cos 2θ + 1]"
    },
    {
      question: "Find f(x) = √(x + 4) when f(-3).",
      options: ["i", "-i", "1", "0"],
      answer: "1"
    },
    {
      question: "What is the value of 'a' given a + ib = (1 - i) / (2 + i)?",
      options: ["-1/5", "3/5", "-3/5", "1/5"],
      answer: "1/5"
    },
    {
      question: "Given Z₁ = 3 + 2i and Z₂ = 4 - 5i, evaluate Z₁Z₂.",
      options: ["2 - 7i", "22 - 7i", "2 + 7i", "22 + 7i"],
      answer: "22 - 7i"
    },
    {
      question: "If X ∩ Y = ∅, then X and Y are said to be:",
      options: ["Finite sets", "Disjoint sets", "Null sets", "Infinite sets"],
      answer: "Disjoint sets"
    },
    {
      question: "Determine the modulus and argument of 2 + 3i.",
      options: ["√13, 33.69°", "√13, 56.31°", "√13, -33.69°", "√13, -56.31°"],
      answer: "√13, 56.31°"
    },
    {
      question: "Solve the inequality 2x - 3 < x + 7.",
      options: ["x + 10 < 0", "x < 10", "x > -10", "x - 10 > 0"],
      answer: "x < 10"
    },
    {
      question: "Simplify √20 + √125 + √45.",
      options: ["5(√5)", "7(√5)", "10(√5)", "11(√5)"],
      answer: "10(√5)"
    },
    {
      question: "Given Z₁ = 2 + 3j and Z₂ = 3 - 4j, evaluate Z₂ - Z₁.",
      options: ["1 + 7j", "1 - 7j", "-1 + 7j", "-1 - 7j"],
      answer: "1 - 7j"
    },
    {
      question: "In a village, 97% speak Hausa and 64% speak English. What percentage speak both?",
      options: ["61%", "63%", "67%", "69%"],
      answer: "61%"
    },
    {
      question: "In a class of 20 boys, 16 play soccer, 12 play hockey and 2 do not play. How many play both?",
      options: ["6", "8", "10", "12"],
      answer: "10"
    },
    {
      question: "Find the inverse of f:x = (x + 1) / (x - 2).",
      options: ["(2x + 1) / (x - 1)", "(2x - 1) / (x - 1)", "(2x + 1) / (x + 1)", "(x - 1) / (2x + 1)"],
      answer: "(2x + 1) / (x - 1)"
    },
    {
      question: "The discriminant for the equation 3x² - 4x + 12 = 0 is:",
      options: ["72", "-72", "128", "-128"],
      answer: "-128"
    },
    {
      question: "If X = {2, 4, 6}, determine the number of power sets nP(X).",
      options: ["3", "6", "8", "16"],
      answer: "8"
    },
  {
    "question": "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find f ∘ h.",
    "options": ["x²+1", "x²+4", "x+3", "x²+2"],
    "answer": "C"
  },
  {
    "question": "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find g ∘ h.",
    "options": ["x²+1", "x²+4", "x+1", "x²+2"],
    "answer": "A"
  },
  {
    "question": "Given f(x)=x+3, g(x)=x²+1 and h(x)=x. Find g ∘ f.",
    "options": ["x²+6x-10", "x²-6x-10", "x²-6x+10", "x²+6x+10"],
    "answer": "D"
  },
  {
    "question": "Evaluate |x - 3| > 1",
    "options": ["x < 2", "x > 4", "x > 2", "A & B"],
    "answer": "D"
  },
  {
    "question": "Evaluate |2x - 5| < 3",
    "options": ["x > 4", "1 < x < 4", "x > 1", "A & B"],
    "answer": "B"
  },
  {
    "question": "Evaluate |2 - 4x| ≥ 6",
    "options": ["x ≥ 2", "x ≤ -1", "2 ≤ x > -1", "A & B"],
    "answer": "D"
  },
  {
    "question": "Express cos²θ in terms of multiple angles.",
    "options": ["2[cos 2θ - 1]", "2⁻¹[cos 2θ - 1]", "2[cos 2θ + 1]", "2⁻¹[cos 2θ + 1]"],
    "answer": "D"
  },
  {
    "question": "Find f(x) = √(x + 4) when f(-3).",
    "options": ["i", "-i", "1", "0"],
    "answer": "C"
  },
  {
    "question": "What is the value of 'a' given a + ib = (1 - i) / (2 + i)?",
    "options": ["-1/5", "3/5", "-3/5", "1/5"],
    "answer": "D"
  },
  {
    "question": "Given Z₁ = 3 + 2i and Z₂ = 4 - 5i, evaluate Z₁Z₂.",
    "options": ["2 - 7i", "22 - 7i", "2 + 7i", "22 + 7i"],
    "answer": "B"
  },
  {
    "question": "If X ∩ Y = ∅, then X and Y are said to be:",
    "options": ["Finite sets", "Disjoint sets", "Null sets", "Infinite sets"],
    "answer": "B"
  },
  {
    "question": "Determine the modulus and argument of 2 + 3i.",
    "options": ["√13, 33.69°", "√13, 56.31°", "√13, -33.69°", "√13, -56.31°"],
    "answer": "B"
  },
  {
    "question": "Solve the inequality 2x - 3 < x + 7.",
    "options": ["x + 10 < 0", "x < 10", "x > -10", "x - 10 > 0"],
    "answer": "B"
  },
  {
    "question": "Simplify √20 + √125 + √45.",
    "options": ["5(√5)", "7(√5)", "10(√5)", "11(√5)"],
    "answer": "C"
  },
  {
    "question": "Given Z₁ = 2 + 3j and Z₂ = 3 - 4j, evaluate Z₂ - Z₁.",
    "options": ["1 + 7j", "1 - 7j", "-1 + 7j", "-1 - 7j"],
    "answer": "B"
  },
  {
    "question": "In a village, 97% speak Hausa and 64% speak English. What percentage speak both?",
    "options": ["61%", "63%", "67%", "69%"],
    "answer": "A"
  },
  {
    "question": "In a class of 20 boys, 16 play soccer, 12 play hockey and 2 do not play. How many play both?",
    "options": ["6", "8", "10", "12"],
    "answer": "C"
  },
  {
    "question": "Find the inverse of f:x = (x + 1) / (x - 2).",
    "options": ["(2x + 1) / (x - 1)", "(2x - 1) / (x - 1)", "(2x + 1) / (x + 1)", "(x - 1) / (2x + 1)"],
    "answer": "A"
  },
  {
    "question": "The discriminant for the equation 3x² - 4x + 12 = 0 is:",
    "options": ["72", "-72", "128", "-128"],
    "answer": "D"
  },
  {
    "question": "If X = {2, 4, 6}, determine the number of power sets nP(X).",
    "options": ["3", "6", "8", "16"],
    "answer": "C"
  }
  ]
      
  };
  





