import React from 'react'
import '../style/about.css'
const About = () => {
    return (
        <main class="main-content">
            <section class="section">
                <h2 class="section-title">Our Story</h2>
                <p class="section-text">
                    Welcome to Give4Good, your destination for sustainable shopping and charitable donations. We promote responsible consumption, where you can make a positive impact on the environment and support those in need.
                </p>
                <p class="section-text">
                    At Give4Good, we believe every purchase can make a difference. Our website allows you to buy new products and donate your used items, extending product lifecycles, reducing waste, and contributing to a sustainable future.
                </p>
                <div class="subsection">
                    <h3 class="subsection-title">How it works:</h3>
                    <ul class="subsection-list">
                        <li class="subsection-item">Buy and Give: Browse our wide selection of new products and select the option to return your old item during checkout. Our platform ensures the legitimacy of listed products.</li>
                        <li class="subsection-item">Donation: If you don't intend to buy new products, you can directly donate your used items. Every donation matters and can bring joy to someone in need.</li>
                    </ul>
                </div>
                <div class="subsection">
                    <h3 class="subsection-title">The Impact:</h3>
                    <p class="subsection-text">
                        Through our platform, we support individuals and families in need, NGOs, and local communities by facilitating the donation of functional items. We also contribute to reducing environmental waste by properly recycling non-functional items. Our revenue from recycling helps enhance the user experience on our website.
                    </p>
                </div>
                <p class="section-text">
                    Join us on our mission to make a difference. Whether you choose to buy, donate, or both, every action counts. Together, we can build a more sustainable and compassionate world.
                </p>
            </section>

            <section class="section">
                <h2 class="section-title">Our Team</h2>
                <ul class="team-list">
                    <li class="team-member">Aman Kumar</li>
                    <li class="team-member">Abhishek Porwal</li>
                    <li class="team-member">Abhinav Pandey</li>
                    <li class="team-member">Pratyush Ghatole</li>
                </ul>
            </section>
        </main>

    )
}

export default About