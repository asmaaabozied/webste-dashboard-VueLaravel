const MaintenanceOrder = () => import("./order/MaintenanceOrder.vue");
const services = () => import("./services/Services.vue");
const consultation = () => import("./order/ConsultOrder.vue");
const PreventiveMaintenance = () => import("./order/PreventiveMaintenance.vue");
const Orders = () => import("./order/Orders.vue");
const JobApplication = () => import("./order/jobApplicationOrder.vue");
const servicespages = () => import("./order/servicespages.vue");


const Products = () => import("./products/products.vue");
const portal = () => import("./Portal.vue");
const InstallmentOrder = () => import("./order/InstallmentOrder");
const orderDetails = () => import("./order/OrderDetails.vue");
const chooseOrderType = () => import("./order/ChooseOrderType.vue");
const Transactions = () => import("./payment/Transactions.vue");
const paymentWays = () => import("./payment/PaymentWays.vue");
const Payment = () => import("./payment/payment.vue");
const reviewOrder = () => import("./order/ReviewOrder.vue");
const contactUs = () => import("./ContactUs.vue");

export default [
  {
    path: "/customer/portal",
    name: "c4",
    component: portal,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/my-orders",
    name: "c2",
    component: Orders,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/order-maintenance-with-warranty",
    component: MaintenanceOrder,
    name: "c1",
    props: { warranty: true },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/order-maintenance-without-warranty",
    component: MaintenanceOrder,
    name: "c3",
    props: { warranty: false },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/maintenance-order-details/:id",
    component: orderDetails,
    props: { isMaintenance: true, isFromNotification:false },
    name: "c5",
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/maintenance-order-details/:id",
    component: orderDetails,
    props: { isMaintenance: true, isFromNotification:true },
    name: "cn5",
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/install-order-details/:id",
    component: orderDetails,
    props: { isMaintenance: false, isFromNotification:false },
    name: "c10",
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/install-order-details/:id",
    component: orderDetails,
    props: { isMaintenance: false, isFromNotification:true },
    name: "cn10",
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/services",
    name: "c6",
    component: services,
    meta: {
      requiresAuth: false,
      // role: "customer",
    },
  },

  {
    path: "/customer/consultation/0",
    name: "c00",
    component: consultation,
    props: { isFromNotification: false },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/consultation/:id",
    name: "c11",
    component: consultation,
    props: { isFromNotification: false },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/consultation/:id",
    name: "cn11",
    component: consultation,
    props: { isFromNotification: true },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/preventive-maintenance/:id",
    name: "c12",
    component: PreventiveMaintenance,
    props: { isFromNotification: false },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/preventive-maintenance/:id",
    name: "cn12",
    component: PreventiveMaintenance,
    props: { isFromNotification: true },
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/payment-ways",
    name: "c14",
    props: true,
    component: paymentWays,
    meta: {
      requiresAuth: true,
      role: "customer",
    },
  },
  {
    path: "/customer/transactions",
    name: "c19",
    component: Transactions,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/contact-us",
    name: "c15",
    component: contactUs,
    meta: {
      requiresAuth: false,
      // role: "customer",
    },
  },
  {
    path: "/customer/job-application",
    name: "c16",
    component: JobApplication,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/payment",
    name: "c21",
    component: Payment,
    meta: {
      requiresAuth: true,
      role: "customer",
    },
  },
  {
    path: "/customer/products",
    name: "c13",
    component: Products,
    meta: {
      requiresAuth: false,
      // role: "customer",
    },
  },
  {
    path: "/customer/installment-order",
    name: "c9",
    component: InstallmentOrder,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/choose-order-type",
    name: "choose-order-type",
    component: chooseOrderType,
    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
  {
    path: "/customer/review-order",
    name: "c22",
    component: reviewOrder,


    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },

  {
    path: "/customer/services-pages/:id",
    name: "cccc5",
    component: servicespages,


    meta: {
      requiresAuth: true,
      // role: "customer",
    },
  },
];
