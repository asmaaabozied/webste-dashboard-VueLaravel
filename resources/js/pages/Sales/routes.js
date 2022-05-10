const categories = () => import('./Categories');
const products = () => import('./Products');
const transactions = () => import('./Transactions');
const transaction = () => import('./Transaction');
const invoice = () => import('./Invoice');

export default [
    {
        path: '/sales/categories',
        name: 'sm2-1',
        component: categories,
        meta: {
            requiresAuth: true,
            role: 'sales_manager'
        }
    },
    {
        path: '/sales/products',
        name: 'sm3-1',
        component: products,
        meta: {
            requiresAuth: true,
            role: 'sales_manager'
        }
    },
    {
        path: '/sales/transactions',
        name: 'sm5',
        component: transactions,
        meta: {
            requiresAuth: true,
            role: 'sales_manager'
        }
    },
    {
        path: '/sales/transaction',
        name: 'sm6',
        component: transaction,
        meta: {
            requiresAuth: true,
            role: 'sales_manager'
        }
    },
    {
        path: '/sales/invoice',
        name: 'sm7',
        component: invoice,
        meta: {
            requiresAuth: true,
            role: 'sales_manager'
        }
    },
]