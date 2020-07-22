import React from 'react';
const Error = () => {
return(
<>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-10 col-12 p-4  mx-auto card border-0 shadow-lg">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <img src={require('../../images/error.svg')} className="img-fluid" alt="not found" width="350" />
                    </div>
                    <div className="col-md-6 col-12 mx-auto">
                        <h1 className="text-center text-danger display-4">OOps !!. Error 404 Page Not found</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
export default Error;