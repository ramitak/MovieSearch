import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SearchArea = (props) => {
    return (
        <Row>
            <Col className="col-sm-4 offset-sm-4">
                <form action="" onSubmit={props.handleSubmit} className="searchForm">
                    <div className="input-feild">
                        <input placeholder="Search Movies" type="text" onChange={props.handleChange} />
                    </div>
                </form>
             </Col>
        </Row>
        
    )
}


export default SearchArea;