"use strict";
const formButton = document.querySelector('button');
formButton.addEventListener('click', () => {
    var _a;
    const name = document.querySelector('#name').value;
    const nationality = document.querySelector('#nationality').value;
    const religion = document.querySelector('#religion').value;
    const gender = ((_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value) || '';
    const education = document.querySelector('#education').value;
    const workExperience = document.querySelector('#workExperience').value;
    const skills = document.querySelector('#skills').value;
    const personalInfo = {
        name,
        nationality,
        religion,
        gender
    };
    const otherInfo = {
        education,
        workExperience,
        skills
    };
    generateResume(personalInfo, otherInfo);
});
function generateResume(personalInfo, otherInfo) {
    const resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.innerHTML = `
       <div>
           <h2>Personal Information</h2>
           <p><strong>Name:</strong> ${personalInfo.name}</p>
           <p><strong>Nationality:</strong> ${personalInfo.nationality}</p>
           <p><strong>Religion:</strong> ${personalInfo.religion}</p>
           <p><strong>Gender:</strong> ${personalInfo.gender}</p>
       </div>
       <div>
           <h2>Education</h2>
           <p>${otherInfo.education}</p>
       </div>
       <div>
           <h2>Work Experience</h2>
           <p>${otherInfo.workExperience}</p>
       </div>
       <div>
           <h2>Skills</h2>
           <p>${otherInfo.skills}</p>
       </div>
    `;
}
