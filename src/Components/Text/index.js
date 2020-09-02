import React, { useState, useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import './style.css'

const items = ['Craig', 'Wickersham', 'Software', 'Developer']
const config = { mass: 5, tension: 1500, friction: 200 }

const Text = () => {
    const [toggle, set] = useState(false)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    useEffect(() => {
        set(true)
    }, [])

    return (
        <div className="trails-main">
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </div>
    )
}

export default Text