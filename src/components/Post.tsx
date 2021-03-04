import React from 'react'

export function Post({id, title, autorName}) {
    return (
        <section key={id}>
            <h3>{title}</h3>
            <span>{autorName}</span>
        </section>
    )
}
