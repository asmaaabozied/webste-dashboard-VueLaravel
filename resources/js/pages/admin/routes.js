const employees           = () => import("./Employee/Employees.vue");
const employee            = () => import("./Employee/Employee.vue");
const car                 = () => import("./Cars/Car.vue");
const cars                = () => import("./Cars/Cars.vue");
const agents              = () => import("./Agents/Agents.vue");
const discounts           = () => import("./Discounts/Discounts");
const ads                 = () => import("./Ads/Ads");
const orders              = () => import("./Orders/Orders");
// const businessHours = () => import('./BusinessHours');
const workshops           = () => import("./Workshops/Workshops.vue");
const workshop            = () => import("./Workshops/Workshop.vue");
const fee                 = () => import("./Fees/Fee.vue");
const fees                = () => import("./Fees/Fees.vue");
const department          = () => import("./Department/Department.vue");
const departments         = () => import("./Department/Departments.vue");
const cmsEditor           = () => import("./contentManagement/editor.vue");
const cmsIndex            = () => import("./contentManagement/index.vue");
const appointmentGenerate = () => import("./branch/appointment-generate.vue");
const appointments        = () => import("./branch/appointments.vue");
const branch              = () => import("./branch/branch.vue");
const branches            = () => import("./branch/branches.vue");

const manufacturer  = () => import("./manufacturer/manufacturer.vue");
const manufacturers = () => import("./manufacturer/manufacturers.vue");

const services = () => import("./Services/Services.vue");
const service  = () => import("./Services/Service.vue");

const roles = () =>import('./Roles/Roles.vue');
const role = () =>import('./Roles/Role.vue');

const devices = () => import('./Devices/Devices.vue');
const device  = () => import('./Devices/Device.vue');
// const sparePart = () => import('./Devices/Device.vue');

const sparePart = () => import('./Devices/SpareParts/SpareParts.vue');
const SpareParts  = () => import('./Devices/SpareParts/SparePart.vue');

const user = () => import('./users/users.vue');
const users  = () => import('./users/user.vue');

export default [
    {
        path: "/admin-panel/roles/role/:id",
        name: "role",
        component: role,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/roles",
        name: "roles",
        component: roles,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/services",
        name: "services",
        component: services,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/service/:id",
        name: "service",
        component: service,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/employees",
        name: "sa2-1",
        component: employees,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/manufacturers",
        name: "manufacturers",
        component: manufacturers,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/manufacturer/:id",
        name: "manufacturer",
        component: manufacturer,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/employee/:id",
        name: "sa2-2",
        component: employee,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/cars",
        name: "sa9-1",
        component: cars,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/car/:id",
        name: "sa9-2",
        component: car,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/agents",
        name: "sa1-2",
        component: agents,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/discounts",
        name: "sa6-1",
        component: discounts,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/ads",
        name: "sa3-1",
        component: ads,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/orders",
        name: "sa4",
        component: orders,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    // {
    //     path: '/admin-panel/business-hours',
    //     name: 'sa5',
    //     component: businessHours,
    //     meta: {
    //         requiresAuth: true,
    //         role: 'admin',
    //     }
    // },
    {
        path: "/admin-panel/workshops",
        name: "sa7-1",
        component: workshops,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/workshop/:id",
        name: "sa7-2",
        component: workshop,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/fees",
        name: "SA8-1",
        component: fees,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/fee/:id",
        name: "sa8-2",
        component: fee,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/departments",
        name: "sa10-1",
        component: departments,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/department/:id",
        name: "sa10-2",
        component: department,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/content-management/:id",
        name: "sa11",
        component: cmsEditor,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/content-management",
        name: "sa12",
        component: cmsIndex,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/branches",
        name: "sa13",
        component: branches,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/branch/:id",
        name: "sa14",
        component: branch,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/appointments-generate/:id",
        name: "sa15",
        component: appointmentGenerate,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/appointments-view/:id",
        name: "sa16",
        component: appointments,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },

    {
        path: "/admin-panel/devices",
        name: "devices",
        component: devices,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/devices/:id",
        name: "device",
        component: device,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },


//    {
//         path: '/admin-panel/business-hours',
//         name: 'SpareParts',
//         component: SpareParts,
//         meta: {
//             requiresAuth: true,
//             role: 'admin',
//         }
//     },

    {
        path: "/admin-panel/sparePart",
        name: "sparePart",
        component: sparePart,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/sparePart/:id",
        name: "SpareParts",
        component: SpareParts,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },



    {
        path: "/admin-panel/user",
        name: "user",
        component: user,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
    {
        path: "/admin-panel/user/:id",
        name: "users",
        component: users,
        meta: {
            requiresAuth: true,
            role: "admin",
        },
    },
];
