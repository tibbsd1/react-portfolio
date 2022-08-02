import React from "react"


export function Project({ title, imageUrl, skills, link }) {

    return (

        <section className="level hero is-halfheight" style={{ borderTop: "1px solid black" }}>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title is-4">{title}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div style={{ maxWidth: '450px' }}>
                    <a href={link}><img className="screen-cap" src={imageUrl} alt='screenshot'/></a>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title is-5">Tools</p>
                    {skills && skills.map(skill => (
                        <span className="tag is-link" key={skill} style={{marginRight: '1px'}}>{skill}</span>
                    ))}
                </div>
            </div>

        </section>
    )
}