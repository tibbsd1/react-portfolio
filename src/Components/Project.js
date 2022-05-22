import React from "react"

export function Project(props) {
    return (
        <div className="level" style={{ borderTop: "1px solid black" }}>
            <section className="hero is-halfheight">
                <div className="hero-body">
                    <div className="level-left">

                        <p className="level-item title is-4">
                            {props.title}
                        </p>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                        <p>image here? maybe</p>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}