const courses = `React & Redux for Beginners
Advanced Guide to Bootstrap
Trainwreck: An Introduction to Rails
R for Masochists
Build Your First HTML Site
CSS Tips and Tricks
FAANG Interview Guide
A Quick Intro to Swift
C# for Dummies
Secrets of CSS - The Expert\'s Toolkit
Principles of Functional JavaScript Programming
Advanced Data Structures and Algorithms
Take Your JavaScript to the Next Level
Crash Course: Fundamentals of HTML & CSS
Deploying Your First Site on Heroku
Chrome Debugger Tools Tips & Techniques
React Front to Back
Angular Front to Back
Learning to Program Pythonically: Beginners and Intermediates
The Busy Developer\'s Guide to Go
The Complete jQuery Course: Beginners to Advanced
Artificial Intelligence with Python
Object-oriented Programming in Javascript
Modern React with Redux
Node.js: The Complete Guide to RESTful APIs
Fundamental Neuroscience - The Hard Parts Made Easy
Principles of Biochemistry - The Stuff You Missed In College
Bioethics and Why You Should Care
Navigating the Hospital Billing System
Patient Billing Best Practices
Algorithms in Neural Networks
Introduction to Cognitive Behavioral Therapy
The Science of Intermittent Fasting 
CPR & First Aid Principles
The Ins & Outs of the Emergency Medical System
Biostatistics for the General Practitioner
Cryptography and Patient Data
Machine Learning in Surgical Technology
Basics of Neurophysiological Systems
Medicine and Engineering - A History of Saving Lives
Nutrition Principles for Differing Body Types
Beginner to Advanced Meditation Techniques
Basics of Massage Therapy
Strength Training for Beginners 
Weightlifting Mechanics and Levers 
Intro R for Biostatistics 
Learn Matlab - Data Analysis for Large Data Sets
Data Visualition with Matlab
Introduction to Medical Imaging
Reverse Type 2 Diabetes Naturally
Master Polite English
Learn German Language: Complete German Course - Beginners
Spanish 1-4: Beginner, Elementary, Intermediate and Advanced
Chinese Made Easy L1: Understand 65% of Chinese in 10 hours
English Vocabulary Launch: Upgrade your speaking
Learn Korean! Start Speaking Korean Now!
Fastbreak Spanish: Save Time and Memory
American Sign Language Level 1
Perfect Your German: Tips & Tricks to Avoid Common Mistakes
Complete Russian Language course for Beginners A1
Practice and Perfect your French - Intermediate Level
How to Learn and Memorize the Vocabulary of Any Language
Survive Italy Without Being Fluent in Italian
Learn Japanese for Beginners: The Ultimate 100-Lesson Course
How to do a Hebrew Word Study Without Knowing Hebrew
5 Days to a Better Accent
Japanese in 14 Weeks with Scientific Memorization Method
CORE CHINESE 1: Build Up Chinese Foundations by Practice
Spanish Made Simple: Beginner Spanish
An Introduction to Classical Latin
English Fluency: How to Sound Like a Native Speaker
3 Minute Portuguese - Course 1
College Mandarin Chinese Course on Your Own - Beginning Level
Learn to Speak Vietnamese Like a Native
American Accent Training for IT Professionals
Dog Training - Part 1: Natural Raw Food Diet For Dogs & Cats
Successful Russian Tortoise Care and Husbandry
How to Start a Pet Care Business: Open Your Own Dog Kennel!
Dog Training - Part 2: Natural & Holistic Pet Health Care
Learn how to groom your dog at home!
How to Increase Life Span & Quality of Life for Your Dog Cat
Horse Care 101
How To Assemble a Standard Rabbit Hutch (Master Class)
How to treat your pet like a vet (against ticks and fleas)
Love Dogs? Make Money as a Pet-sitter!
Goat Yoga: the Road to Enlightenment
Dog Training - Part 3: Training Your Dog to Fetch Beer
Jumpstart Your Alpaca Shearing Business
Cat Milk Bottling: a How To Guide
Training Cats To Get Along In a Multi-Cat Household
Dog & Cat Behavior Problems
Introduction to Animal Psychology Certificate: Pets Behavior
How to Train a Puppy
Dog CPR, First Aid + Safety for pet pros + dedicated owners
Dog body language. How To Read Your Dog\'s Body Language
Old Dog Care: A-Z Tips to take care of your senior dog
How to Crate Train Your Dog/Puppy & Train an Aggressive Dog
Animal Communication - Animals and the Afterlife
Telepathic Animal Healing 101
Animal Communication For beginners`;

const arrOfCourses = courses.split('\n');
const courseData = arrOfCourses.map(course => ({ name: course }));

module.exports = courseData;
