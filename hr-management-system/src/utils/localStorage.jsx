import React from 'react'
const employees = [
  {
    id: 1,
    email: "john@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDescription: "Improve the employee dashboard design.",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue.",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create weekly backup of database.",
        taskCategory: "Database"
      }
    ]
  },

  {
    id: 2,
    email: "emma@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Build responsive landing page.",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all REST APIs.",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy app on production server.",
        taskCategory: "Deployment"
      }
    ]
  },

  {
    id: 3,
    email: "michael@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark theme feature.",
        taskCategory: "UI/UX"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading.",
        taskCategory: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Firebase",
        taskDescription: "Configure Firebase authentication.",
        taskCategory: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "sophia@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation.",
        taskCategory: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Reporting",
        taskDescription: "Report UI related bugs.",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance.",
        taskCategory: "DevOps"
      }
    ]
  },

  {
    id: 5,
    email: "david@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality.",
        taskCategory: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDescription: "Develop admin management panel.",
        taskCategory: "Admin"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Refactoring",
        taskDescription: "Clean and optimize old code.",
        taskCategory: "Development"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];
console.log(admin)
export const SetLocalStorage = () => {
  localStorage.clear();
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}
