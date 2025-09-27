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
   git clone https://github.com/Aashay30/connectly.git
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
