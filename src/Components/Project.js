import React from "react"

export function Project({ title, imageUrl, skills }) {
    return (
       
        <section class="level hero is-halfheight" style={{ borderTop: "1px solid black" }}>
            <div class="level-item has-text-centered">
                <div>
                    <p class="title is-4">{title}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div style={{ maxWidth: '450px' }}>
                <a href="http://movie-api-dt.herokuapp.com/"><img className="screen-cap" src={imageUrl} /></a>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p className="title is-5">Tools</p>
                    <p className="skills">Looped array component?</p>
                </div>
            </div>
            
        </section>
    )
}