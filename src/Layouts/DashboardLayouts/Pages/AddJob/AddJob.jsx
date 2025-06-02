// File path__
import "./AddJob.css";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

// NPM Package__
import Swal from "sweetalert2";

// From react__
import { useState } from "react";

const AddJob = () => {
  const axiosSecure = useAxiosSecure();
  const [jobPostLoading, setJobPostLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [tags, setTags] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleJobData = async (e) => {
    e.preventDefault();

    const form = e.target;

    const jobData = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      employmentType: form.employmentType.value,
      jobType: form.jobType.value,
      salary: {
        min: parseFloat(form.min.value),
        max: parseFloat(form.max.value),
        currency: form.currency.value,
        type: form.salaryType.value,
      },
      postedDate: form.postedDate.value,
      deadline: form.deadline.value,
      experienceLevel: form.experienceLevel.value,
      jobDescription: form.jobDescription.value,
      requirements: form.requirements.value,
      responsibilities: form.responsibilities.value,
      skills: skillInput,
      companyInfo: {
        logo: form.logo.value,
        website: form.website.value,
      },
      category: form.category.value,
      tags: tags,
    };

    try {
      setJobPostLoading(true);
      const res = await axiosSecure.post("/add-job-circular", jobData);
      if (res.data?.insertedId) {
        Swal.fire("Success!", "Job posted successfully", "success");

        // Clear the form manually__
        form.min.value = "";
        form.max.value = "";
        form.logo.value = "";
        form.title.value = "";
        form.company.value = "";
        form.jobType.value = "";
        form.website.value = "";
        form.location.value = "";
        form.currency.value = "";
        form.deadline.value = "";
        form.category.value = "";
        form.tagsInput.value = "";
        form.salaryType.value = "";
        form.postedDate.value = "";
        form.requirements.value = "";
        form.jobDescription.value = "";
        form.employmentType.value = "";
        form.experienceLevel.value = "";
        form.responsibilities.value = "";
        setTags([]);
        setSkills([]);
        setTagInput("");
        setSkillInput("");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to post job", "error");
    } finally {
      setJobPostLoading(false);
    }
  };

  return (
    <>
      <section id="job_add_section">
        <div className="form_wrapper">
          <h2 className="form_title">Post a Job</h2>

          <form onSubmit={handleJobData} className="job_form">
            <div className="form_group">
              <label>Job Title</label>
              <input
                name="title"
                type="text"
                placeholder="Enter job title"
                required
              />
            </div>

            <div className="form_group">
              <label>Company Name</label>
              <input
                name="company"
                type="text"
                placeholder="Company name"
                required
              />
            </div>

            <div className="form_group">
              <label>Location</label>
              <input
                name="location"
                type="text"
                placeholder="e.g. Dhaka, Bangladesh"
                required
              />
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Employment Type</label>
                <select name="employmentType" required>
                  <option value="">Select type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="form_group">
                <label>Job Type</label>
                <select name="jobType" required>
                  <option value="">Select type</option>
                  <option>OnSite</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Salary Min</label>
                <input
                  name="min"
                  type="number"
                  placeholder="Minimum"
                  required
                />
              </div>

              <div className="form_group">
                <label>Salary Max</label>
                <input
                  name="max"
                  type="number"
                  placeholder="Maximum"
                  required
                />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Currency</label>
                <select name="currency" required>
                  <option>USD</option>
                  <option>BDT</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="form_group">
                <label>Salary Type</label>
                <select name="salaryType" required>
                  <option>Monthly</option>
                  <option>Hourly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Experience Level</label>
                <select name="experienceLevel" required>
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                </select>
              </div>

              <div className="form_group">
                <label>Category</label>
                <select name="category" required>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Technology</option>
                </select>
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Apply Start Date</label>
                <input name="postedDate" type="date" required />
              </div>

              <div className="form_group">
                <label>Apply End Date</label>
                <input name="deadline" type="date" required />
              </div>
            </div>

            <div className="form_group">
              <label>Job Description</label>
              <textarea
                name="jobDescription"
                rows="4"
                placeholder="Write job description..."
                required
              />
            </div>

            <div className="form_group">
              <label>Requirements</label>
              <textarea
                name="requirements"
                rows="3"
                placeholder="Add job requirements..."
                required
              />
            </div>

            <div className="form_group">
              <label>Responsibilities</label>
              <textarea
                name="responsibilities"
                rows="3"
                placeholder="Add responsibilities..."
                required
              />
            </div>

            <div className="form_group">
              <label>Skills</label>
              <input
                type="text"
                placeholder="Type a skill and press Enter"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleAddSkill}
                required
              />
              <div className="tag_list">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="tag_item"
                    onClick={() => removeSkill(index)}
                  >
                    {skill} ×
                  </span>
                ))}
              </div>
            </div>

            <div className="form_group">
              <label>Company Logo URL</label>
              <input
                name="logo"
                type="text"
                placeholder="https://..."
                required
              />
            </div>

            <div className="form_group">
              <label>Company Website Link</label>
              <input
                name="website"
                type="text"
                placeholder="https://..."
                required
              />
            </div>

            <div className="form_group">
              <label>Tags</label>
              <input
                type="text"
                name="tagsInput"
                placeholder="Type a tag and press Enter"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
              <div className="tag_list">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag_item"
                    onClick={() => removeTag(index)}
                  >
                    {tag} ×
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="submit_button">
              {jobPostLoading ? "Working..." : "Post Job"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddJob;
