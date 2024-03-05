import React from 'react';
import "./App.css"
import Price from './PricingCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    const data =[
        {
            plan: "Free",
            amount: "0$/month",
            user: "Single User",
            storage: "500GB Storage",
            projects: "Unlimited Public projects",
            access: "Community Access",
            premium: "Unlimited Private Projects",
            support: "Dedicated Phone Support",
            domain: "Free Sub Domain",
            status: "Monthly status Report"
        },
        {
            plan: "PLUS",
            amount: "$9/month",
            user: "5 Users",
            storage: "1TB Storage",
            projects: "Unlimited Public projects",
            access: "Community Access",
            premium: "Unlimited Private Projects",
            support: "Dedicated Phone Support",
            domain: "Free Sub Domain",
            status: "Monthly status Report"
        },
        {
            plan: "Pro",
            amount: "$49/month",
            user: "Unlimited Users",
            storage: "5TB Storage",
            projects: "Unlimited Public & Private projects",
            access: "Community & Private Access",
            premium: "Advanced Features",
            support: "Priority Phone Support",
            domain: "Custom Domain",
            status: "Monthly & Annual status Report"
        }
    ];

    return (
        <section className='pricing py-5 bg-primary'>
        <div className='container'>
            <div className='row g-5'>
                {data.map((d, index) => (
                        <Price
                        key={d.id}
                            plan={d.plan}
                            amount={d.amount}
                            user={d.user}
                            storage={d.storage}
                            projects={d.projects}
                            access={d.access}
                            premium={d.premium}
                            support={d.support}
                            domain={d.domain}
                            status={d.status}
                        />
                ))}
            </div>
        </div>
    </section>
    );
};
export default App