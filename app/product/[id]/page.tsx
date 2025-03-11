import React from 'react'
export async function generateStaticParams() {}
const Product = ({params}:any) => {
    console.log({params});
    
    return (
        <div>page</div>
    )
}

export default Product