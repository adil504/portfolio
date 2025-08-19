import React, { useState } from "react";
import "./Login.css";
import { GiBleedingEye } from "react-icons/gi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  // 🔹 Validation Functions
  const validateEmail = (value) =>
    !value.includes("@") ? "Email must contain '@'" : "";

  const validatePassword = (value) => {
    if (value.length === 0) return "Password is required";
    if (value.length < 8) return "Password must be 8 characters long";
    if (value.length > 8) return "Password cannot exceed 8 characters";
    return "";
  };

  const validateConfirmPassword = (value) =>
    value !== password ? "Passwords do not match" : "";

  const validatePhone = (value) =>
    !/^\d{10}$/.test(value) ? "Phone number must be exactly 10 digits" : "";

  const validateDob = (value) => (!value ? "Date of Birth is required" : "");

  const validateName = (value, field) =>
    value.trim().length === 0 ? `${field} is required` : "";

  const validateAddress = (value) =>
    value.trim().length < 5 ? "Address must be at least 5 characters" : "";

  const validateGender = (value) => (!value ? "Select Gender" : "");

  // 🔹 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(confirmPassword),
      phone: validatePhone(phone),
      dob: validateDob(dob),
      fatherName: validateName(fatherName, "Father Name"),
      motherName: validateName(motherName, "Mother Name"),
      address: validateAddress(address),
      gender: validateGender(gender),
    };

    setErrors(newErrors);

    const noErrors = Object.values(newErrors).every((msg) => msg === "");
    if (noErrors) {
      alert("🎉 Login Successful!");
      console.log({
        email,
        password,
        phone,
        dob,
        fatherName,
        motherName,
        address,
        gender,
      });
    }
  };

  return (
    <div className="page-container">
      <div className="login-box">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          {/* Password */}
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <GiBleedingEye style={{ color: "darkred" }}
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <GiBleedingEye color="darkred"
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          {/* Phone */}
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter 10 digit Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          {/* Date of Birth */}
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}

          {/* Father Name */}
          <label>Father Name</label>
          <input
            type="text"
            placeholder="Enter Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          {errors.fatherName && <p className="error">{errors.fatherName}</p>}

          {/* Mother Name */}
          <label>Mother Name</label>
          <input
            type="text"
            placeholder="Enter Mother Name"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
          {errors.motherName && <p className="error">{errors.motherName}</p>}

          {/* Address */}
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="error">{errors.address}</p>}

          {/* Gender */}
          <label>Gender</label>
          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          {/* Submit */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
