const orders = () => import("./Orders");
const pendingOrder = () => import("./PendingOrder");
const maintenanceOrder = () => import("./MaintenanceOrder");
const workshops = () => import("./Workshops");
const createWorkshop = () => import("./../Admin/Workshops/Workshop.vue");
const cars = () => import("./Cars");
const spareParts = () => import("./SpareParts/SpareParts");
const orderDetails = () => import("./OrderDetails");

export default [
    {
        path: "/maintenance-manager/orders",
        name: "mm1",
        component: orders,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/pending-order/:type/:id",
        name: "mm8",
        component: pendingOrder,
        props: true,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/maintenance-order-details/:id",
        name: "mm9",
        component: maintenanceOrder,
        props: true,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/workshops",
        name: "mm3",
        component: workshops,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/workshop/:id/:preType/:preDepartment",
        name: "mm11",
        props: true,
        component: createWorkshop,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/cars",
        name: "mm5",
        component: cars,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/spare-parts",
        name: "mm7",
        component: spareParts,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    },
    {
        path: "/maintenance-manager/order-details/:type/:id",
        name: "mm10",
        component: orderDetails,
        meta: {
            requiresAuth: true,
            role: "maintenance_manager"
        }
    }
];
