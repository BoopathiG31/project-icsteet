import React from 'react'
import './Conference.css'
import { assets } from '../../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

const Conference = () => {
  return (
    <div className='theme-title'>
        <h1>Conference Theme</h1>
        <div className='theme-img'> 
            {/*<img src={assets.seminar} alt="" width={100} />*/}
        </div>
        
        <p>The theme of the conference is &quot; <span>Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching &amp; Education, Engineering and Technology&quot;</span>. We aim to
        explore the latest advancements, challenges, and future directions in these diverse fields, emphasizing the role of interdisciplinary approaches in addressing global challenges.</p>

        <p>This theme emphasizes fostering innovation and collaboration across disciplines, encouraging
            participants to present solutions that address real-world challenges, promote sustainable
            development and advance knowledge for a brighter future. The conference underscores the
            interconnectedness of diverse fields and their collective potential to generate holistic, impactful
            solutions.</p>

        <p>By bringing together researchers, academics, professionals and students, the ICSTEET-2026
            provides an invaluable platform for networking, sharing best practices and discussing
            advancements in education, engineering, technology, social sciences and humanities. The
            conference serves as a catalyst for fostering multidisciplinary collaboration and driving
            meaningful change in academia and beyond.
        </p>

        <div className="key-area">
            <h1>Key Focus Areas of ICSTEET</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5>Innovations in Social Sciences</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Advancements in sociology, psychology, anthropology, and related fields.</li>
                        <li>New methodologies and technologies applied to social research.</li>
                        <li>Impact of social sciences in addressing global societal issues.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h5>Emerging Trends in Education</h5> </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Innovative teaching and learning practices.</li>
                            <li>Digital transformation in education, including e-learning platforms and
                            tools.</li>
                            <li>Education for sustainability and global citizenship.</li>
                            <li>Pedagogical strategies for diverse learner needs.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h5>Technology in Education</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Integration of AI, machine learning, and other technologies in educational
                        practices.</li>
                        <li>EdTech innovations and their role in enhancing learning experiences.</li>
                        <li>Digital literacy and skills development for the future workforce.</li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>Engineering and Technology Innovations</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Breakthroughs in engineering fields, including civil, mechanical, electrical,
                        and computer engineering.</li>
                        <li>Advancements in renewable energy, sustainable engineering, and smart
                        infrastructure.</li>
                        <li>The role of technology in solving global challenges such as climate
                        change, energy crises, and urbanization.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h5>Industry-Academia Collaboration</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Synergies between academic research and industry applications.</li>
                        <li>Collaboration models that bridge gaps between higher education and
                        industry needs.</li>
                        <li>Research-driven innovations in technology, manufacturing, and service
                        industries.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h5>Sustainable Development and Innovation</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Solutions that align with the United Nations Sustainable Development
                        Goals (SDGs).</li>
                        <li>The role of education and technology in driving sustainability in various
                        sectors.</li>
                        <li>Climate change, environmental conservation, and sustainable practices in
                        engineering and technology.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header><h5>Digital Transformation and Smart Solutions</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>The evolution of smart cities, smart homes, and IoT (Internet of Things).</li>
                        <li>Impact of 5G and future communication technologies on industries and
                        society.</li>
                        <li>The digital economy and its implications for education and society.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header><h5>Research Methodologies and Innovations</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>New methodologies in educational research, technology research, and
                        social science studies.</li>
                        <li>Quantitative, qualitative, and mixed-method approaches.</li>
                        <li>Data analytics, big data, and their applications in research.</li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header> <h5>Psychology and Education</h5> </Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>The psychology of learning, including cognitive, emotional, and social
                        aspects.</li>
                        <li>Role of mental health in education and professional development.</li>
                        <li>Interventions and strategies to support well-being in educational settings.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header><h5>Global Collaboration and Interdisciplinary Research</h5></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li>Cross-border and cross-disciplinary partnerships.</li>
                        <li>International education programs and collaborative research projects.</li>
                        <li>Sharing of global best practices and knowledge exchange across regions.</li>
                    </ul>
                    
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
        <div className="des-key-area">
        These key focus areas make ICSTEET-2026 a comprehensive platform for exploring
the intersections of <b>social sciences, education, engineering, </b>  and <b>technology </b>  while
addressing global challenges through innovative and interdisciplinary solutions.
        </div>
      
    </div>
  )
}

export default Conference
