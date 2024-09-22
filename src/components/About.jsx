import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Hariom, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <p>
      <strong>MCA</strong>, Jawaharlal Nehru University, New Delhi, Sept 2023 – May 2025<br />
      <em>CGPA: 7.26</em>, Delhi, India
    </p>
  </div>
  <div>
    <p>
      <strong>B.Sc. Mathematics</strong>, Govt. College Kota, Rajasthan, Sept 2019 – May 2022<br />
      <em>Percentage: 80.59%</em>, Kota, Rajasthan
    </p>
  </div>
  <div>
    <p>
      <strong>Class 12th</strong>, JNV Jhalawar, Rajasthan, May 2018<br />
      <em>Percentage: 90.40%</em>, Pachpahar, Bhawanimandi
    </p>
  </div>
  <div>
    <p>
      <strong>Class 10th</strong>, JNV Jhalawar, Rajasthan, May 2016<br />
      <em>CGPA: 10</em>, Pachpahar, Bhawanimandi
    </p>
  </div>
</div>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
  Skills & Expertise
</h1>
<span>
  <strong>Languages:</strong> C/C++, Java, HTML/CSS, JavaScript, SQL<br />
  <strong>Developer Tools:</strong> VS Code, IntelliJ IDEA Ultimate<br />
  <strong>Web Development:</strong> Proficient in MERN Stack (MongoDB, Express, React, Node.js)<br />
  <strong>Technologies/Frameworks:</strong> Git/GitHub
</span>

        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
  Achievements & Awards
</h1>
<span>
  <strong>JNU, New Delhi</strong> (April 2024 – Present)<br />
  Player<br />
  • Active member of the Badminton and Volleyball teams.<br /><br />

  <strong>Alumni Meet</strong> (October 2023)<br />
  Volunteer<br />
  • Assisted in organizing and coordinating the alumni meet, contributing to its overall success.<br /><br />

  <strong>DST Inspire Camp, CURAJ Ajmer</strong> (December 2016)<br />
  Participant, Ajmer, Rajasthan<br />
  • Participated in the DST Inspire Camp, gaining insights into scientific and technological advancements.<br /><br />

  <strong>Drama Competition</strong> (2014)<br />
  2nd Position, Regional Level<br />
  • Achieved 2nd position in a regional drama competition, showcasing creativity and teamwork.
</span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
  Mission Statement
</h1>
<p>
  My mission is to leverage my skills and creativity to deliver innovative software solutions 
  that not only meet client expectations but also make a positive impact on the community. 
  I am committed to continuous learning and growth, actively seeking new challenges that allow me
 to expand my technical expertise and collaborate with others. With a passion for problem-solving and a strong sense of teamwork,
  I aim to contribute to projects that enhance user experiences and promote a safer, more connected world.
</p>

      </div>
    </div>
  );
}

export default About;
