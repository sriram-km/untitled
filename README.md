# Untitled
---

## Inspiration  💡
My friend led the Drama club at my school, he has done a few dramas with his own stories. I have seen him using an offline word processor to write the script. Using Tabs, new lines, alignments, etc to format his script. Untitled helps the script to be more productive. It is an online script writer which uses [fountain syntax](https://fountain.io/). Fountain is a plain text markup language for screenwriting.

## What it does ⚙️
It makes the task of Screenwriting elegant and easy. No more tabs, newlines, and alignments. Untitled is an online scriptwriting tool that uses fountain syntax.  It has the following features,
 * It does the real-time processing of the fountain syntax
 * No more ctrl+S, the project gets saved automatically
 * You can save the project as a fountain file or PDF
 * You can upload your existing files to Untitled to edit
 * You can print the script directly from the app

## How we built it 🛠️
The front end for Untitled has been developed with Jquery and hosted on Node with Express.js. The database is powered by Appwrite. We are using the Appwite bucket to maintain the script files. Express.js is also used for the backend servelet to interact with Appwrite. The parser for fountain to Html happens in the browser in real-time as we type. 

## Challenges we ran into ⚠️
I haven't developed a node app before, I had no idea how it works. I know javascript as a language but haven't used that with node before. I found it hard to learn the workflow of node.js. Writing an Asynchronous function in the Node, almost made me sleepless. In Java and Python, things were different.  But using the same language for everything I like it. I haven't used backend-as-a-service before. I used Appwrite for this initially I wasn't able to figure out how this works. Appwrite doesn't allow updating a file, later find out this is the scenario with every service outside. For update we will be deleting the file and creating a new file with the same ID. 

## Accomplishments that we're proud of 🧑‍💻
I know javascript but I haven't tried Node. I am much into Java, I thought there will be a learning curve. But Node is simple and easily understandable. I also got an idea of how BaaS(backend-as-a-service) works and how it could speed up and make life simple for a developer. I used BaaS for the first time and that is Appwrite. I am planning to use Appwrite for upcoming projects, it saves really a lot of time.

## What we learned 🎓
I learned the node and Express.js. Writing Async function to handle APIs in the node. In front, I use Jquery to overcome it. But doing this in node helped me understand it completely. I learned to develop servlet in the Express.js. I learned Appwrite while building the Untilled.

## What's next for UNTITLED ⏭️
 * To provide an authentication feature and user management
 * Hosting it publically with a domain for the scriptwriters to use and cherish. 
 * Planning to provide a real-time collaboration feature.
 * Fountain to Html as an API service
