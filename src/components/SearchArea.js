import React from 'react';
import { Grid } from 'react-bootstrap';


const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col-sm-4 offset-sm-4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-feild">
                            <input placeholder="search movie" type="text" onChange={props.handleChange} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}


export default SearchArea;