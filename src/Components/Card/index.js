import React from 'react'
import { useSpring, animated } from 'react-spring'
import './style.css'
import styled from 'styled-components'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const CardContent = styled.div`
    flex-direction: column;
    padding: 20px;
`
const CardRow = styled.div`
    flex-direction: row;
    padding: 20px;
`

const Card = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 15, tension: 350, friction: 40 } }))
    return (
        <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
        </animated.div>
    )
}

export default Card
