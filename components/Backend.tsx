import Link from "next/link";
import { BackendContainer } from "./BackendContainer";

export const Backend = () => {
  return (
    <div className="ml-2 mr-2">
      <BackendContainer header="Databases">
        Knowledge in building scaleable applications utilizing Relational and Non Relational
        databases. Including cloud based solutions such as AWS, Google Cloud, and Azure.
        <br />
        Including the ability to optimize queries and database performance at scale, and using
        correct tools for the job and identifying which bottle necks to look for.
      </BackendContainer>

      <BackendContainer header="APIs">
        Experienced in leading architecture, design, implementation and scaling of RESTful API
        services with languages such as Node.js, Python, Golang, Java, and Ruby on Rails
        <br />
        Implementing strategies such as caching, rate limiting, and pagination. The last thing that
        I worked on is migrating from an ORM to a SQL query builder to optimize the performance of
        the API.
      </BackendContainer>

      <BackendContainer header="Third Party Integrations">
        Experienced in integrating third party services such as payment gateways, social media
        platforms, and analytics services.
        <br />
        Examples include integrating with{" "}
        <Link href="https://stripe.com/" target="_blank" className="text-blue-500">
          Stripe,
        </Link>{" "}
        <Link href="https://sentry.io/welcome/" target="_blank" className="text-purple-500">
          Sentry
        </Link>{" "}
        and{" "}
        <Link
          href="https://marketingplatform.google.com/about/analytics/"
          target="_blank"
          className="text-green-700"
        >
          Google Anayltics
        </Link>
      </BackendContainer>

      <BackendContainer header="Security">
        Experienced in building upon security best practices, including encryption, authentication,
        and authorization.
      </BackendContainer>

      <BackendContainer header="Cloud Infrastructure">
        Experienced in building applications on cloud infrastructure such as AWS, Google Cloud, and
        Azure.
        <br />
        Having built serverless architecture, CI/CD Pipelines, containerization, and splitting of monolith services into microservices.
      </BackendContainer>
    </div>
  );
};
