import React from 'react'

export default function Title({title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h1 className="title text-uppercase font-weight-extra-bold">
                        {title}
                </h1>
            </div>
            
        </div>
    )
}
