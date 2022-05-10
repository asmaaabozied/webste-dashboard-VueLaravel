import JobApplicationOrders from "./JobsApplications/JobsApplications";
import JobApplication from "./JobApplication/JobApplication";

export default [
  {
    path: "/HRManager/JobApplicationOrders",
    name: "HR2",
    component: JobApplicationOrders,
    meta: {
      requiresAuth: true,
      role: "hr_manager",
    },
  },
  {
    path: "/HRManager/JobApplicationOrder/:id",
    name: "HR3",
    component: JobApplication,
    meta: {
      requiresAuth: true,
      role: "hr_manager",
    },
  },
];
