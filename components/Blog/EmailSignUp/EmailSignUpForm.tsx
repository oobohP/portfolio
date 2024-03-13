"use client";
import { useState } from "react";

interface EmailSubmitEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    email: {
      value: string;
    };
  };
}
const EmailSignUpForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [dismissed, setDismissed] = useState(false)

  const handleEmailSubmit = async (event: EmailSubmitEvent) => {
    event.preventDefault();
    const email = event.target.email.value;

    console.log(email);
    // try {
    //   const response = await fetch("/api/subscribe", {
    //     // Create this API route later, add user to mailing list and send welcome email if necessary
    //     method: "POST",
    //     body: JSON.stringify({ email }),
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   if (response.ok) {
    //     setSubmissionStatus("success");
    //   } else {
    //     setSubmissionStatus("error");
    //   }
    // } catch (error) {
    //   setSubmissionStatus("error");
    // }

    setDismissed(true);
    localStorage.setItem("signupBoxDismissed", Date.now().toString());
  };

  const hideSignupBox = () => {
    setDismissed(true);
    localStorage.setItem("signupBoxDismissed", Date.now().toString());
  };

  const shouldShowSignupBox = () => {
    const lastDismissed = localStorage.getItem("signupBoxDismissed");
    const dismissalThreshold = 24 * 60 * 60 * 1000; // 1 day in milliseconds

    return !lastDismissed || Date.now() - Number(lastDismissed) > dismissalThreshold;
  };

  if (dismissed || !shouldShowSignupBox()) {
    return null;
  } else {
    return (
      <div className="fixed bottom-5 right-5 rounded-md bg-white p-4 shadow-md">
        <div>
          <h2>Subscribe for Blog Updates</h2>
          <form onSubmit={handleEmailSubmit}>
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <button onClick={hideSignupBox}>Not now</button>
        </div>
      </div>
    );
  }

};

export default EmailSignUpForm;
