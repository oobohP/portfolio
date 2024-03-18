'use client'
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

interface EmailSubmitEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    email: { value: string; };
    name: { value: string; };
  };
}

const EmailSignUpForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useLocalStorage<String>("emailSubmitted", "false");
  const [dismissedStorage, setDismissedStorage] = useLocalStorage<Number | null>("signupBoxDismissed", null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEmailSubmit = async (event: EmailSubmitEvent) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;

    if (name) return

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setEmailSubmitted("true");
      }
    } catch (error) {
      console.error(error);
    }

    setDismissedStorage(Date.now());
  };

  const shouldShowSignupBox = () => {
    const dismissalThreshold = 24 * 60 * 60 * 1000; // 24 hours
    return !dismissedStorage || Date.now() - Number(dismissedStorage) > dismissalThreshold;
  };

  if (!isClient || !shouldShowSignupBox() || emailSubmitted === "true") {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 max-w-sm rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 md:bottom-10 md:right-10">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Subscribe for Blog Updates
        </h2>
        <form onSubmit={handleEmailSubmit} className="mt-4">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
          />
          <div style={{ display: 'none' }}>
            <label>Fill out your name</label>
            <input type="text" name="name" tabIndex={-1} />
          </div>
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-indigo-600 py-2 font-semibold text-white transition duration-200 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={() => setDismissedStorage(Date.now())}
          className="mt-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default EmailSignUpForm;
