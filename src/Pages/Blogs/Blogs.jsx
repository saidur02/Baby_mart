import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-slate-100 p-4 rounded-lg mb-4'>
                <h2 className='text-2xl font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-xl'>Ans : An access token and a refresh token are commonly used in authentication systems to provide secure access to resources and protect user information. Here's a breakdown of what they are, how they work, and where they should be stored on the client-side.</p>
            </div>
            <div className='bg-slate-100 p-4 rounded-lg mb-4'>
                <h2 className='text-2xl font-bold'>Compare SQL and NoSQL databases?</h2>
                <p className='text-xl'>Ans : SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
            </div>
            <div className='bg-slate-100 p-4 rounded-lg mb-4'>
                <h2 className='text-2xl font-bold'>What is express js? What is Nest JS?</h2>
                <p className='text-xl'>Ans : Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className='bg-slate-100 p-4 rounded-lg mb-4'>
                <h2 className='text-2xl font-bold'>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-xl'>Ans : What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blogs;