import React from 'react'

const header = (props) => {
    return (
    <header data-title={props.title}>
        <section className="head_goback" onClick={() => window.history.go(-1)}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style={{fill:'none',stroke:'rgb(0,0,0)',strokeWidth:'2'}} transform="scale(3.4, 3)"/>
            </svg>
        </section>
    </header>
    )
}
export default header;