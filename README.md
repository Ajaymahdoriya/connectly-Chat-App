# Connectly - Real-Time Chat Application

Connectly is a modern, real-time chat application built with cutting-edge technologies like *Next.js, **Convex, **Clerk, and **TailwindCSS*. It provides a seamless and intuitive user experience for connecting with friends, creating group chats, and managing conversations.


---

![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7
)![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Features

### 🔗 *Authentication*
- Secure user authentication powered by [Clerk](https://clerk.dev).
- Supports user registration, login, and profile management.

### 💬 *Conversations*
- *Direct Messages (DMs):* Chat one-on-one with friends.
- *Group Chats:* Create and manage group conversations with multiple members.
- *Real-Time Messaging:* Messages are updated instantly using Convex's real-time database.

### 👫 *Friends Management*
- Send and receive friend requests.
- Accept or deny friend requests.
- View a list of all your friends.

### 📂 *Group Management*
- Create groups with custom names.
- Add or remove members from groups.
- Leave or delete groups with confirmation dialogs.

### 🛠 *UI/UX*
- Fully responsive design for desktop and mobile.
- Dark mode support with theme toggling.
- Intuitive and accessible UI components built with [Radix UI](https://www.radix-ui.com) and TailwindCSS.

### 🔔 *Notifications*
- Real-time toast notifications for actions like sending friend requests, accepting requests, and leaving groups.

### 🔍 *Error Handling*
- Graceful error handling with user-friendly messages.
- Fallback components for empty states (e.g., no conversations or friend requests).

---
## 🛠 Tech Stack

### *Frontend*
- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework for styling.
- [Radix UI](https://www.radix-ui.com) - Accessible and customizable UI primitives.
- [Lucide Icons](https://lucide.dev) - Beautiful and consistent icons.

### *Backend*
- [Convex](https://convex.dev) - Real-time database and serverless backend.
- [Clerk](https://clerk.dev) - Authentication and user management.

### *Other Tools*
- [React Hook Form](https://react-hook-form.com) - Form validation and management.
- [Zod](https://zod.dev) - Schema validation for forms and APIs.
- [Sonner](https://sonner.dev) - Toast notifications.
- [Date-fns](https://date-fns.org) - Date manipulation library.

---

### Installation

1. Clone the repository:
   bash
   git clone https://github.com/Ajaymahdoriya/connectly.git
   cd connectly
   

2. Install dependencies:
  bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  

3. Set up environment variables:

Create a .env.local file in the root directory.
Add the following variables:

  bash
  NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
  CLERK_WEBHOOK_SECRET=<your-clerk-webhook-secret>
  

4. Start the development server:

  bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  

---

## 🧩 Challenges and Problems Faced During Development

### 1. Real-Time Data Synchronization
- *Challenge:* Ensuring all users see up-to-date conversations and messages instantly.
- *Solution:* Leveraged Convex’s real-time queries and subscriptions, but had to carefully manage cache invalidation and UI updates to avoid stale data or race conditions.

### 2. Authentication Integration
- *Challenge:* Integrating Clerk authentication with Convex and Next.js, especially for server-side rendering and API routes.
- *Solution:* Implemented custom hooks and middleware to synchronize user sessions and handle edge cases like token refresh and session expiry.

### 3. Complex State Management
- *Challenge:* Managing UI state for asynchronous actions (e.g., sending messages, leaving groups) and ensuring feedback is always accurate.
- *Solution:* Built custom hooks like useMutationState to track pending states and errors, and used optimistic UI updates for a smoother experience.

### 4. Error Handling and User Feedback
- *Challenge:* Providing clear, actionable feedback for both expected and unexpected errors, especially in real-time operations.
- *Solution:* Used Sonner for toast notifications and differentiated between known (e.g., validation) and unknown errors for better user guidance.

### 5. Group and Membership Logic
- *Challenge:* Handling group creation, member management, and permissions, including edge cases like removing the last member or deleting a group.
- *Solution:* Designed robust backend logic and confirmation dialogs to prevent accidental data loss and ensure data integrity.

### 6. Responsive and Accessible UI
- *Challenge:* Making the app fully responsive and accessible, including keyboard navigation and screen reader support.
- *Solution:* Utilized Radix UI primitives and followed accessibility best practices, testing across devices and input methods.

### 7. Schema and Data Modeling
- *Challenge:* Designing a scalable and flexible schema for users, conversations, messages, and group memberships.
- *Solution:* Iteratively refined the Convex schema to support efficient queries and relationships, adding indexes for performance.

### 8. Deployment and Environment Management
- *Challenge:* Managing environment variables and deployment settings for Vercel and Convex, especially for secrets and webhooks.
- *Solution:* Documented required environment variables and automated deployment steps, ensuring smooth CI/CD.

### 9. Third-Party Integration Issues
- *Challenge:* Dealing with breaking changes or bugs in third-party libraries (e.g., Clerk, Convex, Radix UI).
- *Solution:* Kept dependencies up to date, read release notes, and contributed bug reports or fixes when necessary.

### 10. Developer Experience and Code Quality
- *Challenge:* Maintaining code quality and consistency in a fast-moving project.
- *Solution:* Used ESLint, Prettier, and TypeScript for static analysis and formatting, and enforced best practices through code reviews.

---
# Key Challenges and Solutions in LeaveGroupDialog Component

## 1. *Challenge: Handling Asynchronous Operations with User Feedback ⏳*
- *Problem:*  
  The leaveGroup mutation is an asynchronous operation, and the user needs immediate feedback on the status of the action (success or failure). Additionally, the UI should prevent duplicate submissions while the operation is pending.
- *Solution:*  
  - Utilized the useMutationState hook to manage the mutation state (pending) and disable action buttons (Cancel and Leave) during processing.
  - Integrated the toast library to provide real-time feedback:
    - toast.success for successful group leave notifications ✅.
    - toast.error for error handling, distinguishing between known (ConvexError) and unknown errors ❌.

## 2. *Challenge: Graceful Error Handling 🛡*
- *Problem:*  
  Errors during the leaveGroup mutation (e.g., network issues or backend errors) must be managed gracefully to maintain a smooth user experience.
- *Solution:*  
  - Checked for ConvexError instances to display tailored error messages (error.data).
  - Provided a generic error message ('Unexpected Error Occurred') as a fallback for unforeseen issues.
  - Deployed toast.error to display error messages in a non-intrusive manner.


## 3. *Challenge: Preventing Unintended Actions 🚫*
- *Problem:*  
  Leaving a group is a critical, irreversible action. Users must be clearly informed of the consequences before proceeding.
- *Solution:*  
  - Incorporated an AlertDialog component to present a confirmation dialog with a clear warning message in the AlertDialogDescription.
  - Offered two distinct options: Cancel to abort the action and Leave to confirm, ensuring user control and awareness.

## 4. *Challenge: Managing Component State 🔄*
- *Problem:*  
  The open state of the dialog must be managed externally to allow parent components to control its visibility.
- *Solution:*  
  - Passed open and setOpen as props to the LeaveGroupDialog component.
  - Employed the onOpenChange callback of the AlertDialog to synchronize the dialog's state with the parent component.

## 5. *Challenge: Accessibility and User Experience ♿*
- *Problem:*  
  The dialog must be accessible and deliver a seamless experience for all users, including those utilizing assistive technologies.
- *Solution:*  
  - Leveraged the accessible AlertDialog component from the UI library.
  - Ensured the proper use of semantic elements like AlertDialogHeader, AlertDialogTitle, and AlertDialogDescription to aid screen readers.

## 6. *Challenge: Ensuring Consistent UI Behavior 🎨*
- *Problem:*  
  The UI should remain consistent and responsive during the mutation process.
- *Solution:*  
  - Disabled the Cancel and Leave buttons while the mutation is pending to prevent duplicate submissions.
  - Maintained a clean and minimal design for the dialog, ensuring consistency with the overall application UI.

---
## Summary
The LeaveGroupDialog component exemplifies robust handling of asynchronous operations, error management, and user experience design. By addressing these challenges, the component ensures a seamless, reliable, and accessible experience for users performing critical actions like leaving a group.

---
# Key Takeaways from the Connectly Project

## 1. Real-Time Functionality ⏱
- Leveraged *Convex* to implement real-time updates for conversations, ensuring instant message delivery and seamless user interactions.
- Demonstrated expertise in developing real-time applications with a serverless backend.

## 2. Authentication and Authorization 🔐
- Integrated *Clerk* for secure user authentication and authorization.
- Implemented user registration, login, and session management, showcasing proficiency with modern authentication solutions.

## 3. Scalable and Modular Architecture 🏗
- Designed a scalable architecture with reusable components and hooks, ensuring maintainability and extensibility.
- Employed modular design patterns for dialogs, forms, and API interactions.

## 4. Responsive and Accessible UI 📱♿
- Developed a fully responsive user interface using *TailwindCSS* and *Radix UI*, ensuring optimal performance across devices.
- Prioritized accessibility by using semantic components and supporting assistive technologies.

## 5. Error Handling and User Feedback 🚨
- Implemented robust error handling with clear, user-friendly feedback using *Sonner* for toast notifications.
- Differentiated between known and unknown errors to provide precise and meaningful messages.

## 6. Critical Action Confirmation ⚠
- Designed confirmation dialogs (e.g., LeaveGroupDialog) for critical actions, ensuring users are well informed about irreversible changes.
- Utilized accessible and intuitive dialog components to enhance user confidence and safety.

## 7. State Management 🔄
- Managed complex component states using React hooks such as useState and custom hooks like useMutationState.
- Ensured smooth user interactions by effectively handling pending states and preventing duplicate actions.

## 8. Dark Mode Support 🌙
- Added dark mode functionality, allowing users to seamlessly toggle between light and dark themes for a personalized experience.

## 9. Team Collaboration and Group Management 👥
- Implemented features for creating, managing, and leaving group conversations.
- Demonstrated the ability to handle complex relational data structures within a real-time environment.

## 10. Scalability and Performance 🚀
- Designed the application to effortlessly scale using a serverless backend, ensuring high performance under load.
- Optimized API calls and implemented lazy-loading for components to enhance performance and minimize resource usage.

## 11. Error Resilience 🔧
- Ensured application stability through graceful error handling and fallback UI components, even during unexpected failures.

## 12. Modern Development Practices 💻
- Adhered to best practices in React development, including component-based architecture and TypeScript for enhanced type safety.
- Maintained high code quality with tools like *ESLint* and *Prettier*, ensuring consistency and readability.

## 13. Deployment and CI/CD 🚢
- Deployed the application on *Vercel*, demonstrating proficiency with modern deployment pipelines.
- Configured environment variables and streamlined the deployment process for reliability.

## 14. User-Centric Design 🎨
- Focused on delivering a seamless, intuitive user experience with real-time notifications, responsive design, and accessible components.
- Ensured the design catered to both technical and non-technical users.

## 15. Learning and Growth 📚
- Gained hands-on experience with cutting-edge technologies such as *Convex, **Clerk, **TailwindCSS, and **Radix UI*.
- Enhanced problem-solving skills by addressing challenges in real-time updates, error handling, and state management.

---
## ⭐ Connectly Project: STAR-Format

---
### 🔐 Clerk Authentication Integration

- *Situation:* We needed secure, seamless authentication and user management for Connectly.
- *Task:* Integrate Clerk to handle user sign-up, sign-in, and session management, ensuring security and a smooth UX.
- *Action:* Implemented Clerk’s APIs for registration, login, and profile management, synchronized sessions with Convex, and handled edge cases like token refresh and session expiry.
- *Result:* Delivered robust authentication with minimal friction, enabling secure access and a personalized experience for every user.

---

### 💬 Real-Time Messaging with Convex

- *Situation:* Users expected instant message delivery and updates in all conversations and groups.
- *Task:* Build a real-time chat system with instant updates and no stale data.
- *Action:* Leveraged Convex’s real-time queries and subscriptions, managed cache invalidation, and implemented optimistic UI updates for smooth messaging.
- *Result:* Achieved a highly responsive chat experience where messages, friend requests, and group changes appear instantly for all users.

---
### 🗂 Group & Friend Management Logic

- *Situation:* The app required complex logic for group creation, membership, and friend requests.
- *Task:* Design scalable backend and UI flows for managing friends and groups, including edge cases.
- *Action:* Modeled users, groups, and memberships in Convex, built robust APIs for adding/removing members, and implemented confirmation dialogs for critical actions.
- *Result:* Enabled users to easily create, join, leave, and manage groups and friendships, with clear feedback and error handling.

---

### 🛠 Error Handling & User Feedback

- *Situation:* Real-time operations and async actions could fail or produce unexpected results.
- *Task:* Provide clear, actionable feedback for all user actions and errors.
- *Action:* Used Sonner for toast notifications, differentiated between known and unknown errors, and built fallback UI for empty/error states.
- *Result:* Users always receive immediate, understandable feedback, improving trust and usability.

---

### 🌙 Dark Mode & Responsive UI

- *Situation:* Users wanted a modern, accessible interface with dark mode and mobile support.
- *Task:* Implement a fully responsive UI with theme toggling and accessibility best practices.
- *Action:* Used TailwindCSS and Radix UI for responsive layouts and accessible components, integrated dark mode toggle, and tested across devices.
- *Result:* Delivered a beautiful, accessible chat experience on any device, with seamless light/dark theme switching.

---

### 🧑‍💻 Convex & Clerk Integration with Next.js

- *Situation:* Integrating Convex (real-time backend) and Clerk (auth) with Next.js SSR and API routes was non-trivial.
- *Task:* Ensure secure, consistent user sessions and real-time data across client and server.
- *Action:* Built custom hooks and middleware to synchronize authentication, handled session expiry, and separated client/server logic as needed.
- *Result:* Maintained secure, real-time access control and data flow without breaking SSR or leaking sensitive data.

---
### 🚀 Deployment & Environment Management

- *Situation:* Needed to deploy Connectly securely with different environments and secrets.
- *Task:* Manage environment variables and deployment settings for Vercel and Convex.
- *Action:* Documented required environment variables, used Vercel’s environment manager, and automated deployment steps for CI/CD.
- *Result:* Achieved reliable, secure deployments with no secret leaks and smooth updates.

---

### 📦 Learning Convex & Radix UI

- *Situation:* Convex and Radix UI were new technologies with limited documentation.
- *Task:* Quickly become proficient and leverage their strengths for real-time data and accessible UI.
- *Action:* Explored community resources, built modular components, and iteratively refined schemas and UI patterns.
- *Result:* Successfully delivered a scalable, real-time chat app with a modern, accessible interface—skills now transferable to future projects.

---
### 🧩 Leave Group Dialog (Critical Action Confirmation)

- *Situation:* Leaving a group is a critical, irreversible action requiring user confirmation and robust error handling.
- *Task:* Build a dialog that prevents accidental group exits and provides clear feedback.
- *Action:* Used accessible AlertDialog components, managed async mutation state, disabled buttons during processing, and provided toast notifications for success/error.
- *Result:* Users are protected from accidental actions, always informed of outcomes, and experience a smooth, accessible UI.

---

### 📱 Responsive & Accessible Design

- *Situation:* The app needed to be usable on all devices and by all users, including those with assistive tech.
- *Task:* Ensure full responsiveness and accessibility.
- *Action:* Leveraged TailwindCSS for layouts, Radix UI for accessible primitives, and tested keyboard navigation and screen reader support.
- *Result:* Connectly is fully usable and visually appealing on any device, for any user.

---
### 📝 Summary


The Connectly project demonstrates expertise in building scalable, real-time applications with modern technologies. It highlights proficiency in both frontend and backend development, exceptional user experience design, and adherence to software engineering best practices—making it a standout addition to any engineering portfolio.

---

## Summary
The Connectly project exemplifies expertise in building scalable, real-time applications using modern technologies. It highlights proficiency in both frontend and backend development, exceptional user experience design, and adherence to software engineering best practices, making it a significant asset to any software engineering portfolio.
