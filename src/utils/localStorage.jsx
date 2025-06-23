const employees = [
  {
    id: 1,
    firstName: "Rohit",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare sales report",
        description: "Compile Q2 sales data into a summary report.",
        date: "2025-06-23",
        category: "Reporting"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client feedback",
        description: "Collect and document feedback from client X.",
        date: "2025-06-20",
        category: "Client Relations"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update inventory",
        description: "Failed to update inventory records on time.",
        date: "2025-06-21",
        category: "Inventory"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design homepage",
        description: "Create responsive homepage design for new product.",
        date: "2025-06-23",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Weekly sync-up with design team.",
        date: "2025-06-19",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client presentation",
        description: "Missed presentation deadline for client Y.",
        date: "2025-06-18",
        category: "Client Relations"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Logo revisions",
        description: "Update logos based on brand feedback.",
        date: "2025-06-23",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Security audit",
        description: "Check system for vulnerabilities and report findings.",
        date: "2025-06-22",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Firewall config",
        description: "Configured firewall rules as per policy.",
        date: "2025-06-21",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Backup data",
        description: "Failed scheduled backup job due to disk error.",
        date: "2025-06-20",
        category: "IT Operations"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Password policy update",
        description: "Implemented stronger password requirements.",
        date: "2025-06-19",
        category: "IT Policy"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Install antivirus",
        description: "Roll out antivirus to 20 workstations.",
        date: "2025-06-23",
        category: "IT Security"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "HR policy review",
        description: "Review and revise HR handbook.",
        date: "2025-06-23",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Recruitment ads",
        description: "Post job ads on hiring platforms.",
        date: "2025-06-20",
        category: "Recruitment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Schedule interviews",
        description: "Interviews were not scheduled on time.",
        date: "2025-06-21",
        category: "Recruitment"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Marketing campaign",
        description: "Launch social media marketing campaign.",
        date: "2025-06-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product photoshoot",
        description: "Photoshoot completed for summer collection.",
        date: "2025-06-18",
        category: "Creative"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Ad script",
        description: "Script not approved before shoot date.",
        date: "2025-06-19",
        category: "Marketing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Campaign analytics",
        description: "Set up dashboard to track campaign metrics.",
        date: "2025-06-23",
        category: "Analytics"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Neha",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) 
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}
