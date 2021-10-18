import React from "react"
import { About, Description, Image } from "../styles"

const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Daniel Rodrigues</h2>
            
                <h2>Developer FullSatck</h2>

                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                <button>Click Aqui</button>
            </Description>

            <Image>
                <img src = "https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg" alt ="" />
            </Image> 
        </About> 
    )
}

export default AboutSection